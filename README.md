## 📝 Lista de Tarefas com PHP + AJAX + MySQL

Este é um projeto simples de lista de tarefas (ToDo List) construído com **PHP**, **MySQL**, **jQuery**, **AJAX** e **Bootstrap**. Ele permite que o usuário:

* ✅ Adicione novas tarefas
* ✏️ Edite tarefas existentes
* 🗑️ Exclua tarefas
* ⏳ Marque tarefas como "em progresso" ou "concluído"
* 💾 Salve edições
* ❌ Cancele edições
* 🔄 Atualize automaticamente a lista a cada 5 segundos (exceto durante edição)

---

## 📦 Tecnologias utilizadas

* PHP (sem frameworks)
* MySQL
* jQuery + AJAX
* Bootstrap 5 (CDN)
* HTML5 + CSS3

---

## 📂 Estrutura do projeto

```
todo-list-php/
│
├── index.php           # Interface principal
├── db.php              # Conexão com o banco de dados
├── tasks.php           # API backend (AJAX)
├── script.js           # Lógica do frontend com jQuery
├── styles.css          # Estilo visual
└── README.md           # Este arquivo
```

---

## 🛠️ Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/thiagofogaca25/Todo-List-PHP.git
cd todo-list-php
```

### 2. Configure o banco de dados MySQL

Execute este script no seu MySQL:

```sql
CREATE DATABASE todo_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE todo_app;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    status ENUM('progresso', 'concluido') DEFAULT 'progresso',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configure a conexão no arquivo `db.php`

```php
$host = 'localhost';
$db   = 'todo_app';
$user = 'root';
$pass = 'root';
```

⚠️ Altere as credenciais se necessário.

---

### 4. Inicie um servidor local

Você pode usar o PHP embutido:

```bash
php -S localhost:8000
```

Acesse em: [http://localhost:8000](http://localhost:8000)

---

## 💻 Funcionalidades

| Ação           | Descrição                                           |
| -------------- | --------------------------------------------------- |
| ➕ Adicionar    | Cria uma nova tarefa                                |
| ✏️ Editar      | Edita o texto da tarefa                             |
| ✅ Concluído    | Alterna o status entre "em progresso" e "concluído" |
| 💾 Salvar      | Salva a edição atual                                |
| ❌ Cancelar     | Cancela a edição sem salvar                         |
| 🗑️ Excluir    | Remove permanentemente a tarefa                     |
| 🔄 Atualização | Lista é atualizada automaticamente a cada 5s        |

