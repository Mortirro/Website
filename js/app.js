$(document).ready(function() {
  
  // Скрыть / показать меню
  $(".header").mouseenter(function() {
    $(this).animate({ opacity: "1" }, 400);
  });

  $(".header").mouseleave(function() {
    $(this).stop().animate({ opacity: "0" }, 400);
  });
//Услуги
$(".item-fancybox").fancybox({
  openEffect : 'none',
  closeEffect : 'none'
 });

  $(".various").fancybox({
  maxWidth : 1200,
  maxHeight : 800,
  fitToView : false,
  width  : '70%',
  height  : '70%',
  autoSize : false,
  closeClick : false,
  openEffect : 'none',
  closeEffect : 'none'
 });
});
