'use strict';

/***********************************************************************************************************************************************
 * MIGRATION TEMPLATE
 ***********************************************************************************************************************************************
 * @description
 */


module.exports = (name='', type='schema') => {
  return `
'use strict';

/***********************************************************************************************************************************************
 * NODE DB MIGRATE - ${name.toUpperCase()} - ${type.toUpperCase()} MIGRATION
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
async function up(source, target) {

}

/**
 * [down description]
 * @return {[type]} [description]
 */
async function down(source, target) {

}
  `;
};