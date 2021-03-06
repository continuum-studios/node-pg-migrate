
'use strict';

/***********************************************************************************************************************************************
 * NODE DB MIGRATE - BOOKS
 ***********************************************************************************************************************************************
 * @author File generated by @liveaxle/node-pg-migrate
 * @description
 * 
 */

/**
 * [exports description]
 * @type {Object}
 */
module.exports = {
  up, down
};

/**
 * [up description]
 * @return {[type]} [description]
 */
async function up(client) {
  return await (client.schema.raw(`
    CREATE TABLE IF NOT EXISTS books (
      id serial PRIMARY KEY,
      title text
    );


    INSERT into books (title) VALUES ('FooBook');
    INSERT into books (title) VALUES ('BarBook');
    INSERT into books (title) VALUES ('BazBook');
  `))
}

/**
 * [down description]
 * @return {[type]} [description]
 */
async function down(client) {
  return await client.schema.dropTable('books');
}
  