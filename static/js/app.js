

      function openDoor(field) {
                  var y = $(field).find(".thumb");
                  var x = y.attr("class");
                  if (y.hasClass("thumbOpened")) {
                      y.removeClass("thumbOpened");
                      console.log("removed thumb open");
                      setTimeout(function() {$(".navbar").addClass("hidden");}, 150);

                      var random = myImages[Math.floor(Math.random() * myImages.length)];
            random = 'url(static/css/img/tardi/' + random + ')';
            $('.controlRoom').css('background-image', random);


                  }
                  else {
                      $(".thumb").removeClass("thumbOpened");
                      y.addClass("thumbOpened");
                      setTimeout(function() {$(".navbar").show();}, 600);
                      console.log("removed thumbOpened");
                      console.log("navbar show");
                      setTimeout(function() {$(".navbar").removeClass("hidden");}, 200);
                      console.log("removed hidden")

      

                  }
                  }
              



      $('.navLink').hover(function(){ // or any other event
      $(this).addClass('grow'); 
      });



      $('.navLink').mouseout(function(){ // or any other event
      $(this).removeClass('grow');
      });

      $('.navLink').click(function(event){ // or any other event
        
      event.preventDefault();
      $('.tardisMenu').addClass('tardisDematerialize'); 
      console.log("tardisDematerialize");
         

         setTimeout(function () {
             window.location.href = "podcasts.html"; //will redirect to your blog page (an ex: blog.html)
          }, 6000); //will call the function after 2 secs.

      });



      var myImages = new Array("1.png", "2.png", "3.png", "4.png", "5.png");

          // $(".thumb").click(function() {
          //     var random = myImages[Math.floor(Math.random() * myImages.length)];
          //     random = 'url(tardi/' + random + ')';
          //     $('.controlRoom').css('background-image', random);

          //     setInterval(function() {
          //         SetImage();
          //     }, 400);
          // });

          function SetImage() {
              var random = myImages[Math.floor(Math.random() * myImages.length)];

              random = 'url(static/css/img/tardi/' + random + ')';
              $('.controlRoom').click();

              // setTimeout(function () {
              //     $('.controlRoom').css('background-image', random);
              //     $('.controlRoom').click();
              // }, 2000);
          }

      //      $(".thumb").click(function() {
      //   $(".animsition").animsition({
      //     inClass: 'zoom-in',
      //     outClass: 'zoom-out',
      //     inDuration: 1500,
      //     outDuration: 800,
      //     linkElement: '.animsition.link',
      //     // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
      //     loading: true,
      //     loadingParentElement: 'body', //animsition wrapper element
      //     loadingClass: 'animsition-loading',
      //     loadingInner: '', // e.g '<img src="loading.svg" />'
      //     timeout: false,
      //     timeoutCountdown: 5000,
      //     onLoadEvent: true,
      //     browser: [ 'animation-duration', '-webkit-animation-duration'],
      //     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      //     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      //     overlay : false,
      //     overlayClass : 'animsition-overlay-slide',
      //     overlayParentElement : 'body',
      //     transition: function(url){ window.location.href = url; }
      //   });
      // }); <!--script for tardisMenu-->


  var doctors = new Array("smith.png", "tennant.png", "eccelston.png");
  $(document).ready(function() {
            var random = doctors[Math.floor(Math.random() * doctors.length)];
            
            random = 'static/css/img/doctors/' + random + '';
            $('#turblesPic').attr("src", random);

            // setInterval(function() {
            //     SetImage();
            // }, 400);
        });

        function SetImage() {
            var random = myImages[Math.floor(Math.random() * myImages.length)];

            random = 'static/css/img/doctors/' + random + '';
            $('.turblesPic').load();

            // setTimeout(function () {
            //     $('.controlRoom').css('background-image', random);
            //     $('.controlRoom').click();
            // }, 2000);
        }
