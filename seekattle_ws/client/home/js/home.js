goTopByScroll = function (id){
		$('html,body').animate({scrollTop: $("#"+id).offset().top -40},'slow');
	}


Template.home.events({
	'click .scroll-intro': function(){
		goTopByScroll("intro");		
	},
	'click .scroll-contacts': function(){
		goTopByScroll("contacts");
	},
	'click .scroll-services': function(){
		goTopByScroll("services");
	}

});