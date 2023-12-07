<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $msg = $_POST["msg"];

    // Setting the recipient email address (my email address)
    $to = "akunna1mail@gmail.com";

    // The subject of the email
    $subject = "Guidebook New Contact Form Submission";

    // Setting the headers
    $headers = "From: your-domain-email@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html\r\n";

    // Compose the email message
    $message = "<p>Name: $name</p>";
    $message .= "<p>Email: $email</p>";
    $message .= "<p>Number: $number</p>";
    $message .= "<p>Message: $msg</p>";

    // Send the email
    mail($to, $subject, $message, $headers);

    // You can also redirect the user to a thank you page or show a success message
    header("Location: thank-you.html");
    exit;
}
?>
 