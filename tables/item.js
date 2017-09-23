var azureMobileApps = require('azure-mobile-apps');
var tableHelpers = require('./../_helpers/table');

var table = azureMobileApps.table();

table.access = 'anonymous';
// table.access = 'authenticated';

// Define the columns within the table
table.columns = {
    "title": "string",
    "userId": "string",
    "boxId": "string"
};

// Turn off dynamic schema
table.dynamicSchema = false;

table.read(tableHelpers.limitToUserId);
table.update(tableHelpers.limitToUserId);
table.delete(tableHelpers.limitToUserId);

table.insert(tableHelpers.setUserId);

module.exports = table;