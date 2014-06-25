console.log('The Iron Yard Rocks');
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("body").css('background-color', 'white');
                } else {
                    $("body").css('background-color', 'red');
                }
            });
        });
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 600) {
                    $(".menu").css('background-color', 'white');
                    $('.menu').css('opacity', 0.95);
                } else {
                    $(".menu").css('background-color','black');
                }
            });
        });


    jQuery(document).ready(function() {
	jQuery('.box').hide();
});
jQuery(document).ready(function() {
	jQuery('.container').hover(function() {
		jQuery('.box').show();
		},
	function() {
		jQuery('.box').hide();
		});
});
