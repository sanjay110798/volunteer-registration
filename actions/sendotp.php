<?php
session_start();
include 'dbconnection.php';
require 'PHPMailer/PHPMailerAutoload.php';

if($_GET['format']=='mobile')
{
    $mobile=$_GET['mobile'];
    $digits = 4;
    $otp=rand(pow(10, $digits-1), pow(10, $digits)-1);       
    $date = new DateTime('now', new DateTimeZone('Asia/Kolkata'));
    $todaysDate = $date->format('Y-m-d H:i:s');
   
    $addingMinutes= date('Y-m-d H:i:s',strtotime($todaysDate.'+ 10 minute'));
    $sql = "INSERT INTO `mstr_otp` (VERIFICATION_TYPE, VERIFICATION_TEXT,OTP,IS_VERIFIED,OTP_EXPIRY_DATE,CREATED_ON)
    VALUES ('M','".$mobile."','".$otp."','N','".$addingMinutes."','".$todaysDate."')";
    $conn->query($sql);
     
    $arr=[
        'error'=>false,
        'msg'=>'<span style="color:green;">OTP Send Successfully</span>'
    ];
    echo json_encode($arr);
}
if($_GET['format']=='email')
{
        $email=$_GET['email'];
        $digits = 4;
        $otp=rand(pow(10, $digits-1), pow(10, $digits)-1);       
        $date = new DateTime('now', new DateTimeZone('Asia/Kolkata'));

            $strSubject = "otp Verification For Email";	
            $strMessage = '<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a>
            </div>
            <p style="font-size:1.1em">Hi,</p>
            <p>Thank you for choosing Your Brand. Use the following otp to complete your Sign Up procedures. otp is valid for 5 minutes</p>
            <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">'.$otp.'</h2>
            <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
            </div>
            </div>
            </div>';	
							
			$strMessage = $strMessage;
		
			// $mailTo = "kanhu.gouda@hkm-group.org,shivamurthy.vk@hkm-group.org,donor.care@hkm-group.org";
		// 	$mailTo = $email;
			
		// 	$mail = new PHPMailer;
		// 	//$mail->SMTPDebug = 4;                               // Enable verbose debug output
		// 	$mail->isSMTP();                                      // Set mailer to use SMTP
		// 	$mail->Host = 'email-smtp.ap-south-1.amazonaws.com';  // Specify main and backup SMTP servers
		// 	$mail->SMTPAuth = true;                               // Enable SMTP authentication
		// 	$mail->Username = 'AKIAREHSYPORZNCSFJFP';             // SMTP username
		// 	$mail->Password = 'BE9zDesklf2hGxIg1pUrrtUvNfsHyEYgCxhIYiQQMMtr';                           	  // SMTP password
		// 	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
		// 	$mail->Port = 587;                                    // TCP port to connect to
			
		// 	$mail->setFrom('donor.care@hkm-group.org', 'ISKCON Donor Care');
		// 	$email_ids = explode(',', $mailTo);
		// 	foreach($email_ids as $address) {
		// 		$mail->addAddress($address);
		// 	}
			
		// 	$mail->isHTML(true);                                // Set email format to HTML
		// 	$mail->Subject = $strSubject;
		// 	$mail->Body    = $strMessage;
		// 	$mail->AltBody = $strMessage;
			
        // if(!$mail->send()) {        
        //     $arr=[
        //         'error'=>true,
        //         'msg'=>'<span style="color:red;">Failed</span>'
        //     ];
        //     echo json_encode($arr);
        // } else {
            
            $todaysDate = $date->format('Y-m-d H:i:s');
            $addingMinutes= date('Y-m-d H:i:s',strtotime($todaysDate.'+ 10 minute'));
            $sql = "INSERT INTO `mstr_otp` (VERIFICATION_TYPE, VERIFICATION_TEXT,OTP,IS_VERIFIED,OTP_EXPIRY_DATE,CREATED_ON)
            VALUES ('E','".$email."','".$otp."','N','".$addingMinutes."','".$todaysDate."')";
            $conn->query($sql);
            
            $arr=[
                'error'=>false,
                'msg'=>'<span style="color:green;">OTP Send Successfully</span>'
            ];
            echo json_encode($arr);
        // }

}
if($_GET['format']=='checkotp')
{
    $field=$_GET['field'];
    $otp=$_GET['otp'];
    $date = new DateTime('now', new DateTimeZone('Asia/Kolkata'));
    $nowDate = $date->format('Y-m-d H:i:s');
    $query = "SELECT `OTP_ID` FROM `mstr_otp` WHERE `VERIFICATION_TEXT` = '$field' AND `OTP`='$otp' AND `OTP_EXPIRY_DATE` >= '$nowDate'";
    $result = mysqli_query($conn,$query);
    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        $sql = "UPDATE `mstr_otp` SET `IS_VERIFIED` = 'Y' ,`UPDATED_ON`= '$nowDate' WHERE `OTP_ID` = ".$row['OTP_ID'];
        $conn->query($sql);
        $arr=[
            'error'=>false,
            'msg'=>'<span style="color:green;">Successful</span>'
        ];
        echo json_encode($arr);
    } else {
        $arr=[
            'error'=>true,
            'msg'=>'<span style="color:red;">OTP Did Not Match Or Expired</span>'
        ];
        echo json_encode($arr);
    }   
    
}
if($_GET['format']=='submitform')
{
    try {  
        $name =$_GET['name'];
        $mobile =$_GET['mobile'];
        $whatsapp_number =$_GET['whatsapp_number'];
        $gender =$_GET['gender'];
        $age =$_GET['age'];
        $pincode =$_GET['pincode'];
        $email =$_GET['email'];
        $occupation =$_GET['occupation'];
        $landmark =$_GET['landmark'];
        $address =$_GET['address'];
        $area_of_service =$_GET['area_of_service'];
        $mode_of_offering =$_GET['mode_of_offering'];
        $date_1 =$_GET['date_1'];
        $date_2 =$_GET['date_2'];
        $day_1 =$_GET['day_1'];
        $day_2 =$_GET['day_2'];
        $opportunity =$_GET['opportunity'];
        $todaysDate = date('Y-m-d H:i:s');
        
        $query = "SELECT `REG_ID` FROM `skj_volunteer_registration` WHERE `MOBILE` = '$mobile' OR `EMAIL`='$email'";
        $result = mysqli_query($conn,$query);
        if (mysqli_num_rows($result) == 1) {
            $arr=[
                'error'=>true,
                'msg'=>'Data already exists with this Email or Mobile!'
            ];
        }else{
          
            $sql = "INSERT INTO `skj_volunteer_registration` (`NAME`,`MOBILE`,`WHATSAPP_NUMBER`,`GENDER`,`AGE`,`PINCODE`,`EMAIL`,`OCCUPATION`,
            `LANDMARK`,`ADDRESS`,`VOLUNTEER_REFERENCE`,`CREATED_AT`,`UPDATED_AT`)
            VALUES ('".$name."','".$mobile."','".$whatsapp_number."','".$gender."','".$age."','".$pincode."','".$email."','".$occupation."','".$landmark."',
            '".$address."','".$opportunity."','".$todaysDate."','".$todaysDate."')";
            if($conn->query($sql)===TRUE){
              
                $arr=[
                    'error'=>false,
                    'msg'=>'Form Submited Successfully',
                ];
            }else{
                $arr=[
                    'error'=>true,
                    'msg'=>'Registration is not Completed'
                ];
            }
        }
        echo json_encode($arr);
    }   
    catch (Exception $e) {  
        $arr=[
            'error'=>true,
            'msg'=>$e->getMessage()
        ];
        echo json_encode($arr);
    }  
    
}