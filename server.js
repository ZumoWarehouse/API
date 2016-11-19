var app = require('express')();

var options = {
    configFile: 'config'
};

var mobileApp = require('azure-mobile-apps')(options);

mobileApp.tables.import('./tables');

mobileApp.api.import('./api');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);