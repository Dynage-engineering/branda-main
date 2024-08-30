import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('brands', function (table) {
    table.string('messaging').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('brands', function (table) {
    table.dropColumn('messaging');
  });
}
