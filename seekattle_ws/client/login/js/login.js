Template.register.events({
	'submit form': function(event, template){
	    event.preventDefault();
	    var emailVar = template.find('#register-email').value;
	    var passwordVar = template.find('#register-password').value;

	    Accounts.createUser({
    		email: emailVar,
    		password: passwordVar
		});
		Router.go('myaccount');
	}
});

Template.login.events({
    'submit form': function(event, template){
        event.preventDefault();
        var emailVar = template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        Router.go('myaccount');
    }
});

Template.logout.events({
    'submit form': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});