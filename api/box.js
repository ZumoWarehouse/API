var api = {};

api.get = function(request, response, next) {
    var q = [];
    q.push('SELECT b.id as "boxId", COUNT(i.id) as "itemsCount"');
    q.push('FROM dbo.Box b INNER JOIN dbo.Item i on b.id = i.boxId');
    q.push('WHERE b.userId = @userId AND i.userId = @userId');
    q.push('GROUP BY b.id');

    var userId = request.user.userId;

    var query = {
        sql: q.join(' '),
        parameters: [
            { name: 'userId', value: userId }
        ]
    };

    request.azureMobile.data.execute(query)
        .then(function (results) {
            response.json(results);
        });
};

api.access = 'authenticated';

module.exports = api;