$(function() {
	$(".landing-text").find('h1').velocity("fadeIn", 1000);
	$(".landing-text").find('p').css("opacity",0).delay(300).velocity("transition.slideUpIn", {stagger: 500});

	(function(){
		//self-calling function to loop velocity chains every five seconds
	    $(".call-to-action").find("div")
			.velocity({ translateY: "-30px", rotateZ: "10deg" }, 100, "easeOut")
			.velocity({ rotateZ: "-8deg" }, 150)
			.velocity({ translateY: "0", rotateZ: "0" }, {duration: 600, easing: [ 500, 14 ]});
	    setTimeout(arguments.callee, 5000);
	})();
});


