Template.register.events({
	'submit form': function(event, template){
	    event.preventDefault();
	    var emailVar = template.find('#register-email').value;
	    var passwordVar = template.find('#register-password').value;
        var usernameVar = template.find('#register-username').value;

	    Accounts.createUser({
            username: usernameVar,
    		email: emailVar,
    		password: passwordVar
		});
		Router.go('myaccount');
	}
});

Template.login.helpers({
    'errMsg': function (template) {
        var reason = Session.get('loginErr');
        message = "Falha no Login: '" + reason + "'";
        return message;
    }
});

Template.login.events({
    'submit form': function(event, template){
        event.preventDefault();
        var emailVar = template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
        console.log("loginWithPassword");
        Meteor.loginWithPassword(emailVar, passwordVar, function(error){
            if(Meteor.user()) {
                Session.set('loginErr',undefined);      
                Router.go('myaccount');
            }else{
                Session.set('loginErr',error.reason);         
            }
            
        });
        return false;
    }
});

Template.logout.events({
    'click #logout-yes': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});