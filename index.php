<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="todo-container">
        <h1 class="text-center mb-4">📝 Lista de Tarefas</h1>
        <form id="task-form" class="d-flex mb-4">
            <input type="text" id="task-input" class="form-control" placeholder="Digite uma tarefa" required>
            <button type="submit" class="btn btn-primary ms-2">Adicionar</button>
        </form>
        <ul id="task-list" class="list-group"></ul>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
