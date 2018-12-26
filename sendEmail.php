<?php

    // echo "php working" ;  
    ob_start();
    if(isset($_POST['submit'])) { 

        // echo "inside the if" ; 
        $name = $_POST['name'] ;
        $mailFrom = $_POST['mail'] ; 
        $message = $_POST['message'] ;  

        $mailTo = "info@mdd-architects.com" ; 
        $headers = "From: ".$mailFrom ;
        $sideNote = "\n\ndon't reply to this email as it will be marked as spam for your potential client !" ; 
        $txt = "You hare received an email from ". $name."\n\n".$message.$sideNote;

        mail($mailTo , "Mail From Your Website!" , $txt , $headers) ; 
        header("Location: contact.html?mailsend=true");  
    }

?>
