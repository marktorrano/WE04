//$(document).ready(function(){
//
//    $('#slide-button').on('click', function(){
//        $('header').toggleClass('headeractive turnblue');        
//        if($('#slide-button>i').hasClass('fa-arrow-circle-right')){
//            $('#slide-button>i').removeClass('fa-arrow-circle-right');
//            $('#slide-button>i').addClass('fa-arrow-circle-left');            
//        }else{
//            $('#slide-button>i').removeClass('fa-arrow-circle-left');
//            $('#slide-button>i').addClass('fa-arrow-circle-right');            
//        }
//        trans('header', .5);
//    });
//    
//    function trans(elem, sec) {
//        $(elem).css('-webkit-transition' , 'all ' +sec+ 's ease');
//        $(elem).css('-moz-transition' , 'all ' +sec+ 's ease');
//        $(elem).css('-ms-transition' , 'all ' +sec+ 's ease');
//        $(elem).css('-o-transition' , 'all ' +sec+ 's ease');
//        $(elem).css('transition' , 'all ' +sec+ 's ease');
//    }
//    
//});

$(document).ready(function(){
    
    var isOpen = false;

    $('#slide-button').on('click', function(){

        if(!isOpen){
            $('header').animate({left: '0em'}, 500, function(){
                $('#slide-button>i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left'); 
                $('header').addClass('turnblue');
            }); 
            isOpen = true;
        }else{
            $('header').animate({left: '-17em'}, 500, function(){
                $('#slide-button>i').removeClass('fa-arrow-circle-left').addClass('fa-arrow-circle-right'); 
                $('header').removeClass('turnblue');
            }); 
            isOpen = false;
        }

    }); 
    
});