Handlebars.registerHelper('loginErr', function(input){
  return Session.get('loginErr');
});