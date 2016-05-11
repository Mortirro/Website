$(document).ready(function() {
  $(".diploms__item-fancybox").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
  });

  $(".item-fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

  $(".various").fancybox({
		maxWidth	: 1000,
		maxHeight	: 800,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
