 $(".navbar").sticky({
          topSpacing:0,
          smooth: true,

        });


 $(".navbar-toggler").on('click', function(){
            $(".offset-menu").addClass("active");
           $(".off-canvas-overlay").addClass("active");
        });        
        
        $(".close-btn, .off-canvas-overlay").on('click', function(){
            $(".offset-menu").removeClass("active");
            $(".off-canvas-overlay").removeClass("active");
        }); 