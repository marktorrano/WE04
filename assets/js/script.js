$(document).ready(function(){

    $('#slide-button').on('click', function(){
        $('header').toggleClass('headeractive turnblue');        
        trans('header', .5);
    });
    
    function trans(elem, sec) {
        $(elem).css('-webkit-transition' , 'all ' +sec+ 's ease');
        $(elem).css('-moz-transition' , 'all ' +sec+ 's ease');
        $(elem).css('-ms-transition' , 'all ' +sec+ 's ease');
        $(elem).css('-o-transition' , 'all ' +sec+ 's ease');
        $(elem).css('transition' , 'all ' +sec+ 's ease');
    }
    
});

//$(document).ready(function(){
//   
//    $('#slide-button').on('click', function(){
//       
//        $('header').animate({left: '0em'}, 500, function(){
//            $('#slide-button>i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left'); 
//            $('header').toggleClass('turnblue');
//        });
//            
//        
//    });
//    
//});