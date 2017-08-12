const Task = require('../../models/task.model');

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const Task = db.sequelize.define('Task', {
    title: {
      type: DataType.STRING(120),
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'task'
  });

  await Task.sync();
}

async function down (db) {
  await Task(db.sequelize, db.Sequelize).drop();
}
