var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});


var vid = document.getElementById("video");
vid.playbackRate = 0.5;
var vid2 = document.getElementById("video2");
vid2.playbackRate = 0.5;
  
$(function() {
  $.scrollify({
      section:".panel",
      scrollbars:false,
      before:function(i,panels) {
          var ref = panels[i].attr("data-section-name");
          $(".pagination .mactive").removeClass("mactive");
          $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("mactive");
      },
      afterRender:function() {
          var pagination = "<ul class=\"pagination\">";
          var activeClass = "";
          $(".panel").each(function(i) {
              activeClass = "";
              if ( i === 0 ) {
                  activeClass = "mactive";
              }
              pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
          });

          pagination += "</ul>";

          $(".home").append(pagination);

          $(".pagination a").on("click", $.scrollify.move);
      }
  });
});

//  $(".top").click(function(){
//    $('body,html').animate({scrollTop:0},400); 
//    return false;
   
//   })



