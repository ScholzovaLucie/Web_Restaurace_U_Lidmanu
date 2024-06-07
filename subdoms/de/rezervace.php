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
                    <input id="menu"onclick="menoShow()" class="menu"type="image" src="galerie/menu.webp" />
            
                    <img id="uvodlogo"class="uvodlogo" src="galerie/logolidman.webp" alt="Logo"> 
                </div>
            </div>
    
            <div id="topnav"class="topnav"  > 
        <a onmouseleave="hideNodes(this)" id="index_navbar" href='index.html'>Über uns</a>
        <a href="kontakt.php">Hochzeit</a>
        <a href='restaurace.html'>Restaurant</a>
        <a class="longtopshort"href='ubytovani.html'>Unterkünfte</a>
        <a href='svatby.html'>Hochzeiten</a>
        <a class="longtop"href='pobytoveBalicka.html'>Günstige Aufenthaltspakete</a>
        <a href='cenik.html'>Preisliste</a>
        <a href='galerie.html'>Galerie</a>
        <a class="active"href='rezervace.php'>Reservierung</a>
        <btn onclick="location.href='https://ulidmanu.cz/rezervace.php';" id="jazykCZ"class="jazykCZ">CZ</btn>
        <btn onclick="location.href='https://en.ulidmanu.cz/rezervace.php';" id="jazykEN"class="jazykEN">EN</btn>
        <btn onclick="location.href='https://pl.ulidmanu.cz/rezervace.php';" id="jazykPL"class="jazykPL">PL</btn>
        <btn onclick="location.href='rezervace.php';" id="jazykDE" class="jazykDEaktivni">DE</btn>
        <div class="canceltopnav" onclick="menoClose()">
            <img id="canceltopnav"class="canceltopnav" src="galerie/cancel.webp" alt="cancel">
        </div>
        
    </div>

    <div id="main" class="main">       

            <!--  IFRAME   -->

<div class="formular_rezervace"id="formular">
                <div class="form-container">
                    <form name="frmContact" id="" frmContact"" method="post"
                        action="" enctype="multipart/form-data"
                        onsubmit="return validateContactForm()">

                        <div class="input-row">
                            <label class="rezerveplaceHolder">Name</label>
                            <input type="text" class="rezerve-input-field-name" name="userName" id="userName" placeholder="" />
                            
                        </div>
                        <div class="input-row">
                            <label class="rezerveplaceHolderEmail">Email</label>
                              <input id="txt"type="email"required #email="ngModel"placeholder=""
                                    class="rezerve-input-field-email" name="userEmail" id="userEmail"title="Die E-Mail muss enthalten @"[class.is-invalid]="email.invalid && email.touched"  />
                                    
                        </div>
                        <div class="input-row">
                            <label class="rezerveplaceHolderDatum">Datum</label>
                            <div class="rezerve-input-field-datum-div">
                                <input type="date"name="date_od" id="date_od" value = '' class="rezerve-input-field-datum" placeholder=""/>
                                <input type="date"name="date_do" id="date_do" value = '' class="rezerve-input-field-datum" placeholder="" disabled/> 
                            </div>
                            
                        </div>
                        <div class="input-row"> 
                            <label class="rezerveplaceHolderSelect">Paket bleiben</label>
                            <select name="balicek" id="balicek" class="rezerve-input-field-select">
                                <option value="---">---</option>
                                <option value="Prodloužený víkend ve Stolových horách">Ein verlängertes Wochenende in den Tafelbergen</option>
                                <option value="Pětidenní turisticko-poznávací pobyt na Machovsku">Fünftägiger Touristen- und Besichtigungsaufenthalt in der Region Machovská</option>
                                <option value="Týdenní dovolená na Broumovsku">Eine Woche Urlaub in Broumovsk</option>
                            </select>
                            
                        </div>
                        <div class="input-row">
                            <label class="rezerveplaceHolderPredmet">Thema</label>
                             <input required type="text"placeholder=""
                                 class="rezerve-input-field-predmet" name="subject" id="subject" value=""/>
                                 
                        </div>
                        <div class="input-row zprava">
                            <label class="rezerveplaceHolderZprava">Nachricht</label>
                            <textarea name="zprava" id="zprava" placeholder=""
                                class="rezerve-input-field-zprava" cols="70" rows="5"></textarea>
                                
                        </div>
                        <div>
                            <input type="submit" name="send" class="btn-submit"
                                    value="Schicken" />

                            <div id="statusMessage"> 
                                    <?php
                                if (! empty($message)) {
                                ?>
                                <p class='<?php echo $type; ?>Message'><?php echo "Fehler bei der E-Mail-Eingabe"; ?></p>
                            <?php
                                }
                                ?>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
            <script src='jquery.js'></script>
        <script src="main.js"></script>
           <script src="action.js"></script>
           <script src='popup.js'></script>
           <script src="index.js"></script>
           <script src="aktivity.js"></script>
           <script src="rezervace.js"></script>


</body>

</html>

<?php
require 'vendor/autoload.php';
if(!empty($_POST["send"])){
    $mail = new Nette\Mail\Message;
    $mail->setFrom($_POST['userEmail']);
    $mail->addTo('info@ulidmanu.cz');
    $mail->setSubject($_POST['subject']);
    $messageBody = "Jméno: {$_POST['userName']} \n Datum pobytu: ". date('Y-m-d', strtotime(strtr($_REQUEST['date_od'], '/', '-'))) ." - ". date('Y-m-d', strtotime(strtr($_REQUEST['date_do'], '/', '-'))) ."\n Pobytový balíček: {$_POST['balicek']} \n Zprava: {$_POST['zprava']}";
	$mail->setBody($messageBody);

    $mailer = new Nette\Mail\SendmailMailer;
$mailer->send($mail);
    $mailer->commandArgs = 'info@ulidmanu.cz';
}
?>