var azureMobileApps = require('azure-mobile-apps');
var tableHelpers = require('./../_helpers/table');

var table = azureMobileApps.table();

table.access = 'authenticated';

table.read(tableHelpers.limitToUserId);
table.update(tableHelpers.limitToUserId);
table.delete(tableHelpers.limitToUserId);

table.insert(tableHelpers.setUserId);

module.exports = table;