$("#news-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 25,
    autoHeight: true,
    stagePadding: 90,
    responsive: {
        0: {
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 25,
            stagePadding: 50,
        },

        576: {
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 25,
            stagePadding: 60,
        },
        767: {
            items: 2,
            loop: true,
            margin: 15,
            stagePadding: 27,
        },

        768: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1000: {
            items: 3,

        }
    }
});
$(".js-select1").select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    placeholder: "Your Preferred Area of Service *",
    allowClear: true,
    tags: true
});
$(".js-select2").select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    placeholder: "Your Preferred Mode of Offering Volunteering Service *",
    allowClear: true,
    tags: true
});
$(".js-select3").select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    placeholder: "THU, 07 SEP 2023 *",
    allowClear: true,
    // tags: true
});
$(".js-select4").select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    placeholder: "FRI, 08 SEP 2023 *",
    allowClear: true,
    tags: true
});
$(".js-select5").select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    placeholder: "Week Days (MON - FRI) *",
    allowClear: true,
    tags: true
});
$(".js-select6").select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    placeholder: "Weekends (SAT, SUN) *",
    allowClear: true,
    tags: true
});
var otp_inputs = document.querySelectorAll(".otp__digit")
    var mykey = "0123456789".split("")
    otp_inputs.forEach((_) => {
        _.addEventListener("keyup", handle_next_input)
    })

    function handle_next_input(event) {
        let current = event.target
        let index = parseInt(current.classList[1].split("__")[2])
        current.value = event.key

        if (event.keyCode == 8 && index > 1) {
            current.previousElementSibling.focus()
        }
        if (index < 6 && mykey.indexOf("" + event.key + "") != -1) {
            var next = current.nextElementSibling;
            next.focus()
        }
        var _finalKey = ""
        for (let {
                value
            } of otp_inputs) {
            _finalKey += value
        }

    }

    function check(event) {
        if ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event
                .charCode > 30 && event.charCode < 40)) {
            return true;
        }

        return false;
    }

    function isNumber(event) {
        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode > 31 && (charCode < 45 || charCode > 57 || charCode == 45 || charCode == 46 || charCode == 47)) {
            return false;
        }
        return true;
    }
    
    function showButton(event) {
        var email = $("#email").val();
        if (email.length > 0) {
            $('#email_v').val('');
            $('#email-verify').show();
        } else {
            $('#email-verify').hide();
        }
    }
    $('#mobile').keyup(function(){
        var mobile = $("#mobile").val();
        if (mobile.length == 10) {
            $('#mobile_v').val('');
            $('#mobile-verify').show();
            return false;
        } else {
            $('#mobile-verify').hide();
        }
    });
   
    $('#mobile-verify').click(function() {
        var mob = $('#mobile').val();
        $('#mob').text('+' + mob);
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                mobile: mob,
                format: 'mobile'
            },
            success: function(data) {
                $('#verifyMobile').modal('show');
                $('.m-js-timeout').text("10:00");
                mcountdown();
                $('.m-msg').html(data.msg);
                setTimeout(function() {
                    $('.m-msg').html('');
                }, 3000);
            }
        });


    });
    $('#email-verify').click(function() {
        var eml = $('#email').val();
        $('#eml').text(eml);
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                email: eml,
                format: 'email'
            },
            success: function(data) {
                $('#verifyEmail').modal('show');
                $('.e-js-timeout').text("10:00");
                ecountdown();
                $('.e-msg').html(data.msg);
                setTimeout(function() {
                    $('.e-msg').html('');
                }, 3000);
            }
        });
    });
    $('#email-resend').click(function() {
        var eml = $('#email').val();
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                email: eml,
                format: 'email'
            },
            success: function(data) {
                $('#e1').val('');
                $('#e2').val('');
                $('#e3').val('');
                $('#e4').val('');
                $('.e-msg').html(data.msg);
                $('.e-js-timeout').text("10:00");
                ecountdown();
                setTimeout(function() {
                    $('.e-msg').html('');
                }, 3000);
            }
        });
    });
    $('#mobile-resend').click(function() {
        var mob = $('#mobile').val();
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                mobile: mob,
                format: 'mobile'
            },
            success: function(data) {
                $('#m1').val('');
                $('#m2').val('');
                $('#m3').val('');
                $('#m4').val('');
                $('.m-msg').html(data.msg);
                $('.m-js-timeout').text("10:00");
                mcountdown();
                setTimeout(function() {
                    $('.m-msg').html('');
                }, 3000);
            }
        });
    });
    $('#email-verify-btn').click(function() {
        var e1 = $('#e1').val();
        var e2 = $('#e2').val();
        var e3 = $('#e3').val();
        var e4 = $('#e4').val();
        var otp = e1 + e2 + e3 + e4;
        var eml = $('#email').val();
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                field: eml,
                otp: otp,
                format: 'checkotp'
            },
            success: function(data) {
                if (data.error == true) {
                    $('#e1').val('');
                    $('#e2').val('');
                    $('#e3').val('');
                    $('#e4').val('');
                    $('.e-msg').html(data.msg);
                    setTimeout(function() {
                        $('.e-msg').html('');
                    }, 3000);
                } else {
                    $('#email_v').val(1);
                    $('#email-verify').html(
                        '<span style="color:green;"><i class="fa fa-check-circle-o"></i> Verified</span>'
                    );
                    $('#email-verify').prop('disabled', true);
                    $('#email').prop('readonly', true);
                    $('#verifyEmail').modal('hide');
                }

            }
        });
    });
    $('#mobile-verify-btn').click(function() {
        var e1 = $('#m1').val();
        var e2 = $('#m2').val();
        var e3 = $('#m3').val();
        var e4 = $('#m4').val();
        var otp = e1 + e2 + e3 + e4;
        var eml = $('#mobile').val();
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                field: eml,
                otp: otp,
                format: 'checkotp'
            },
            success: function(data) {
                if (data.error == true) {
                    $('#m1').val('');
                    $('#m2').val('');
                    $('#m3').val('');
                    $('#m4').val('');
                    $('.m-msg').html(data.msg);
                    setTimeout(function() {
                        $('.m-msg').html('');
                    }, 3000);
                } else {
                    $('#mobile_v').val(1);
                    $('#mobile-verify').html(
                        '<span style="color:green;"><i class="fa fa-check-circle-o"></i> Verified</span>'
                    );
                    $('#mobile-verify').prop('disabled', true);
                    $('#mobile').prop('readonly', true);
                    $('#verifyMobile').modal('hide');
                }

            }
        });
    });

    var interval;
    var interval2;
    function ecountdown() {
      clearInterval(interval2);
      interval2 = setInterval( function() {
          var timer = $('.e-js-timeout').html();
          timer = timer.split(':');
          var minutes = timer[0];
          var seconds = timer[1];
          seconds -= 1;
          if (minutes < 0) return;
          else if (seconds < 0 && minutes != 0) {
              minutes -= 1;
              seconds = 59;
          }
          else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
    
          $('.e-js-timeout').html(minutes + ':' + seconds);
    
          if (minutes == 0 && seconds == 0) clearInterval(interval2);
      }, 1000);
    }
    function mcountdown() {
        clearInterval(interval);
        interval = setInterval( function() {
            var timer = $('.m-js-timeout').html();
            timer = timer.split(':');
            var minutes = timer[0];
            var seconds = timer[1];
            seconds -= 1;
            if (minutes < 0) return;
            else if (seconds < 0 && minutes != 0) {
                minutes -= 1;
                seconds = 59;
            }
            else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
      
            $('.m-js-timeout').html(minutes + ':' + seconds);
      
            if (minutes == 0 && seconds == 0) clearInterval(interval);
        }, 1000);
      }

    