<!DOCTYPE html>
<html lang="cz">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurace u Lidmanů</title>
    <link id="styly"rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="./main.css">
    <link rel="icon" type="image/webp" href="../favicomatic/" sizes="32x32" />
    <link rel="icon" type="image/webp" href="../favicomatic.zip" sizes="16x16" />

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

        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

</head>

<body>

    <div class="obrazky"id="obrazky">
                
                <div id="pozadi"class="pozadi">
                    <input id="menu"onclick="menoShow()" class="menu"type="image" src="http://galerie.ulidmanu.cz/menu.webp" />
            
                    <img id="uvodlogo"class="uvodlogo" src="http://galerie.ulidmanu.cz/logolidman.webp" alt="Logo"> 
                </div>
            </div>
    
        <div id="topnav"class="topnav">
        <a onmouseleave="hideNodes(this)" id="index_navbar" href='index.html'>O nas</a>
        <a href="kontakt.php">Kontakt</a>
        <a href='restaurace.html'>Restauracja</a>
        <a class="longtopshort"href='ubytovani.html'>Zakwaterowanie</a>
        <a href='svatby.html'>Śluby</a>
        <a class="longtop"href='pobytoveBalicka.html'>Korzystne pakiety pobytowe</a>
        <a href='cenik.html'>Cennik</a>
        <a href='galerie.html'>Galerie</a>
        <a class="active"href='rezervace.php'>Rezerwacja</a>
        <btn onclick="location.href='http://ulidmanu.cz/rezervace.php';" id="jazykCZ"class="jazykCZ">CZ</btn>
    <btn onclick="location.href='http://en.ulidmanu.cz/rezervace.php';" id="jazykEN"class="jazykEN">EN</btn>
    <btn onclick="location.href='rezervace.php';" id="jazykPL"class="jazykPLaktivni">PL</btn>
<btn onclick="location.href='http://de.ulidmanu.cz/rezervace.php';" id="jazykDE" class="jazykDE">DE</btn>
        <div class="canceltopnav" onclick="menoClose()">
            <img id="canceltopnav"class="canceltopnav" src="http://galerie.ulidmanu.cz/cancel.webp" alt="cancel">
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
                            <label class="rezerveplaceHolder">Nazwa</label>
                            <input type="text" class="rezerve-input-field-name" name="userName" id="userName" placeholder="" />
                            
                        </div>
                        <div class="input-row">
                            <label class="rezerveplaceHolderEmail">E-mail</label>
                              <input id="txt"type="email"required #email="ngModel"placeholder=""
                                    class="rezerve-input-field-email" name="userEmail" id="userEmail"title="email musi obsahovat @"[class.is-invalid]="email.invalid && email.touched"  />
                                    
                        </div>
                        <div class="input-row">
                            <label class="rezerveplaceHolderDatum">Data</label>
                            <div class="rezerve-input-field-datum-div">
                                <input type="date" name="date_od" id="date_od" value = '' class="rezerve-input-field-datum" placeholder=""/>
                                <input type="date" name="date_do" id="date_do" value = '' class="rezerve-input-field-datum" placeholder="" disabled/>
                            </div>
                            
                            
                        </div>
                        <div class="input-row"> 
                            <label class="rezerveplaceHolderSelect">Pakiet zakwaterowania</label>
                            <select name="balicek" id="balicek" class="rezerve-input-field-select">
                                <option value="---">---</option>
                                <option value="Prodloužený víkend ve Stolových horách">Długi weekend w Górach Stołowych</option>
                                <option value="Pětidenní turisticko-poznávací pobyt na Machovsku">Pięciodniowy pobyt turystyczno-krajoznawczy w regionie Machovská</option>
                                <option value="Týdenní dovolená na Broumovsku">Tygodniowy urlop w Broumovsku</option>
                            </select>
                            
                        </div>
                        <div class="input-row">
                            <label class="rezerveplaceHolderPredmet">Temat</label>
                             <input required type="text"placeholder=""
                                 class="rezerve-input-field-predmet" name="subject" id="subject" value=""/>
                                 
                        </div>
                        <div class="input-row zprava">
                            <label class="rezerveplaceHolderZprava">Wiadomość</label>
                            <textarea name="zprava" id="zprava" placeholder=""
                                class="rezerve-input-field-zprava" cols="70" rows="5"></textarea>
                                
                        </div>
                        <div>
                            <input type="submit" name="send" class="btn-submit"
                                    value="Wysłać" />

                            <div id="statusMessage"> 
                                    <?php
                                if (! empty($message)) {
                                ?>
                                <p class='<?php echo $type; ?>Message'><?php echo "błąd we wpisie e-mail"; ?></p>
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