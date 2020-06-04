'use strict';

$(function() {
  //はじめはカレントページに下線を表示します
  $('nav span').css({
  width: $('nav .current').width(),
  left: $('nav .current').position().left
  });
  //マウスオーバーしたらそのリンクに下線が動きます
  $('nav a').mouseover(function(){
      $('nav span').animate({
  //マウスオーバーした要素の幅を取得します
           'width': $(this).width(),
  //下線の位置を指定します
           'left': $(this).position().left
    });
   });
  });

$(function(){
    var pagetop = $('#page-top');
    // ボタン非表示
    pagetop.hide();
    // 80px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn(300);
       } else {
            pagetop.fadeOut(300);
  
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });




 
new WOW().init();
 


$(function(){
    $('a[href^="#"]').click(function() {
    var speed = 600; //ここはお好きな数値に変えてください
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
    });


$(document).ready(function() {
      $('.drawer').drawer();
    });

$(function(){
   $('.js-modal-open').on('click',function(){
       $('.js-modal').fadeIn();
       return false;
  });
   $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
       return false;
  });
 });