$(function() {
    let leftHeight = $('#left').height(); //left박스 높이
    let prevposition = parseInt($('#left').css('top')); //left박스의 위에서부터의 높이
    
    $(window).scroll(function(){ //화면이 스크롤하면
      let position = $(window).scrollTop();  //위치는 위에서부터 스크롤한 위치
      let lefttop = prevposition + position + "px";  //스크롤했을 때 left박스의 탑 위치
      $('#left').stop().animate({"top":position},500); //탑에서 lefttop까지 움직이고 멈춰라
    }).scroll();


    let leftwidth = $('#left').width();

    $("#right").css({'margin-left': leftwidth + 'px'});
    
    function onResize() {
      let resizeLeft = $('#left').width();
      $("#right").css({'margin-left': resizeLeft + 'px'});
   }

   onResize();
 
   $(window).resize(function() {
     onResize(); 
   });

 });
 

 
 
 
 
 
 