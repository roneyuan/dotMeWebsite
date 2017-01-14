function scrollToAnchor(aid){
	var aTag = $("a[name='"+ aid +"']");
	$('html,body').animate({scrollTop: aTag.offset().top}, 1000, 'easeInOutSine');
}