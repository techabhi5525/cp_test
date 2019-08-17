// (function($) {

//   'use strict';

//   var form = {

//     init: function() {

//       this.action();
//       this.initializeRecaptcha();

//     },
//     action: function() {

//       $('form').submit(function(event) {

//       });

//     },
//     initializeRecaptcha: function() {

//       var sitekey = 'recaptchasitekey';

//       grecaptcha.render( 'recaptcha', {
//         'sitekey' : sitekey,
//         'theme' : 'light'
//       });

//     }
//   };

//   $(document).ready(function() {
// 		form.init();
//   });
// })(jQuery);

var currentImage = 1;
var i;

$(document).ready(function(){
  //get lift of all the images
  var listOfImages = $("#image").find("img");

  //show next or previous image based on current image
  function showImage(){
    for (i = 1; i < listOfImages.length+1; i++) {
      if(i == currentImage){
        $(listOfImages[i-1]).show();
      }else{
        $(listOfImages[i-1]).hide()
      }
    }
  }

  // on previous link click update current image and call showImage method
  $("#prev").click(function(){
    if(currentImage == 1){
      currentImage = listOfImages.length;
    }else{
      currentImage = currentImage - 1
    }
    showImage();
  });

    // on next link click update current image and call showImage method
  $("#next").click(function(){
    if(currentImage == listOfImages.length){
      currentImage = 1;
    }else{
      currentImage = currentImage + 1
    }
    showImage();
  });

  });