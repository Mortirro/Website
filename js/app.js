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
		// maxWidth	: '100%',
		// maxHeight	: 800,
    // autoCenter:true,
		// fitToView	: false,
		// width		: '100%',
		// height		: 'auto',
		// autoSize	: false,
		// closeClick	: false,
		// openEffect	: 'none',
		// closeEffect	: 'none'
	});


// меню
class MenuHandler {
    constructor() {
        this.menuTrigger = $('#menu-trigger');
        this.menu = $('.main-menu');

        this.toggleMenu();
    }

    toggleMenu() {
        this.menuTrigger.on('click', ()=> {
            this.menuTrigger.toggleClass('is-open');
            this.menu.toggleClass('is-open');
        });
    }
}

$(document).ready(function ($) {
    var menuHandler = new MenuHandler('.main-menu');
});


});
