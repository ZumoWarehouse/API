var app = require('express')();

var options = {
    configFile: 'config'
};

var mobileApp = require('azure-mobile-apps')(options);

mobileApp.tables.add('Box');
mobileApp.tables.add('Item');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);