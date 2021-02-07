exports.up = function (knex) {
    return knex.schema
      .createTable("projects", (tbl) => {
        tbl.increments();
        tbl.string("project_name", 128).notNullable();
        tbl.string("project_description", 500);
        tbl.integer("project_completed").notNullable();
      })
  
      .createTable("resources", (tbl) => {
        tbl.increments();
        tbl.string("resource_name", 128).notNullable();
        tbl.string("resource_description", 500);
      })
  
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description', 128)
            .notNullable();
        tbl.string('task_notes');
        tbl.string('task_completed')
            .notNullable();
        tbl.integer('project_id')
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
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
      .dropTableIfExists("project_resources")
      .dropTableIfExists("taks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };
  