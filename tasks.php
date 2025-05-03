<?php
require_once __DIR__ . '/db.php';

$action = $_POST['action'] ?? '';

switch ($action) {
    case 'fetch':
        $stmt = $pdo->query("SELECT * FROM tasks ORDER BY id DESC");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'add':
        $desc = $_POST['description'] ?? '';
        if ($desc) {
            $stmt = $pdo->prepare("INSERT INTO tasks (description) VALUES (?)");
            $stmt->execute([$desc]);
        }
        break;

    case 'edit':
        $id = $_POST['id'] ?? 0;
        $desc = $_POST['description'] ?? '';
        if ($id && $desc) {
            $stmt = $pdo->prepare("UPDATE tasks SET description = ? WHERE id = ?");
            $stmt->execute([$desc, $id]);
        }
        break;

    case 'delete':
        $id = $_POST['id'] ?? 0;
        if ($id) {
            $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
            $stmt->execute([$id]);
        }
        break;
        
    case 'toggle_status':
        $id = $_POST['id'] ?? 0;
        $current = $_POST['current'] ?? 'progresso';
        $newStatus = $current === 'progresso' ? 'concluido' : 'progresso';
    
        if ($id) {
            $stmt = $pdo->prepare("UPDATE tasks SET status = ? WHERE id = ?");
            $stmt->execute([$newStatus, $id]);
        }
        break;
        
}
