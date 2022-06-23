var modals = document.getElementsByClassName("event_box_wrap");
var btns = document.getElementsByClassName("event_on");
var spanes = document.getElementsByClassName("close");
var funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
    return function() {
      // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
      btns[num].onclick =  function() {
          modals[num].style.display = "block";
          console.log(num);
          
      };
      
      // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
      spanes[num].onclick = function() {
          modals[num].style.display = "none";
          
      };
      
    };
  }

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
  }
   
  // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
  for(var j = 0; j < btns.length; j++) {
    funcs[j]();
  }


/************jquery start*************/
$(document).ready(function(){

  /************tab active*************/
    $(".e_tab1 li").click(function(){
      var num = $(".e_tab1 li").index(this);
      
      $(".e_tab1 li").removeClass('active');
      $(this).addClass('active');
    
  
      if ( $('.view2').hasClass('active') == true ) {
        $('.event_end').hide();
      } else {
        $('.event_end').show();

      }
      if ( $('.view3').hasClass('active') == true ) {
        $('.event_on').hide();
      } else {
        $('.event_on').show();
      }

    });

    $('.event_on').click(function(){
      $('body').addClass('rol_stop');
    })
    $('.close').click(function(){
      $('body').removeClass('rol_stop');
    })
  
  
  });







