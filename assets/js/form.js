$('#form-submit').click(function() {
    var name=$('#name').val();
    var mobile=$('#mobile').val();
    var whatsapp_number=$('#whatsapp_number').val();
    var gender=$('#gender').val();
    var age=$('#age').val();
    var pincode=$('#pincode').val();
    var email=$('#email').val();
    var occupation=$('#occupation').val();
    var landmark=$('#landmark').val();
    var address=$('#address').val();
    var area_of_service=$('#area_of_service').val();
    var mode_of_offering=$('#mode_of_offering').val();
    var date_1=$('#date_1').val();
    var date_2=$('#date_2').val();
    var day_1=$('#day_1').val();
    var day_2=$('#day_2').val();
    var mobile_v=$('#mobile_v').val();
    var email_v=$('#email_v').val();
    var opportunity=$('input[name="type"]:checked').val();
    
    if(name=='')
    {
        $('.form-error').text('Please Enter Your Name');
    }
    else if(mobile=='')
    {
        $('.form-error').text('Please Enter Your Mobile Number');
    }
    // else if(whatsapp_number=='')
    // {
    //     $('.form-error').text('Please Enter Your Whatsapp Number');
    // }
    else if(gender=='')
    {
        $('.form-error').text('Please Enter Your Gender');
    }
    else if(age=='')
    {
        $('.form-error').text('Please Enter Your Age');
    }
    else if(pincode=='')
    {
        $('.form-error').text('Please Enter Your Pincode');
    }
    else if(email=='')
    {
        $('.form-error').text('Please Enter Your Email');
    }
    else if(occupation=='')
    {
        $('.form-error').text('Please Enter Your Occupation');
    }
    // else if(landmark=='')
    // {
    //     $('.form-error').text('Please Enter Your Landmark');
    // }
    // else if(address=='')
    // {
    //     $('.form-error').text('Please Enter Your Address');
    // }
    else if(area_of_service=='')
    {
        $('.form-error').text('Please Choose Area Of Service');
    }
    else if(mode_of_offering=='')
    {
        $('.form-error').text('Please Choose Made Of Offering');
    }
    else if(date_1=='')
    {
        $('.form-error').text('Please Choose Volunteer Service Date');
    }
    else if(date_2=='')
    {
        $('.form-error').text('Please Choose Volunteer Service Date');
    }
    else if(day_1=='')
    {
        $('.form-error').text('Please Choose Volunteer Service Days');
    }
    else if(day_2=='')
    {
        $('.form-error').text('Please Choose Volunteer Service Days');
    }
    else if(mobile_v=='')
    {
        $('.form-error').text('Please Verify Your Mobile');
    }
    else if(email_v=='')
    {
        $('.form-error').text('Please Verify Your Email');
    }
    else{
        $('.form-error').text('');
        $.ajax({
            method: "get",
            url: 'actions/sendotp.php',
            dataType: 'json',
            data: {
                name : name,
                mobile : mobile,
                whatsapp_number : whatsapp_number,
                gender : gender,
                age : age,
                pincode : pincode,
                email : email,
                occupation : occupation,
                landmark : landmark,
                address : address,
                area_of_service : area_of_service,
                mode_of_offering : mode_of_offering,
                date_1 : date_1,
                date_2 : date_2,
                day_1 : day_1,
                day_2 : day_2,
                opportunity : opportunity,
                format: 'submitform'
            },
            success: function(data) {
                if (data.error == true) {
                    $('.form-error').text(data.msg);
                } else {
                    alert(data);
                    // location.replace("thankyou.php")
                }

            }
        });
    }
});

$(".checkbox-dropdown").click(function () {
    // $(".checkbox-dropdown").removeClass('is-active');
    $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function(e) {
    e.stopPropagation();
});