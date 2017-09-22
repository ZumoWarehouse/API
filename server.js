var app = require('express')();

var options = {
    configFile: 'config'
};

var mobileApp = require('azure-mobile-apps')(options);

mobileApp.tables.import('./tables');

mobileApp.api.import('./api');

// Provide initialization of any tables that are statically defined
mobileApp.tables.initialize().then(function () {
    // Add the mobile API so it is accessible as a Web API
    app.use(mobileApp);

    // Start listening on HTTP
    app.listen(process.env.PORT || 3000);
});