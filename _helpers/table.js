var tableHelpers = {};

tableHelpers.limitToUserId = function(context) {
    context.query.where({ userId: context.user.id });
    return context.execute();
};

tableHelpers.setUserId = function(context) {
    context.item.userId = context.user.id;
    return context.execute();
};

module.exports = tableHelpers;