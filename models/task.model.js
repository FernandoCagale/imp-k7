module.exports = (sequelize, DataType) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataType.STRING(120),
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'task'
  });

  return Task;
};
