<!DOCTYPE html>
<html lang="cz">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurace u Lidmanů</title>
    <link id="styly"rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="./main.css">
    <link rel="icon" type="image/webp" href="../favicomatic/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/webp" href="../favicomatic/favicon-16x16.png" sizes="16x16" />

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>

        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

</head>

<body>

    <div class="obrazky"id="obrazky">
                
        <div id="pozadi"class="pozadi">
            <input id="menu"onclick="menoShow()" class="menu"type="image" src="https://galerie.ulidmanu.cz/menu.webp" />
    
            <img id="uvodlogo"class="uvodlogo" src="https://galerie.ulidmanu.cz/logolidman.webp" alt="Logo"> 
        </div>
    </div>

    <div id="topnav"class="topnav" onmouseenter="showNodesMobile()" onmouseleave="hideNodesMobile()" > 
             <a onmouseleave="hideNodes(this)" id="index_navbar" href='index.html'>About us</a>
        <a  class="active" href="kontakt.php">Contact</a>
        <a href='restaurace.html'>Restaurant</a>
        <a class="longtopshort"href='ubytovani.html'>Accommodations</a>
        <a href='svatby.html'>Weddings</a>
        <a class="longtopa"href='pobytoveBalicka.html'>Advantageous stay packages</a>
        <a href='cenik.html'>Price list</a>
        <a href='galerie.html'>Gallery</a>
        <a href='rezervace.php'>Reservation</a>
        <btn onclick="location.href='https://ulidmanu.cz/kontakt.php';" id="jazykCZ"class="jazykCZ">CZ</btn>
        <btn onclick="location.href='kontakt.php';" id="jazykEN"class="jazykENaktivni">EN</btn>
        <btn onclick="location.href='https://pl.ulidmanu.cz/kontakt.php';" id="jazykPL" class="jazykPL">PL</btn>
        <btn onclick="location.href='https://de.ulidmanu.cz/kontakt.php';" id="jazykDE" class="jazykDE">DE</btn>
        <div class="canceltopnav" onclick="menoClose()">
            <img id="canceltopnav"class="canceltopnav" src="https://galerie.ulidmanu.cz/cancel.webp" alt="cancel">
        </div>
    </div>

<div id="main" class="main">
<div class="blok_obrazku">
        <div class="uvodni_obrazek">
            <img src="https://galerie.ulidmanu.cz/kontakt/DSCN0464.webp" alt="">
        </div>
        <div class="uvodni_obrazek">
            <img src="https://galerie.ulidmanu.cz/kontakt/002_HZ6_3762_Penzion_U_Lidmanu.webp" alt="">
        </div>
        <div class="uvodni_obrazek">
            <img src="https://galerie.ulidmanu.cz/kontakt/9c8f78d411bc1f0228e6.webp" alt="">
        </div>
        <div class="uvodni_obrazek">
            <img src="https://galerie.ulidmanu.cz/kontakt/95f5c4089c2e069cf161.webp" alt="">
        </div>
    </div>

    <a id="down_restaurace" onclick="down()"title="Go down">
            <img id="down_restaurace_img"src="https://galerie.ulidmanu.cz/down.webp">
    </a>
    <a id="up_restaurace" onclick="topFunction()"title="Go to top">
        <img id="up_restaurace_img"src="https://galerie.ulidmanu.cz/down.webp">
    </a>

        <div class="info">
            <div class="info1">
                <div class="ukazatel">
                    <img src="https://galerie.ulidmanu.cz/position.webp" alt="Pozice">
                </div>
                <div>
                    <div class="text">
                        Machovská Lhota 40
                        <nav></nav> 
                        Machov 549 31
                    </div>
                    <div class="text3">
                        50.4975831N,
                        <nav></nav> 
                        16.2934947E
                    </div>
                </div>
            </div>

            <div class="info2">
                <div class="ukazatel">
                    <img src="https://galerie.ulidmanu.cz/phone-call.webp" alt="Kontakt">
                </div>
                <div class="text">
                    +420 604 341 863
                </div>
            </div>

            <div class="info3">
                <div class="ukazatel">
                    <img  src="https://galerie.ulidmanu.cz/mail.webp" alt="Email">
                </div>
                <div>
                    <div class="text">
                        info@ulidmanu.cz
                    </div>
                    <div onclick="location.href='#formular'"class="bttn_kontakt">
                        <a>Contact us</a>
                    </div>
                </div>  
            </div>

            <div class="info4">
                <img class="ukazatel" src="https://galerie.ulidmanu.cz/facebook2.webp" alt="Email">
      
                <div class="facebook">
                    <a href="https://www.facebook.com/Pension-a-restaurace-U-Lidman%C5%AF-945259918825167">Facebook</a>
                </div>
            </div>

            <div class="info5">
                <div class="text1">
                    <b>Owner and operator of the restaurant:</b>
                </div>
                <div class="text">
                    Petr Šturm
                    <nav></nav> 
                    ID number: 71143416
                </div>
            </div>

            <div class="info6">
                <div class="text1">
                    <b>Operator of the pension:</b>
                </div>
                <div class="text">
                    Tereza Šturmová
                    <nav></nav> 
                    ID number: 06841350
                </div>
            </div>

            
        </div>

        <iframe id="mapa"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2537.9674639711725!2d16.2889786!3d50.4975633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e686d9f1caccd%3A0x5443aff885131f52!2sPension%20-%20Restaurace%20U%20Lidman%C5%AF!5e0!3m2!1scs!2scz!4v1662476744005!5m2!1scs!2scz"  style="border:0;" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div class="formular"id="formular">
        <div class="form-container">
                    <form name="frmContact" id="" frmContact"" method="post"
                        action="" enctype="multipart/form-data"
                        onsubmit="return validateContactForm()">

                        <div class="input-row">
                            <label class="placeHolder">Name</label>
                            <input type="text" class="input-field-name" name="userName" id="userName" placeholder="" />
                            
                        </div>
                        <div class="input-row">
                            <label class="placeHolderEmail">Email</label>
                              <input id="txt"type="email"required #email="ngModel"placeholder=""
                                    class="input-field-email" name="userEmail" id="userEmail"title="email musi obsahovat @"[class.is-invalid]="email.invalid && email.touched"  />
                                    
                        </div>
                        <div class="input-row">
                            <label class="placeHolderPredmet">Subject</label>
                             <input type="text"placeholder=""
                                 class="input-field-predmet" name="subject" id="subject" />
                                 
                        </div>
                        <div class="input-row">
                            <label class="placeHolderZprava">Message</label>
                            <textarea name="zprava" id="zprava"placeholder=""
                                class="input-field-zprava" cols="60" rows="4"></textarea>
                                
                        </div>
                        <div>
                            <input type="submit" name="send" class="btn-submit-kontakt"
                                    value="Send" />

                            <div id="statusMessage"> 
                                    <?php
                                if (! empty($message)) {
                                ?>
                                <p class='<?php echo $type; ?>Message'><?php echo "chyba v zadani emailu"; ?></p>
                            <?php
                                }
                                ?>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

</div>

 <div class="kraj">
            <img class="kraj_logo"src="https://galerie.ulidmanu.cz/logo_colour_pantone.webp">
            <div class="kraj_text">With the financial support of the Hradec Králové region</div>
        </div>

            <script src='jquery.js'></script>
        <script src="main.js"></script>
           <script src="action.js"></script>
           <script src='popup.js'></script>
           <script src="index.js"></script>
           <script src="aktivity.js"></script>
</body>

</html>


<?php
require 'vendor/autoload.php';
if(!empty($_POST["send"])){
    $mail = new Nette\Mail\Message;
    $mail->setFrom($_POST['userEmail']);
    $mail->addTo('info@ulidmanu.cz');
    $mail->setSubject($_POST['subject']);
    $messageBody = "Jméno: {$_POST['userName']} \n Zprava: {$_POST['zprava']}";
	$mail->setBody($messageBody);

    $mailer = new Nette\Mail\SendmailMailer;
$mailer->send($mail);
    $mailer->commandArgs = 'info@ulidmanu.cz';
}
?>

