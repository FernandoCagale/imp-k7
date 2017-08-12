module.exports = { up, down };

async function up (db) {
  await db.Task.create({
    title: 'seed'
  });
}

async function down (db) {
  await db.Task.destroy({where: {}});
}
