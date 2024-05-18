const homeNavbar = document.getElementById("homeNavbar");
const shadowMenu = document.getElementById('navMenu');

 homeNavbar.addEventListener("click", function(){
  shadowMenu.style.display='block'
  
})




$(document).ready(function(){
    $('.flash_Sales').slick({
        // autoplay:true,
        // autoplaySpeed:1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        nextArrow:".nextArrow",
        prevArrow:".prevArrow",
        mobileFirst:'true',
        useCSS:'true'


    }),
    $('.Category_browser').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        nextArrow:".nextBtn",
        prevArrow:".prevBtn",
        centerMode: true,
        dots: true,
        mobileFirst:true,

      });
    $('.products_card').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        nextArrow:".btn_next",
        prevArrow:".btn_prev",
        centerMode: true,
        dots: true,
        rows:1,

      });
    
    
  });