const Database = require('better-sqlite3');
const db = new Database('/tmp/tasks.db');

db.exec("CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT, status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'completed')))");

const stmt = db.prepare("INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)");
stmt.run('Buy groceries', 'Milk, Bread, Eggs', 'pending');
stmt.run('Clean the house', 'Vacuum and dust', 'completed');
stmt.run('Finish the report', 'Complete the annual report', 'pending');

module.exports = db;