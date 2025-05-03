$(document).ready(function () {
    let editing = false;  // Variável para controlar se estamos editando

    const loadTasks = () => {
        $.post('tasks.php', { action: 'fetch' }, function (data) {
            const tasks = JSON.parse(data);
            $('#task-list').empty();
            tasks.forEach(task => {
                const statusIcon = task.status === 'concluido' ? '✅' : '⏳';
                const taskClass = task.status === 'concluido' ? 'done' : '';
                
                $('#task-list').append(`
                    <li data-id="${task.id}" data-status="${task.status}" class="${taskClass}">
                    <input class="edit-input" type="text" value="${task.description}" style="display:none;">
                        <span class="desc">${task.description}</span>
                        <div class="task-actions">
                            <button class="toggle-status">${statusIcon}</button>
                            <button class="edit">✏️</button>
                            <button class="save" style="display:none;">💾</button>
                            <button class="cancel" style="display:none;">❌</button> <!-- Novo botão de cancelar -->
                            <button class="delete">🗑️</button>
                        </div>
                    </li>
                `);
            });
        });
    };

    loadTasks();
    const intervalId = setInterval(() => {
        if (!editing) {  // Só atualiza se não estiver editando
            loadTasks();
        }
    }, 5000); // Atualiza a cada 5 segundos

    $('#task-form').on('submit', function (e) {
        e.preventDefault();
        const description = $('#task-input').val();
        $.post('tasks.php', { action: 'add', description }, () => {
            $('#task-input').val('');
            loadTasks();
        });
    });

    // Ao clicar em editar
    $('#task-list').on('click', '.edit', function () {
        editing = true;  // Está editando, então desabilita a atualização

        const li = $(this).closest('li');

        // Oculta todas as outras tasks
        $('#task-list li').not(li).hide();

        // Oculta o formulário de adicionar nova tarefa
        $('#task-form').hide();

        // Mostra apenas a task sendo editada
        li.find('.desc, .edit, .delete, .toggle-status').hide();
        li.find('.edit-input, .save, .cancel').show(); // Exibe o botão de cancelar
    });

    // Ao clicar em salvar
    $('#task-list').on('click', '.save', function () {
        const li = $(this).closest('li');
        const id = li.data('id');
        const description = li.find('.edit-input').val();

        $.post('tasks.php', { action: 'edit', id, description }, () => {
            loadTasks();

            // Exibe novamente todas as tarefas e o formulário
            $('#task-form').show();
            $('#task-list li').show();

            editing = false;  // Depois de editar, reabilita a atualização
        });
    });

    // Ao clicar no botão de cancelar
    $('#task-list').on('click', '.cancel', function () {
        const li = $(this).closest('li');

        // Restaura todas as tasks e o formulário de adicionar tarefa
        $('#task-form').show();
        $('#task-list li').show();

        // Restaura a visibilidade e esconde os campos de edição
        li.find('.desc, .edit, .delete, .toggle-status').show();
        li.find('.edit-input, .save, .cancel').hide();

        editing = false;  // Libera a atualização automática
    });

    // Ao clicar no botão de excluir
    $('#task-list').on('click', '.delete', function () {
        const id = $(this).closest('li').data('id');
        $.post('tasks.php', { action: 'delete', id }, () => {
            loadTasks();
        });
    });

    // Ao clicar no botão de status (concluído/progresso)
    $('#task-list').on('click', '.toggle-status', function () {
        const li = $(this).closest('li');
        const id = li.data('id');
        const current = li.data('status');
    
        $.post('tasks.php', { action: 'toggle_status', id, current }, () => {
            loadTasks();
        });
    });

    // Captura a tecla ESC para cancelar
    $(document).on('keydown', function (e) {
        if (e.key === "Escape" && editing) {
            // Simula um clique no botão de cancelar
            $('.cancel').click();
        }
    });
});
