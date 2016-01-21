$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st === 0){
   	   	$('#menu').addClass('active');
   } else {
   		$('#menu').removeClass('active');
   }
});


function IntoAnchor(id){

  console.log(id);   

  switch(id) {
      case 0:
          $("body,html,document").animate({scrollTop : $('#history').offset().top - 100}, 'slow');
          break;
      case 1:
          $("body,html,document").animate({scrollTop : $('#services').offset().top - 100}, 'slow');
          break;
      case 2:
          $("body,html,document").animate({scrollTop : $('#customer').offset().top - 100}, 'slow');
          break;
      case 3:
          $("body,html,document").animate({scrollTop : $('#map').offset().top}, 'slow');
          break;
      case 4:
          $("body,html,document").animate({scrollTop : $('#quote').offset().top - 100}, 'slow');
          break;
  } 
}