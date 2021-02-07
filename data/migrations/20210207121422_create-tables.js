exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description", 500);
      tbl.boolean("project_completed").notNullable().defaultTo(false);
    })

    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 128).notNullable();
      tbl.string("resource_description", 500);
    })

    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 500).notNullable();
      tbl.string("task_notes", 500);
      tbl.boolean("task_completed").notNullable().defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id");
    })

    .createTable("project_resources", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project.id");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource.id");
      tbl.primary[("project_id", "resource_id")];
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExsists("project_resources")
    .dropTableIfExsists("taks")
    .dropTableIfExsists("resources")
    .dropTableIfExsists("projects");
};
