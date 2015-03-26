Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});



Router.map(function(){
	this.route('home', {
		path: '/'
	});

	this.route('login');
	this.route('signup');
	this.route('myaccount');
	this.route('logout');
	this.route('users');
});


