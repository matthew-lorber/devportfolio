<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    $mailTo = "matthew.lorber@writeme.com";
    $headers = "From: ".$mailFrom;
    $txt = "I've got an email from ".$name.".\n\n".$message;
    
    // do form validation here
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}