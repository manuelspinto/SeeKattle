Template.users.helpers({
    user: function () {
        return Meteor.users.find({}, {sort: {createdAt: -1}});
    }
});