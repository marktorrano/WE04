//$(document).ready(function(){
//
//    
//    
//});

$(document).ready(function(){
    
    var isOpen = false;
    

//    $('#slide-button').on('click', function(){
//
//        if(!isOpen){
//            $('header').animate({left: '0em'}, 500, function(){
//                $('#slide-button>i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left'); 
//                $('header').addClass('turnblue');
//            }); 
//            isOpen = true;
//        }else{
//            $('header').animate({left: '-17em'}, 500, function(){
//                $('#slide-button>i').removeClass('fa-arrow-circle-left').addClass('fa-arrow-circle-right'); 
//                $('header').removeClass('turnblue');
//            }); 
//            isOpen = false;
//        }
//
//    }); 
    $('#slide-button').on('click', function(){
        $('header').toggleClass('headeractive turnblue');        
        if($('#slide-button>i').hasClass('fa-arrow-circle-right')){
            $('#slide-button>i').removeClass('fa-arrow-circle-right');
            $('#slide-button>i').addClass('fa-arrow-circle-left');            
        }else{
            $('#slide-button>i').removeClass('fa-arrow-circle-left');
            $('#slide-button>i').addClass('fa-arrow-circle-right');            
        }
        trans('header', .5);
    });
    
    function trans(elem, sec) {
        $(elem).css('-webkit-transition' , 'all ' +sec+ 's ease');
        $(elem).css('-moz-transition' , 'all ' +sec+ 's ease');
        $(elem).css('-ms-transition' , 'all ' +sec+ 's ease');
        $(elem).css('-o-transition' , 'all ' +sec+ 's ease');
        $(elem).css('transition' , 'all ' +sec+ 's ease');
    }
    
    
    
    $('#accordion p').hide();
    $('#accordion li h2').on('click',function(){
        
        $('#accordion li h2').not(this).next().slideUp(function(){
            $(this.previousElementSibling.firstChild).removeClass('fa-chevron-circle-up');
            $(this.previousElementSibling.firstChild).addClass('fa-chevron-circle-down');
            $(this.previousElementSibling).data('state','close');
        });
        
        var state = $(this).data('state');
        if(state == 'close' ){
            $(this.nextElementSibling).slideDown(function(){
                $(this.previousElementSibling.firstChild).removeClass('fa-chevron-circle-down');
                $(this.previousElementSibling.firstChild).addClass('fa-chevron-circle-up');
            });
            $(this).data('state','open');
        }else{
           $(this.nextElementSibling).slideUp(function(){
                $(this.previousElementSibling.firstChild).removeClass('fa-chevron-circle-up');
                $(this.previousElementSibling.firstChild).addClass('fa-chevron-circle-down');
            }); 
            $(this).data('state','close');
        }
    });
    $('#accordion li h2').on('click',function(){
        
        
        
    });

    
});