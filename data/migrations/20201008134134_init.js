exports.up = function (knex) {
  return knex.schema
    .createTable("tracks", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
    })
    .createTable("cohorts", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
      // tbl.integer("track_id").unsigned().references('tracks.id')
      tbl
        .integer("track_id")
        .unsigned()
        .references("id")
        .inTable("tracks")
        .onDelete("RESTRICT") // CASCADE, RESTRICT, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
    })
    .createTable("students", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().index();
    })
    .createTable("cohort_students", (tbl) => {
      tbl.increments();
      tbl.date("joined_on").notNullable();
      tbl.date("until");
      tbl
        .integer("cohort_id")
        .unsigned()
        .references("id")
        .inTable("cohorts")
        .onDelete("RESTRICT") // CASCADE, RESTRICT, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
      tbl
        .integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students")
        .onDelete("RESTRICT") // CASCADE, RESTRICT, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("cohort_students")
    .dropTableIfExists("students")
    .dropTableIfExists("cohorts")
    .dropTableIfExists("tracks");
};
