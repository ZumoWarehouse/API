var tableHelpers = {};

tableHelpers.limitToUserId = function(context) {
    var userId = '';
    if (!!context.user) {
        userId = context.user.id || '';
    }

    // WHERE ... AND userId = 42
    context.query.where({ userId: userId });
    return context.execute();
};

tableHelpers.setUserId = function(context) {
    var userId = '';
    if (!!context.user) {
        userId = context.user.id || '';
    }

    context.item.userId = userId;
    return context.execute();
};

module.exports = tableHelpers;