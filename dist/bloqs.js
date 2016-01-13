'use strict';

(function(bloqsLanguages) {
        var texts = {"ca-ES":{"bloq-zowi-mouth-tongueOut":"somriure amb llengua","bloq-zowi-mouth-confused":"cara confosa","bloq-zowi-mouth-bigSurprise":"cara sorpresa","bloq-zowi-distance":"Zowi, mesura la distància","bloq-zowi-sound":"Zowi, escolta","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristesa","bloq-zowi-sounds-happy":"felicitat","bloq-zowi-sounds-sleeping":"somni","bloq-zowi-sounds-cuddly":"mim","bloq-zowi-sounds-confused":"confusió","bloq-zowi-movements-shakeLeg":"mou les cames","bloq-zowi-sounds-fart1":"un pet","bloq-zowi-movements-speed-medium":"mitjana","bloq-zowi-movements-speed-small":"baixa","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"Interrompre el bucle","bloq-code-writeYourCode":"Escriu el teu propi codi","bloq-comment-comment":"Comentari //","bloq-convert-convert":"Converteix","bloq-convert-to":"A","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binari","bloq-serial-receiver-receive":"Rep","bloq-serial-send-send":"Envia ","bloq-serial-send-print":"Sense salt de línia ","bloq-serial-send-println":"Amb salt de línia","bloq-buzzer-advance-sound":"Fes sonar el brunzidor ","bloq-buzzer-advance-note":"amb la nota ","bloq-buzzer-advance-for":"durant ","bloq-buzzer-advance-ms":"Ms","bloq-digital-read-advanced-readpin":"Llegeix el pin digital","bloq-analog-read-advanced-readpin":"Llegeix el pin analògic","bloq-continuous-servo-start-advanced-turn":"Gira el servo ","bloq-continuous-servo-start-advanced-direction":"en sentit ","bloq-continuous-servo-start-advanced-clockwise":"de les agulles del rellotge ","bloq-continuous-servo-start-advanced-counterclockwise":"Antihorari ","bloq-continuous-servo-stop-advanced-stop":"Atura el servo ","bloq-lcd-turn-on-off-advanced-turnon":"Encén ","bloq-lcd-turn-on-off-advanced-turnoff":"Apaga ","bloq-lcd-turn-on-off-advanced-lcdLigth":"el llum de l'LCD","bloq-lcd-clear":"Esborra el contingut de l'LCD","bloq-lcd-writte-advanced-write":"Escriu ","bloq-lcd-writte-advanced-inLCD":"a l 'LCD","bloq-lcd-writte-advanced-inPosition":"començant en la posició (columna, fila)","bloq-led-advanced-turnon":"Encén","bloq-led-advanced-turnoff":"Apaga","bloq-led-advanced-theLED":"el LED ","bloq-oscillator-advanced-oscillate":"Fes oscil·lar el servo ","bloq-oscillator-advanced-around":"al voltant de ","bloq-oscillator-advanced-amplitude":"amb amplitud ","bloq-oscillator-advanced-speed":"amb velocitat ","bloq-oscillator-start-advanced-oscillator":"Reprodueix l'oscil·lador","bloq-oscillator-stop-advanced-stop":"Atura l'oscil·lador","bloq-pin-read-advanced-readpin":"Llegeix el pin ","bloq-pin-writte-advanced-writepin":"Escriu al pin ","bloq-pin-writte-advanced-data":"la dada","bloq-read-advanced-read":"Llegeix","bloq-servo-advanced-move":"Mou","bloq-servo-advanced-to":"a","bloq-servo-advanced-degrees":"graus","bloq-buzzer-sound":"Fes sonar el brunzidor","bloq-buzzer-note":"amb la nota","bloq-buzzer-for":"durant","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Fes girar el servo","bloq-continuous-servo-start-direction":"en sentit","bloq-continuous-servo-start-clockwise":"horari","bloq-continuous-servo-start-counterclockwise":"Antihorari","bloq-continuous-servo-stop-stop":"Atura el servo","bloq-lcd-turn-on-off-turnon":"Encén","bloq-lcd-turn-on-off-turnoff":"Apaga","bloq-lcd-turn-on-off-lcdLigth":"la llum de l'LCD","bloq-lcd-writte-write":"Escriu","bloq-lcd-writte-inLCD":"a l'LCD","bloq-led-turnon":"Encendre","bloq-led-turnoff":"Apagar","bloq-led-theLED":"El LED","bloq-oscillator-oscillate":"Fes oscil·lar el servo ","bloq-oscillator-around":"al voltant de","bloq-oscillator-amplitude":"amb amplitud","bloq-oscillator-speed":"amb velocitat","bloq-oscillator-times":"vegades","bloq-oscillator-start-oscillator":"Reprodueix l'oscil·lador","bloq-oscillator-stop-stop":"Atura l'oscil·lador","bloq-read-read":"Llegeix","bloq-servo-move":"Mou","bloq-servo-to":"a","bloq-servo-degrees":"graus","bloq-case-ifSameTo":"si és igual a","bloq-case-exec":"executa:","bloq-case-default-inOtherCase":"en un altre cas, executa:","bloq-continue-continue":"Continua amb la següent interació del bucle ","bloq-else-else":"en cas contrari, executa:","bloq-else-if-if":"en canvi, si ","bloq-else-if-else":"executa:","bloq-for-count":"Compta amb","bloq-for-from":"des de","bloq-for-to":"fins a","bloq-for-add":"sumant","bloq-for-subtract":"restant","bloq-for-exec":"executa:","bloq-if-if":"Si","bloq-if-exec":"executa:","bloq-switch-check":"Comprova quin és el valor de ","bloq-wait-wait":"Espera","bloq-while-while":"Mentre","bloq-while-exec":"executa:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Text","bloq-argument-bool":"Booleà","bloq-invoke-function-exec":"Executa","bloq-invoke-return-function-exec":"Executa","bloq-invoke-function-args":"amb els arguments següents:","bloq-return-return":"Retorna","bloq-return-function-declare":"Declara la funció","bloq-return-function-return":"Retorna","bloq-return-function-with-arguments-declare":"Declara la funció","bloq-return-function-with-arguments-count":"amb els arguments següents:","bloq-return-function-with-arguments-return":"Retorna","bloq-void-function-declare":"Declara la funció","bloq-void-function-with-arguments-declare":"Declara la funció","bloq-void-function-with-arguments-count":"amb els arguments següents:","bloq-boolArray-advanced-arraySize":"Array amb mida","bloq-boolArray-advanced-boolType":"i tipus bool","bloq-boolArray-arraySize":"Array amb mida","bloq-boolArray-boolType":"I tipus bool","bloq-boolean-true":"Veritable","bloq-boolean-false":"Fals","bloq-logic-operations-and":"i","bloq-logic-operations-or":"o","bloq-not-not":"not","bloq-loop-header":"Loop","bloq-loop-description":"Crea el programa que s'executarà contínuament després del Setup.","bloq-setup-header":"Setup","bloq-setup-description":"Indica què vols que s'executi a l' inici del programa i només una única vegada.","bloq-var-header":"Variables globals, funcions i classes","bloq-var-description":"Defineix els valors que utilitzaràs a Setup i Loop.També pots crear funcions per agrupar blocs.","bloq-numberArray-advanced-arraySize":"Array amb mida","bloq-numberArray-advanced-type":"i tipus","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"sencer","bloq-map-map":"Mapejar","bloq-map-value":"valor entre [0 - ","bloq-map-advanced-map":"Mapejar","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] a [","bloq-math-operations-sqrt":"Arrel quadrada","bloq-math-operations-abs":"Valor absolut","bloq-numberArray-arraySize":"Array amb mida","bloq-numberArray-floatType":" i tipus float","bloq-random-random":"Aleatori entre","bloq-random-and":"i","bloq-stringArray-advanced-arraySize":"Array amb mida","bloq-stringArray-advanced-type":"i tipus","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Longitud","bloq-string-string":"Text","bloq-stringArray-arraySize":"Array amb mida","bloq-stringArray-stringType":"i tipus text ","bloq-string-create-create":"Crea text amb ","bloq-hw-variable-advanced-variable":"Variable (components)","bloq-sw-variable-advanced-variable":"Variable (codi)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declara variable","bloq-declare-variable-declare-type":"amb tipus","bloq-declare-variable-declare-type-int":"sencer","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"text","bloq-declare-variable-declare-type-char":"caràcter","bloq-declare-variable-declare-type-bool":"valor lògic","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caràcter","bloq-lcd-default":"Hola!","bloq-comment-default":"Escriu un comentari","bloq-functions-default":"Nom","bloq-wait-ms":"ms","drag-bloq":"Arrossega un bloc fins aquí per començar el teu programa","bloq-invoke-class-function-class":"de l'objecte","bloq-invoke-arguments-class":"Crea un objecte de la classe","bloq-invoke-arguments-class-name":"amb el nom","bloq-invoke-arguments-args":"amb els arguments següents","bloq-invoke-class-return-function-exec":"Executa la funció","bloq-invoke-class-function-exec":"Executa la funció","bloq-invoke-class-function-args":"amb els arguments següents","bloq-invoke-class-return-function-args-exec":"Executa la funció","bloq-invoke-class-return-function-args-class":"de l'objecte","bloq-invoke-class-return-function-args-args":"amb els arguments següents","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor que utilitza els arguments següents","bloq-invoke-class":"Crea un objecte de la classe","bloq-invoke-class-name":"amb el nom","bloq-class":"Declara la classe","bloq-class-default":"Nom","bloq-class-from":"de","bloq-class-inheritance-type":"heretant de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protegida","bloq-class-inheritance-private":"privada","bloq-public":"Variables i funcions públiques:","bloq-protected":"Variables i funcions protegides:","bloq-private":"Variables i funcions privades:","bloq-include-lib-exec":"Incloure la llibreria","bloq-pin-analog-write":"Escriure al pin analògic","bloq-pin-digital-write":"Escriure al pin digital","bloq-pin-analog-write-data":"la dada","bloq-pin-digital-write-data":"la dada","bloq-zowi-movements":"Zowi,","bloq-zowi-movements-walk":"camina","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"fes el moonwalker","bloq-zowi-movements-height-crusaito":"fes el pas creuat","bloq-zowi-movements-height-flapping":"agita't","bloq-zowi-movements-shakeleg":"mou les cames","bloq-zowi-movements-bend":"inclina't","bloq-zowi-movements-forward":"endavant","bloq-zowi-movements-backward":"enrere","bloq-zowi-movements-left":"esquerra","bloq-zowi-movements-right":"dreta","bloq-zowi-movements-speed":"vegades a una velocitat de","bloq-zowi-mouth":"Zowi, dibuixa una","bloq-zowi-mouth-mouth":"a la teva boca","bloq-zowi-mouth-smile":"somriure","bloq-zowi-mouth-sad":"cara trista","bloq-zowi-mouth-happy":"cara alegre","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"endavant","bloq-zowi-movements-height-backward":"enrere","bloq-zowi-movements-height-left":"esquerra","bloq-zowi-movements-height-right":"dreta","bloq-zowi-movements-height-speed":"vegades a una velocitat de","bloq-zowi-movements-height-height":"i una alçada","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"mitjana","bloq-zowi-movements-height-small":"baixa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"puja i baixa","bloq-zowi-movements-no-dir-swing":"balanceja't","bloq-zowi-movements-no-dir-tiptoeSwing":"balanceja't de puntetes","bloq-zowi-movements-no-dir-jitter":"tremola","bloq-zowi-movements-no-dir-ascendingTurn":"gira mentre puges","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"vegades a una velocitat de","bloq-zowi-movements-no-dir-height":"i una alçada","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"mitjana","bloq-zowi-movements-no-dir-small":"baixa","bloq-zowi-sounds":"Zowi: canta","bloq-hts221-humidity":"Llegeix la humitat del sensor","bloq-hts221-temperature":"Llegeix la temperatura del sensor","bloq-rgbLed-fade-red":"amb un valor de vermell de","bloq-enable-interrupt":"Executa la funció","bloq-enable-interrupt-rising":"canviï de 0 a 1","bloq-enable-interrupt-falling":"canviï de 1 a 0","bloq-enable-interrupt-change":"canviï","bloq-enable-interrupt-pin":"quan l'entrada del pin","bloq-rgbLed-green":", un valor de verd de","bloq-rgbLed-fade":"Crea un degradat en el led RGB","bloq-rgbLed-red":"amb un valor de vermell de","bloq-rtc-init":"Actualitzar data i hora del rellotge","bloq-rtc-month":"el mes","bloq-rtc-using-advanced":"actual fent servir el rellotge","bloq-rtc-year":"l'any","bloq-rtc-day":"el dia","bloq-rtc-hour":"l'hora","bloq-rtc-minute":"el minut","bloq-rtc-second":"el segon","bloq-rtc-time":"hora","bloq-rtc-using":"actual fent servir el rellotge","bloq-rtc-advanced":"Obtenir","bloq-rtc":"Obtenir la","default-var-name-rtc":"rellotge_temps_real","bloq-rtc-date":"data","default-var-name-sound":"Sensor_so","bloq-rgbLed-blue":"i un valor de blau de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Encén el led RGB","bloq-rgbLed-fade-blue":"i un valor de blau de","bloq-rgbLed-fade-green":", un valor de verd de","bloq-rgbLed-simple":"Encén el led RGB","bloq-rgbLed-simple-color":"amb color","bloq-rgbLed-simple-red":"vermell","bloq-rgbLed-simple-green":"verd","bloq-rgbLed-simple-blue":"blau","bloq-zowi-gestures":"Zowi, fes l'animació de","bloq-zowi-gestures-ZowiHappy":"Feliç","bloq-zowi-gestures-ZowiSuperHappy":"Súper Feliç","bloq-zowi-gestures-ZowiSad":"Trist","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confús","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Enfadat","bloq-zowi-gestures-ZowiFretful":"Inquiet","bloq-zowi-gestures-ZowiMagic":"Màgia","bloq-zowi-gestures-ZowiWave":"Onda","bloq-zowi-gestures-ZowiVictory":"Victòria!!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"vegades","bloq-zowi-movements-simple-walk":"camina","bloq-zowi-movements-simple-turn":"gira","bloq-zowi-movements-simple-shakeLeg":"mou les cames","bloq-zowi-movements-simple-bend":"inclina't","bloq-zowi-movements-simple-moonwalker":"fes el moonwalker","bloq-zowi-movements-simple-crusaito":"fes el pas creuat","bloq-zowi-movements-simple-flapping":"agita't","bloq-zowi-movements-simple-updown":"puja i baixa","bloq-zowi-movements-simple-swing":"balanceja't","bloq-zowi-movements-simple-tiptoeSwing":"balanceja't de puntetes","bloq-zowi-movements-simple-jitter":"tremola","bloq-zowi-movements-simple-ascendingTurn":"gira mentre puges","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Zowi, descansa","bloq-millis":"Obtenir temps d'execució","bloq-random-seed":"Inicialitza el generador de números aleatoris","bloq-rgbLed-simple-white":"blanc","bloq-rgbLed-simple-yellow":"groc","bloq-rgbLed-simple-orange":"taronja","bloq-rgbLed-simple-dark-green":"verd fosc","bloq-rgbLed-simple-dark-blue":"blau fosc","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Sencer","bloq-argument-char":"Caràcter","bloq-zowi-buttons":"botó","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":"de Zowi","bloq-zowi-if-distance":"Si Zowi detecta una distància","bloq-zowi-if-distance-less":"menor","bloq-zowi-if-distance-more":"major","bloq-zowi-if-distance-than":"que","bloq-zowi-if-distance-then":"centímetres, executa:","bloq-zowi-if-buttons":"Si premo el botó","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":"de Zowi, executa:","bloq-zowi-if-sound":"Si Zowi escolta un soroll, executa:","bloq-equality-operations-is":"és","bloq-equality-operations-than":"que","bloq-while-is":"sigui","bloq-while-than":"que","bloq-if-is":"és","bloq-if-than":"que","bloq-else-is":"és","bloq-else-than":"que"},"de-DE":{"bloq-zowi-mouth-tongueOut":"Frech","bloq-zowi-mouth-confused":"Irritiert","bloq-zowi-mouth-bigSurprise":"Überrascht","bloq-zowi-distance":"Zowi, miss die Distanz","bloq-zowi-sound":"Zowi, hör zu","bloq-zowi-sounds-OhOoh":"Oh Oh","bloq-zowi-sounds-surprise":"Überrascht","bloq-zowi-sounds-sad":"Traurig","bloq-zowi-sounds-happy":"Glücklich","bloq-zowi-sounds-sleeping":"Schlafend","bloq-zowi-sounds-confused":"Verwirrt","bloq-zowi-sounds-fart1":"Pups","bloq-break-stopLoop":"Endlosschleife unterbrechen","bloq-code-writeYourCode":"Schreibe deinen eigenen Code","bloq-comment-comment":"Kommentar //","bloq-convert-convert":"Umwandeln","bloq-convert-to":"in","bloq-convert-dec":"Dezimalzahl","bloq-convert-hex":"Hexadezimalzahl","bloq-convert-oct":"Oktalzahl","bloq-convert-bin":"Binärzahl","bloq-serial-receiver-receive":"Empfangen","bloq-serial-send-send":"Senden","bloq-serial-send-print":"Ohne Zeilenumbruch","bloq-serial-send-println":"Mit Zeilenumbruch","bloq-buzzer-advance-sound":"Den Summer erklingen lassen","bloq-buzzer-advance-note":"mit dem Ton","bloq-buzzer-advance-for":"lang","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Den digitalen Pin auslesen","bloq-analog-read-advanced-readpin":"Den analogen Pin auslesen","bloq-continuous-servo-start-advanced-turn":"Servo drehen","bloq-continuous-servo-start-advanced-clockwise":"Im Uhrzeigersinn","bloq-continuous-servo-start-advanced-counterclockwise":"Entgegen des Uhrzeigersinns","bloq-continuous-servo-stop-advanced-stop":"Servo anhalten","bloq-lcd-turn-on-off-advanced-turnon":"Einschalten","bloq-lcd-turn-on-off-advanced-turnoff":"Ausschalten","bloq-lcd-turn-on-off-advanced-lcdLigth":"Das Licht der LCD-Anzeige","bloq-lcd-clear":"Den Inhalt der LCD-Anzeige löschen","bloq-lcd-writte-advanced-write":"Schreiben","bloq-lcd-writte-advanced-inLCD":"auf der LCD-Anzeige","bloq-lcd-writte-advanced-inPosition":"ab der Position (Spalte, Zeile)","bloq-led-advanced-turnon":"Einschalten","bloq-led-advanced-turnoff":"Ausschalten","bloq-led-advanced-theLED":"Die LED","bloq-oscillator-advanced-oscillate":"Servo schwenken","bloq-oscillator-advanced-around":"ungefähr","bloq-oscillator-advanced-amplitude":"mit Amplitude","bloq-oscillator-advanced-speed":"mit Geschwindigkeit","bloq-oscillator-start-advanced-oscillator":"Oszillator starten","bloq-oscillator-stop-advanced-stop":"Oszillator anhalten","bloq-pin-read-advanced-readpin":"Pin auslesen","bloq-pin-writte-advanced-writepin":"Auf dem Pin schreiben","bloq-pin-writte-advanced-data":"den Wert","bloq-read-advanced-read":"Lesen","bloq-servo-advanced-move":"Bewegen","bloq-servo-advanced-to":"um","bloq-servo-advanced-degrees":"Grad","bloq-buzzer-sound":"Den Summer erklingen lassen","bloq-buzzer-note":"mit dem Ton","bloq-buzzer-for":"lang","bloq-buzzer-ms":"ms","bloq-buzzer-do":"C","bloq-buzzer-re":"D","bloq-buzzer-mi":"E","bloq-buzzer-fa":"F","bloq-buzzer-sol":"G","bloq-buzzer-la":"A","bloq-buzzer-si":"H","bloq-continuous-servo-start-turn":"Servo drehen","bloq-continuous-servo-start-clockwise":"Im Uhrzeigersinn","bloq-continuous-servo-start-counterclockwise":"Entgegen des Uhrzeigersinns","bloq-continuous-servo-stop-stop":"Servo anhalten","bloq-lcd-turn-on-off-turnon":"Einschalten","bloq-lcd-turn-on-off-turnoff":"Ausschalten","bloq-lcd-turn-on-off-lcdLigth":"Das Licht der LCD-Anzeige","bloq-lcd-writte-write":"Schreiben","bloq-lcd-writte-inLCD":"auf der LCD-Anzeige","bloq-led-turnon":"Einschalten","bloq-led-turnoff":"Ausschalten","bloq-led-theLED":"Die LED","bloq-oscillator-oscillate":"Servo schwenken","bloq-oscillator-around":"ungefähr","bloq-oscillator-amplitude":"mit Amplitude","bloq-oscillator-speed":"mit Geschwindigkeit","bloq-oscillator-times":"Mal","bloq-oscillator-start-oscillator":"Oszillator starten","bloq-oscillator-stop-stop":"Oszillator anhalten","bloq-read-read":"Lesen","bloq-servo-move":"Bewegen","bloq-servo-to":"um","bloq-servo-degrees":"Grad","bloq-case-ifSameTo":"wenn gleich wie","bloq-case-exec":"ausführen:","bloq-case-default-inOtherCase":"andernfalls, ausführen:","bloq-continue-continue":"Mit der nächsten Iteration der Schleife fortfahren","bloq-else-else":"im gegenteiligen Fall, ausführen:","bloq-else-if-if":"ansonsten, wenn","bloq-else-if-else":"ausführen:","bloq-for-count":"Rechnen mit","bloq-for-from":"von","bloq-for-to":"bis","bloq-for-add":"addieren","bloq-for-subtract":"subtrahieren","bloq-for-exec":"ausführen:","bloq-if-if":"Wenn","bloq-if-exec":"ausführen:","bloq-switch-check":"Den Wert überprüfen von","bloq-wait-wait":"Warten","bloq-while-while":"Solange","bloq-while-exec":"ausführen:","bloq-argument-var":"Variable","bloq-argument-float":"Dezimalzahl","bloq-argument-string":"Text","bloq-argument-bool":"Boolesch","bloq-invoke-function-exec":"Ausführen","bloq-invoke-return-function-exec":"Ausführen","bloq-invoke-function-args":"mit den folgenden Argumenten:","bloq-return-return":"Ausgeben","bloq-return-function-declare":"Funktion deklarieren","bloq-return-function-return":"Ausgeben","bloq-return-function-with-arguments-declare":"Funktion deklarieren","bloq-return-function-with-arguments-count":"mit den folgenden Argumenten:","bloq-return-function-with-arguments-return":"Ausgeben","bloq-void-function-declare":"Funktion deklarieren","bloq-void-function-with-arguments-declare":"Funktion deklarieren","bloq-void-function-with-arguments-count":"mit den folgenden Argumenten:","bloq-boolArray-advanced-arraySize":"Array-Größe","bloq-boolArray-advanced-boolType":"und Typ Bool","bloq-boolArray-arraySize":"Array-Größe","bloq-boolArray-boolType":"und Typ Bool","bloq-boolean-true":"Wahr","bloq-boolean-false":"Falsch","bloq-logic-operations-and":"und","bloq-logic-operations-or":"oder","bloq-not-not":"nicht","bloq-loop-header":"Hauptschleife (Loop)","bloq-loop-description":"Erstelle das Programm, das nach dem Setup dauerhaft ausgeführt werden soll.","bloq-setup-header":"Initialanweisungen (Setup)","bloq-setup-description":"Gib an, welche Aktion nach dem Programmstart ausgeführt werden soll.","bloq-var-header":"Globale Variablen, Funktionen und Klassen","bloq-var-description":" Gib die Werte an, die du beim Setup und beim Loop verwenden wirst. Du kannst auch Funktionen erstellen, um Blöcke zu gruppieren.","bloq-numberArray-advanced-arraySize":"Array-Größe","bloq-numberArray-advanced-type":"und Typ","bloq-numberArray-advanced-float":"Dezimalzahl","bloq-numberArray-advanced-int":"ganze Zahl","bloq-map-map":"Map","bloq-map-value":"Wert zwischen [0-","bloq-map-advanced-map":"Map","bloq-map-advanced-value":"von [","bloq-map-advanced-and":"] bis [","bloq-math-operations-sqrt":"Quadratwurzel","bloq-math-operations-abs":"Absoluter Wert","bloq-numberArray-arraySize":"Array-Größe","bloq-numberArray-floatType":" und Float-Type","bloq-random-random":"Zufallswert zwischen","bloq-random-and":"und","bloq-stringArray-advanced-arraySize":"Array-Größe","bloq-stringArray-advanced-type":"und Typ","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Länge","bloq-string-string":"Text","bloq-stringArray-arraySize":"Array-Größe","bloq-stringArray-stringType":"und Typ Text","bloq-string-create-create":"Text erstellen mit","bloq-hw-variable-advanced-variable":"Variable (Komponenten)","bloq-sw-variable-advanced-variable":"Variable (Code)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Variable bestimmen","bloq-declare-variable-declare-type":"mit Typ","bloq-declare-variable-declare-type-int":"ganze Zahl","bloq-declare-variable-declare-type-float":"Dezimalzahl","bloq-declare-variable-declare-type-text":"Text","bloq-declare-variable-declare-type-char":"Zeichen","bloq-declare-variable-declare-type-bool":"logischer Wert","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Zeichen","bloq-lcd-default":"Hallo!","bloq-comment-default":"Schreibe einen Kommentar","bloq-functions-default":"Name","bloq-wait-ms":"ms","drag-bloq":"Ziehe einen Block hierher, um mit dem Programm zu beginnen","bloq-invoke-class-function-class":"des Objektes","bloq-invoke-arguments-class":"Erstelle ein Objekt der Klasse ","bloq-invoke-arguments-class-name":"mit dem Namen","bloq-invoke-arguments-args":"mit den folgenden Argumenten","bloq-invoke-class-return-function-exec":"Die Funktion ausführen","bloq-invoke-class-function-exec":"Die Funktion ausführen","bloq-invoke-class-function-args":"mit den folgenden Argumenten","bloq-invoke-class-return-function-args-exec":"Die Funktion ausführen","bloq-invoke-class-return-function-args-class":"des Objektes","bloq-invoke-class-return-function-args-args":"mit den folgenden Argumenten","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor, der die folgenden Argumente verwendet","bloq-invoke-class":"Erstelle ein Objekt der Klasse ","bloq-invoke-class-name":"mit dem Namen","bloq-class":"Klasse deklarieren","bloq-class-default":"Name","bloq-class-from":"von","bloq-class-inheritance-type":"vererben als","bloq-class-inheritance-public":"öffentlich","bloq-class-inheritance-protected":"geschützt","bloq-class-inheritance-private":"privat","bloq-public":"Variablen und öffentliche Funktionen:","bloq-protected":"Variablen und geschützte Funktionen:","bloq-private":"Variablen und private Funktionen:","bloq-include-lib-exec":"Die Bibliothek einfügen","bloq-pin-analog-write":"Auf dem analogen Pin schreiben","bloq-pin-digital-write":"Auf dem digitalen Pin schreiben","bloq-pin-analog-write-data":"den Wert","bloq-pin-digital-write-data":"den Wert","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"geh","bloq-zowi-movements-turn":"dreh dich","bloq-zowi-movements-height-moonwalker":"tanz den Moonwalker","bloq-zowi-movements-height-crusaito":"tanz den Kreuzschritt","bloq-zowi-movements-height-flapping":"zappel","bloq-zowi-movements-shakeleg":"bewege die Beine","bloq-zowi-movements-bend":"beuge dich","bloq-zowi-movements-forward":"vor","bloq-zowi-movements-backward":"zurück","bloq-zowi-movements-left":"links","bloq-zowi-movements-right":"rechts","bloq-zowi-movements-speed":"Mal mit einer Geschwindigkeit von","bloq-zowi-mouth":"Zowi: Zeichne ein","bloq-zowi-mouth-mouth":"auf deine Lippen","bloq-zowi-mouth-smile":"Lächeln","bloq-zowi-mouth-sad":"trauriges Gesicht","bloq-zowi-mouth-happy":"fröhliches Gesicht","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"vor","bloq-zowi-movements-height-backward":"zurück","bloq-zowi-movements-height-left":"links","bloq-zowi-movements-height-right":"rechts","bloq-zowi-movements-height-speed":"Mal mit der Geschwindigkeit von","bloq-zowi-movements-height-height":"und einer ... Höhe ","bloq-zowi-movements-height-big":"großen","bloq-zowi-movements-height-medium":"mittleren","bloq-zowi-movements-height-small":"niedrigen","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"bewege dich auf und ab","bloq-zowi-movements-no-dir-swing":"wippe","bloq-zowi-movements-no-dir-tiptoeSwing":"wippe auf Zehenspitzen","bloq-zowi-movements-no-dir-jitter":"Schüttel dich","bloq-zowi-movements-no-dir-ascendingTurn":"kreise beim Aufwärtsbewegen","bloq-zowi-movements-no-dir-jump":"spring","bloq-zowi-movements-no-dir-speed":"Mal mit einer Geschwindigkeit von","bloq-zowi-movements-no-dir-height":"und einer ... Höhe","bloq-zowi-movements-no-dir-big":"großen","bloq-zowi-movements-no-dir-medium":"mittleren","bloq-zowi-movements-no-dir-small":"niedrigen","bloq-zowi-sounds":"Zowi: sing","bloq-hts221-humidity":"Feuchtigkeitssensor auslesen","bloq-rtc-year":"Jahr","bloq-rtc-day":"Tag","bloq-rtc-hour":"Stunde","bloq-rtc-minute":"Minute","bloq-rtc-second":"Sekunde","bloq-rgbLed-blue":"blaue LED","default-var-name-RGBled":"RGB LED"},"en-GB":{"bloq-zowi-mouth-tongueOut":"smile with tongue out","bloq-zowi-mouth-confused":"confused face","bloq-zowi-mouth-bigSurprise":"surprised face","bloq-zowi-distance":"Zowi, measure the distance","bloq-zowi-sound":"Zowi, listen carefully","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"surprise","bloq-zowi-sounds-sad":"sadness","bloq-zowi-sounds-happy":"happiness","bloq-zowi-sounds-sleeping":"sleepiness","bloq-zowi-sounds-cuddly":"cuddle","bloq-zowi-sounds-confused":"confusion","bloq-zowi-movements-shakeLeg":"move leg ","bloq-zowi-sounds-fart1":"fart","bloq-zowi-movements-speed-medium":"medium","bloq-zowi-movements-speed-small":"low","bloq-zowi-movements-speed-high":"high","bloq-break-stopLoop":"Break out of the loop","bloq-code-writeYourCode":"Create your own code","bloq-comment-comment":"Comment //","bloq-convert-convert":"Convert","bloq-convert-to":"to","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binary","bloq-serial-receiver-receive":"Receive","bloq-serial-send-send":"Send","bloq-serial-send-print":"Without line break","bloq-serial-send-println":"With line break","bloq-buzzer-advance-sound":"Sound the buzzer","bloq-buzzer-advance-note":"with the note","bloq-buzzer-advance-for":"for","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Read digital pin","bloq-analog-read-advanced-readpin":"Read analogue pin","bloq-continuous-servo-start-advanced-turn":"Rotate servo","bloq-continuous-servo-start-advanced-direction":"direction","bloq-continuous-servo-start-advanced-clockwise":"clockwise","bloq-continuous-servo-start-advanced-counterclockwise":"anti-clockwise","bloq-continuous-servo-stop-advanced-stop":"Stop servo","bloq-lcd-turn-on-off-advanced-turnon":"Switch on","bloq-lcd-turn-on-off-advanced-turnoff":"Switch off","bloq-lcd-turn-on-off-advanced-lcdLigth":"the LCD light","bloq-lcd-clear":"Clear content of the LCD","bloq-lcd-writte-advanced-write":"Write","bloq-lcd-writte-advanced-inLCD":"on the LCD","bloq-lcd-writte-advanced-inPosition":"starting at position (column, row)","bloq-led-advanced-turnon":"Switch on","bloq-led-advanced-turnoff":"Switch off","bloq-led-advanced-theLED":"the LED","bloq-oscillator-advanced-oscillate":"Oscillate servo","bloq-oscillator-advanced-around":"around","bloq-oscillator-advanced-amplitude":"with amplitude","bloq-oscillator-advanced-speed":"with speed","bloq-oscillator-start-advanced-oscillator":"Oscillator","bloq-oscillator-stop-advanced-stop":"Stop oscillator","bloq-pin-read-advanced-readpin":"Read the pin","bloq-pin-writte-advanced-writepin":"Write on the pin","bloq-pin-writte-advanced-data":"the data","bloq-read-advanced-read":"Read","bloq-servo-advanced-move":"Move","bloq-servo-advanced-to":"to","bloq-servo-advanced-degrees":"degrees","bloq-buzzer-sound":"Sound the buzzer","bloq-buzzer-note":"with the note","bloq-buzzer-for":"for","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Rotate servo","bloq-continuous-servo-start-direction":"direction","bloq-continuous-servo-start-clockwise":"clockwise","bloq-continuous-servo-start-counterclockwise":"anti-clockwise","bloq-continuous-servo-stop-stop":"Stop servo","bloq-lcd-turn-on-off-turnon":"Switch on","bloq-lcd-turn-on-off-turnoff":"Switch off","bloq-lcd-turn-on-off-lcdLigth":"the LCD light","bloq-lcd-writte-write":"Write","bloq-lcd-writte-inLCD":"on the LCD","bloq-led-turnon":"Switch on","bloq-led-turnoff":"Switch off","bloq-led-theLED":"the LED","bloq-oscillator-oscillate":"Oscillate servo","bloq-oscillator-around":"around","bloq-oscillator-amplitude":"with amplitude","bloq-oscillator-speed":"with speed","bloq-oscillator-times":"times","bloq-oscillator-start-oscillator":"Start oscillator","bloq-oscillator-stop-stop":"Stop oscillator","bloq-read-read":"Read","bloq-servo-move":"Move","bloq-servo-to":"to","bloq-servo-degrees":"degrees","bloq-case-ifSameTo":"if equal to","bloq-case-exec":"do:","bloq-case-default-inOtherCase":"else, do:","bloq-continue-continue":"Continue with next iteration of the loop","bloq-else-else":"else if, do:","bloq-else-if-if":"else if","bloq-else-if-else":"do:","bloq-for-count":"Count with","bloq-for-from":"from","bloq-for-to":"until","bloq-for-add":"adding","bloq-for-subtract":"subtracting","bloq-for-exec":"do:","bloq-if-if":"If","bloq-if-exec":"do:","bloq-switch-check":"Check the value of","bloq-wait-wait":"Wait","bloq-while-while":"While","bloq-while-exec":"do:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Text","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Do","bloq-invoke-return-function-exec":"Do","bloq-invoke-function-args":"with the following parameters:","bloq-return-return":"Return","bloq-return-function-declare":"Declare function","bloq-return-function-return":"Return","bloq-return-function-with-arguments-declare":"Declare function","bloq-return-function-with-arguments-count":"counting with","bloq-return-function-with-arguments-return":"Return","bloq-void-function-declare":"Declare function","bloq-void-function-with-arguments-declare":"Declare function","bloq-void-function-with-arguments-count":"counting with","bloq-boolArray-advanced-arraySize":"Array with size","bloq-boolArray-advanced-boolType":"and bool type","bloq-boolArray-arraySize":"Array with size","bloq-boolArray-boolType":"and bool type","bloq-boolean-true":"True","bloq-boolean-false":"False","bloq-logic-operations-and":"and","bloq-logic-operations-or":"or","bloq-not-not":"not","bloq-loop-header":"Loop","bloq-loop-description":"Create the program to be executed continuously after the Setup.","bloq-setup-header":"Setup","bloq-setup-description":"Indicate the action to be executed once when the program starts.","bloq-var-header":"Global variables, functions and classes","bloq-var-description":" Define the values that you will use in Setup and Loop, you can also make functions for grouping blocks together.","bloq-numberArray-advanced-arraySize":"Array with size","bloq-numberArray-advanced-type":"and type","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"whole","bloq-map-map":"Map","bloq-map-value":"value between [0-","bloq-map-advanced-map":"Map","bloq-map-advanced-value":"from [","bloq-map-advanced-and":"] to [","bloq-math-operations-sqrt":"Square root","bloq-math-operations-abs":"Absolute value","bloq-numberArray-arraySize":"Array with size","bloq-numberArray-floatType":" and float type","bloq-random-random":"Random between","bloq-random-and":"and","bloq-stringArray-advanced-arraySize":"Array with size","bloq-stringArray-advanced-type":"and type","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Length","bloq-string-string":"Text","bloq-stringArray-arraySize":"Array with size","bloq-stringArray-stringType":"and text type","bloq-string-create-create":"Create text with","bloq-hw-variable-advanced-variable":"Variable (components)","bloq-sw-variable-advanced-variable":"Variable (components)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declare variable","bloq-declare-variable-declare-type":"with type","bloq-declare-variable-declare-type-int":"whole","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"text","bloq-declare-variable-declare-type-char":"character","bloq-declare-variable-declare-type-bool":"boolean","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Character","bloq-lcd-default":"Hi!","bloq-comment-default":"Type a comment","bloq-functions-default":"Name","bloq-wait-ms":"ms","drag-bloq":"Drag a block here to start your program","bloq-invoke-class-function-class":"of the object","bloq-invoke-arguments-class":"Create an object of the class","bloq-invoke-arguments-class-name":"with the name","bloq-invoke-arguments-args":"with the following arguments","bloq-invoke-class-return-function-exec":"Execute the function","bloq-invoke-class-function-exec":"Execute the function","bloq-invoke-class-function-args":"with the following arguments","bloq-invoke-class-return-function-args-exec":"Execute the function","bloq-invoke-class-return-function-args-class":"of the object","bloq-invoke-class-return-function-args-args":"with the following arguments","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor that uses the following arguments","bloq-invoke-class":"Create an object of the class","bloq-invoke-class-name":"with the name","bloq-class":"Declare the class","bloq-class-default":"Name","bloq-class-from":"of","bloq-class-inheritance-type":"inherit ","bloq-class-inheritance-public":"public","bloq-class-inheritance-protected":"protected","bloq-class-inheritance-private":"private","bloq-public":"Public variables and functions:","bloq-protected":"Protected variables and functions:","bloq-private":"Private variables and functions:","bloq-include-lib-exec":"Include the library","bloq-pin-analog-write":"Write on the analogue pin","bloq-pin-digital-write":"Write on the digital pin","bloq-pin-analog-write-data":"the data","bloq-pin-digital-write-data":"the data","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"walk","bloq-zowi-movements-turn":"turn","bloq-zowi-movements-height-moonwalker":"moonwalk","bloq-zowi-movements-height-crusaito":"cross-step","bloq-zowi-movements-height-flapping":"flap","bloq-zowi-movements-shakeleg":"shake your legs","bloq-zowi-movements-bend":"bend","bloq-zowi-movements-forward":"forward","bloq-zowi-movements-backward":"backward","bloq-zowi-movements-left":"left","bloq-zowi-movements-right":"right","bloq-zowi-movements-speed":"steps with a speed of","bloq-zowi-mouth":"Zowi, draw a","bloq-zowi-mouth-mouth":"on your mouth","bloq-zowi-mouth-smile":"smile","bloq-zowi-mouth-sad":"sad face","bloq-zowi-mouth-happy":"happy face","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"forward","bloq-zowi-movements-height-backward":"backward","bloq-zowi-movements-height-left":"left","bloq-zowi-movements-height-right":"right","bloq-zowi-movements-height-speed":"times with a speed of","bloq-zowi-movements-height-height":"and a height","bloq-zowi-movements-height-big":"high","bloq-zowi-movements-height-medium":"medium","bloq-zowi-movements-height-small":"low","bloq-zowi-movements-no-dir":"Zowi,","bloq-zowi-movements-no-dir-updown":"go up and down","bloq-zowi-movements-no-dir-swing":"swing","bloq-zowi-movements-no-dir-tiptoeSwing":"swing on tiptoes","bloq-zowi-movements-no-dir-jitter":"jitter","bloq-zowi-movements-no-dir-ascendingTurn":"ascending turn","bloq-zowi-movements-no-dir-jump":"jump","bloq-zowi-movements-no-dir-speed":"times with a speed of","bloq-zowi-movements-no-dir-height":"and a height","bloq-zowi-movements-no-dir-big":"high","bloq-zowi-movements-no-dir-medium":"medium","bloq-zowi-movements-no-dir-small":"low","bloq-zowi-sounds":"Zowi, make this sound:","bloq-hts221-humidity":"Read humidity of the sensor","bloq-hts221-temperature":"Read temperature of the sensor","bloq-rgbLed-fade-red":"with a red value of","bloq-enable-interrupt":"Execute the function","bloq-enable-interrupt-rising":"change from 0 to 1","bloq-enable-interrupt-falling":"change from 1 to 0","bloq-enable-interrupt-change":"change","bloq-enable-interrupt-pin":"when the pin input","bloq-rgbLed-green":", a green value of","bloq-rgbLed-fade":"Create a gradient on the RBG LED","bloq-rgbLed-red":"with a red value of","bloq-rtc-init":"Update time and date of the clock","bloq-rtc-month":"month","bloq-rtc-using-advanced":"currently used by clock","bloq-rtc-year":"year","bloq-rtc-day":"day","bloq-rtc-hour":"hour","bloq-rtc-minute":"minute","bloq-rtc-second":"second","bloq-rtc-time":"hour","bloq-rtc-using":"currently used by clock","bloq-rtc-advanced":"Get","bloq-rtc":"Get the","default-var-name-rtc":"real_time_clock","bloq-rtc-date":"date","default-var-name-sound":"sound_sensor","bloq-rgbLed-blue":"and a blue value of","default-var-name-RGBled":"RGB_LED","bloq-rgbLed":"Light up the RGB LED","bloq-rgbLed-fade-blue":"and a blue value of","bloq-rgbLed-fade-green":", a green value of","bloq-rgbLed-simple":"Light up the RGB LED","bloq-rgbLed-simple-color":"in","bloq-rgbLed-simple-red":"red","bloq-rgbLed-simple-green":"green","bloq-rgbLed-simple-blue":"blue","bloq-zowi-gestures":"Zowi, show","bloq-zowi-gestures-ZowiHappy":"happy","bloq-zowi-gestures-ZowiSuperHappy":"super happy","bloq-zowi-gestures-ZowiSad":"sad","bloq-zowi-gestures-ZowiSleeping":"sleepy","bloq-zowi-gestures-ZowiFart":"fart","bloq-zowi-gestures-ZowiConfused":"confused","bloq-zowi-gestures-ZowiLove":"in love","bloq-zowi-gestures-ZowiAngry":"angry","bloq-zowi-gestures-ZowiFretful":"anxious","bloq-zowi-gestures-ZowiMagic":"magic","bloq-zowi-gestures-ZowiWave":"wave","bloq-zowi-gestures-ZowiVictory":"victory","bloq-zowi-gestures-ZowiFail":"defeat","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"times","bloq-zowi-movements-simple-walk":"walk","bloq-zowi-movements-simple-turn":"turn","bloq-zowi-movements-simple-shakeLeg":"move leg","bloq-zowi-movements-simple-bend":"bend","bloq-zowi-movements-simple-moonwalker":"moonwalk","bloq-zowi-movements-simple-crusaito":"cross-step","bloq-zowi-movements-simple-flapping":"flap","bloq-zowi-movements-simple-updown":"go up and down","bloq-zowi-movements-simple-swing":"swing","bloq-zowi-movements-simple-tiptoeSwing":"swing on tiptoes","bloq-zowi-movements-simple-jitter":"jitter","bloq-zowi-movements-simple-ascendingTurn":"ascending turn","bloq-zowi-movements-simple-jump":"jump","bloq-zowi-rest":"Zowi, rest","bloq-millis":"Get execution time","bloq-random-seed":"Start random number generator","bloq-rgbLed-simple-white":"white","bloq-rgbLed-simple-yellow":"yellow","bloq-rgbLed-simple-orange":"orange","bloq-rgbLed-simple-dark-green":"dark green","bloq-rgbLed-simple-dark-blue":"dark blue","bloq-rgbLed-simple-pink":"pink","bloq-argument-int":"Integer","bloq-argument-char":"Character"},"es-ES":{"bloq-zowi-mouth-tongueOut":"sonrisa con lengua","bloq-zowi-mouth-confused":"cara confundida","bloq-zowi-mouth-bigSurprise":"cara sorprendida","bloq-zowi-distance":"Mide la distancia","bloq-zowi-sound":"Escucha","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristeza","bloq-zowi-sounds-happy":"felicidad","bloq-zowi-sounds-sleeping":"sueño","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusión","bloq-zowi-movements-shakeLeg":"mueve la pierna","bloq-zowi-sounds-fart1":"un pedo","bloq-zowi-movements-speed-medium":"media","bloq-zowi-movements-speed-small":"baja","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"Interrumpir el bucle","bloq-code-writeYourCode":"Escribe tu propio código","bloq-comment-comment":"Comentario //","bloq-convert-convert":"Convertir","bloq-convert-to":"A","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binario","bloq-serial-receiver-receive":"Recibir","bloq-serial-send-send":"Enviar","bloq-serial-send-print":"Sin salto de línea","bloq-serial-send-println":"Con salto de línea","bloq-buzzer-advance-sound":"Sonar el zumbador","bloq-buzzer-advance-note":"con la nota","bloq-buzzer-advance-for":"durante","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Leer pin digital","bloq-analog-read-advanced-readpin":"Leer pin analógico","bloq-continuous-servo-start-advanced-turn":"Girar servo","bloq-continuous-servo-start-advanced-direction":"en sentido","bloq-continuous-servo-start-advanced-clockwise":"horario","bloq-continuous-servo-start-advanced-counterclockwise":"antihorario","bloq-continuous-servo-stop-advanced-stop":"Parar servo","bloq-lcd-turn-on-off-advanced-turnon":"Encender","bloq-lcd-turn-on-off-advanced-turnoff":"Apagar","bloq-lcd-turn-on-off-advanced-lcdLigth":"la luz del LCD","bloq-lcd-clear":"Borrar el contenido del LCD","bloq-lcd-writte-advanced-write":"Escribir","bloq-lcd-writte-advanced-inLCD":"en el LCD","bloq-lcd-writte-advanced-inPosition":"empezando en la posición (columna, fila)","bloq-led-advanced-turnon":"Encender","bloq-led-advanced-turnoff":"Apagar","bloq-led-advanced-theLED":"el LED","bloq-oscillator-advanced-oscillate":"Oscilar servo","bloq-oscillator-advanced-around":"alrededor de","bloq-oscillator-advanced-amplitude":"con amplitud","bloq-oscillator-advanced-speed":"con velocidad","bloq-oscillator-start-advanced-oscillator":"Reproducir oscilador","bloq-oscillator-stop-advanced-stop":"Parar oscilador","bloq-pin-read-advanced-readpin":"Leer el pin","bloq-pin-writte-advanced-writepin":"Escribir en el pin","bloq-pin-writte-advanced-data":"el dato","bloq-read-advanced-read":"Leer","bloq-servo-advanced-move":"Mover","bloq-servo-advanced-to":"a","bloq-servo-advanced-degrees":"grados","bloq-buzzer-sound":"Sonar el zumbador","bloq-buzzer-note":"con la nota","bloq-buzzer-for":"durante","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Girar servo","bloq-continuous-servo-start-direction":"en sentido","bloq-continuous-servo-start-clockwise":"horario","bloq-continuous-servo-start-counterclockwise":"antihorario","bloq-continuous-servo-stop-stop":"Parar servo","bloq-lcd-turn-on-off-turnon":"Encender","bloq-lcd-turn-on-off-turnoff":"Apagar","bloq-lcd-turn-on-off-lcdLigth":"la luz del LCD","bloq-lcd-writte-write":"Escribir","bloq-lcd-writte-inLCD":"en el LCD","bloq-led-turnon":"Encender","bloq-led-turnoff":"Apagar","bloq-led-theLED":"el LED","bloq-oscillator-oscillate":"Oscilar servo","bloq-oscillator-around":"alrededor de","bloq-oscillator-amplitude":"con amplitud","bloq-oscillator-speed":"con velocidad","bloq-oscillator-times":"veces","bloq-oscillator-start-oscillator":"Reproducir oscilador","bloq-oscillator-stop-stop":"Parar oscilador","bloq-read-read":"Leer","bloq-servo-move":"Mover","bloq-servo-to":"a","bloq-servo-degrees":"grados","bloq-case-ifSameTo":"si es igual a","bloq-case-exec":"ejecutar:","bloq-case-default-inOtherCase":"en otro caso, ejecutar:","bloq-continue-continue":"Continuar con la siguiente iteracción del bucle","bloq-else-else":"de lo contrario, ejecutar:","bloq-else-if-if":"en cambio, si","bloq-else-if-else":"ejecutar:","bloq-for-count":"Contar con","bloq-for-from":"desde","bloq-for-to":"hasta","bloq-for-add":"sumando","bloq-for-subtract":"restando","bloq-for-exec":"ejecutar:","bloq-if-if":"Si","bloq-if-exec":"ejecutar:","bloq-switch-check":"Comprobar cuál es el valor de","bloq-wait-wait":"Esperar","bloq-while-while":"Mientras","bloq-while-exec":"ejecutar:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Texto","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Ejecutar","bloq-invoke-return-function-exec":"Ejecutar","bloq-invoke-function-args":"con los siguientes argumentos :","bloq-return-return":"Devuelve","bloq-return-function-declare":"Declarar función","bloq-return-function-return":"Devuelve","bloq-return-function-with-arguments-declare":"Declarar función","bloq-return-function-with-arguments-count":"con los siguientes argumentos:","bloq-return-function-with-arguments-return":"Devuelve","bloq-void-function-declare":"Declarar función","bloq-void-function-with-arguments-declare":"Declarar función","bloq-void-function-with-arguments-count":"con los siguientes argumentos:","bloq-boolArray-advanced-arraySize":"Array con tamaño","bloq-boolArray-advanced-boolType":"y tipo bool","bloq-boolArray-arraySize":"Array con tamaño","bloq-boolArray-boolType":"y tipo bool","bloq-boolean-true":"Verdadero","bloq-boolean-false":"Falso","bloq-logic-operations-and":"y","bloq-logic-operations-or":"o","bloq-not-not":"not","bloq-loop-header":"Bucle principal (Loop)","bloq-loop-description":"Crea el programa que se va a ejecutar continuamente después del Setup.","bloq-setup-header":"Instrucciones iniciales (Setup)","bloq-setup-description":"Indica lo que quieres que se ejecute una única vez al inicio del programa.","bloq-var-header":"Variables globales, funciones y clases","bloq-var-description":" Define los valores que vas a utilizar en Setup y Loop, también puedes hacer funciones para agrupar bloques.","bloq-numberArray-advanced-arraySize":"Array con tamaño","bloq-numberArray-advanced-type":"y tipo","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"entero","bloq-map-map":"Mapear","bloq-map-value":"valor entre [0-","bloq-map-advanced-map":"Mapear","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] a [","bloq-math-operations-sqrt":"Raíz cuadrada","bloq-math-operations-abs":"Valor absoluto","bloq-numberArray-arraySize":"Array con tamaño","bloq-numberArray-floatType":" y tipo float","bloq-random-random":"Aleatorio entre","bloq-random-and":"y","bloq-stringArray-advanced-arraySize":"Array con tamaño","bloq-stringArray-advanced-type":"y tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Longitud","bloq-string-string":"Texto","bloq-stringArray-arraySize":"Array con tamaño","bloq-stringArray-stringType":"y tipo texto","bloq-string-create-create":"Crear texto con","bloq-hw-variable-advanced-variable":"Variable (componentes)","bloq-sw-variable-advanced-variable":"Variable (código)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declarar variable","bloq-declare-variable-declare-type":"con tipo","bloq-declare-variable-declare-type-int":"entero","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"texto","bloq-declare-variable-declare-type-char":"caracter","bloq-declare-variable-declare-type-bool":"valor lógico","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caracter","bloq-lcd-default":"¡Hola!","bloq-comment-default":"Escribe un comentario","bloq-functions-default":"Nombre","bloq-wait-ms":"ms","drag-bloq":"Arrastra un bloque aquí para empezar tu programa","bloq-invoke-class-function-class":"del objeto","bloq-invoke-arguments-class":"Crear un objeto de la clase","bloq-invoke-arguments-class-name":"con el nombre","bloq-invoke-arguments-args":"con los siguientes argumentos","bloq-invoke-class-return-function-exec":"Ejecutar la función","bloq-invoke-class-function-exec":"Ejecutar la función","bloq-invoke-class-function-args":"con los siguientes argumentos","bloq-invoke-class-return-function-args-exec":"Ejecutar la función","bloq-invoke-class-return-function-args-class":"del objeto","bloq-invoke-class-return-function-args-args":"con los siguientes argumentos","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Constructor que usa los siguientes argumentos","bloq-invoke-class":"Crear un objeto de la clase","bloq-invoke-class-name":"con el nombre","bloq-class":"Declarar clase","bloq-class-default":"Nombre","bloq-class-from":"de","bloq-class-inheritance-type":"heredando de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protegida","bloq-class-inheritance-private":"privada","bloq-public":"Variables y funciones públicas :","bloq-protected":"Variables y funciones protegidas :","bloq-private":"Variables y funciones privadas :","bloq-include-lib-exec":"Incluir la librería","bloq-pin-analog-write":"Escribir en el pin analógico","bloq-pin-digital-write":"Escribir en el pin digital","bloq-pin-analog-write-data":"el dato","bloq-pin-digital-write-data":"el dato","bloq-zowi-movements":" ","bloq-zowi-movements-walk":"anda","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"haz el moonwalker","bloq-zowi-movements-height-crusaito":"haz el paso cruzado","bloq-zowi-movements-height-flapping":"agítate","bloq-zowi-movements-shakeleg":"mueve las piernas","bloq-zowi-movements-bend":"inclínate","bloq-zowi-movements-forward":"adelante","bloq-zowi-movements-backward":"atrás","bloq-zowi-movements-left":"izquierda","bloq-zowi-movements-right":"derecha","bloq-zowi-movements-speed":"veces con una velocidad","bloq-zowi-mouth":"Dibuja una","bloq-zowi-mouth-mouth":"en tu boca","bloq-zowi-mouth-smile":"sonrisa","bloq-zowi-mouth-sad":"cara triste","bloq-zowi-mouth-happy":"cara alegre","bloq-zowi-movements-height":" ","bloq-zowi-movements-height-forward":"adelante","bloq-zowi-movements-height-backward":"atrás","bloq-zowi-movements-height-left":"izquierda","bloq-zowi-movements-height-right":"derecha","bloq-zowi-movements-height-speed":"veces con una velocidad","bloq-zowi-movements-height-height":"y una altura","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"media","bloq-zowi-movements-height-small":"baja","bloq-zowi-movements-no-dir":" ","bloq-zowi-movements-no-dir-updown":"sube y baja","bloq-zowi-movements-no-dir-swing":"balancéate","bloq-zowi-movements-no-dir-tiptoeSwing":"balancéate de puntillas","bloq-zowi-movements-no-dir-jitter":"tiembla","bloq-zowi-movements-no-dir-ascendingTurn":"gira mientras subes","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"veces con una velocidad de","bloq-zowi-movements-no-dir-height":"y una altura","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"media","bloq-zowi-movements-no-dir-small":"baja","bloq-zowi-sounds":"Haz el sonido de","bloq-hts221-humidity":"Leer la humedad del sensor","bloq-hts221-temperature":"Leer la temperatura del sensor","bloq-rgbLed-fade-red":"con un valor de rojo de","bloq-enable-interrupt":"Ejecutar la función","bloq-enable-interrupt-rising":"cambie de 0 a 1","bloq-enable-interrupt-falling":"cambie de 1 a 0","bloq-enable-interrupt-change":"cambie","bloq-enable-interrupt-pin":"cuando la entrada del pin","bloq-rgbLed-green":", un valor de verde de","bloq-rgbLed-fade":"Crear un degradado en el led RGB","bloq-rgbLed-red":"con un valor de rojo de","bloq-rtc-init":"Actualizar fecha y hora del reloj","bloq-rtc-month":"el mes","bloq-rtc-using-advanced":"actual usando el reloj","bloq-rtc-year":"el año","bloq-rtc-day":"el día","bloq-rtc-hour":"la hora","bloq-rtc-minute":"el minuto","bloq-rtc-second":"el segundo","bloq-rtc-time":"hora","bloq-rtc-using":"actual usando el reloj","bloq-rtc-advanced":"Obtener","bloq-rtc":"Obtener la","default-var-name-rtc":"reloj_tiempo_real","bloq-rtc-date":"fecha","default-var-name-sound":"Sensor_sonido","bloq-rgbLed-blue":"y un valor de azul de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Encender el led RGB","bloq-rgbLed-fade-blue":"y un valor de azul de","bloq-rgbLed-fade-green":", un valor de verde de","bloq-rgbLed-simple":"Encender el led RGB","bloq-rgbLed-simple-color":"con color","bloq-rgbLed-simple-red":"rojo","bloq-rgbLed-simple-green":"verde","bloq-rgbLed-simple-blue":"azul","bloq-zowi-gestures":"Haz la animación de","bloq-zowi-gestures-ZowiHappy":"Feliz","bloq-zowi-gestures-ZowiSuperHappy":"Súper Feliz","bloq-zowi-gestures-ZowiSad":"Triste","bloq-zowi-gestures-ZowiSleeping":"Zzzzzz","bloq-zowi-gestures-ZowiFart":"Prrr","bloq-zowi-gestures-ZowiConfused":"Confuso","bloq-zowi-gestures-ZowiLove":"Love","bloq-zowi-gestures-ZowiAngry":"Enfadado","bloq-zowi-gestures-ZowiFretful":"Inquieto","bloq-zowi-gestures-ZowiMagic":"Magia","bloq-zowi-gestures-ZowiWave":"Onda","bloq-zowi-gestures-ZowiVictory":"¡¡Victoria!!","bloq-zowi-gestures-ZowiFail":"Game Over...","bloq-zowi-movements-simple":" ","bloq-zowi-movements-simple-steps":"veces","bloq-zowi-movements-simple-walk":"anda","bloq-zowi-movements-simple-turn":"gira","bloq-zowi-movements-simple-shakeLeg":"mueve la pierna","bloq-zowi-movements-simple-bend":"inclínate","bloq-zowi-movements-simple-moonwalker":"haz el moonwalker","bloq-zowi-movements-simple-crusaito":"haz el paso cruzado","bloq-zowi-movements-simple-flapping":"agítate","bloq-zowi-movements-simple-updown":"sube y baja","bloq-zowi-movements-simple-swing":"balancéate","bloq-zowi-movements-simple-tiptoeSwing":"balancéate de puntillas","bloq-zowi-movements-simple-jitter":"tiembla","bloq-zowi-movements-simple-ascendingTurn":"gira mientras subes","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Descansa","bloq-millis":"Obtener tiempo de ejecución","bloq-random-seed":"Inicializar el generador de números aleatorios","bloq-rgbLed-simple-white":"blanco","bloq-rgbLed-simple-yellow":"amarillo","bloq-rgbLed-simple-orange":"naranja","bloq-rgbLed-simple-dark-green":"verde oscuro","bloq-rgbLed-simple-dark-blue":"azul oscuro","bloq-rgbLed-simple-pink":"rosa","bloq-argument-int":"Entero","bloq-argument-char":"Caracter","bloq-zowi-buttons":"botón","bloq-zowi-buttons-A":"A","bloq-zowi-buttons-B":"B","bloq-zowi-buttons-zowi":" ","bloq-zowi-if-distance":"Si detecta una distancia","bloq-zowi-if-distance-less":"menor","bloq-zowi-if-distance-more":"mayor","bloq-zowi-if-distance-than":"que","bloq-zowi-if-distance-then":"centímetros, ejecuta:","bloq-zowi-if-buttons":"Si pulso el botón","bloq-zowi-if-buttons-A":"A","bloq-zowi-if-buttons-B":"B","bloq-zowi-if-buttons-then":", ejecuta:","bloq-zowi-if-sound":"Si escucha un ruido, ejecuta:","bloq-equality-operations-is":"es","bloq-equality-operations-than":"que","bloq-while-is":"sea","bloq-while-than":"que","bloq-if-is":"es","bloq-if-than":"que","bloq-else-is":"es","bloq-else-than":"que","bloq-evolution-rest":"Descansa","bloq-evolution-movements-simple":"Muévete hacia","bloq-evolution-movements-simple-fordward":"delante","bloq-evolution-movements-simple-backward":"atrás","bloq-evolution-movements-simple-right":"derecha","bloq-evolution-movements-simple-left":"izquierda","bloq-evolution-distance":"Mide la distancia","bloq-evolution-if-distance":"Si detecta una distancia","bloq-evolution-if-distance-less":"menor","bloq-evolution-if-distance-more":"mayor","bloq-evolution-if-distance-than":"que","bloq-evolution-if-distance-then":"centímetros, ejecuta:","bloq-evolution-light":"Mide la luz","bloq-evolution-light-left":"izquierda","bloq-evolution-light-right":"derecha","bloq-evolution-light-evolution":" ","bloq-evolution-line":"Detecta la línea","bloq-evolution-line-left":"izquierda","bloq-evolution-line-right":"derecha","bloq-evolution-line-evolution":" ","bloq-evolution-head":"Mira hacia","bloq-evolution-head-left":"izquierda","bloq-evolution-head-right":"derecha","bloq-evolution-head-center":"delante","bloq-evolution-buzzer-do":"Do","bloq-evolution-buzzer":"Toca la nota","bloq-evolution-buzzer-re":"Re","bloq-evolution-buzzer-mi":"Mi","bloq-evolution-buzzer-fa":"Fa","bloq-evolution-buzzer-sol":"Sol","bloq-evolution-buzzer-la":"La","bloq-evolution-buzzer-si":"Si","bloq-evolution-buzzer-for":"durante","bloq-evolution-buzzer-ms":"ms","bloq-evolution-head-advance":"Mira","bloq-evolution-head-advance-deg":"grados hacia la","bloq-evolution-head-advance-left":"izquierda","bloq-evolution-head-advance-right":"derecha","bloq-shield-stepper-steps":"Girar stepper motor","bloq-shield-stepper-steps-stepper1":"1","bloq-shield-stepper-steps-stepper2":"2","bloq-shield-stepper-steps-stepper12":"1 y 2","bloq-shield-stepper-steps-degdir":"grados en sentido","bloq-shield-stepper-steps-CW":"horario","bloq-shield-stepper-steps-CCW":"antihorario","bloq-shield-stepper-steps-at":"a","bloq-shield-stepper-steps-rpm":"rpm","bloq-evolution-if-line":"Si detecta linea","bloq-evolution-if-line-white":"blanca","bloq-evolution-if-line-black":"negra","bloq-evolution-if-line-and":"en la izquierda y","bloq-evolution-if-line-then":"en la derecha, ejecuta:","bloq-evolution-if-light-advanced":"Si ve luz","bloq-evolution-if-light-advanced-and":"en la izquierda y","bloq-evolution-if-light-advanced-then":"en la derecha, ejecuta:","bloq-evolution-if-light":"Si ve luz","bloq-evolution-if-light-and":"en la izquierda y","bloq-evolution-if-light-then":"en la derecha, ejecuta:","bloq-evolution-if-light-high":"alta","bloq-evolution-if-light-medium":"media","bloq-evolution-if-light-low":"baja"},"eu-ES":{"bloq-zowi-mouth-tongueOut":"irribarra mingainarekin","bloq-zowi-mouth-confused":"nahaste aurpegia","bloq-zowi-mouth-bigSurprise":"sorpresa aurpegia","bloq-zowi-distance":"Zowi, neurtu distantzia","bloq-zowi-sound":"Zowi, adi entzun","bloq-zowi-sounds-OhOoh":"o-ooo","bloq-zowi-sounds-surprise":"ustekabea","bloq-zowi-sounds-sad":"tristura","bloq-zowi-sounds-happy":"zoriontasuna","bloq-zowi-sounds-sleeping":"logura","bloq-zowi-sounds-cuddly":"maitagarri","bloq-zowi-sounds-confused":"nahasketa","bloq-zowi-movements-shakeLeg":"mugitu hanka","bloq-zowi-sounds-fart1":"puzker bat","bloq-zowi-movements-speed-medium":"ertaina","bloq-zowi-movements-speed-small":"baxua","bloq-zowi-movements-speed-high":"altua","bloq-break-stopLoop":"Begizta eten","bloq-code-writeYourCode":"Idatzi zure kodea","bloq-comment-comment":"Iruzkina //","bloq-convert-convert":"Bihurtu","bloq-convert-to":"hauxe","bloq-convert-dec":"Hamartarra","bloq-convert-hex":"Hamaseitarra","bloq-convert-oct":"Zortzitarra","bloq-convert-bin":"Bitarra","bloq-serial-receiver-receive":"Jaso","bloq-serial-send-send":"Bidali","bloq-serial-send-print":"Lerro-jauzi gabe","bloq-serial-send-println":"Lerro-jauziarekin","bloq-buzzer-advance-sound":"Burrunbagailua jo","bloq-buzzer-advance-note":"nota honekin","bloq-buzzer-advance-for":"iraupen honekin","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Irakurri pin digitala","bloq-analog-read-advanced-readpin":"Irakurri pin analogikoa","bloq-continuous-servo-start-advanced-turn":"Serboa biratu","bloq-continuous-servo-start-advanced-direction":"noranzko honetan","bloq-continuous-servo-start-advanced-clockwise":"erlojuaren orratzen alde","bloq-continuous-servo-start-advanced-counterclockwise":"erlojuaren orratzen aurka","bloq-continuous-servo-stop-advanced-stop":"Gelditu serboa","bloq-lcd-turn-on-off-advanced-turnon":"Piztu","bloq-lcd-turn-on-off-advanced-turnoff":"Itzali","bloq-lcd-turn-on-off-advanced-lcdLigth":"LCDaren argia","bloq-lcd-clear":"Ezabatu LCDaren edukia","bloq-lcd-writte-advanced-write":"Idatzi","bloq-lcd-writte-advanced-inLCD":"LCDan","bloq-lcd-writte-advanced-inPosition":"posizio honetatik hasita (zutabea, errenkada)","bloq-led-advanced-turnon":"Piztu","bloq-led-advanced-turnoff":"Itzali","bloq-led-advanced-theLED":"LED argia","bloq-oscillator-advanced-oscillate":"Oszilatu serboa","bloq-oscillator-advanced-around":"honen inguruan","bloq-oscillator-advanced-amplitude":"anplitude honekin","bloq-oscillator-advanced-speed":"abiadura honekin","bloq-oscillator-start-advanced-oscillator":"Oszilagailua","bloq-oscillator-stop-advanced-stop":"Gelditu oszilagailua","bloq-pin-read-advanced-readpin":"Irakurri pin-a","bloq-pin-writte-advanced-writepin":"Idatzi pin-a","bloq-pin-writte-advanced-data":"datua","bloq-read-advanced-read":"Irakurri","bloq-servo-advanced-move":"Mugitu","bloq-servo-advanced-to":"hona","bloq-servo-advanced-degrees":"gradu","bloq-buzzer-sound":"Burrunbagailua jo","bloq-buzzer-note":"nota honekin","bloq-buzzer-for":"iraupen honekin","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Biratu serboa","bloq-continuous-servo-start-direction":"noranzko honekin","bloq-continuous-servo-start-clockwise":"erlojuaren orratzen alde","bloq-continuous-servo-start-counterclockwise":"erlojuaren orratzen aurka","bloq-continuous-servo-stop-stop":"Gelditu serboa","bloq-lcd-turn-on-off-turnon":"Piztu","bloq-lcd-turn-on-off-turnoff":"Itzali","bloq-lcd-turn-on-off-lcdLigth":"LCDko argia","bloq-lcd-writte-write":"Idatzi","bloq-lcd-writte-inLCD":"LCDan","bloq-led-turnon":"Piztu","bloq-led-turnoff":"Itzali","bloq-led-theLED":"LED argia","bloq-oscillator-oscillate":"Oszilatu serboa","bloq-oscillator-around":"hauen artean","bloq-oscillator-amplitude":"anplitude honekin","bloq-oscillator-speed":"abiadura honekin","bloq-oscillator-times":"aldiz","bloq-oscillator-start-oscillator":"Erreproduzitu oszilagailua","bloq-oscillator-stop-stop":"Gelditu oszilagailua","bloq-read-read":"Irakurri","bloq-servo-move":"Mugitu","bloq-servo-to":"hona:","bloq-servo-degrees":"gradu","bloq-case-ifSameTo":"baldin eta hau bada:","bloq-case-exec":"exekutatu","bloq-case-default-inOtherCase":"Bestela, exekutatu:","bloq-continue-continue":"Begiztaren hurrengo ekintzarekin jarraitu","bloq-else-else":"Bestela, exekutatu:","bloq-else-if-if":"Aldiz, baldin eta","bloq-else-if-else":"bada, exekutatu","bloq-for-count":"Zenbatu","bloq-for-from":"hemendik","bloq-for-to":"hona","bloq-for-add":"gehitzen","bloq-for-subtract":"kentzen","bloq-for-exec":"eta exekutatu","bloq-if-if":"Baldin eta","bloq-if-exec":"bada, exekutatu","bloq-switch-check":"Honen balioa egiaztatu","bloq-wait-wait":"Itxaron","bloq-while-while":" ","bloq-while-exec":"den bitartean, exekutatu","bloq-argument-var":"Aldagaia","bloq-argument-float":"Hamartarra","bloq-argument-string":"Testua","bloq-argument-bool":"Boolearra","bloq-invoke-function-exec":"Exekutatu","bloq-invoke-return-function-exec":"Exekutatu","bloq-invoke-function-args":"hurrengo argumentuekin:","bloq-return-return":"Itzultzen du","bloq-return-function-declare":"Funtzioa erazagutu","bloq-return-function-return":"Itzultzen du","bloq-return-function-with-arguments-declare":"Funtzioa erazagutu","bloq-return-function-with-arguments-count":"argumentu hauekin:","bloq-return-function-with-arguments-return":"Itzultzen du","bloq-void-function-declare":"Funtzioa erazagutu","bloq-void-function-with-arguments-declare":"Funtzioa erazagutu","bloq-void-function-with-arguments-count":"argumentu hauekin:","bloq-boolArray-advanced-arraySize":"Tamaina honetako array-a","bloq-boolArray-advanced-boolType":"eta boolearra","bloq-boolArray-arraySize":"Tamaina honetako array-a","bloq-boolArray-boolType":"eta boolearra","bloq-boolean-true":"Egia","bloq-boolean-false":"Gezurra","bloq-logic-operations-and":"eta","bloq-logic-operations-or":"edo","bloq-not-not":"ez","bloq-loop-header":"Begizta nagusia (Loop)","bloq-loop-description":"Setup-aren ondoren jarraian exekutatuko den programa sortzen du.","bloq-setup-header":"Hasierako aginduak (Setup)","bloq-setup-description":"Programaren hasieran eta behin bakarrik exekutatzea nahi duzuna adierazten du.","bloq-var-header":"Aldagai orokorrak, funtzioak eta klaseak","bloq-var-description":" Setup eta Loop eremuetan erabiliko dituzun balioak zehazten ditu eta blokeak multzokatzeko funtzioak ere egin ditzakezu.","bloq-numberArray-advanced-arraySize":"Honako tamaina duen array-a","bloq-numberArray-advanced-type":"eta honako motakoa","bloq-numberArray-advanced-float":"hamartarra","bloq-numberArray-advanced-int":"osoa","bloq-map-map":"Mapeatu","bloq-map-value":"balio hauen artean: [0-","bloq-map-advanced-map":"Mapeatu","bloq-map-advanced-value":"honetatik hasita [","bloq-map-advanced-and":"] honera arte [","bloq-math-operations-sqrt":"Erro karratua","bloq-math-operations-abs":"Balio absolutua","bloq-numberArray-arraySize":"Honako tamaina duen array-a","bloq-numberArray-floatType":"eta float motakoa","bloq-random-random":"Balio hauen artean ausazkoa","bloq-random-and":"eta","bloq-stringArray-advanced-arraySize":"Honako tamaina duen array-a","bloq-stringArray-advanced-type":"eta honako motakoa","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Luzera","bloq-string-string":"Testua","bloq-stringArray-arraySize":"Honako tamaina duen array-a","bloq-stringArray-stringType":"eta testu motakoa","bloq-string-create-create":"Testua sortu honekin","bloq-hw-variable-advanced-variable":"Aldagaia (osagaiak)","bloq-sw-variable-advanced-variable":"Aldagaia (kodea)","bloq-array-variable-variable":"Aldagaia","bloq-declare-variable-declare":"Aldagaia erazagutu","bloq-declare-variable-declare-type":"motarekin","bloq-declare-variable-declare-type-int":"osoa","bloq-declare-variable-declare-type-float":"hamartarra","bloq-declare-variable-declare-type-text":"testua","bloq-declare-variable-declare-type-char":"karakterea","bloq-declare-variable-declare-type-bool":"balio logikoa","bloq-select-variable-variable":"Aldagaia","bloq-set-variableArray-variable":"Aldagaia","bloq-set-variable-variable":"Aldagaia","bloq-char":"Karakterea","bloq-lcd-default":"Kaixo!","bloq-comment-default":"Idatzi iruzkina","bloq-functions-default":"Izena","bloq-wait-ms":"ms","drag-bloq":"Arrasta ezazu bloke bat hona programa hasteko","bloq-invoke-class-function-class":"objektuaren","bloq-invoke-arguments-class":"motako objektu bat sortu","bloq-invoke-arguments-class-name":"izenarekin","bloq-invoke-arguments-args":"hurrengo argumentuekin","bloq-invoke-class-return-function-exec":"Exekutatu funtzioa","bloq-invoke-class-function-exec":"Exekutatu funtzioa","bloq-invoke-class-function-args":"hurrengo argumentuekin","bloq-invoke-class-return-function-args-exec":"Exekutatu funtzioa","bloq-invoke-class-return-function-args-class":"objektuaren","bloq-invoke-class-return-function-args-args":"hurrengo argumentuekin","bloq-set-class-variable-variable":"Aldagaia","bloq-set-class-variableArray-variable":"Aldagaia","bloq-select-class-variable-variable":"Aldagaia","bloq-array-class-variable-variable":"Aldagaia","bloq-constructor":"Eraikitzailea","bloq-constructor-arguments":"Hurrengo argumentuak erabiltzen dituen eraikitzailea","bloq-invoke-class":"motako objektu bat sortu","bloq-invoke-class-name":"izenarekin","bloq-class":"klasea erazagutu","bloq-class-default":"Izena","bloq-class-from":"eremuan","bloq-class-inheritance-type":"honela oinordetzen","bloq-class-inheritance-public":"publikoa","bloq-class-inheritance-protected":"babestua","bloq-class-inheritance-private":"pribatua","bloq-public":"Aldagai eta funtzio publikoak:","bloq-protected":"Aldagai eta funtzio babestuak:","bloq-private":"Aldagai eta funtzio pribatuak:","bloq-include-lib-exec":"Gehitu liburutegia","bloq-pin-analog-write":"Idatzi pin analogikoan","bloq-pin-digital-write":"Idatzi pin digitalean","bloq-pin-analog-write-data":"datua","bloq-pin-digital-write-data":"datua","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"ibili","bloq-zowi-movements-turn":"biratu","bloq-zowi-movements-height-moonwalker":"moonwalker-a egin","bloq-zowi-movements-height-crusaito":"eman pauso gurutzatua","bloq-zowi-movements-height-flapping":"eragin","bloq-zowi-movements-shakeleg":"mugitu hankak","bloq-zowi-movements-bend":"makurtu","bloq-zowi-movements-forward":"aurrera","bloq-zowi-movements-backward":"atzera","bloq-zowi-movements-left":"ezkerra","bloq-zowi-movements-right":"eskuina","bloq-zowi-movements-speed":"aldiz abiadura honetan","bloq-zowi-mouth":"Zowi, irudikatu","bloq-zowi-mouth-mouth":"zure ahoan","bloq-zowi-mouth-smile":"irribarrea","bloq-zowi-mouth-sad":"aurpegi tristea","bloq-zowi-mouth-happy":"aurpegi alaia","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"aurrera","bloq-zowi-movements-height-backward":"atzera","bloq-zowi-movements-height-left":"ezkerra","bloq-zowi-movements-height-right":"eskuina","bloq-zowi-movements-height-speed":"aldiz abiadura honetan","bloq-zowi-movements-height-height":"eta altuera bat","bloq-zowi-movements-height-big":"altua","bloq-zowi-movements-height-medium":"ertaina","bloq-zowi-movements-height-small":"baxua","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"igo eta jaitsi","bloq-zowi-movements-no-dir-swing":"kulunkatu","bloq-zowi-movements-no-dir-tiptoeSwing":"kulunkatu oin-puntetan","bloq-zowi-movements-no-dir-jitter":"egin dar-dar","bloq-zowi-movements-no-dir-ascendingTurn":"bira egin igotzen zaren bitartean","bloq-zowi-movements-no-dir-jump":"salto egin ","bloq-zowi-movements-no-dir-speed":"aldiz abiadura honekin","bloq-zowi-movements-no-dir-height":"eta altuera bat","bloq-zowi-movements-no-dir-big":"altua","bloq-zowi-movements-no-dir-medium":"ertaina","bloq-zowi-movements-no-dir-small":"baxua","bloq-zowi-sounds":"Zowi, soinu hau egin","bloq-hts221-humidity":"Sentsorearen hezetasuna irakurri","bloq-hts221-temperature":"Sentsorearen tenperatura irakurri","bloq-rgbLed-fade-red":"gorriaren kolore honekin","bloq-enable-interrupt":"Ondorengo funtzioa exekutatu","bloq-enable-interrupt-rising":"0tik 1era aldatu","bloq-enable-interrupt-falling":"1etik 0ra aldatu","bloq-enable-interrupt-change":"aldatzen denean","bloq-enable-interrupt-pin":"pin-aren sarrera","bloq-rgbLed-green":", berdearen balio honekin","bloq-rgbLed-fade":"RGB LEDan kolorea moteldu","bloq-rgbLed-red":"gorriaren balio honekin","bloq-rtc-init":"Erlojuko data eta ordua eguneratu","bloq-rtc-month":"hilabetea","bloq-rtc-using-advanced":"unekoa erlojua erabiliz","bloq-rtc-year":"urtea","bloq-rtc-day":"eguna","bloq-rtc-hour":"ordua","bloq-rtc-minute":"minutua","bloq-rtc-second":"segundoa","bloq-rtc-time":"ordua","bloq-rtc-using":"unekoa erlojua erabiliz","bloq-rtc-advanced":"Lortu","bloq-rtc":"Lortu","default-var-name-rtc":"erlojua_denbora_erreala","bloq-rtc-date":"data","default-var-name-sound":"Soinu_sentsorea","bloq-rgbLed-blue":"eta urdinaren balio honekin","default-var-name-RGBled":"RGB_LEDa","bloq-rgbLed":"RGB LEDa piztu","bloq-rgbLed-fade-blue":"eta urdinaren balio honekin","bloq-rgbLed-fade-green":", berdearen balio honekin","bloq-rgbLed-simple":"RGB LEDa piztu","bloq-rgbLed-simple-color":"kolore honekin","bloq-rgbLed-simple-red":"gorria","bloq-rgbLed-simple-green":"berdea","bloq-rgbLed-simple-blue":"urdina","bloq-zowi-gestures":"Zowi, adierazi emozio hau","bloq-zowi-gestures-ZowiHappy":"zoriontasuna","bloq-zowi-gestures-ZowiSuperHappy":"izugarrizko zoriontasuna","bloq-zowi-gestures-ZowiSad":"tristura","bloq-zowi-gestures-ZowiSleeping":"logura","bloq-zowi-gestures-ZowiFart":"puzkerra","bloq-zowi-gestures-ZowiConfused":"nahasketa","bloq-zowi-gestures-ZowiLove":"maitasuna","bloq-zowi-gestures-ZowiAngry":"haserrea","bloq-zowi-gestures-ZowiFretful":"kezka","bloq-zowi-gestures-ZowiMagic":"magia","bloq-zowi-gestures-ZowiWave":"olatua","bloq-zowi-gestures-ZowiVictory":"garaipena","bloq-zowi-gestures-ZowiFail":"porrota","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"aldiz","bloq-zowi-movements-simple-walk":"ibili","bloq-zowi-movements-simple-turn":"biratu","bloq-zowi-movements-simple-shakeLeg":"hanka mugitu","bloq-zowi-movements-simple-bend":"makurtu","bloq-zowi-movements-simple-moonwalker":"moonwalker-a egin","bloq-zowi-movements-simple-crusaito":"eman pauso gurutzatua","bloq-zowi-movements-simple-flapping":"eragin zure gorputza","bloq-zowi-movements-simple-updown":"igo eta jaitsi","bloq-zowi-movements-simple-swing":"kulunkatu","bloq-zowi-movements-simple-tiptoeSwing":"kulunkatu oin-puntetan","bloq-zowi-movements-simple-jitter":"egin dar-dar","bloq-zowi-movements-simple-ascendingTurn":"bira egin igotzen zaren bitartean","bloq-zowi-movements-simple-jump":"salto egin ","bloq-zowi-rest":"Zowi, deskantsatu","bloq-millis":"Betetze denbora lortu","bloq-random-seed":"Ausazko zenbakien sorgailua abiarazi","bloq-rgbLed-simple-white":"zuria","bloq-rgbLed-simple-yellow":"horia","bloq-rgbLed-simple-orange":"laranja","bloq-rgbLed-simple-dark-green":"berde iluna","bloq-rgbLed-simple-dark-blue":"urdin iluna","bloq-rgbLed-simple-pink":"arrosa"},"fr-FR":{"bloq-break-stopLoop":"Interrompre la boucle","bloq-code-writeYourCode":"Écris ton propre code","bloq-comment-comment":"Commentaire //","bloq-convert-convert":"Convertir","bloq-convert-to":"En","bloq-convert-dec":"Décimal","bloq-convert-hex":"Hexadécimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binaire","bloq-serial-receiver-receive":"Recevoir","bloq-serial-send-send":"Envoyer","bloq-serial-send-print":"Sans saut de ligne","bloq-serial-send-println":"Avec saut de ligne","bloq-buzzer-advance-sound":"Activer le buzzer","bloq-buzzer-advance-note":"avec la note","bloq-buzzer-advance-for":"pendant","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Lire broche numérique","bloq-analog-read-advanced-readpin":"Lire broche analogique","bloq-continuous-servo-start-advanced-turn":"Faire tourner le servo","bloq-continuous-servo-start-advanced-direction":"dans le sens","bloq-continuous-servo-start-advanced-clockwise":"des aiguilles d’une montre","bloq-continuous-servo-start-advanced-counterclockwise":"contraire des aiguilles d’une montre","bloq-continuous-servo-stop-advanced-stop":"Arrêter le servo","bloq-lcd-turn-on-off-advanced-turnon":"Allumer","bloq-lcd-turn-on-off-advanced-turnoff":"Éteindre","bloq-lcd-turn-on-off-advanced-lcdLigth":"le rétroéclairage de l’écran LCD","bloq-lcd-clear":"Effacer l'écran LCD","bloq-lcd-writte-advanced-write":"Écrire","bloq-lcd-writte-advanced-inLCD":"sur l’écran LCD","bloq-lcd-writte-advanced-inPosition":"à partir de (colonne, ligne)","bloq-led-advanced-turnon":"Allumer","bloq-led-advanced-turnoff":"Éteindre","bloq-led-advanced-theLED":"la LED","bloq-oscillator-advanced-oscillate":"Faire osciller le servo","bloq-oscillator-advanced-around":"autour de","bloq-oscillator-advanced-amplitude":"avec une amplitude de","bloq-oscillator-advanced-speed":"avec une vitesse de","bloq-oscillator-start-advanced-oscillator":"Réactiver l’oscillateur","bloq-oscillator-stop-advanced-stop":"Arrêter l’oscillateur","bloq-pin-read-advanced-readpin":"Lire la broche","bloq-pin-writte-advanced-writepin":"Écrire dans la broche","bloq-pin-writte-advanced-data":"la donnée","bloq-read-advanced-read":"Lire","bloq-servo-advanced-move":"Tourner","bloq-servo-advanced-to":"de","bloq-servo-advanced-degrees":"degrés","bloq-buzzer-sound":"Activer le buzzer","bloq-buzzer-note":"avec la note","bloq-buzzer-for":"pendant","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Ré","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Faire tourner le servo","bloq-continuous-servo-start-direction":"dans le sens","bloq-continuous-servo-start-clockwise":"des aiguilles d’une montre","bloq-continuous-servo-start-counterclockwise":"contraire des aiguilles d’une montre","bloq-continuous-servo-stop-stop":"Arrêter le servo","bloq-lcd-turn-on-off-turnon":"Allumer","bloq-lcd-turn-on-off-turnoff":"Éteindre","bloq-lcd-turn-on-off-lcdLigth":"le rétroéclairage de l’écran LCD","bloq-lcd-writte-write":"Écrire","bloq-lcd-writte-inLCD":"sur l’écran LCD","bloq-led-turnon":"Allumer","bloq-led-turnoff":"Éteindre","bloq-led-theLED":"la LED","bloq-oscillator-oscillate":"Faire osciller le servo","bloq-oscillator-around":"autour de","bloq-oscillator-amplitude":"avec une amplitude de","bloq-oscillator-speed":"avec une vitesse de","bloq-oscillator-times":"fois","bloq-oscillator-start-oscillator":"Réactiver l’oscillateur","bloq-oscillator-stop-stop":"Arrêter l’oscillateur","bloq-read-read":"Lire","bloq-servo-move":"Tourner","bloq-servo-to":"de","bloq-servo-degrees":"degrés","bloq-case-ifSameTo":"si égal à","bloq-case-exec":"exécuter","bloq-case-default-inOtherCase":"si autre cas, exécuter","bloq-continue-continue":"Continuer avec l’itération suivante de la boucle","bloq-else-else":"sinon, exécuter","bloq-else-if-if":"ou bien, si","bloq-else-if-else":"exécuter","bloq-for-count":"Compter avec","bloq-for-from":"de","bloq-for-to":"à","bloq-for-add":"additionner","bloq-for-subtract":"soustraire","bloq-for-exec":"exécuter","bloq-if-if":"Si","bloq-if-exec":"exécuter","bloq-switch-check":"Vérifier quelle est la valeur de","bloq-wait-wait":"Attendre","bloq-while-while":"Tant que","bloq-while-exec":"exécuter","bloq-argument-var":"Variable","bloq-argument-float":"Décimal","bloq-argument-string":"Texte","bloq-argument-bool":"Booléen","bloq-invoke-function-exec":"Exécuter","bloq-invoke-return-function-exec":"Exécuter","bloq-invoke-function-args":"avec les paramètres suivants :","bloq-return-return":"Renvoyer","bloq-return-function-declare":"Déclarer fonction","bloq-return-function-return":"Renvoyer","bloq-return-function-with-arguments-declare":"Déclarer fonction","bloq-return-function-with-arguments-count":"avec les paramètres suivants :","bloq-return-function-with-arguments-return":"Renvoyer","bloq-void-function-declare":"Déclarer fonction","bloq-void-function-with-arguments-declare":"Déclarer fonction","bloq-void-function-with-arguments-count":"avec les paramètres suivants :","bloq-boolArray-advanced-arraySize":"Tableau de taille","bloq-boolArray-advanced-boolType":"et de type booléen","bloq-boolArray-arraySize":"Tableau de taille","bloq-boolArray-boolType":"et de type booléen","bloq-boolean-true":"Vrai","bloq-boolean-false":"Faux","bloq-logic-operations-and":"et","bloq-logic-operations-or":"ou","bloq-not-not":"pas","bloq-loop-header":"Boucle (Loop)","bloq-loop-description":"Crée le programme qui va s’exécuter en boucle après le lancement (Setup).","bloq-setup-header":"Instructions de départ (Setup)","bloq-setup-description":"Indique ce que tu veux exécuter au lancement du programme et seulement une fois.","bloq-var-header":"Variables globales et fonctions","bloq-var-description":"Définis les valeurs que tu vas utiliser dans les instructions de départ (Setup) et la boucle (Loop). Tu peux également faire des fonctions pour regrouper des blocs.","bloq-numberArray-advanced-arraySize":"Tableau de taille","bloq-numberArray-advanced-type":"et de type","bloq-numberArray-advanced-float":"décimal","bloq-numberArray-advanced-int":"entier","bloq-map-map":"Échelonner","bloq-map-value":"valeur entre [0-","bloq-map-advanced-map":"Échelonner","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] à [","bloq-math-operations-sqrt":"Racine carrée","bloq-math-operations-abs":"Valeur absolue","bloq-numberArray-arraySize":"Tableau de taille","bloq-numberArray-floatType":" et de type float","bloq-random-random":"Aléatoire entre","bloq-random-and":"et","bloq-stringArray-advanced-arraySize":"Tableau de taille","bloq-stringArray-advanced-type":"et de type","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Longueur","bloq-string-string":"Texte","bloq-stringArray-arraySize":"Tableau de taille","bloq-stringArray-stringType":"et de type texte","bloq-string-create-create":"Créer texte avec","bloq-hw-variable-advanced-variable":"Variable (composants)","bloq-sw-variable-advanced-variable":"Variable (composants)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Déclarer variable","bloq-declare-variable-declare-type":"de type","bloq-declare-variable-declare-type-int":"entier","bloq-declare-variable-declare-type-float":"décimal","bloq-declare-variable-declare-type-text":"texte","bloq-declare-variable-declare-type-char":"caractère","bloq-declare-variable-declare-type-bool":"valeur logique","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caractère","bloq-lcd-default":"Bonjour !","bloq-comment-default":"Écris un commentaire","bloq-functions-default":"Nom","bloq-wait-ms":"ms","drag-bloq":"Fais glisser un bloc ici pour débuter ton programme","bloq-invoke-class-function-class":"de l'objet","bloq-invoke-arguments-class":"Créer un objet de la classe","bloq-invoke-arguments-class-name":"avec le nom","bloq-invoke-arguments-args":"avec les paramètres suivants","bloq-invoke-class-return-function-exec":"Exécuter la fonction","bloq-invoke-class-function-exec":"Exécuter la fonction","bloq-invoke-class-function-args":"avec les paramètres suivants","bloq-invoke-class-return-function-args-exec":"Exécuter la fonction","bloq-invoke-class-return-function-args-class":"de l'objet","bloq-invoke-class-return-function-args-args":"avec les paramètres suivants","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructeur","bloq-constructor-arguments":"Constructeur utilisant les paramètres suivants","bloq-invoke-class":"Créer un objet de la classe","bloq-invoke-class-name":"avec le nom","bloq-class":"Déclarer classe","bloq-class-default":"Nom","bloq-class-from":"de","bloq-class-inheritance-type":"héritant de manière","bloq-class-inheritance-public":"publique","bloq-class-inheritance-protected":"protégée","bloq-class-inheritance-private":"privée","bloq-public":"Variables et fonctions publiques :","bloq-protected":"Variables et fonctions protégées :","bloq-private":"Variables et fonctions privées :","bloq-include-lib-exec":"Inclure la bibliothèque","bloq-pin-analog-write":"Écrire dans la broche analogique","bloq-pin-digital-write":"Écrire dans la broche numérique","bloq-pin-analog-write-data":"la donnée","bloq-pin-digital-write-data":"la donnée","bloq-zowi-movements":"Zowi :","bloq-zowi-movements-walk":"marche","bloq-zowi-movements-turn":"tourne","bloq-zowi-movements-height-moonwalker":"fais le moonwalk","bloq-zowi-movements-height-flapping":"remue","bloq-zowi-movements-shakeleg":"bouge les jambes","bloq-zowi-movements-bend":"penche-toi","bloq-zowi-movements-forward":"en avant","bloq-zowi-movements-backward":"en arrière","bloq-zowi-movements-left":"à gauche","bloq-zowi-movements-right":"à droite","bloq-zowi-movements-speed":"fois à une vitesse de","bloq-zowi-mouth":"Zowi : dessine un","bloq-zowi-mouth-mouth":"sur ta bouche","bloq-zowi-mouth-smile":"sourire","bloq-zowi-mouth-sad":"visage triste","bloq-zowi-mouth-happy":"visage joyeux","bloq-zowi-movements-height":"Zowi :","bloq-zowi-movements-height-forward":"en avant","bloq-zowi-movements-height-backward":"en arrière","bloq-zowi-movements-height-left":"à gauche","bloq-zowi-movements-height-right":"à droite","bloq-zowi-movements-height-speed":"fois à une vitesse de","bloq-zowi-movements-height-height":"et à une hauteur","bloq-zowi-movements-height-big":"élevée","bloq-zowi-movements-height-medium":"moyenne","bloq-zowi-movements-height-small":"faible","bloq-zowi-movements-no-dir":"Zowi :","bloq-zowi-movements-no-dir-updown":"monte et descends","bloq-zowi-movements-no-dir-swing":"balance-toi","bloq-zowi-movements-no-dir-tiptoeSwing":"balance-toi sur la pointe des pieds","bloq-zowi-movements-no-dir-jitter":"tremble","bloq-zowi-movements-no-dir-ascendingTurn":"tourne quand tu montes","bloq-zowi-movements-no-dir-jump":"saute","bloq-zowi-movements-no-dir-speed":"fois à une vitesse de","bloq-zowi-movements-no-dir-height":"et à une hauteur","bloq-zowi-movements-no-dir-big":"élevée","bloq-zowi-movements-no-dir-medium":"moyenne","bloq-zowi-movements-no-dir-small":"faible","bloq-zowi-sounds":"Zowi : chante"},"gl":{"bloq-zowi-mouth-tongueOut":"sorriso con lingua","bloq-zowi-mouth-confused":"escara confundida","bloq-zowi-mouth-bigSurprise":"cara sorprendida ","bloq-zowi-distance":"Zowi: mide a distancia","bloq-zowi-sound":"Zowi, escoita con atención","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"sorpresa","bloq-zowi-sounds-sad":"tristeza","bloq-zowi-sounds-happy":"felicidade","bloq-zowi-sounds-sleeping":"soño","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusión","bloq-zowi-movements-shakeLeg":"move a perna","bloq-zowi-sounds-fart1":"un peido","bloq-zowi-movements-speed-medium":"media","bloq-zowi-movements-speed-small":"baixa","bloq-zowi-movements-speed-high":"alta","bloq-break-stopLoop":"interrumpir o bucle","bloq-code-writeYourCode":"Escribe teu propio código","bloq-comment-comment":"Comentario //","bloq-convert-convert":"Converter","bloq-convert-to":"A","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binario","bloq-serial-receiver-receive":"Recibir","bloq-serial-send-send":"Enviar","bloq-serial-send-print":"Sen salto de línea","bloq-serial-send-println":"Con salto de línea","bloq-buzzer-advance-sound":"Soar o zumbador","bloq-buzzer-advance-note":"con a nota","bloq-buzzer-advance-for":"durante","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Ler pin dixital","bloq-analog-read-advanced-readpin":"Ler pin analóxico","bloq-continuous-servo-start-advanced-turn":"Virar servo","bloq-continuous-servo-start-advanced-direction":"en sentido","bloq-continuous-servo-start-advanced-clockwise":"horario","bloq-continuous-servo-start-advanced-counterclockwise":"antihorario ","bloq-continuous-servo-stop-advanced-stop":"Parar servo","bloq-lcd-turn-on-off-advanced-turnon":"Acender","bloq-lcd-turn-on-off-advanced-turnoff":"Apagar","bloq-lcd-turn-on-off-advanced-lcdLigth":"a luz do LCD","bloq-lcd-clear":"Borrar o contido do LCD ","bloq-lcd-writte-advanced-write":"Escribir","bloq-lcd-writte-advanced-inLCD":"no LCD","bloq-lcd-writte-advanced-inPosition":"empezando na posición (columna, fila)","bloq-led-advanced-turnon":"Acender","bloq-led-advanced-turnoff":"Apagar","bloq-led-advanced-theLED":"o LED","bloq-oscillator-advanced-oscillate":"Oscilar servo ","bloq-oscillator-advanced-around":"ao redor de","bloq-oscillator-advanced-amplitude":"con amplitude","bloq-oscillator-advanced-speed":"con velocidade","bloq-oscillator-start-advanced-oscillator":"Reproducir oscilador","bloq-oscillator-stop-advanced-stop":"Parar oscilador ","bloq-pin-read-advanced-readpin":"Ler o pin","bloq-pin-writte-advanced-writepin":"Escribir no pin","bloq-pin-writte-advanced-data":"o dato","bloq-read-advanced-read":"Ler","bloq-servo-advanced-move":"Mover","bloq-servo-advanced-to":"a","bloq-servo-advanced-degrees":"graos","bloq-buzzer-sound":"Soar o zumbador","bloq-buzzer-note":"con a nota","bloq-buzzer-for":"durante","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Virar servo","bloq-continuous-servo-start-direction":"no sentido","bloq-continuous-servo-start-clockwise":"horario","bloq-continuous-servo-start-counterclockwise":"antihorario","bloq-continuous-servo-stop-stop":"Parar servo","bloq-lcd-turn-on-off-turnon":"Acender","bloq-lcd-turn-on-off-turnoff":"Apagar","bloq-lcd-turn-on-off-lcdLigth":"a luz do LCD","bloq-lcd-writte-write":"Escribir","bloq-lcd-writte-inLCD":"no LCD","bloq-led-turnon":"Acender","bloq-led-turnoff":"Apagar","bloq-led-theLED":"o LED","bloq-oscillator-oscillate":"Oscilar servo ","bloq-oscillator-around":"ao redor de","bloq-oscillator-amplitude":"con amplitude","bloq-oscillator-speed":"con velocidade","bloq-oscillator-times":"veces","bloq-oscillator-start-oscillator":"Reproducir oscilador","bloq-oscillator-stop-stop":"Parar oscilador ","bloq-read-read":"Ler","bloq-servo-move":"Mover","bloq-servo-to":"a","bloq-servo-degrees":"graos","bloq-case-ifSameTo":"si é igual a","bloq-case-exec":"executar:","bloq-case-default-inOtherCase":"en outro caso, executar:","bloq-continue-continue":"Continuar coa seguinte iteracción do bucle","bloq-else-else":"pola contra, executar:","bloq-else-if-if":"en cambio, si","bloq-else-if-else":"executar:","bloq-for-count":"Contar con ","bloq-for-from":"desde","bloq-for-to":"cara a","bloq-for-add":"sumando","bloq-for-subtract":"restando","bloq-for-exec":"executar:","bloq-if-if":"Si","bloq-if-exec":"executar:","bloq-switch-check":"Comprobar cál é o valor de ","bloq-wait-wait":"Esperar","bloq-while-while":"Mentras","bloq-while-exec":"executar:","bloq-argument-var":"Variable","bloq-argument-float":"Decimal","bloq-argument-string":"Texto","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Executar","bloq-invoke-return-function-exec":"Executar","bloq-invoke-function-args":"cos seguintes argumentos:","bloq-return-return":"Devolve","bloq-return-function-declare":"Declarar función","bloq-return-function-return":"Devolve","bloq-return-function-with-arguments-declare":"Declarar función","bloq-return-function-with-arguments-count":"cos seguintes argumentos:","bloq-return-function-with-arguments-return":"Devolve","bloq-void-function-declare":"Declarar función","bloq-void-function-with-arguments-declare":"Declarar función","bloq-void-function-with-arguments-count":"cos seguintes argumentos","bloq-boolArray-advanced-arraySize":"Array con tamaño","bloq-boolArray-advanced-boolType":"e tipo bool","bloq-boolArray-arraySize":"Array con tamaño","bloq-boolArray-boolType":"e tipo bool","bloq-boolean-true":"Verdadeiro","bloq-boolean-false":"Falso","bloq-logic-operations-and":"e","bloq-logic-operations-or":"ou","bloq-not-not":"not","bloq-loop-header":"Bucle principal (Loop)","bloq-loop-description":"Crea o programa que se vai a executar continuamente despois do Setup.","bloq-setup-header":"Instrucións iniciais (Setup)","bloq-setup-description":"Indica o que queres que se execute unha única vez ao comezo do programa.","bloq-var-header":"Variables globais, funcións e clases","bloq-var-description":" Define os valores que vas utilizar en Setup e Loop, también podes facer funcións para agrupar bloques.","bloq-numberArray-advanced-arraySize":"Array con tamaño ","bloq-numberArray-advanced-type":"e tipo","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"enteiro","bloq-map-map":"Mapear","bloq-map-value":"valor entre [0-","bloq-map-advanced-map":"Mapear","bloq-map-advanced-value":"de [","bloq-map-advanced-and":"] a [","bloq-math-operations-sqrt":"Raíz cadrada","bloq-math-operations-abs":"Valor absoluto","bloq-numberArray-arraySize":"Array con tamaño","bloq-numberArray-floatType":"e tipo float","bloq-random-random":"Aleatorio entre","bloq-random-and":"e","bloq-stringArray-advanced-arraySize":"Array con tamaño","bloq-stringArray-advanced-type":"e tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Lonxitude","bloq-string-string":"Texto","bloq-stringArray-arraySize":"Array con tamaño","bloq-stringArray-stringType":"e tipo texto","bloq-string-create-create":"Crear texto con","bloq-hw-variable-advanced-variable":"Variable (compoñentes)","bloq-sw-variable-advanced-variable":"Variable (código)","bloq-array-variable-variable":"Variable","bloq-declare-variable-declare":"Declarar variable","bloq-declare-variable-declare-type":"con tipo","bloq-declare-variable-declare-type-int":"enteiro","bloq-declare-variable-declare-type-float":"Decimal","bloq-declare-variable-declare-type-text":"Texto","bloq-declare-variable-declare-type-char":"caracter","bloq-declare-variable-declare-type-bool":"valor lóxico","bloq-select-variable-variable":"Variable","bloq-set-variableArray-variable":"Variable","bloq-set-variable-variable":"Variable","bloq-char":"Caracter","bloq-lcd-default":"¡Ola!","bloq-comment-default":"Escribe un comentario ","bloq-functions-default":"Nome","bloq-wait-ms":"ms","drag-bloq":"Arrastra un bloque aquí para empezar o teu programa","bloq-invoke-class-function-class":"do obxecto","bloq-invoke-arguments-class":"Crear un obxecto da clase","bloq-invoke-arguments-class-name":"con o nome","bloq-invoke-arguments-args":"cos seguintes argumentos","bloq-invoke-class-return-function-exec":"Executar a función","bloq-invoke-class-function-exec":"Executar a función","bloq-invoke-class-function-args":"cos seguintes argumentos","bloq-invoke-class-return-function-args-exec":"Executar a función","bloq-invoke-class-return-function-args-class":"do obxecto","bloq-invoke-class-return-function-args-args":"cos seguintes argumentos","bloq-set-class-variable-variable":"Variable","bloq-set-class-variableArray-variable":"Variable","bloq-select-class-variable-variable":"Variable","bloq-array-class-variable-variable":"Variable","bloq-constructor":"Constructor","bloq-constructor-arguments":"Construtor que usa os seguintes argumentos","bloq-invoke-class":"Crear un obxecto da clase","bloq-invoke-class-name":"con o nome","bloq-class":"Declarar clase","bloq-class-default":"Nome","bloq-class-from":"de","bloq-class-inheritance-type":"herdando de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protexida","bloq-class-inheritance-private":"privada","bloq-public":"Variables e funcións públicas :","bloq-protected":"Variables e funcións protexidas:","bloq-private":"Variables e funcións privadas:","bloq-include-lib-exec":"ncluir a libraría","bloq-pin-analog-write":"Escribir no pin analóxico","bloq-pin-digital-write":"Escribir no pin dixital","bloq-pin-analog-write-data":"o dato","bloq-pin-digital-write-data":"o dato","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"anda","bloq-zowi-movements-turn":"xira","bloq-zowi-movements-height-moonwalker":"fai o moonwalker","bloq-zowi-movements-height-crusaito":"fai o paso cruzado","bloq-zowi-movements-height-flapping":"axítate","bloq-zowi-movements-shakeleg":"move as pernas","bloq-zowi-movements-bend":"inclínate","bloq-zowi-movements-forward":"adiante","bloq-zowi-movements-backward":"atrás","bloq-zowi-movements-left":"esquerda","bloq-zowi-movements-right":"dereita","bloq-zowi-movements-speed":"veces cunha velocidade","bloq-zowi-mouth":"Zowi: dibuxa unha","bloq-zowi-mouth-mouth":"na tua boca","bloq-zowi-mouth-smile":"sorriso","bloq-zowi-mouth-sad":"faciana triste","bloq-zowi-mouth-happy":"faciana alegre","bloq-zowi-movements-height":"Zowi,","bloq-zowi-movements-height-forward":"adiante","bloq-zowi-movements-height-backward":"atrás","bloq-zowi-movements-height-left":"esquerda","bloq-zowi-movements-height-right":"dereita","bloq-zowi-movements-height-speed":"veces cunha velocidade","bloq-zowi-movements-height-height":"e unha altura","bloq-zowi-movements-height-big":"alta","bloq-zowi-movements-height-medium":"media","bloq-zowi-movements-height-small":"baixa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"sube e baixa","bloq-zowi-movements-no-dir-swing":"balancéate","bloq-zowi-movements-no-dir-tiptoeSwing":"balancéate na punta dos pés.","bloq-zowi-movements-no-dir-jitter":"treme","bloq-zowi-movements-no-dir-ascendingTurn":"xira mentres sobes","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"veces cunha velocidade","bloq-zowi-movements-no-dir-height":"e unha altura","bloq-zowi-movements-no-dir-big":"alta","bloq-zowi-movements-no-dir-medium":"media","bloq-zowi-movements-no-dir-small":"baixa","bloq-zowi-sounds":"Zowi, fai o son de","bloq-hts221-humidity":"Ler a humidade do sensor","bloq-hts221-temperature":"Ler a temperatura do sensor","bloq-rgbLed-fade-red":"con un valor de vermello de","bloq-enable-interrupt":"Executar a función","bloq-enable-interrupt-rising":"cambie de 0 a 1","bloq-enable-interrupt-falling":"cambie de 1 a 0","bloq-enable-interrupt-change":"cambie","bloq-enable-interrupt-pin":"cando a entrada do pin","bloq-rgbLed-green":", un valor de verde de","bloq-rgbLed-fade":"Crear un degradado no led RGB","bloq-rgbLed-red":"cun valor de vermello de","bloq-rtc-init":"Actualizar data e hora do reloxo","bloq-rtc-month":"o mes","bloq-rtc-using-advanced":"actual usando o reloxo","bloq-rtc-year":"o ano","bloq-rtc-day":"o día","bloq-rtc-hour":"a hora","bloq-rtc-minute":"o minuto","bloq-rtc-second":"o segundo","bloq-rtc-time":"hora","bloq-rtc-using":"actual usando o reloxo","bloq-rtc-advanced":"Obter","bloq-rtc":"Obter a","default-var-name-rtc":"reloxo_tempo_real","bloq-rtc-date":"data","default-var-name-sound":"Sensor_son","bloq-rgbLed-blue":"e un valor de azul de","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"Acender o led RGB","bloq-rgbLed-fade-blue":"e un valor de azul de","bloq-rgbLed-fade-green":", un valor de verde de","bloq-rgbLed-simple":"Acender o led RGB","bloq-rgbLed-simple-color":"con cor","bloq-rgbLed-simple-red":"vermello","bloq-rgbLed-simple-green":"verde","bloq-rgbLed-simple-blue":"azul","bloq-zowi-gestures":"Zowi, mostra emoción de","bloq-zowi-gestures-ZowiHappy":"felicidade","bloq-zowi-gestures-ZowiSuperHappy":"moita felicidade","bloq-zowi-gestures-ZowiSad":"tristeza","bloq-zowi-gestures-ZowiSleeping":"soño","bloq-zowi-gestures-ZowiFart":"peido","bloq-zowi-gestures-ZowiConfused":"confusión","bloq-zowi-gestures-ZowiLove":"amor","bloq-zowi-gestures-ZowiAngry":"enfado","bloq-zowi-gestures-ZowiFretful":"preocupación","bloq-zowi-gestures-ZowiMagic":"máxia","bloq-zowi-gestures-ZowiWave":"Ola","bloq-zowi-gestures-ZowiVictory":"vitoria","bloq-zowi-gestures-ZowiFail":"derrota","bloq-zowi-movements-simple":"Zowi,","bloq-zowi-movements-simple-steps":"veces","bloq-zowi-movements-simple-walk":"anda","bloq-zowi-movements-simple-turn":"xira","bloq-zowi-movements-simple-shakeLeg":"move a perna","bloq-zowi-movements-simple-bend":"inclínate","bloq-zowi-movements-simple-moonwalker":"fai o moonwalker","bloq-zowi-movements-simple-crusaito":"fai o paso cruzado","bloq-zowi-movements-simple-flapping":"axítate","bloq-zowi-movements-simple-updown":"sube e baixa","bloq-zowi-movements-simple-swing":"balancéate","bloq-zowi-movements-simple-tiptoeSwing":"balancéate na punta dos pés.","bloq-zowi-movements-simple-jitter":"treme","bloq-zowi-movements-simple-ascendingTurn":"xira mentres sobes","bloq-zowi-movements-simple-jump":"salta","bloq-zowi-rest":"Zowi, descansa","bloq-millis":"Obter tempo de execución","bloq-random-seed":"Inicializar o xerador de números aleatorios","bloq-rgbLed-simple-white":"branco","bloq-rgbLed-simple-yellow":"amarelo","bloq-rgbLed-simple-orange":"laranxa","bloq-rgbLed-simple-dark-green":"verde escuro","bloq-rgbLed-simple-dark-blue":"azul escuro","bloq-rgbLed-simple-pink":"rosa"},"it-IT":{"bloq-break-stopLoop":"Interrompi il bucle","bloq-code-writeYourCode":"Scrivi il tuo codice","bloq-comment-comment":"Commento //","bloq-convert-convert":"Converti","bloq-convert-to":"A","bloq-convert-dec":"Decimale","bloq-convert-hex":"Esadecimale","bloq-convert-oct":"Ottale","bloq-convert-bin":"Binario","bloq-serial-receiver-receive":"Ricevi","bloq-serial-send-send":"Invia","bloq-serial-send-print":"Senza salto di riga","bloq-serial-send-println":"Con salto di riga","bloq-buzzer-advance-sound":"Suona cicalino","bloq-buzzer-advance-note":"con la nota","bloq-buzzer-advance-for":"per","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Leggi pin digitale","bloq-analog-read-advanced-readpin":"Leggi pin analogico","bloq-continuous-servo-start-advanced-turn":"Gira servo","bloq-continuous-servo-start-advanced-direction":"in senso","bloq-continuous-servo-start-advanced-clockwise":"orario","bloq-continuous-servo-start-advanced-counterclockwise":"antiorario","bloq-continuous-servo-stop-advanced-stop":"Ferma servo","bloq-lcd-turn-on-off-advanced-turnon":"Accendi","bloq-lcd-turn-on-off-advanced-turnoff":"Spegni","bloq-lcd-turn-on-off-advanced-lcdLigth":"la luce del LCD","bloq-lcd-clear":"Cancella il contenuto dell'LCD","bloq-lcd-writte-advanced-write":"Scrivi","bloq-lcd-writte-advanced-inLCD":"nel LCD","bloq-lcd-writte-advanced-inPosition":"cominciando dalla posizione (colonna, riga)","bloq-led-advanced-turnon":"Accendi","bloq-led-advanced-turnoff":"Spegni","bloq-led-advanced-theLED":"il LED","bloq-oscillator-advanced-oscillate":"Attiva oscillazione servo","bloq-oscillator-advanced-around":"a circa","bloq-oscillator-advanced-amplitude":"con ampiezza","bloq-oscillator-advanced-speed":"con velocità","bloq-oscillator-start-advanced-oscillator":"Riproduci oscillatore","bloq-oscillator-stop-advanced-stop":"Ferma oscillatore","bloq-pin-read-advanced-readpin":"Leggi il pin","bloq-pin-writte-advanced-writepin":"Scrivi nel pin","bloq-pin-writte-advanced-data":"il dato","bloq-read-advanced-read":"Leggi","bloq-servo-advanced-move":"Sposta","bloq-servo-advanced-to":"in","bloq-servo-advanced-degrees":"gradi","bloq-buzzer-sound":"Suona cicalino","bloq-buzzer-note":"con la nota","bloq-buzzer-for":"per","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Gira servo","bloq-continuous-servo-start-direction":"in senso","bloq-continuous-servo-start-clockwise":"orario","bloq-continuous-servo-start-counterclockwise":"antiorario","bloq-continuous-servo-stop-stop":"Ferma servo","bloq-lcd-turn-on-off-turnon":"Accendi","bloq-lcd-turn-on-off-turnoff":"Spegni","bloq-lcd-turn-on-off-lcdLigth":"la luce del LCD","bloq-lcd-writte-write":"Scrivi","bloq-lcd-writte-inLCD":"nel LCD","bloq-led-turnon":"Accendi","bloq-led-turnoff":"Spegni","bloq-led-theLED":"il LED","bloq-oscillator-oscillate":"Attiva oscillazione servo","bloq-oscillator-around":"a circa","bloq-oscillator-amplitude":"con ampiezza","bloq-oscillator-speed":"con velocità","bloq-oscillator-times":"volte","bloq-oscillator-start-oscillator":"Riproduci oscillatore","bloq-oscillator-stop-stop":"Ferma oscillatore","bloq-read-read":"Leggi","bloq-servo-move":"Sposta","bloq-servo-to":"in","bloq-servo-degrees":"gradi","bloq-case-ifSameTo":"se è uguale a","bloq-case-exec":"esegi","bloq-case-default-inOtherCase":"altrimenti, esegi","bloq-continue-continue":" con la seguente interazione del bucle","bloq-else-else":"altrimenti, esegi","bloq-else-if-if":"invece, se","bloq-else-if-else":"esegi","bloq-for-count":"Conta su","bloq-for-from":"da","bloq-for-to":"fino a","bloq-for-add":"sommando","bloq-for-subtract":"rimanendo","bloq-for-exec":"esegi","bloq-if-if":"Se","bloq-if-exec":"esegi","bloq-switch-check":"Verifica qual è il valore di","bloq-wait-wait":"Attendi","bloq-while-while":"Mentre","bloq-while-exec":"esegi","bloq-argument-var":"Variabile","bloq-argument-float":"Decimale","bloq-argument-string":"Testo","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Esegui","bloq-invoke-return-function-exec":"Esegui","bloq-invoke-function-args":"con i seguenti argomenti:","bloq-return-return":"Restituisci","bloq-return-function-declare":"Dichiara funzione","bloq-return-function-return":"Restituisci","bloq-return-function-with-arguments-declare":"Dichiara funzione","bloq-return-function-with-arguments-count":"contando su","bloq-return-function-with-arguments-return":"Restituisci","bloq-void-function-declare":"Dichiara funzione","bloq-void-function-with-arguments-declare":"Dichiara funzione","bloq-void-function-with-arguments-count":"contando su","bloq-boolArray-advanced-arraySize":"Array di dimensioni","bloq-boolArray-advanced-boolType":"e tipo bool","bloq-boolArray-arraySize":"Array di dimensioni","bloq-boolArray-boolType":"e tipo bool","bloq-boolean-true":"Vero","bloq-boolean-false":"Falso","bloq-logic-operations-and":"e","bloq-logic-operations-or":"o","bloq-not-not":"not","bloq-loop-header":"Loop","bloq-loop-description":"Crea il programma da eseguire continuamente dopo il Setup.","bloq-setup-header":"Setup","bloq-setup-description":"Indica, per una sola volta, cosa desideri eseguire all'avvio del programma.","bloq-var-header":"Variabili globali e funzioni","bloq-var-description":" Definisce i valori che utilizzerai in Setup e Loop; puoi utilizzare anche funzioni per raggruppare blocchi.","bloq-numberArray-advanced-arraySize":"Array di dimensioni","bloq-numberArray-advanced-type":"e tipo","bloq-numberArray-advanced-float":"decimale","bloq-numberArray-advanced-int":"intero","bloq-map-map":"Mappa","bloq-map-value":"valore tra [0-","bloq-map-advanced-map":"Mappa","bloq-map-advanced-value":"da [","bloq-map-advanced-and":" a [","bloq-math-operations-sqrt":"Radice quadrata","bloq-math-operations-abs":"Valore assoluto","bloq-numberArray-arraySize":"Array di dimensioni","bloq-numberArray-floatType":" e tipo float","bloq-random-random":"Aleatorio tra","bloq-random-and":"e","bloq-stringArray-advanced-arraySize":"Array di dimensioni","bloq-stringArray-advanced-type":"e tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Lunghezza","bloq-string-string":"Testo","bloq-stringArray-arraySize":"Array di dimensioni","bloq-stringArray-stringType":"e tipo testo","bloq-string-create-create":"Creare testo con","bloq-hw-variable-advanced-variable":"Variabile (componenti)","bloq-sw-variable-advanced-variable":"Variabile (componenti)","bloq-array-variable-variable":"Variabile","bloq-declare-variable-declare":"Dichiara variabile","bloq-declare-variable-declare-type":"con tipo","bloq-declare-variable-declare-type-int":"intero","bloq-declare-variable-declare-type-float":"decimale","bloq-declare-variable-declare-type-text":"testo","bloq-declare-variable-declare-type-char":"carattere","bloq-declare-variable-declare-type-bool":"valore logico","bloq-select-variable-variable":"Variabile","bloq-set-variableArray-variable":"Variabile","bloq-set-variable-variable":"Variabil","bloq-char":"Carattere","bloq-lcd-default":"Ciao!","bloq-comment-default":"Lascia un commento","bloq-functions-default":"Nome","bloq-wait-ms":"ms","drag-bloq":"Trascina un blocco qui per cominciare a programmare","bloq-invoke-class-function-class":"l'oggetto","bloq-invoke-arguments-class":"Crea un oggetto della classe","bloq-invoke-arguments-class-name":"con il nome","bloq-invoke-arguments-args":"con i seguenti argomenti","bloq-invoke-class-return-function-exec":"Esegui la funzione","bloq-invoke-class-function-exec":"Esegui la funzione","bloq-invoke-class-function-args":"con i seguenti argomenti","bloq-invoke-class-return-function-args-exec":"Esegui la funzione","bloq-invoke-class-return-function-args-class":"l'oggetto","bloq-invoke-class-return-function-args-args":"con i seguenti argomenti","bloq-set-class-variable-variable":"Variabile","bloq-set-class-variableArray-variable":"Variabile","bloq-select-class-variable-variable":"Variabile","bloq-array-class-variable-variable":"Variabile","bloq-constructor":"Costruttore","bloq-constructor-arguments":"Costruttore che usa i seguenti argomenti","bloq-invoke-class":"Crea un oggetto della classe","bloq-invoke-class-name":"con il nome","bloq-class":"Dichiara classe","bloq-class-default":"Nome","bloq-class-from":"di","bloq-class-inheritance-type":"eredita in modalità","bloq-class-inheritance-public":"pubblica","bloq-class-inheritance-protected":"protetta","bloq-class-inheritance-private":"privata","bloq-public":"Variabili e funzioni pubbliche:","bloq-protected":"Variabili e funzioni protette:","bloq-private":"Variabili e funzioni private:","bloq-include-lib-exec":"Includi la libreria","bloq-pin-analog-write":"Scrivi nel pin analogico","bloq-pin-digital-write":"Scrivi nel pin digitale","bloq-pin-analog-write-data":"il dato","bloq-pin-digital-write-data":"il dato","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"procedi","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"fai il moonwalker","bloq-zowi-movements-height-crusaito":"fai il passo incrociato","bloq-zowi-movements-height-flapping":"agitati","bloq-zowi-movements-shakeleg":"muovi le gambe","bloq-zowi-movements-bend":"inclinati","bloq-zowi-movements-forward":"avanti","bloq-zowi-movements-backward":"indietro","bloq-zowi-movements-left":"sinistra","bloq-zowi-movements-right":"destra","bloq-zowi-movements-speed":"volte con una velocità di","bloq-zowi-mouth":"Zowi: disegna un","bloq-zowi-mouth-mouth":"nella bocca","bloq-zowi-mouth-smile":"sorriso","bloq-zowi-mouth-sad":"faccia triste","bloq-zowi-mouth-happy":"faccia allegra","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"avanti","bloq-zowi-movements-height-backward":"indietro","bloq-zowi-movements-height-left":"sinistra","bloq-zowi-movements-height-right":"destra","bloq-zowi-movements-height-speed":"volte con una velocità di","bloq-zowi-movements-height-height":"e un'altezza","bloq-zowi-movements-height-big":"elevata","bloq-zowi-movements-height-medium":"media","bloq-zowi-movements-height-small":"bassa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"sali e scendi","bloq-zowi-movements-no-dir-swing":"tienti in equilibrio","bloq-zowi-movements-no-dir-tiptoeSwing":"tienti in equilibrio sulle punte","bloq-zowi-movements-no-dir-jitter":"tremola","bloq-zowi-movements-no-dir-ascendingTurn":"gira mentre sali","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"volte con una velocità di","bloq-zowi-movements-no-dir-height":"e un'altezza","bloq-zowi-movements-no-dir-big":"elevata","bloq-zowi-movements-no-dir-medium":"media","bloq-zowi-movements-no-dir-small":"bassa","bloq-zowi-sounds":"Zowi: canta"},"nl-NL":{"bloq-break-stopLoop":"Verbreek de loop","bloq-code-writeYourCode":"Maak je eigen code","bloq-comment-comment":"Opmerking //","bloq-convert-convert":"Converteren","bloq-convert-to":"naar","bloq-convert-dec":"Decimaal","bloq-convert-hex":"Hexadecimaal","bloq-convert-oct":"Octaal","bloq-convert-bin":"Binair","bloq-serial-receiver-receive":"Ontvangen","bloq-serial-send-send":"Zenden","bloq-serial-send-print":"Zonder regeleinde","bloq-serial-send-println":"Met regeleinde","bloq-buzzer-advance-sound":"Laat de zoemer klinken","bloq-buzzer-advance-note":"met de opmerking","bloq-buzzer-advance-for":"voor","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Lees digitale pin","bloq-analog-read-advanced-readpin":"Lees analoge pin","bloq-continuous-servo-start-advanced-turn":"Roteer servo","bloq-continuous-servo-start-advanced-direction":"richting","bloq-continuous-servo-start-advanced-clockwise":"met de klok mee","bloq-continuous-servo-start-advanced-counterclockwise":"tegen de klok in","bloq-continuous-servo-stop-advanced-stop":"Stop servo","bloq-lcd-turn-on-off-advanced-turnon":"Inschakelen","bloq-lcd-turn-on-off-advanced-turnoff":"Uitschakelen","bloq-lcd-turn-on-off-advanced-lcdLigth":"Het LCD-licht","bloq-lcd-clear":"Verwijder de inhoud van de LCD","bloq-lcd-writte-advanced-write":"Schrijven","bloq-lcd-writte-advanced-inLCD":"op het LCD","bloq-lcd-writte-advanced-inPosition":"start op positie (kolom, rij)","bloq-led-advanced-turnon":"Inschakelen","bloq-led-advanced-turnoff":"Uitschakelen","bloq-led-advanced-theLED":"Het LED","bloq-oscillator-advanced-oscillate":"Schommelen servo","bloq-oscillator-advanced-around":"rondom","bloq-oscillator-advanced-amplitude":"met groote","bloq-oscillator-advanced-speed":"met snelheid","bloq-oscillator-start-advanced-oscillator":"Start oscillator","bloq-oscillator-stop-advanced-stop":"Stop oscillator","bloq-pin-read-advanced-readpin":"Lees de pin","bloq-pin-writte-advanced-writepin":"Schrijf naar de pin","bloq-pin-writte-advanced-data":"de data","bloq-read-advanced-read":"Lezen","bloq-servo-advanced-move":"Verplaats","bloq-servo-advanced-to":"naar","bloq-servo-advanced-degrees":"graden","bloq-buzzer-sound":"Laat de zoemer klinken","bloq-buzzer-note":"met de opmerking","bloq-buzzer-for":"voor","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Als","bloq-continuous-servo-start-turn":"Roteren servo","bloq-continuous-servo-start-direction":"richting","bloq-continuous-servo-start-clockwise":"met de klok mee","bloq-continuous-servo-start-counterclockwise":"tegen de klok in","bloq-continuous-servo-stop-stop":"Stop servo","bloq-lcd-turn-on-off-turnon":"Inschakelen","bloq-lcd-turn-on-off-turnoff":"Uitschakelen","bloq-lcd-turn-on-off-lcdLigth":"het LCD-licht","bloq-lcd-writte-write":"Schrijven","bloq-lcd-writte-inLCD":"op het LCD","bloq-led-turnon":"Inschakelen","bloq-led-turnoff":"Uitschakelen","bloq-led-theLED":"het LED","bloq-oscillator-oscillate":"Schommelen servo","bloq-oscillator-around":"rondom","bloq-oscillator-amplitude":"met groote","bloq-oscillator-speed":"met snelheid","bloq-oscillator-start-oscillator":"Start oscillator","bloq-oscillator-stop-stop":"Stop oscillator","bloq-read-read":"Lezen","bloq-servo-move":"Verplaats","bloq-servo-to":"naar","bloq-servo-degrees":"graden","bloq-case-ifSameTo":"indien gelijk aan","bloq-case-exec":"doe","bloq-case-default-inOtherCase":"anders, doe","bloq-continue-continue":"Ga verder met volgende herhaling van de loop","bloq-else-else":"anders als, doe","bloq-else-if-if":"anders als","bloq-else-if-else":"doe","bloq-for-count":"Tellen met","bloq-for-from":"van","bloq-for-to":"tot","bloq-for-add":"toevoegen","bloq-for-subtract":"aftrekken","bloq-for-exec":"doe","bloq-if-if":"Als","bloq-if-exec":"doe","bloq-switch-check":"Controleer de waarde van","bloq-wait-wait":"Wacht","bloq-while-while":"Gedurende","bloq-while-exec":"doe","bloq-argument-var":"Variabele","bloq-argument-float":"Decimaal","bloq-argument-string":"Tekst","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"Doe","bloq-invoke-return-function-exec":"Doe","bloq-invoke-function-args":"met de volgende parameters:","bloq-return-return":"Keer terug","bloq-return-function-declare":"Definieer functie","bloq-return-function-return":"Keer terug","bloq-return-function-with-arguments-declare":"Definieer functie","bloq-return-function-with-arguments-count":"tellen met","bloq-return-function-with-arguments-return":"Keer terug","bloq-void-function-declare":"Definieer functie","bloq-void-function-with-arguments-declare":"Definieer functie","bloq-void-function-with-arguments-count":"tellen met","bloq-boolArray-advanced-arraySize":"Rangschikken op grootte","bloq-boolArray-advanced-boolType":"en bool type","bloq-boolArray-arraySize":"Rangschikken op grootte","bloq-boolArray-boolType":"en bool type","bloq-boolean-true":"Waar","bloq-boolean-false":"Niet waar","bloq-logic-operations-and":"en","bloq-logic-operations-or":"of","bloq-not-not":"niet","bloq-loop-header":"Loop","bloq-loop-description":"Maak het programma zodanig dat deze na de Setup continu wordt uitgevoerd.","bloq-setup-header":"Setup","bloq-setup-description":"Geef aan welke actie eenmalig na het starten van het programma moet worden uitgevoerd.","bloq-var-header":"Globale variabelen en functies","bloq-var-description":" Definieer de waarden die je zult gebruiken in Setup en Loop. Je kunt functies maken om blokken te groeperen.","bloq-numberArray-advanced-arraySize":"Rangschikken op grootte","bloq-numberArray-advanced-type":"en type","bloq-numberArray-advanced-float":"decimaal","bloq-numberArray-advanced-int":"geheel","bloq-map-map":"Map","bloq-map-value":"waarde tussen [0-","bloq-map-advanced-map":"Map","bloq-map-advanced-value":"van [","bloq-map-advanced-and":"] tot [","bloq-math-operations-sqrt":"Wortel","bloq-math-operations-abs":"Absolute waarde","bloq-numberArray-arraySize":"Rangschikken op grootte","bloq-numberArray-floatType":" en float type","bloq-random-random":"Willekeurig tussen","bloq-random-and":"en","bloq-stringArray-advanced-arraySize":"Rangschikken op grootte","bloq-stringArray-advanced-type":"en type","bloq-stringArray-advanced-string":"rij","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Lengte","bloq-string-string":"Tekst","bloq-stringArray-arraySize":"Rangschikken op grootte","bloq-stringArray-stringType":"en tekst type","bloq-string-create-create":"Maak tekst met","bloq-hw-variable-advanced-variable":"Variabele (componenten)","bloq-sw-variable-advanced-variable":"Variabele (componenten)","bloq-array-variable-variable":"Variabele","bloq-declare-variable-declare":"Definieer variable","bloq-declare-variable-declare-type":"met type","bloq-declare-variable-declare-type-int":"integer","bloq-declare-variable-declare-type-float":"decimaal","bloq-declare-variable-declare-type-text":"tekst","bloq-declare-variable-declare-type-bool":"boolean","bloq-select-variable-variable":"Variabele","bloq-set-variableArray-variable":"Variabele","bloq-set-variable-variable":"Variabele","bloq-lcd-default":"Hi!","bloq-comment-default":"Typeen opmerking","bloq-functions-default":"Naam","bloq-wait-ms":"ms","drag-bloq":"Sleep een blok  om te starten met je programma","bloq-invoke-class-function-class":"van het object","bloq-invoke-arguments-class":"Maak een object van ","bloq-invoke-arguments-class-name":"met de naam","bloq-invoke-arguments-args":"met de volgende argumenten","bloq-invoke-class-return-function-exec":"Voer de functie uit","bloq-invoke-class-function-exec":"Voer de functie uit","bloq-invoke-class-function-args":"met de volgende argumenten","bloq-invoke-class-return-function-args-exec":"Voer de functie uit","bloq-invoke-class-return-function-args-class":"van het object","bloq-invoke-class-return-function-args-args":"met de volgende argumenten","bloq-set-class-variable-variable":"Variabele","bloq-set-class-variableArray-variable":"Variabele","bloq-select-class-variable-variable":"Variabele","bloq-array-class-variable-variable":"Variabele","bloq-constructor-arguments":" die de volgende argumenten gebruikt","bloq-invoke-class":"Maak een object van ","bloq-invoke-class-name":"met de naam","bloq-class":"Declareer de ","bloq-class-default":"Naam","bloq-class-from":"van","bloq-class-inheritance-type":"overerving ","bloq-class-inheritance-protected":"beschermd","bloq-public":" variabelen en functies:","bloq-protected":"Beschermd variabelen en functies:","bloq-private":"variabelen en functies:","bloq-include-lib-exec":"Omvat de bibliotheek","bloq-pin-analog-write":"Schrijf de analoge pin","bloq-pin-digital-write":"Schrijf de digitale pin","bloq-pin-analog-write-data":"de datum","bloq-pin-digital-write-data":"de datum","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"loop","bloq-zowi-movements-turn":"draai","bloq-zowi-movements-height-moonwalker":" de moonwalk","bloq-zowi-movements-height-flapping":"klapper","bloq-zowi-movements-shakeleg":"schud je benen","bloq-zowi-movements-bend":"buig","bloq-zowi-movements-forward":"voorwaarts","bloq-zowi-movements-left":"links","bloq-zowi-movements-right":"rechts","bloq-zowi-movements-speed":"stapjes met een snelheid van","bloq-zowi-mouth":"Zowi: teken een","bloq-zowi-mouth-mouth":"op je mond","bloq-zowi-mouth-smile":"lach","bloq-zowi-mouth-sad":"sip gezicht","bloq-zowi-mouth-happy":"blij gezicht","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"voorwaarts","bloq-zowi-movements-height-backward":"achterwaarts","bloq-zowi-movements-height-left":"links","bloq-zowi-movements-height-right":"rechts","bloq-zowi-movements-height-speed":"stapjes met een snelheid van","bloq-zowi-movements-height-height":"en een hoogte","bloq-zowi-movements-height-big":"hoog","bloq-zowi-movements-height-medium":"medium","bloq-zowi-movements-height-small":"laag","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"ga op en neer","bloq-zowi-movements-no-dir-swing":"zwaaien","bloq-zowi-movements-no-dir-tiptoeSwing":"zwaaien op de tenen","bloq-zowi-movements-no-dir-jitter":"schudden","bloq-zowi-movements-no-dir-ascendingTurn":"draai tijdens het omhoog gaan","bloq-zowi-movements-no-dir-jump":"spring","bloq-zowi-movements-no-dir-speed":" met een snelheid van","bloq-zowi-movements-no-dir-height":"en een hoogte","bloq-zowi-movements-no-dir-big":"hoog","bloq-zowi-movements-no-dir-medium":"medium","bloq-zowi-movements-no-dir-small":"laag","bloq-zowi-sounds":"Zowi: zing","bloq-enable-interrupt":"Voer de functie uit","bloq-enable-interrupt-rising":"verander van 0 naar 1","bloq-enable-interrupt-falling":"verander van 1 naar 0","bloq-enable-interrupt-change":"verander","bloq-enable-interrupt-pin":"wanneer de pin input"},"pt-PT":{"bloq-zowi-mouth-tongueOut":"sorriso com lingua","bloq-zowi-mouth-confused":"cara confusa","bloq-zowi-mouth-bigSurprise":"cara surpreendida","bloq-zowi-distance":"Zowi, mede a distância","bloq-zowi-sound":"Zowi, escuta","bloq-zowi-sounds-OhOoh":"oh-oh","bloq-zowi-sounds-surprise":"surpresa","bloq-zowi-sounds-sad":"tristeza","bloq-zowi-sounds-happy":"felicidade","bloq-zowi-sounds-sleeping":"sono","bloq-zowi-sounds-cuddly":"mimo","bloq-zowi-sounds-confused":"confusão","bloq-zowi-movements-shakeLeg":"mexe as pernas","bloq-zowi-sounds-fart1":"um peido","bloq-zowi-movements-speed-medium":"média","bloq-zowi-movements-speed-small":"baixa","bloq-zowi-movements-speed-high":"elevada","bloq-break-stopLoop":"Interromper o ciclo","bloq-code-writeYourCode":"Escrever o seu próprio código","bloq-comment-comment":"Comentário //","bloq-convert-convert":"Converter","bloq-convert-to":"Em","bloq-convert-dec":"Decimal","bloq-convert-hex":"Hexadecimal","bloq-convert-oct":"Octal","bloq-convert-bin":"Binário","bloq-serial-receiver-receive":"Receber","bloq-serial-send-send":"Enviar","bloq-serial-send-print":"Sem quebra de linha","bloq-serial-send-println":"Com quebra de linha","bloq-buzzer-advance-sound":"Soar o besouro","bloq-buzzer-advance-note":"com a nota","bloq-buzzer-advance-for":"durante","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"Ler pino digital","bloq-analog-read-advanced-readpin":"Ler pino analógico","bloq-continuous-servo-start-advanced-turn":"Rodar servo","bloq-continuous-servo-start-advanced-direction":"no sentido","bloq-continuous-servo-start-advanced-clockwise":"horário","bloq-continuous-servo-start-advanced-counterclockwise":"anti-horário","bloq-continuous-servo-stop-advanced-stop":"Parar servo","bloq-lcd-turn-on-off-advanced-turnon":"Acender","bloq-lcd-turn-on-off-advanced-turnoff":"Apagar","bloq-lcd-turn-on-off-advanced-lcdLigth":"a luz do LCD","bloq-lcd-clear":"Apagar o conteúdo do LCD","bloq-lcd-writte-advanced-write":"Escrever","bloq-lcd-writte-advanced-inLCD":"no LCD","bloq-lcd-writte-advanced-inPosition":"começando pela posição (coluna, fila)","bloq-led-advanced-turnon":"Acender","bloq-led-advanced-turnoff":"Apagar","bloq-led-advanced-theLED":"o LED","bloq-oscillator-advanced-oscillate":"Oscilar servo","bloq-oscillator-advanced-around":"à volta","bloq-oscillator-advanced-amplitude":"com amplitude","bloq-oscillator-advanced-speed":"com velocidade","bloq-oscillator-start-advanced-oscillator":"Iniciar oscilador","bloq-oscillator-stop-advanced-stop":"Parar oscilador","bloq-pin-read-advanced-readpin":"Ler o pino","bloq-pin-writte-advanced-writepin":"Escrever no pino","bloq-pin-writte-advanced-data":"os dados","bloq-read-advanced-read":"Ler","bloq-servo-advanced-move":"Mover","bloq-servo-advanced-to":"para","bloq-servo-advanced-degrees":"graus","bloq-buzzer-sound":"Soar o besouro","bloq-buzzer-note":"com a nota","bloq-buzzer-for":"durante","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Dó","bloq-buzzer-re":"Ré","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fá","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"Lá","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"Rodar servo","bloq-continuous-servo-start-direction":"no sentido","bloq-continuous-servo-start-clockwise":"horário","bloq-continuous-servo-start-counterclockwise":"anti-horário","bloq-continuous-servo-stop-stop":"Parar servo","bloq-lcd-turn-on-off-turnon":"Acender","bloq-lcd-turn-on-off-turnoff":"Apagar","bloq-lcd-turn-on-off-lcdLigth":"a luz do LCD","bloq-lcd-writte-write":"Escrever","bloq-lcd-writte-inLCD":"no LCD","bloq-led-turnon":"Acender","bloq-led-turnoff":"Apagar","bloq-led-theLED":"o LED","bloq-oscillator-oscillate":"Oscilar servo","bloq-oscillator-around":"à volta","bloq-oscillator-amplitude":"com amplitude","bloq-oscillator-speed":"com velocidade","bloq-oscillator-times":"vezes","bloq-oscillator-start-oscillator":"Iniciar oscilador","bloq-oscillator-stop-stop":"Parar oscilador","bloq-read-read":"Ler","bloq-servo-move":"Mover","bloq-servo-to":"para","bloq-servo-degrees":"graus","bloq-case-ifSameTo":"se é igual a","bloq-case-exec":"executar","bloq-case-default-inOtherCase":"em outro caso, executar:","bloq-continue-continue":"Continuar com a próxima iteração do ciclo","bloq-else-else":"senão, executar:","bloq-else-if-if":"senão, se","bloq-else-if-else":"executar","bloq-for-count":"Contar com","bloq-for-from":"desde","bloq-for-to":"até","bloq-for-add":"adicionar","bloq-for-subtract":"subtrair","bloq-for-exec":"executar:","bloq-if-if":"Se","bloq-if-exec":"executar:","bloq-switch-check":"Verificar o valor de","bloq-wait-wait":"Esperar","bloq-while-while":"Enquanto","bloq-while-exec":"executar:","bloq-argument-var":"Variável","bloq-argument-float":"Decimal","bloq-argument-string":"Texto","bloq-argument-bool":"Boleano","bloq-invoke-function-exec":"Do","bloq-invoke-return-function-exec":"Do","bloq-invoke-function-args":"com os seguintes argumentos:","bloq-return-return":"Devolve","bloq-return-function-declare":"Declarar Função","bloq-return-function-return":"Devolve","bloq-return-function-with-arguments-declare":"Declarar Função","bloq-return-function-with-arguments-count":"com os seguintes arumentos","bloq-return-function-with-arguments-return":"Devolve","bloq-void-function-declare":"Declarar função","bloq-void-function-with-arguments-declare":"Declarar Função","bloq-void-function-with-arguments-count":"contar com","bloq-boolArray-advanced-arraySize":"Matriz do tamanho","bloq-boolArray-advanced-boolType":"e tipo boleano","bloq-boolArray-arraySize":"Matriz do tamanho","bloq-boolArray-boolType":"e tipo boleano","bloq-boolean-true":"Verdadeiro","bloq-boolean-false":"Falso","bloq-logic-operations-and":"e","bloq-logic-operations-or":"ou","bloq-not-not":"não","bloq-loop-header":"Ciclo","bloq-loop-description":"Crie o programa a ser continuamente executado depois da Configuração.","bloq-setup-header":"Configuração","bloq-setup-description":"Indique o que pretende que seja executado ao iniciar o programa e apenas uma única vez.","bloq-var-header":"Variáveis e funções globais","bloq-var-description":" Defina os valores que vai utilizar na Configuração e Ciclo; também pode criar funções para agrupar blocos.","bloq-numberArray-advanced-arraySize":"Matriz do tamanho","bloq-numberArray-advanced-type":"e tipo","bloq-numberArray-advanced-float":"decimal","bloq-numberArray-advanced-int":"inteiro","bloq-map-map":"Mapear","bloq-map-value":"valor entre [0-","bloq-map-advanced-map":"Mapear","bloq-map-advanced-value":"de [","bloq-map-advanced-and":" a [","bloq-math-operations-sqrt":"Raiz quadrada","bloq-math-operations-abs":"Valor absoluto","bloq-numberArray-arraySize":"Matriz do tamanho","bloq-numberArray-floatType":" e tipo float","bloq-random-random":"Aleatório entre","bloq-random-and":"e","bloq-stringArray-advanced-arraySize":"Matriz do tamanho","bloq-stringArray-advanced-type":"e tipo","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Length","bloq-string-string":"Texto","bloq-stringArray-arraySize":"Matriz do tamanho","bloq-stringArray-stringType":"e tipo texto","bloq-string-create-create":"Criar texto com","bloq-hw-variable-advanced-variable":"Variável (componentes)","bloq-sw-variable-advanced-variable":"Variável (componentes)","bloq-array-variable-variable":"Variável","bloq-declare-variable-declare":"Declarar variável","bloq-declare-variable-declare-type":"com tipo","bloq-declare-variable-declare-type-int":"inteiro","bloq-declare-variable-declare-type-float":"decimal","bloq-declare-variable-declare-type-text":"texto","bloq-declare-variable-declare-type-char":"carácter","bloq-declare-variable-declare-type-bool":"valor lógico","bloq-select-variable-variable":"Variável","bloq-set-variableArray-variable":"Variável","bloq-set-variable-variable":"Variável","bloq-char":"Carácter","bloq-lcd-default":"Olá!","bloq-comment-default":"Escreve um comentário","bloq-functions-default":"Nome","bloq-wait-ms":"ms","drag-bloq":"Arrasta um bloco até aqui para começar o teu programa","bloq-invoke-class-function-class":"do objeto","bloq-invoke-arguments-class":"Criar um objeto da classe","bloq-invoke-arguments-class-name":"com o nome","bloq-invoke-arguments-args":"com os seguintes argumentos","bloq-invoke-class-return-function-exec":"Executar a função","bloq-invoke-class-function-exec":"Executar a função","bloq-invoke-class-function-args":"com os seguintes argumentos","bloq-invoke-class-return-function-args-exec":"Executar a função","bloq-invoke-class-return-function-args-class":"do objeto","bloq-invoke-class-return-function-args-args":"com os seguintes argumentos","bloq-set-class-variable-variable":"Variável","bloq-set-class-variableArray-variable":"Variável","bloq-select-class-variable-variable":"Variável","bloq-array-class-variable-variable":"Variável","bloq-constructor":"Construtor","bloq-constructor-arguments":"Construtor que utiliza os seguintes argumentos","bloq-invoke-class":"Criar um objeto da classe","bloq-invoke-class-name":"com o nome","bloq-class":"Declarar classe","bloq-class-default":"Nome","bloq-class-from":"de","bloq-class-inheritance-type":"herdando de forma","bloq-class-inheritance-public":"pública","bloq-class-inheritance-protected":"protegida","bloq-class-inheritance-private":"privada","bloq-public":"Variáveis e funções públicas:","bloq-protected":"Variáveis e funções protegidas:","bloq-private":"Variáveis e funções privadas:","bloq-include-lib-exec":"Incluir a biblioteca","bloq-pin-analog-write":"Escrever no pino analógico","bloq-pin-digital-write":"Escrever no pino digital","bloq-pin-analog-write-data":"o dado","bloq-pin-digital-write-data":"o dado","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"anda","bloq-zowi-movements-turn":"gira","bloq-zowi-movements-height-moonwalker":"faz o moonwalker","bloq-zowi-movements-height-crusaito":"faz o passo cruzado","bloq-zowi-movements-height-flapping":"agita-te","bloq-zowi-movements-shakeleg":"mexe as pernas","bloq-zowi-movements-bend":"inclina-te","bloq-zowi-movements-forward":"para a frente","bloq-zowi-movements-backward":"para trás","bloq-zowi-movements-left":"esquerda","bloq-zowi-movements-right":"direita","bloq-zowi-movements-speed":"vezes com uma velocidade de","bloq-zowi-mouth":"Zowi: desenha","bloq-zowi-mouth-mouth":"na tua boca","bloq-zowi-mouth-smile":"um sorriso","bloq-zowi-mouth-sad":"uma cara triste","bloq-zowi-mouth-happy":"uma cara alegre","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"para a frente","bloq-zowi-movements-height-backward":"para trás","bloq-zowi-movements-height-left":"esquerda","bloq-zowi-movements-height-right":"direita","bloq-zowi-movements-height-speed":"vezes com uma velocidade de","bloq-zowi-movements-height-height":"e uma altura","bloq-zowi-movements-height-big":"elevada","bloq-zowi-movements-height-medium":"média","bloq-zowi-movements-height-small":"baixa","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"sobe e desce","bloq-zowi-movements-no-dir-swing":"balanceia-te","bloq-zowi-movements-no-dir-tiptoeSwing":"balanceia-te na ponta dos pés","bloq-zowi-movements-no-dir-jitter":"treme","bloq-zowi-movements-no-dir-ascendingTurn":"gira enquanto sobes","bloq-zowi-movements-no-dir-jump":"salta","bloq-zowi-movements-no-dir-speed":"vezes com uma velocidade de","bloq-zowi-movements-no-dir-height":"e uma altura","bloq-zowi-movements-no-dir-big":"elevada","bloq-zowi-movements-no-dir-medium":"média","bloq-zowi-movements-no-dir-small":"baixa","bloq-zowi-sounds":"Zowi: canta","bloq-enable-interrupt":"Executar a função","bloq-enable-interrupt-rising":"mude de 0 para 1","bloq-enable-interrupt-falling":"mude de 1 para 0","bloq-enable-interrupt-change":"mude","bloq-enable-interrupt-pin":"quando a entrada do pino"},"ru-RU":{"bloq-break-stopLoop":"Прервать цикл","bloq-code-writeYourCode":"Напишите ваш собственный код","bloq-comment-comment":"Комментарий //","bloq-convert-convert":"Конвертировать","bloq-convert-to":"A","bloq-convert-dec":"Десятичный","bloq-convert-hex":"Шестнадцатиричный","bloq-convert-oct":"Восьмеричный","bloq-convert-bin":"Бинарный","bloq-serial-receiver-receive":"Получить","bloq-serial-send-send":"Отправить","bloq-serial-send-print":"Без переноса строки","bloq-serial-send-println":"С переносом строки","bloq-buzzer-advance-sound":"Активировать зуммер","bloq-buzzer-advance-note":"с примечанием","bloq-buzzer-advance-for":"в течение","bloq-buzzer-advance-ms":"мс","bloq-digital-read-advanced-readpin":"Считывание с цифрового выхода","bloq-analog-read-advanced-readpin":"Считывание с аналогового выхода","bloq-continuous-servo-start-advanced-turn":"Повернуть сервопривод","bloq-continuous-servo-start-advanced-direction":"в направлении","bloq-continuous-servo-start-advanced-clockwise":"по часовой стрелке","bloq-continuous-servo-start-advanced-counterclockwise":"против часовой стрелки","bloq-continuous-servo-stop-advanced-stop":"Остановить сервоприво","bloq-lcd-turn-on-off-advanced-turnon":"Включить","bloq-lcd-turn-on-off-advanced-turnoff":"Выключить","bloq-lcd-turn-on-off-advanced-lcdLigth":"свет ЖКЭ","bloq-lcd-clear":"Стереть содержимое ЖКД","bloq-lcd-writte-advanced-write":"Написать","bloq-lcd-writte-advanced-inLCD":"на ЖКЭ","bloq-lcd-writte-advanced-inPosition":"начиная с позиции (колонка, ряд)","bloq-led-advanced-turnon":"Включить","bloq-led-advanced-turnoff":"Выключить","bloq-led-advanced-theLED":"светодиод","bloq-oscillator-advanced-oscillate":"Вибрация сервопривода","bloq-oscillator-advanced-around":"около","bloq-oscillator-advanced-amplitude":"с амплитудой","bloq-oscillator-advanced-speed":"со скоростью","bloq-oscillator-start-advanced-oscillator":"Воспроизвести осциллятор","bloq-oscillator-stop-advanced-stop":"Остановить осциллятор","bloq-pin-read-advanced-readpin":"Прочитать PIN-код","bloq-pin-writte-advanced-writepin":"Записать в PIN-код","bloq-pin-writte-advanced-data":"единица данных","bloq-read-advanced-read":"Прочитать","bloq-servo-advanced-move":"Переместить","bloq-servo-advanced-to":"на","bloq-servo-advanced-degrees":"градусов","bloq-buzzer-sound":"Активировать зуммер","bloq-buzzer-note":"с примечанием","bloq-buzzer-for":"в течение","bloq-buzzer-ms":"мс","bloq-buzzer-do":"До","bloq-buzzer-re":"Ре","bloq-buzzer-mi":"Ми","bloq-buzzer-fa":"Фа","bloq-buzzer-sol":"Соль","bloq-buzzer-la":"Ля","bloq-buzzer-si":"Си","bloq-continuous-servo-start-turn":"Повернуть сервопривод","bloq-continuous-servo-start-direction":"в направлении","bloq-continuous-servo-start-clockwise":"по часовой стрелке","bloq-continuous-servo-start-counterclockwise":"против часовой стрелки","bloq-continuous-servo-stop-stop":"Остановить сервоприво","bloq-lcd-turn-on-off-turnon":"Включить","bloq-lcd-turn-on-off-turnoff":"Выключить","bloq-lcd-turn-on-off-lcdLigth":"свет ЖКЭ","bloq-lcd-writte-write":"Написать","bloq-lcd-writte-inLCD":"на ЖКЭ","bloq-led-turnon":"Включить","bloq-led-turnoff":"Выключить","bloq-led-theLED":"светодиод","bloq-oscillator-oscillate":"Вибрация сервопривода","bloq-oscillator-around":"около","bloq-oscillator-amplitude":"с амплитудой","bloq-oscillator-speed":"со скоростью","bloq-oscillator-times":"раз","bloq-oscillator-start-oscillator":"Воспроизвести осциллятор","bloq-oscillator-stop-stop":"Остановить осциллятор","bloq-read-read":"Прочитать","bloq-servo-move":"Переместить","bloq-servo-to":"на","bloq-servo-degrees":"градусов","bloq-case-ifSameTo":"если равно","bloq-case-exec":"выполниь","bloq-case-default-inOtherCase":"иначе выполниь","bloq-continue-continue":"Продолжить со следующей итерацией цикла","bloq-else-else":"иначе выполниь","bloq-else-if-if":"вместо этого, если","bloq-else-if-else":"выполниь","bloq-for-count":"Считать с","bloq-for-from":"от","bloq-for-to":"до","bloq-for-add":"суммируя","bloq-for-subtract":"вычитая","bloq-for-exec":"выполниь","bloq-if-if":"Си","bloq-if-exec":"выполниь","bloq-switch-check":"Проверить, каково значение","bloq-wait-wait":"Подождать","bloq-while-while":"Пока","bloq-while-exec":"выполниь","bloq-argument-var":"Переменная","bloq-argument-float":"Десятичный","bloq-argument-string":"Текст","bloq-argument-bool":"Булева переменная","bloq-invoke-function-exec":"Выполнить","bloq-invoke-return-function-exec":"Выполнить","bloq-invoke-function-args":"со следующими аргументами:","bloq-return-return":"Вернуться","bloq-return-function-declare":"Объявить функцию","bloq-return-function-return":"Вернуться","bloq-return-function-with-arguments-declare":"Объявить функцию","bloq-return-function-with-arguments-count":"считая с","bloq-return-function-with-arguments-return":"Вернуться","bloq-void-function-declare":"Объявить функцию","bloq-void-function-with-arguments-declare":"Объявить функцию","bloq-void-function-with-arguments-count":"считая с","bloq-boolArray-advanced-arraySize":"Массив с размером","bloq-boolArray-advanced-boolType":"и логического типа","bloq-boolArray-arraySize":"Массив с размером","bloq-boolArray-boolType":"и логического типа","bloq-boolean-true":"Истина","bloq-boolean-false":"Ложь","bloq-logic-operations-and":"и","bloq-logic-operations-or":"или","bloq-not-not":"not","bloq-loop-header":"цикл Loop","bloq-loop-description":"Создайте программу, которая будет выполняться непрерывно после установки.","bloq-setup-header":"Установка","bloq-setup-description":"Укажите то, что должно выполняться при запуске программы и только однократно.","bloq-var-header":"Глобальные переменные и функции","bloq-var-description":" Определите значения, которые будете использовать в Установке и цикле Loop; вы также можете создавать функции для группирования блоков.","bloq-numberArray-advanced-arraySize":"Массив с размером","bloq-numberArray-advanced-type":"и типа","bloq-numberArray-advanced-float":"десятеричный","bloq-numberArray-advanced-int":"целый","bloq-map-map":"Нанести на карту","bloq-map-value":"значение от [0- до ","bloq-map-advanced-map":"Нанести на карту","bloq-map-advanced-value":"от [","bloq-map-advanced-and":" до [","bloq-math-operations-sqrt":"Квадратный корень","bloq-math-operations-abs":"Абсолютное значение","bloq-numberArray-arraySize":"Массив с размером","bloq-numberArray-floatType":"и типа float","bloq-random-random":"Случайное значение между","bloq-random-and":"и","bloq-stringArray-advanced-arraySize":"Массив с размером","bloq-stringArray-advanced-type":"и типа","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"Длина","bloq-string-string":"Текст","bloq-stringArray-arraySize":"Массив с размером","bloq-stringArray-stringType":"и текстового типа","bloq-string-create-create":"Создать текст с","bloq-hw-variable-advanced-variable":"Переменная (компоненты)","bloq-sw-variable-advanced-variable":"Переменная (компоненты)","bloq-array-variable-variable":"Переменная","bloq-declare-variable-declare":"Объявить переменную","bloq-declare-variable-declare-type":"типа","bloq-declare-variable-declare-type-int":"целого","bloq-declare-variable-declare-type-float":"десятичного","bloq-declare-variable-declare-type-text":"текстового","bloq-declare-variable-declare-type-char":"символьного","bloq-declare-variable-declare-type-bool":"логическое значение","bloq-select-variable-variable":"Переменная","bloq-set-variableArray-variable":"Переменная","bloq-set-variable-variable":" 'Переменная","bloq-char":"Символ","bloq-lcd-default":"Привет!","bloq-comment-default":"Написать комментарий","bloq-functions-default":"Имя","bloq-wait-ms":"мс","drag-bloq":"Перетащите блок сюда, чтобы начать вашу программу","bloq-invoke-class-function-class":"объекта","bloq-invoke-arguments-class":"Создать объект класса","bloq-invoke-arguments-class-name":"с именем","bloq-invoke-arguments-args":"со следующими аргументами","bloq-invoke-class-return-function-exec":"Выполнить функцию","bloq-invoke-class-function-exec":"Выполнить функцию","bloq-invoke-class-function-args":"со следующими аргументами","bloq-invoke-class-return-function-args-exec":"Выполнить функцию","bloq-invoke-class-return-function-args-class":"объекта","bloq-invoke-class-return-function-args-args":"со следующими аргументами","bloq-set-class-variable-variable":"Переменная","bloq-set-class-variableArray-variable":"Переменная","bloq-select-class-variable-variable":"Переменная","bloq-array-class-variable-variable":"Переменная","bloq-constructor":"Конструктор","bloq-constructor-arguments":"Конструктор, использующий следующие аргументы","bloq-invoke-class":"Создать объект класса","bloq-invoke-class-name":"с именем","bloq-class":"Объявить класс","bloq-class-default":"Имя","bloq-class-from":"de","bloq-class-inheritance-type":"путем наследования","bloq-class-inheritance-public":"публичного","bloq-class-inheritance-protected":"защищенного","bloq-class-inheritance-private":"приватного","bloq-public":"Публичные переменные и функции:","bloq-protected":"Защищенные переменные и функции:","bloq-private":"Приватные переменные и функции:","bloq-include-lib-exec":"Подключить библиотеку","bloq-pin-analog-write":"Записать на аналоговый выход","bloq-pin-digital-write":"Записать на цифровой выход","bloq-pin-analog-write-data":"элемент данных","bloq-pin-digital-write-data":"элемент данных","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"иди","bloq-zowi-movements-turn":"повернись","bloq-zowi-movements-height-moonwalker":"сделай «лунную походку» (moonwalker)","bloq-zowi-movements-height-crusaito":"сделай перекрестный шаг","bloq-zowi-movements-height-flapping":"пошевелись","bloq-zowi-movements-shakeleg":"подвигай ногами","bloq-zowi-movements-bend":"наклонись","bloq-zowi-movements-forward":"вперед","bloq-zowi-movements-backward":"назад","bloq-zowi-movements-left":"влево","bloq-zowi-movements-right":"вправо","bloq-zowi-movements-speed":"раз со скоростью","bloq-zowi-mouth":"Zowi: изобрази","bloq-zowi-mouth-mouth":"на своем лице","bloq-zowi-mouth-smile":"улыбку","bloq-zowi-mouth-sad":"грустное выражение","bloq-zowi-mouth-happy":"веселое выражение","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"вперед","bloq-zowi-movements-height-backward":"назад","bloq-zowi-movements-height-left":"влево","bloq-zowi-movements-height-right":"вправо","bloq-zowi-movements-height-speed":"раз со скоростью","bloq-zowi-movements-height-height":"и высота","bloq-zowi-movements-height-big":"большая","bloq-zowi-movements-height-medium":"средняя","bloq-zowi-movements-height-small":"небольшая","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"поднимись и спустись","bloq-zowi-movements-no-dir-swing":"покачайся","bloq-zowi-movements-no-dir-tiptoeSwing":"покачайся на носках","bloq-zowi-movements-no-dir-jitter":"потрясись","bloq-zowi-movements-no-dir-ascendingTurn":"повернись во время подъема","bloq-zowi-movements-no-dir-jump":"прыгни","bloq-zowi-movements-no-dir-speed":"раз со скоростью","bloq-zowi-movements-no-dir-height":"и высота","bloq-zowi-movements-no-dir-big":"большая","bloq-zowi-movements-no-dir-medium":"средняя","bloq-zowi-movements-no-dir-small":"небольшая","bloq-zowi-sounds":"Zowi: спой"},"zh-CN":{"bloq-break-stopLoop":"中断环","bloq-code-writeYourCode":"编写自己的代码","bloq-comment-comment":"注解 //","bloq-convert-convert":"换","bloq-convert-to":"乘","bloq-convert-dec":"十进制","bloq-convert-hex":"十六进制","bloq-convert-oct":"八进制","bloq-convert-bin":"二进制","bloq-serial-receiver-receive":"接受","bloq-serial-send-send":"发送","bloq-serial-send-print":"不换行","bloq-serial-send-println":"换行","bloq-buzzer-advance-sound":"蜂鸣器","bloq-buzzer-advance-note":"与音符","bloq-buzzer-advance-for":"在","bloq-buzzer-advance-ms":"ms","bloq-digital-read-advanced-readpin":"阅读数字引脚","bloq-analog-read-advanced-readpin":"阅读模拟引脚","bloq-continuous-servo-start-advanced-turn":"转伺服","bloq-continuous-servo-start-advanced-direction":"反向","bloq-continuous-servo-start-advanced-clockwise":"顺时针","bloq-continuous-servo-start-advanced-counterclockwise":"逆时针","bloq-continuous-servo-stop-advanced-stop":"停止伺服","bloq-lcd-turn-on-off-advanced-turnon":"开","bloq-lcd-turn-on-off-advanced-turnoff":"关","bloq-lcd-turn-on-off-advanced-lcdLigth":"LCD光","bloq-lcd-clear":"删除LCD的内容","bloq-lcd-writte-advanced-write":"写","bloq-lcd-writte-advanced-inLCD":"在LCD","bloq-lcd-writte-advanced-inPosition":"开始位置（列，行）","bloq-led-advanced-turnon":"开","bloq-led-advanced-turnoff":"关","bloq-led-advanced-theLED":"LED","bloq-oscillator-advanced-oscillate":"摇动伺服","bloq-oscillator-advanced-around":"周围","bloq-oscillator-advanced-amplitude":"广","bloq-oscillator-advanced-speed":"速度","bloq-oscillator-start-advanced-oscillator":"播放振荡器","bloq-oscillator-stop-advanced-stop":"停止振荡器","bloq-pin-read-advanced-readpin":"阅读引脚","bloq-pin-writte-advanced-writepin":"写在引脚","bloq-pin-writte-advanced-data":"数据","bloq-read-advanced-read":"读","bloq-servo-advanced-move":"动","bloq-servo-advanced-to":"到","bloq-servo-advanced-degrees":"度","bloq-buzzer-sound":"蜂鸣器","bloq-buzzer-note":"与音符","bloq-buzzer-for":"在","bloq-buzzer-ms":"ms","bloq-buzzer-do":"Do","bloq-buzzer-re":"Re","bloq-buzzer-mi":"Mi","bloq-buzzer-fa":"Fa","bloq-buzzer-sol":"Sol","bloq-buzzer-la":"La","bloq-buzzer-si":"Si","bloq-continuous-servo-start-turn":"转伺服","bloq-continuous-servo-start-direction":"反向","bloq-continuous-servo-start-clockwise":"顺时针","bloq-continuous-servo-start-counterclockwise":"逆时针","bloq-continuous-servo-stop-stop":"停止伺服","bloq-lcd-turn-on-off-turnon":"开","bloq-lcd-turn-on-off-turnoff":"关","bloq-lcd-turn-on-off-lcdLigth":"LCD光","bloq-lcd-writte-write":"写","bloq-lcd-writte-inLCD":"在LCD","bloq-led-turnon":"开","bloq-led-turnoff":"关","bloq-led-theLED":"LED","bloq-oscillator-oscillate":"摇动伺服","bloq-oscillator-around":"周围","bloq-oscillator-amplitude":"广","bloq-oscillator-speed":"速度","bloq-oscillator-times":"次","bloq-oscillator-start-oscillator":"播放振荡器","bloq-oscillator-stop-stop":"停止振荡器","bloq-read-read":"读","bloq-servo-move":"动","bloq-servo-to":"乘","bloq-servo-degrees":"度","bloq-case-ifSameTo":"如果它等于","bloq-case-exec":"跑:","bloq-case-default-inOtherCase":"否则，跑:","bloq-continue-continue":"继续本循环下一个迭代","bloq-else-else":"否则，跑:","bloq-else-if-if":"否则，如果:","bloq-else-if-else":"跑:","bloq-for-count":"加","bloq-for-from":"从","bloq-for-to":"到","bloq-for-add":"加","bloq-for-subtract":"减","bloq-for-exec":"跑:","bloq-if-if":"如果","bloq-if-exec":"跑:","bloq-switch-check":"检查有什么价值","bloq-wait-wait":"等","bloq-while-while":"同时","bloq-while-exec":"跑:","bloq-argument-var":"变量","bloq-argument-float":"十进制","bloq-argument-string":"文字","bloq-argument-bool":"Boolean","bloq-invoke-function-exec":"跑","bloq-invoke-return-function-exec":"跑","bloq-invoke-function-args":"与以下参数：","bloq-return-return":"收","bloq-return-function-declare":"宣告子程序","bloq-return-function-return":"收","bloq-return-function-with-arguments-declare":"宣告子程序","bloq-return-function-with-arguments-count":"与以下参数：","bloq-return-function-with-arguments-return":"收","bloq-void-function-declare":"宣告子程序","bloq-void-function-with-arguments-declare":"宣告子程序","bloq-void-function-with-arguments-count":"与以下参数：","bloq-boolArray-advanced-arraySize":"数组大小","bloq-boolArray-advanced-boolType":"布尔","bloq-boolArray-arraySize":"数组大小","bloq-boolArray-boolType":"布尔","bloq-boolean-true":"真","bloq-boolean-false":"假","bloq-logic-operations-and":"和","bloq-logic-operations-or":"或","bloq-not-not":"不","bloq-loop-header":"控制流程 (loop)","bloq-loop-description":"创建要安装后继续运行的程序","bloq-setup-header":"初始指令（设置）","bloq-setup-description":"请表示在程序的开头要运行一次。","bloq-var-header":"全局变量, 子程序和类","bloq-var-description":"请定义使用在设置和循环的价值观, 你也可以把功能组块在一起。","bloq-numberArray-advanced-arraySize":"数组大小","bloq-numberArray-advanced-type":"和类型","bloq-numberArray-advanced-float":"十进制","bloq-numberArray-advanced-int":"整数","bloq-map-map":"制图","bloq-map-value":"从[0-","bloq-map-advanced-map":"制图","bloq-map-advanced-value":"[","bloq-map-advanced-and":"]到[","bloq-math-operations-sqrt":"平方根","bloq-math-operations-abs":"绝对值","bloq-numberArray-arraySize":"数组大小","bloq-numberArray-floatType":"浮点数","bloq-random-random":"随机的","bloq-random-and":"和","bloq-stringArray-advanced-arraySize":"数组大小","bloq-stringArray-advanced-type":"和类型","bloq-stringArray-advanced-string":"String","bloq-stringArray-advanced-char":"Char","bloq-length-length":"长短","bloq-string-string":"文字","bloq-stringArray-arraySize":"数组大小","bloq-stringArray-stringType":"和文字类型","bloq-string-create-create":"创建文字","bloq-hw-variable-advanced-variable":"变量（组件）","bloq-sw-variable-advanced-variable":"变量（代码）","bloq-array-variable-variable":"变量","bloq-declare-variable-declare":"宣告变量","bloq-declare-variable-declare-type":"和类型","bloq-declare-variable-declare-type-int":"整数","bloq-declare-variable-declare-type-float":"十进制","bloq-declare-variable-declare-type-text":"文字","bloq-declare-variable-declare-type-char":"字符","bloq-declare-variable-declare-type-bool":"布尔","bloq-select-variable-variable":"变量","bloq-set-variableArray-variable":"变量","bloq-set-variable-variable":"变量","bloq-char":"字符","bloq-lcd-default":"您好！","bloq-comment-default":"写评论","bloq-functions-default":"名字","bloq-wait-ms":"ms","drag-bloq":"为了开始你的程序,请拖动你的块到这里","bloq-invoke-class-function-class":"对象","bloq-invoke-arguments-class":"创建一个在本类的对象","bloq-invoke-arguments-class-name":"命名","bloq-invoke-arguments-args":"以下参数","bloq-invoke-class-return-function-exec":"跑这个子程序","bloq-invoke-class-function-exec":"跑这个子程序","bloq-invoke-class-function-args":"以下参数","bloq-invoke-class-return-function-args-exec":"跑这个子程序","bloq-invoke-class-return-function-args-class":"对象","bloq-invoke-class-return-function-args-args":"以下参数","bloq-set-class-variable-variable":"变量","bloq-set-class-variableArray-variable":"变量","bloq-select-class-variable-variable":"变量","bloq-array-class-variable-variable":"变量","bloq-constructor":"构造函数","bloq-constructor-arguments":"使用下列参数的构造函数","bloq-invoke-class":"创建一个在本类的对象","bloq-invoke-class-name":"命名","bloq-class":"宣告类","bloq-class-default":"名字","bloq-class-from":"的","bloq-class-inheritance-type":"继承","bloq-class-inheritance-public":"公开","bloq-class-inheritance-protected":"保护","bloq-class-inheritance-private":"私有","bloq-public":"变量和公共子程序","bloq-protected":"变量和保护子程序","bloq-private":"变量和私有子程序","bloq-include-lib-exec":"包括函式庫","bloq-pin-analog-write":"写在模拟引脚","bloq-pin-digital-write":"写在数字引脚","bloq-pin-analog-write-data":"数据","bloq-pin-digital-write-data":"数据","bloq-zowi-movements":"Zowi:","bloq-zowi-movements-walk":"走","bloq-zowi-movements-turn":"转","bloq-zowi-movements-height-moonwalker":"月球漫步","bloq-zowi-movements-height-crusaito":"束交叉步","bloq-zowi-movements-height-flapping":"摇动","bloq-zowi-movements-shakeleg":"移动你的腿","bloq-zowi-movements-bend":"弯","bloq-zowi-movements-forward":"向前","bloq-zowi-movements-backward":"向后","bloq-zowi-movements-left":"左","bloq-zowi-movements-right":"右","bloq-zowi-mouth":"Zowi: 画","bloq-zowi-mouth-mouth":"你的嘴","bloq-zowi-mouth-smile":"笑","bloq-zowi-mouth-sad":"哭脸","bloq-zowi-mouth-happy":"笑脸","bloq-zowi-movements-height":"Zowi:","bloq-zowi-movements-height-forward":"向前","bloq-zowi-movements-height-backward":"向后","bloq-zowi-movements-height-left":"左","bloq-zowi-movements-height-right":"右","bloq-zowi-movements-height-height":"和一个高度","bloq-zowi-movements-height-big":"高","bloq-zowi-movements-height-medium":"中等","bloq-zowi-movements-height-small":"低","bloq-zowi-movements-no-dir":"Zowi:","bloq-zowi-movements-no-dir-updown":"高低","bloq-zowi-movements-no-dir-swing":"摇摆","bloq-zowi-movements-no-dir-tiptoeSwing":"踮着脚尖摇摆","bloq-zowi-movements-no-dir-jitter":"摇抖","bloq-zowi-movements-no-dir-ascendingTurn":"当你身请旋转","bloq-zowi-movements-no-dir-jump":"跳","bloq-zowi-movements-no-dir-height":"和一个高度","bloq-zowi-movements-no-dir-big":"高","bloq-zowi-movements-no-dir-medium":"中等","bloq-zowi-movements-no-dir-small":"低","bloq-zowi-sounds":"Zowi:唱","bloq-hts221-humidity":"阅读湿度传感器","bloq-hts221-temperature":"阅读温度传感器","bloq-rgbLed-fade-red":"与红色的值","bloq-enable-interrupt":"跑这个子程序","bloq-enable-interrupt-rising":"从0更改为1","bloq-enable-interrupt-falling":"从1更改为0","bloq-enable-interrupt-change":"变","bloq-enable-interrupt-pin":"当输入在引脚","bloq-rgbLed-green":"绿色的值","bloq-rgbLed-fade":"创建RGB颜色渐变","bloq-rgbLed-red":"与红色的值","bloq-rtc-init":"更新时钟的日期和时间","bloq-rtc-month":"月","bloq-rtc-using-advanced":"用时钟","bloq-rtc-year":"年","bloq-rtc-day":"日","bloq-rtc-hour":"时间","bloq-rtc-minute":"分","bloq-rtc-second":"秒","bloq-rtc-time":"时间","bloq-rtc-using":"用时钟","bloq-rtc-advanced":"得到","bloq-rtc":"得到","default-var-name-rtc":"实时时钟","bloq-rtc-date":"日期","default-var-name-sound":"声音传感器","bloq-rgbLed-blue":"蓝色的值","default-var-name-RGBled":"led_RGB","bloq-rgbLed":"打开RGB LED ","bloq-rgbLed-fade-blue":"蓝色的值","bloq-rgbLed-fade-green":"绿色的值"}};
        bloqsLanguages.texts = texts;
    return bloqsLanguages;
})(window.bloqsLanguages = window.bloqsLanguages || {}, undefined);

'use strict';
(function(bloqsUtils, _) {



    var isNumeric = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    /**
     * If the param is not a number, we set it to ''
     * @param  number
     */

    var validNumber = function(number) {
        var temp = number;
        var removedChar = 0;
        var i = 0;
        if (number[0] === '-') {
            temp = number.substring(1);
            i = 1;
        }
        // var count = occurrencesInString(number, '.', false);
        var index = number.indexOf('.');
        while (i < number.length) {
            if ((number[i] === '.' && index < i) || (!isNumeric(number[i]) && number[i] !== '.')) {
                number = number.slice(0, i) + number.slice(i + 1, number.length);
                removedChar += 1;
            } else {
                i++;
            }
        }

        return {
            value: number,
            removedChar: removedChar
        };
    };

    var getCaretPosition = function(el) {
        if (el.selectionStart) {
            return el.selectionStart;
        } else if (document.selection) {
            el.focus();

            var r = document.selection.createRange();
            if (r === null) {
                return 0;
            }

            var re = el.createTextRange(),
                rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);

            return rc.text.length;
        }
        return 0;
    };

    var setCaretPosition = function(ctrl, pos) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    /**
     * If the param has non escaped characters, escape them
     * @param  value
     */
    var validString = function(value) {
        value = value.replace(/(^|\b|[^\\])(\\\\)*\\$/g, '$&\\');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\")/g, '$1\\$2');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\/\*)/g, '$1\\$2');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\/\/)/g, '$1\\$2');
        value = value.replace(/\$\'/g, '\$\\\'');
        value = value.replace(/\$\&/g, '\$\\\&');

        return value;
    };

    /**
     * Return the first valid char from a string
     * @param  value
     */
    var validChar = function(value) {
        value = value.replace(/\$*/g, '');
        if (/^\\/g.test(value)) {
            if (/^\\([0-7]{1,3}|x[0-9A-F]{1,2}|u[0-9A-F]{1,4})/g.test(value)) {
                value = value.match(/^\\([0-7]{1,3}|x[0-9A-F]{1,2}|u[0-9A-F]{1,4})/g)[0];
            } else if (/^\\[bfnrtv0']/g.test(value)) {
                value = value.substring(0, 2);
            } else if (/^\\[%#!|"@~&?\/()=^`[+\]*,{};.:-]/g.test(value)) {
                value = value.charAt(1);
            } else {
                value = '\\\\';
            }
        } else if (/^(\')/g.test(value)) {
            value = '\\\'';
        } else {
            value = value.charAt(0);
        }

        return value;
    };

    /**
     * If the param has a comment end, omit it
     * @param  value
     */
    var validComment = function(value) {
        value = value.replace(/\*\//g, '');
        value = value.replace(/\$\'/g, '\$\\\'');
        value = value.replace(/\$\&/g, '\$\\\&');

        return value;
    };

    /**
     * Transform a function or variable name to make it "legal" in Arduino coding language
     * @param  name
     */
    var validName = function(name, softwareArrays) {
        var reservedWords = 'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bool,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts';
        reservedWords = reservedWords.split(',');
        if (name && name.length > 0) {
            var i = 0,
                j = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            //Remove all diacritics
            name = removeDiacritics(name);
            i = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            for (j = 0; j < reservedWords.length; j++) {
                if (name === reservedWords[j]) {
                    name += '_';
                    break;
                }
            }
            var counter = [];
            if (softwareArrays) {
                var softwareVars = softwareArrays.softwareVars.concat(softwareArrays.voidFunctions, softwareArrays.returnFunctions);
                for (j = 0; j < softwareVars.length; j++) {
                    if (name === softwareVars[j].name) {
                        counter.push(j);

                    }
                }
                if (counter.length === 2) {
                    j = counter[1];
                    console.log('name === softwareVars[j].name', name === softwareVars[j].name, name, softwareVars[j].name);
                    if (isNaN(name[name.length - 1])) {
                        name += '1';
                    } else {
                        i = 0;
                        var number, it;
                        while (isNaN(name[i])) {
                            it = i;
                            i++;
                        }
                        number = parseInt(name.substring(it + 1, name.length), 10);
                        number += 1;
                        name = name.substring(0, it + 1);
                        name += number.toString();
                    }
                }
            }
        }
        return name;
    };

    var appendArrayInOneTime = function($container, $items) {
        var rawArray = $.map(
            $items,
            function(value) {

                // Return the unwrapped version. This will return
                // the underlying DOM nodes contained within each
                // jQuery value.
                return (value.get());

            }
        );

        // Add the raw DOM array to the current collection.
        $container.append(rawArray);
    };

    var generateUUID = function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    var getNumericStyleProperty = function(style, prop) {
        return parseInt(style.getPropertyValue(prop), 10);
    };

    var drawDropdownOptions = function($element, arrayOptions) {
        var $tempElement, i,
            $items = [];

        $element.html('');
        for (i = 0; i < arrayOptions.length; i++) {
            $tempElement = $('<option>').attr({
                'data-var-id': arrayOptions[i].id,
                value: arrayOptions[i].name,
                'data-reference': arrayOptions[i].uid
            }).html(arrayOptions[i].name);
            $items.push($tempElement);
        }
        appendArrayInOneTime($element, $items);
    };

    var itsOver = function(dragConnector, dropConnector, margin) {
        margin = margin || 0;
        var dragConnectorOffset = dragConnector.offset(),
            dropConnectorOffset = dropConnector.offset();
        return dragConnectorOffset.left < (dropConnectorOffset.left + dropConnector[0].clientWidth + margin) && (dragConnectorOffset.left + dragConnector[0].clientWidth) > (dropConnectorOffset.left - margin) && dragConnectorOffset.top < (dropConnectorOffset.top + dropConnector[0].clientHeight + margin) && (dragConnectorOffset.top + dragConnector[0].clientHeight) > (dropConnectorOffset.top - margin);
    };

    var sameConnectionType = function(dragBloq, dropBloq, dropConnectorAcceptType, bloqs, IOConnectors, softwareArrays) {
        var dragConnectorType = getTypeFromBloq(dragBloq, bloqs, IOConnectors, softwareArrays);
        if (typeof(dropConnectorAcceptType) === 'object') {
            dropConnectorAcceptType = getTypeFromDynamicDropdown(dropBloq, dropConnectorAcceptType, softwareArrays);
        }
        return (dragConnectorType === 'all') || (dropConnectorAcceptType === 'all') || (dragConnectorType === dropConnectorAcceptType);
    };

    var getTypeFromDynamicDropdown = function(bloq, typeObject, softwareArrays) {
        var attributeValue = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"]').attr('data-value');
        var selectedValue = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"]').val();
        var selectedVarNameOnDropdown = attributeValue || selectedValue;

        if (!selectedVarNameOnDropdown) {
            //rare bug, maybe the timeout, cant get the value of a options create disabled and enabled later
            //selectedVarNameOnDropdown = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"] option:first-child').val();
            ////or maybe a empty set var bloq :D
            //throw 'check this!';
        }

        var varData = _.find(softwareArrays[typeObject.options], {
            name: selectedVarNameOnDropdown
        });
        if (varData) {
            if (typeObject.pointer) {
                varData.type = varData.type.replace(' *', '');
            }
            return varData.type;
        }
        return '';

    };
    var getFromDynamicDropdownType = function(bloq, idDropdown, options, softwareArrays, componentsArray) {
        var attributeValue = bloq.$bloq.find('select[data-content-id="' + idDropdown + '"][data-dropdowncontent="' + options + '"]').attr('data-value');
        var selectedValue = bloq.$bloq.find('select[data-content-id="' + idDropdown + '"][data-dropdowncontent="' + options + '"]').val();
        var varName = attributeValue || selectedValue;

        var softVar = _.find(softwareArrays[options], {
            name: varName
        });
        if (!softVar) {
            for (var j in componentsArray.sensors) {
                if (componentsArray.sensors[j].name === varName) {
                    if (componentsArray.sensors[j].type === 'Joystick' || componentsArray.sensors[j].type === 'LineFollower') {
                        return 'float *';
                    } else if (componentsArray.sensors[j].type === 'ButtonPad') {
                        return 'char';
                    } else {
                        return 'float';
                    }
                }
            }
        }
        if (softVar) {
            if (bloq.bloqData && bloq.bloqData.returnType && bloq.bloqData.returnType.pointer) {
                softVar.type = softVar.type.replace(' *', '');
            }
            return softVar.type;
        }
        return '';
    };

    /**
     * Get the extreme of the tree, the root or the leaf
     * @param  bloqUuid
     * @param  connectors
     * @param  bloqs
     * @param  connectorPosition 0: tipical position of the top-connector, 1: bottom-connector
     * @return
     */
    var getTreeExtreme = function(bloqUuid, bloqs, connectors, connectorPosition) {
        if (connectors[bloqs[bloqUuid].connectors[connectorPosition]].connectedTo) {
            return getTreeExtreme(connectors[connectors[bloqs[bloqUuid].connectors[connectorPosition]].connectedTo].bloqUuid, bloqs, connectors, connectorPosition);
        } else {
            return bloqs[bloqUuid].connectors[connectorPosition];
        }
    };
    /**
     * From a bloq, this function get the bottom Connector of the branch.
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getLastBottomConnectorUuid = function(bloqUuid, bloqs, connectors) {
        return getTreeExtreme(bloqUuid, bloqs, connectors, 1);
    };
    /**
     * From a bloq, this function get the top Connector of the branch.
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getFirstTopConnectorUuid = function(bloqUuid, bloqs, connectors) {
        return getTreeExtreme(bloqUuid, bloqs, connectors, 0);
    };
    /**
     * Get the output connector from a output bloq
     * @param  bloq
     * @param  IOConnectors
     * @return              the connector
     */
    var getOutputConnector = function(bloq, IOConnectors) {
        var i = 0,
            outputConnector = null;
        while (!outputConnector && (i < bloq.IOConnectors.length)) {
            if (IOConnectors[bloq.IOConnectors[i]].data.type === 'connector--output') {
                outputConnector = IOConnectors[bloq.IOConnectors[i]];
            }
            i++;
        }
        if (!outputConnector) {
            throw 'outputBloq has no connector-output';
        } else {
            return outputConnector;
        }
    };
    /**
     * Receive a bloq, and if is top go to the bottom connector until the end, and gice the size
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} bloqIsTop  [description]
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var getNodesHeight = function(bloqUuid, bloqIsTop, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var connectorPosition;
        if (bloqIsTop) {
            connectorPosition = 1;
        } else {
            connectorPosition = 0;
        }
        if (connectors[bloq.connectors[connectorPosition]].connectedTo) {
            return bloq.$bloq.outerHeight(true) + getNodesHeight(connectors[connectors[bloq.connectors[connectorPosition]].connectedTo].bloqUuid, bloqIsTop, bloqs, connectors);
        } else {
            return bloq.$bloq.outerHeight(true);
        }
    };
    /**
     * You can give any node of the tree, and return the size in px
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var getTreeHeight = function(bloqUuid, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var topConnectorUuid = connectors[bloq.connectors[0]].connectedTo,
            bottomConnectorUuid = connectors[bloq.connectors[1]].connectedTo;
        var height = bloq.$bloq.outerHeight(true);
        if (topConnectorUuid) {
            height += getNodesHeight(connectors[topConnectorUuid].bloqUuid, false, bloqs, connectors);
        }
        if (bottomConnectorUuid) {
            height += getNodesHeight(connectors[bottomConnectorUuid].bloqUuid, true, bloqs, connectors);
        }
        return height;
    };
    /**
     * draw in console a branch
     * @param  {[type]} bloqs            [description]
     * @param  {[type]} connectors       [description]
     * @param  {[type]} topConnectorUuid [description]
     * @return {[type]}                  [description]
     */
    var drawBranch = function(bloqs, connectors, topConnectorUuid) {
        var branchUuid = connectors[topConnectorUuid].bloqUuid;
        console.log('          ******* - branch - *********', branchUuid);
        console.log('          connector--top:', bloqs[branchUuid].connectors[0], 'connectedTo', connectors[bloqs[branchUuid].connectors[0]].connectedTo);
        console.log('          connector--bottom:', bloqs[branchUuid].connectors[1], 'connectedTo', connectors[bloqs[branchUuid].connectors[1]].connectedTo);
        if (bloqs[branchUuid].connectors[2]) {
            console.log('       connector--root:', bloqs[branchUuid].connectors[2], 'connectedTo', connectors[bloqs[branchUuid].connectors[2]].connectedTo);
            console.log('                       ******* -  content **********');
            if (connectors[bloqs[branchUuid].connectors[2]].connectedTo) {
                drawBranch(bloqs, connectors, connectors[bloqs[branchUuid].connectors[2]].connectedTo);
            }
            console.log('                       ******* - end content **********');
        }
        if (connectors[bloqs[branchUuid].connectors[1]].connectedTo) {
            drawBranch(bloqs, connectors, connectors[bloqs[branchUuid].connectors[1]].connectedTo);
        }
    };
    /**
     * Draw in console the tree
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var drawTree = function(bloqs, connectors) {
        console.log('drawtree');
        //buscamos los tipo statement q no tienen un top conectado
        for (var uuid in bloqs) {
            //console.log(bloqs[uuid]);
            if (bloqs[uuid].droppable && bloqs[uuid].connectors[0] && !connectors[bloqs[uuid].connectors[0]].connectedTo) {
                switch (bloqs[uuid].bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        console.log('******* - tree - *********', uuid);
                        console.log('connector--top:', bloqs[uuid].connectors[0], 'connectedTo', connectors[bloqs[uuid].connectors[0]].connectedTo);
                        console.log('connector--bottom:', bloqs[uuid].connectors[1], 'connectedTo', connectors[bloqs[uuid].connectors[1]].connectedTo);
                        if (bloqs[uuid].connectors[2]) {
                            console.log('connector--root:', bloqs[uuid].connectors[2], 'connectedTo', connectors[bloqs[uuid].connectors[2]].connectedTo);
                            console.log('           ccccccc -  content ccccccc');
                            if (connectors[bloqs[uuid].connectors[2]].connectedTo) {
                                drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[2]].connectedTo);
                            }
                            console.log('           ccccccc - end content ccccccc');
                        }
                        if (connectors[bloqs[uuid].connectors[1]].connectedTo) {
                            drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[1]].connectedTo);
                        }
                        break;
                    case 'group':
                        console.log('******* - Group - *********', uuid);
                        console.log('connector--root:', bloqs[uuid].connectors[2], 'connectedTo', connectors[bloqs[uuid].connectors[2]].connectedTo);
                        console.log('           ccccccc -  content ccccccc');
                        if (connectors[bloqs[uuid].connectors[2]].connectedTo) {
                            drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[2]].connectedTo);
                        }
                        console.log('           ccccccc - end content ccccccc');
                        break;
                }
            }
        }
    };
    /**
     * get all the connectors of a branch
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getBranchsConnectors = function(bloqUuid, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var result = [];
        result = result.concat(bloq.connectors);
        //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
        if (connectors[bloq.connectors[1]].connectedTo) {
            var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectors(bloqBranchUuid, connectors, bloqs));
        }
        //si tiene hijos
        if (bloq.connectors[2] && connectors[bloq.connectors[2]].connectedTo) {
            var bloqChildUuid = connectors[connectors[bloq.connectors[2]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectors(bloqChildUuid, connectors, bloqs));
        }
        return result;
    };
    var getBranchsConnectorsNoChildren = function(bloqUuid, connectors, bloqs) {
        var bloq = bloqs[bloqUuid];
        var result = [];
        result = result.concat(bloq.connectors);
        //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
        if (connectors[bloq.connectors[1]].connectedTo) {
            var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectorsNoChildren(bloqBranchUuid, connectors, bloqs));
        }
        return result;
    };

    var getConnectorsUuidByAcceptType = function(IOConnectors, type) {
        var result = [];
        for (var key in IOConnectors) {
            if (IOConnectors[key].data.acceptType === type) {
                result.push(IOConnectors[key].uuid);
            }
        }
        return result;
    };
    var getNotConnected = function(IOConnectors, uuids) {
        var result = [];
        for (var i = 0; i < uuids.length; i++) {
            if (!IOConnectors[uuids[i]].connectedTo) {
                result.push(uuids[i]);
            }
        }
        return result;
    };
    var getInputsConnectorsFromBloq = function(IOConnectors, bloqs, bloq) {
        var result = [];
        var uuid;
        // connectedBloq;
        for (var i = 0; i < bloq.IOConnectors.length; i++) {
            uuid = bloq.IOConnectors[i];
            if (IOConnectors[bloq.IOConnectors[i]] && IOConnectors[uuid].data.type === 'connector--input') {
                result.push(uuid);
            }
        }
        return result;
    };

    var removeInputsConnectorsFromBloq = function(IOConnectors, bloq) {
        //remove visually all bloqInputs
        bloq.$contentContainer.children('.bloqinput').remove();
        bloq.$contentContainer.children('.removabletext').remove();
        //remove all IOConnectors
        for (var i = 0; i < bloq.IOConnectors.length; i++) {
            if (IOConnectors[bloq.IOConnectors[i]].data.type === 'connector--input') {
                delete IOConnectors[bloq.IOConnectors[i]];
            }
        }
    };
    var generateBloqInputConnectors = function(bloq) {
        var uuid;
        for (var i = 0; i < bloq.content.length; i++) {
            for (var j = 0; j < bloq.content[i].length; j++) {
                if (bloq.content[i][j].alias === 'bloqInput') {
                    uuid = generateUUID();
                    bloq.content[i][j].name = uuid;
                    bloq.connectors.push({
                        type: 'connector--input',
                        accept: 'connector--output',
                        name: uuid
                    });
                }
            }
        }
    };
    var getBloqByConnectorUuid = function(connectorUuid, bloqs, connectors) {
        return bloqs[connectors[connectorUuid].bloqUuid];
    };

    var translateRegExp = /translate\(((-)*(\d|\.)*)px, ((-)*(\d|\.)*)px\)/;
    var redrawTree = function(bloq, bloqs, connectors) {
        var rootBloq = getBloqByConnectorUuid(getFirstTopConnectorUuid(bloq.uuid, bloqs, connectors), bloqs, connectors);

        var somethingConnectedInBottomUuid = connectors[rootBloq.connectors[1]].connectedTo,
            transformProperties = translateRegExp.exec(rootBloq.$bloq[0].style.transform),
            top,
            left,
            branchBloq;

        if (transformProperties) {
            top = parseInt(transformProperties[4]);
            left = transformProperties[1];
        } else {
            top = parseInt(rootBloq.$bloq[0].style.top) || rootBloq.$bloq.position().top;
            left = parseInt(rootBloq.$bloq[0].style.left) || rootBloq.$bloq.position().left;
        }
        top += rootBloq.$bloq.outerHeight(true);

        while (somethingConnectedInBottomUuid) {
            branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
            branchBloq.$bloq[0].style.transform = 'translate(' + left + 'px,' + top + 'px)';
            top += branchBloq.$bloq.outerHeight(true);
            somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;
        }

    };

    var itsARootConnector = function(connector) {
        return connector.data.type === 'connector--root';
    };

    var itsInsideAConnectorRoot = function(bloq, bloqs, connectors) {

        var topConnector = connectors[bloq.connectors[0]];
        if (connectors[topConnector.connectedTo]) {
            var connectedWithTopConnector = connectors[topConnector.connectedTo];
            return itsARootConnector(connectedWithTopConnector) || itsInsideAConnectorRoot(getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors), bloqs, connectors);

        } else {
            return false;
        }
    };

    var getClassName = function(bloq, bloqs, connectors) {
        var topConnector = connectors[bloq.connectors[0]];
        if (connectors[topConnector.connectedTo]) {
            var connectedWithTopConnector = connectors[topConnector.connectedTo];
            var bloqConnected = getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors);
            if (itsARootConnector(connectedWithTopConnector) && (bloqConnected.bloqData.name === 'classChildren' || bloqConnected.bloqData.name === 'class')) {
                return bloqConnected.$bloq.find('[data-content-id="NAME"]').val();
            } else {
                return getClassName(getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors), bloqs, connectors);
            }
        } else {
            return undefined;
        }
    };

    var jqueryObjectsArrayToHtmlToInsert = function(arrayToTransform) {
        var rawArray = $.map(
            arrayToTransform,
            function(value) {

                // Return the unwrapped version. This will return
                // the underlying DOM nodes contained within each
                // jQuery value.
                return (value.get());

            }
        );
        return rawArray;
    };

    var connectorIsInBranch = function(connectorUuid, topBloqUuid, bloqs, connectors) {
        var isInBloq = false;
        var i = 0;
        //miro si es uno de mis conectores
        while (!isInBloq && (i < bloqs[topBloqUuid].connectors.length)) {
            if (bloqs[topBloqUuid].connectors[i] === connectorUuid) {
                isInBloq = true;
            } else {
                i++;
            }
        }
        i = 0;
        while (!isInBloq && (i < bloqs[topBloqUuid].IOConnectors.length)) {
            if (bloqs[topBloqUuid].IOConnectors[i] === connectorUuid) {
                isInBloq = true;
            } else {
                i++;
            }
        }
        //si tengo hijos miro en ellos
        if (!isInBloq && bloqs[topBloqUuid].connectors[2] && connectors[bloqs[topBloqUuid].connectors[2]].connectedTo) {
            isInBloq = connectorIsInBranch(connectorUuid, connectors[connectors[bloqs[topBloqUuid].connectors[2]].connectedTo].bloqUuid, bloqs, connectors);
        }
        //si tengo enganchado algo abajo miro en ellos
        if (!isInBloq && bloqs[topBloqUuid].connectors[1] && connectors[bloqs[topBloqUuid].connectors[1]].connectedTo) {
            isInBloq = connectorIsInBranch(connectorUuid, connectors[connectors[bloqs[topBloqUuid].connectors[1]].connectedTo].bloqUuid, bloqs, connectors);
        }
        return isInBloq;
    };

    var hasClass = function(el, selector) {
        var className = ' ' + selector + ' ';

        if ((' ' + el.className + ' ').replace(/[\n\t]/g, ' ').indexOf(className) > -1) {
            return true;
        }

        return false;
    };

    var getTypeFromBloq = function(bloq, bloqs, IOConnectors, softwareArrays) {
        var result;
        if (!bloq) {
            console.error('We cant get the type if we dont have a bloq');
        }
        if (!bloq.bloqData.returnType) {
            console.error('we cant get the type from a bloq without returnType ' + bloq.bloqData.name);
        }
        switch (bloq.bloqData.returnType.type) {
            case 'simple':
                result = bloq.bloqData.returnType.value;
                break;
            case 'fromInput':
                var contentData = _.find(bloq.bloqData.content[0], {
                    bloqInputId: bloq.bloqData.returnType.bloqInputId
                });
                var connector = _.find(IOConnectors, {
                    bloqUuid: bloq.uuid,
                    data: {
                        name: contentData.name
                    }
                });
                if (connector && connector.connectedTo) {
                    result = getTypeFromBloq(getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors), bloqs, IOConnectors, softwareArrays);
                } else {
                    result = '';
                }
                break;
            case 'fromDynamicDropdown':
                result = getFromDynamicDropdownType(bloq, bloq.bloqData.returnType.idDropdown, bloq.bloqData.returnType.options, softwareArrays, bloq.componentsArray);
                break;
            case 'fromDropdown':
                result = bloq.$bloq.find('[data-content-id="' + bloq.bloqData.returnType.idDropdown + '"]').val();
                break;
            default:
                throw 'we cant get the type from this bloq: ' + bloq.bloqData.name + ' ' + JSON.stringify(bloq.bloqData.returnType);
        }
        return result;
    };
    var occurrencesInString = function(string, subString, allowOverlapping) {
        string += '';
        subString += '';
        if (subString.length <= 0) {
            return string.length + 1;
        }

        var n = 0,
            pos = 0;
        var step = (allowOverlapping) ? (1) : (subString.length);

        while (true) {
            pos = string.indexOf(subString, pos);
            if (pos >= 0) {
                n++;
                pos += step;
            } else {
                break;
            }
        }
        return (n);
    };

    var getParent = function(bloq, bloqs, IOConnectors) {
        var connector = getOutputConnector(bloq, IOConnectors);
        return getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors);

    };

    var getArgsFromBloq = function(bloq, bloqs, IOConnectors) {
        var result;
        if (!bloq) {
            throw 'wadafak';
        }

        while (!bloq.bloqData.arguments) {
            bloq = getParent(bloq, bloqs, IOConnectors);
        }
        var contentData = _.find(bloq.bloqData.content[0], {
            bloqInputId: bloq.bloqData.arguments.bloqInputId
        });
        var connector = _.find(IOConnectors, {
            bloqUuid: bloq.uuid,
            data: {
                name: contentData.name
            }
        });
        if (connector && connector.connectedTo) {
            var childBloq = getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors);
            var code = childBloq.getCode();
            result = {
                code: code,
                bloq: childBloq.uuid,
                funcName: '',
                size: occurrencesInString(code, ',', false) + 1
            };
        } else {
            result = {
                code: '',
                bloq: '',
                funcName: '',
                size: 0
            };
        }
        return result;
    };

    var drawSoftwareVars = function(softwareArrays) {
        for (var i = 0; i < softwareArrays.softwareVars.length; i++) {
            console.log('name: ', softwareArrays.softwareVars[i].name, 'type: ', softwareArrays.softwareVars[i].type);
        }
    };

    var drawSoftwareArray = function(softwareArrays) {
        console.info('drawSoftwareArray');
        drawSoftwareVars(softwareArrays);
        console.info('returnFunctions');
        for (var i = 0; i < softwareArrays.returnFunctions.length; i++) {
            console.log('name: ', softwareArrays.returnFunctions[i].name, 'type: ', softwareArrays.returnFunctions[i].type);
        }
    };

    var fillSchemaWithContent = function(originalBloqSchema, data) {
        var bloqSchema = _.clone(originalBloqSchema, true),
            k,
            found;

        if (data && data.content) {
            for (var i = 0; i < data.content[0].length; i++) {

                switch (data.content[0][i].alias) {
                    case 'varInput':
                    case 'numberInput':
                    case 'stringInput':
                    case 'charInput':
                    case 'dynamicDropdown':
                    case 'staticDropdown':
                    case 'multilineCodeInput':
                    case 'multilineCommentInput':
                        k = 0;
                        found = false;
                        while (!found && (k < bloqSchema.content[0].length)) {
                            if (data.content[0][i].id === bloqSchema.content[0][k].id) {
                                found = true;
                                bloqSchema.content[0][k].value = data.content[0][i].value;
                            }
                            k++;
                        }
                        if (!found) {
                            throw 'Attribute on bloqStructure not found in definition';
                        }
                        break;
                    case 'bloqInput':
                        //we do nothing here
                        break;
                    default:
                        throw 'we cant build that option ' + data.content[0][i].alias;
                }
            }
        }

        return bloqSchema;
    };

    var getCode = function(componentsArray, bloqs) {
        var includeCode = '',
            globalVars = '',
            code = '',
            setupCode = '',
            bitbloqLibs = false,
            finalFunctions = '';
        if (bloqs.varsBloq && bloqs.setupBloq && bloqs.loopBloq && componentsArray) {
            //TODO: put this initialization inside bloqs somehow
            //*******INCLUDES*******//
            if (componentsArray.robot.length >= 1) {
                if (componentsArray.robot[0] === 'zowi') {
                    includeCode += '#include <BitbloqZowi.h>\n#include <BitbloqUS.h>\n#include <BitbloqBatteryReader.h>\n#include <BitbloqLedMatrix.h>\n#include <Servo.h>\n#include <BitbloqOscillator.h>\n#include <EEPROM.h>\n';
                    globalVars += 'Zowi zowi;';
                    setupCode += 'zowi.init();';
                }
            }
            if (componentsArray.continuousServos.length >= 1 || componentsArray.servos.length >= 1 || componentsArray.oscillators.length >= 1) {
                includeCode += '#include <Servo.h>\n';
            }
            if (componentsArray.oscillators.length >= 1) {
                if (includeCode.indexOf('#include <Wire.h>') === -1) {
                    includeCode += '#include <Wire.h>\n';
                }
                includeCode += '#include <BitbloqOscillator.h>\n';
                bitbloqLibs = true;
            }
            if (componentsArray.lcds.length >= 1) {
                if (includeCode.indexOf('#include <Wire.h>') === -1) {
                    includeCode += '#include <Wire.h>\n';
                }
                includeCode += '#include <BitbloqLiquidCrystal.h>\n';
                bitbloqLibs = true;
            }
            if (componentsArray.serialElements.length >= 1) {
                includeCode += '#include <SoftwareSerial.h>\n#include <BitbloqSoftwareSerial.h>\n';
                bitbloqLibs = true;
            }
            if (componentsArray.clocks.length >= 1) {
                if (includeCode.indexOf('#include <Wire.h>') === -1) {
                    includeCode += '#include <Wire.h>\n';
                }
                includeCode += '#include <BitbloqRTC.h>\n';
                bitbloqLibs = true;
            }
            if (componentsArray.hts221.length >= 1) {
                if (includeCode.indexOf('#include <Wire.h>') === -1) {
                    includeCode += '#include <Wire.h>\n';
                }
                includeCode += '#include <BitbloqHTS221.h>\n#include <HTS221_Registers.h>\n';
                bitbloqLibs = true;

                componentsArray.hts221.forEach(function(sensor) {
                    globalVars += 'HTS221 ' + sensor.name + ';';
                    setupCode += 'Wire.begin();' + sensor.name + '.begin();';
                });
            }
            if (componentsArray.sensors.length >= 1) {
                componentsArray.sensors.forEach(function(sensor) {
                    if (sensor.type === 'Joystick') {
                        includeCode += '#include <BitbloqJoystick.h>\n#include <Wire.h>\n';
                        bitbloqLibs = true;
                    } else if (sensor.type === 'ButtonPad') {
                        includeCode += '#include <BitbloqButtonPad.h>\n';
                        bitbloqLibs = true;
                    } else if (sensor.type === 'LineFollower') {
                        includeCode += '#include <BitbloqLineFollower.h>\n';
                        bitbloqLibs = true;
                    } else if (sensor.type === 'US') {
                        includeCode += '#include <BitbloqUS.h>\n';
                        bitbloqLibs = true;
                    } else if (sensor.type === 'encoder') {
                        includeCode += '#include <BitbloqEncoder.h>\n';
                        bitbloqLibs = true;
                    }
                });
            }
            //*******BUZZERS*******//
            if (componentsArray.buzzers.length >= 1) {
                componentsArray.buzzers.forEach(function(buzzer) {
                    globalVars += 'int ' + buzzer.name + ' = ' + (buzzer.pin.s || '') + ';';
                });
            }
            //*******CLOCKS*******//
            if (componentsArray.clocks.length >= 1) {
                componentsArray.clocks.forEach(function(clock) {
                    globalVars += 'RTC_DS1307 ' + clock.name + ';';
                });
            }
            //*******CONTINUOUSSERVOS*******//
            if (componentsArray.continuousServos.length >= 1) {
                componentsArray.continuousServos.forEach(function(continuousServo) {
                    globalVars += 'Servo ' + continuousServo.name + ';';
                    setupCode += continuousServo.name + '.attach(' + (continuousServo.pin.s || '') + ');';
                });
            }
            if (componentsArray.servos.length >= 1) {
                componentsArray.servos.forEach(function(servo) {
                    globalVars += 'Servo ' + servo.name + ';';
                    setupCode += servo.name + '.attach(' + (servo.pin.s || '') + ');';
                });
            }
            if (componentsArray.lcds.length >= 1) {
                componentsArray.lcds.forEach(function(lcd) {
                    globalVars += 'LiquidCrystal ' + lcd.name + '(0);';
                    setupCode += lcd.name + '.begin(16, 2);' + lcd.name + '.clear();';
                });
            }
            if (componentsArray.leds.length >= 1) {
                componentsArray.leds.forEach(function(leds) {
                    globalVars += 'int ' + leds.name + ' = ' + (leds.pin.s || '') + ';';
                    setupCode += 'pinMode(' + leds.name + ', OUTPUT);';
                });
            }
            if (componentsArray.rgbs.length >= 1) {
                componentsArray.rgbs.forEach(function(rgbs) {
                    if (includeCode.indexOf('#include <BitbloqRGB.h>') === -1) {
                        includeCode += '#include <BitbloqRGB.h>\n';
                    }
                    globalVars += 'ZumRGB ' + rgbs.name + '(' + (rgbs.pin.r || '') + ',' + (rgbs.pin.g || '') + ',' + (rgbs.pin.b || '') + ');';
                });
            }
            if (componentsArray.oscillators.length >= 1) {
                componentsArray.oscillators.forEach(function(oscillator) {
                    globalVars += 'Oscillator ' + oscillator.name + ';';
                    setupCode += oscillator.name + '.attach(' + (oscillator.pin.s || '') + ');';
                });
            }
            if (componentsArray.sensors.length >= 1) {
                componentsArray.sensors.forEach(function(sensor) {
                    if (sensor.type === 'analog' || sensor.type === 'digital') {
                        globalVars += 'int ' + sensor.name + ' = ' + (sensor.pin.s || '') + ';';
                        setupCode += 'pinMode(' + sensor.name + ', INPUT);';
                    } else if (sensor.type === 'Joystick') {
                        globalVars += 'Joystick ' + sensor.name + '(' + (sensor.pin.x || '') + ',' + (sensor.pin.y || '') + ',' + (sensor.pin.k || '') + ');';
                    } else if (sensor.type === 'ButtonPad') {
                        globalVars += 'ButtonPad ' + sensor.name + '(' + (sensor.pin.s || '') + ');';
                    } else if (sensor.type === 'LineFollower') {
                        globalVars += 'LineFollower ' + sensor.name + '(' + (sensor.pin.s1 || '') + ',' + (sensor.pin.s2 || '') + ');';
                    } else if (sensor.type === 'US') {
                        globalVars += 'US ' + sensor.name + '(' + (sensor.pin.trigger || '') + ',' + (sensor.pin.echo || '') + ');';
                    } else if (sensor.type === 'encoder') {
                        globalVars += 'Encoder ' + sensor.name + '(encoderUpdaterWrapper,' + (sensor.pin.k || '') + ',' + (sensor.pin.sa || '') + ',' + (sensor.pin.sb || '') + ');';
                        finalFunctions += 'void encoderUpdaterWrapper(){' + sensor.name + '.update();}';
                    }
                });
            }
            if (componentsArray.serialElements.length >= 1) {
                componentsArray.serialElements.forEach(function(serialElement) {
                    if (serialElement.pin.s === 'serial') {
                        serialElement.pin.rx = '0';
                        serialElement.pin.tx = '1';
                    }
                    globalVars += 'bqSoftwareSerial ' + serialElement.name + '(' + (serialElement.pin.rx || '') + ',' + (serialElement.pin.tx || '') + ',' + (serialElement.baudRate || '') + ');';
                });
            }
            code = '\n/***   Included libraries  ***/\n' + includeCode + '\n\n/***   Global variables and function definition  ***/\n' + globalVars + bloqs.varsBloq.getCode() + '\n\n/***   Setup  ***/\n' + bloqs.setupBloq.getCode(setupCode) + '\n\n/***   Loop  ***/\n' + bloqs.loopBloq.getCode() + '' + finalFunctions;
        } else {
            console.log('cant generate code');
        }
        return code;
    };

    var splice = function(string, idx, rem, s) {

        return (string.slice(0, idx) + s + string.slice(idx + Math.abs(rem)));
    };

    var executeFunctionOnConnectedStatementBloqs = function(functionToExecute, bloq, bloqs, connectors) {
        var connector = connectors[bloq.connectors[1]].connectedTo,
            tempBloq;

        while (connector) {
            tempBloq = getBloqByConnectorUuid(connector, bloqs, connectors);
            tempBloq[functionToExecute]();
            connector = connectors[tempBloq.connectors[1]].connectedTo;
        }
    };

    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    var defaultDiacriticsRemovalap = [{
        'base': 'A',
        'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
    }, {
        'base': 'AA',
        'letters': '\uA732'
    }, {
        'base': 'AE',
        'letters': '\u00C6\u01FC\u01E2'
    }, {
        'base': 'AO',
        'letters': '\uA734'
    }, {
        'base': 'AU',
        'letters': '\uA736'
    }, {
        'base': 'AV',
        'letters': '\uA738\uA73A'
    }, {
        'base': 'AY',
        'letters': '\uA73C'
    }, {
        'base': 'B',
        'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
    }, {
        'base': 'C',
        'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
    }, {
        'base': 'D',
        'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'
    }, {
        'base': 'DZ',
        'letters': '\u01F1\u01C4'
    }, {
        'base': 'Dz',
        'letters': '\u01F2\u01C5'
    }, {
        'base': 'E',
        'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
    }, {
        'base': 'F',
        'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
    }, {
        'base': 'G',
        'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
    }, {
        'base': 'H',
        'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
    }, {
        'base': 'I',
        'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
    }, {
        'base': 'J',
        'letters': '\u004A\u24BF\uFF2A\u0134\u0248'
    }, {
        'base': 'K',
        'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
    }, {
        'base': 'L',
        'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
    }, {
        'base': 'LJ',
        'letters': '\u01C7'
    }, {
        'base': 'Lj',
        'letters': '\u01C8'
    }, {
        'base': 'M',
        'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
    }, {
        'base': 'N',
        'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
    }, {
        'base': 'NJ',
        'letters': '\u01CA'
    }, {
        'base': 'Nj',
        'letters': '\u01CB'
    }, {
        'base': 'O',
        'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
    }, {
        'base': 'OI',
        'letters': '\u01A2'
    }, {
        'base': 'OO',
        'letters': '\uA74E'
    }, {
        'base': 'OU',
        'letters': '\u0222'
    }, {
        'base': 'OE',
        'letters': '\u008C\u0152'
    }, {
        'base': 'oe',
        'letters': '\u009C\u0153'
    }, {
        'base': 'P',
        'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
    }, {
        'base': 'Q',
        'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A'
    }, {
        'base': 'R',
        'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
    }, {
        'base': 'S',
        'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
    }, {
        'base': 'T',
        'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
    }, {
        'base': 'TZ',
        'letters': '\uA728'
    }, {
        'base': 'U',
        'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
    }, {
        'base': 'V',
        'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
    }, {
        'base': 'VY',
        'letters': '\uA760'
    }, {
        'base': 'W',
        'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
    }, {
        'base': 'X',
        'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C'
    }, {
        'base': 'Y',
        'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
    }, {
        'base': 'Z',
        'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
    }, {
        'base': 'a',
        'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
    }, {
        'base': 'aa',
        'letters': '\uA733'
    }, {
        'base': 'ae',
        'letters': '\u00E6\u01FD\u01E3'
    }, {
        'base': 'ao',
        'letters': '\uA735'
    }, {
        'base': 'au',
        'letters': '\uA737'
    }, {
        'base': 'av',
        'letters': '\uA739\uA73B'
    }, {
        'base': 'ay',
        'letters': '\uA73D'
    }, {
        'base': 'b',
        'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
    }, {
        'base': 'c',
        'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
    }, {
        'base': 'd',
        'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
    }, {
        'base': 'dz',
        'letters': '\u01F3\u01C6'
    }, {
        'base': 'e',
        'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
    }, {
        'base': 'f',
        'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
    }, {
        'base': 'g',
        'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
    }, {
        'base': 'h',
        'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
    }, {
        'base': 'hv',
        'letters': '\u0195'
    }, {
        'base': 'i',
        'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
    }, {
        'base': 'j',
        'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
    }, {
        'base': 'k',
        'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
    }, {
        'base': 'l',
        'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
    }, {
        'base': 'lj',
        'letters': '\u01C9'
    }, {
        'base': 'm',
        'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
    }, {
        'base': 'n',
        'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
    }, {
        'base': 'nj',
        'letters': '\u01CC'
    }, {
        'base': 'o',
        'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
    }, {
        'base': 'oi',
        'letters': '\u01A3'
    }, {
        'base': 'ou',
        'letters': '\u0223'
    }, {
        'base': 'oo',
        'letters': '\uA74F'
    }, {
        'base': 'p',
        'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
    }, {
        'base': 'q',
        'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759'
    }, {
        'base': 'r',
        'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
    }, {
        'base': 's',
        'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
    }, {
        'base': 't',
        'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
    }, {
        'base': 'tz',
        'letters': '\uA729'
    }, {
        'base': 'u',
        'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
    }, {
        'base': 'v',
        'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
    }, {
        'base': 'vy',
        'letters': '\uA761'
    }, {
        'base': 'w',
        'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
    }, {
        'base': 'x',
        'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D'
    }, {
        'base': 'y',
        'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
    }, {
        'base': 'z',
        'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
    }];

    var diacriticsMap = {};
    for (var i = 0; i < defaultDiacriticsRemovalap.length; i++) {
        var letters = defaultDiacriticsRemovalap[i].letters;
        for (var j = 0; j < letters.length; j++) {
            diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
        }
    }

    var removeDiacritics = function(str) {
        return str.replace(/[^\u0000-\u007E]/g, function(a) {
            return diacriticsMap[a] || a;
        }).replace(/[^\w\s]/gi, '').replace(/ /g, '_');
    };

    var getEmptyComponentsArray = function() {
        return {
            leds: [],
            rgbs: [],
            sensors: [],
            buzzers: [],
            servos: [],
            continuousServos: [],
            oscillators: [],
            lcds: [],
            serialElements: [],
            clocks: [],
            hts221: [],
            robot: []
        };
    };

    bloqsUtils.validString = validString;
    bloqsUtils.validChar = validChar;
    bloqsUtils.validComment = validComment;
    bloqsUtils.delay = delay;
    bloqsUtils.validNumber = validNumber;
    bloqsUtils.validName = validName;
    bloqsUtils.generateUUID = generateUUID;
    bloqsUtils.getNumericStyleProperty = getNumericStyleProperty;
    bloqsUtils.itsOver = itsOver;
    bloqsUtils.getLastBottomConnectorUuid = getLastBottomConnectorUuid;
    bloqsUtils.getFirstTopConnectorUuid = getFirstTopConnectorUuid;
    bloqsUtils.getOutputConnector = getOutputConnector;
    bloqsUtils.getTreeHeight = getTreeHeight;
    bloqsUtils.getNodesHeight = getNodesHeight;
    bloqsUtils.drawTree = drawTree;
    bloqsUtils.drawBranch = drawBranch;
    bloqsUtils.getBranchsConnectors = getBranchsConnectors;
    bloqsUtils.getBranchsConnectorsNoChildren = getBranchsConnectorsNoChildren;
    bloqsUtils.getConnectorsUuidByAcceptType = getConnectorsUuidByAcceptType;
    bloqsUtils.getNotConnected = getNotConnected;
    bloqsUtils.getInputsConnectorsFromBloq = getInputsConnectorsFromBloq;
    bloqsUtils.generateBloqInputConnectors = generateBloqInputConnectors;
    bloqsUtils.getBloqByConnectorUuid = getBloqByConnectorUuid;
    bloqsUtils.redrawTree = redrawTree;
    bloqsUtils.itsARootConnector = itsARootConnector;
    bloqsUtils.itsInsideAConnectorRoot = itsInsideAConnectorRoot;
    bloqsUtils.jqueryObjectsArrayToHtmlToInsert = jqueryObjectsArrayToHtmlToInsert;
    bloqsUtils.connectorIsInBranch = connectorIsInBranch;
    bloqsUtils.hasClass = hasClass;
    bloqsUtils.appendArrayInOneTime = appendArrayInOneTime;
    bloqsUtils.drawDropdownOptions = drawDropdownOptions;
    bloqsUtils.getTypeFromBloq = getTypeFromBloq;
    bloqsUtils.drawSoftwareVars = drawSoftwareVars;
    bloqsUtils.drawSoftwareArray = drawSoftwareArray;
    bloqsUtils.sameConnectionType = sameConnectionType;
    bloqsUtils.getFromDynamicDropdownType = getFromDynamicDropdownType;
    bloqsUtils.fillSchemaWithContent = fillSchemaWithContent;
    bloqsUtils.getArgsFromBloq = getArgsFromBloq;
    bloqsUtils.removeInputsConnectorsFromBloq = removeInputsConnectorsFromBloq;
    bloqsUtils.getParent = getParent;
    bloqsUtils.getCode = getCode;
    bloqsUtils.splice = splice;
    bloqsUtils.translateRegExp = translateRegExp;
    bloqsUtils.executeFunctionOnConnectedStatementBloqs = executeFunctionOnConnectedStatementBloqs;
    bloqsUtils.getClassName = getClassName;
    bloqsUtils.getCaretPosition = getCaretPosition;
    bloqsUtils.setCaretPosition = setCaretPosition;
    bloqsUtils.getEmptyComponentsArray = getEmptyComponentsArray;

    return bloqsUtils;

})(window.bloqsUtils = window.bloqsUtils || {}, _, undefined);

'use strict';
(function(exports, _, bloqsUtils, bloqsLanguages) {
    /**
     * Events
     * bloqs:connect
     * bloqs:dragend
     * bloqs:bloqremoved
     * bloqs:change
     */

    var utils = bloqsUtils,
        lang = 'es-ES',
        connectors = {},
        IOConnectors = {},
        bloqs = {},
        availableConnectors = [],
        availableIOConnectors = [],
        $field = null,
        scrollTop = 0,
        softwareArrays = {
            voidFunctions: [],
            returnFunctions: [],
            softwareVars: [],
            classes: [],
            objects: []
        },
        dragPreviousTopPosition,
        dragPreviousLeftPosition,
        dragBloqMousePositionX,
        dragBloqMousePositionY,
        //we cant get the offset if the element its not visible, to avoid calc them on each drag, set them here
        fieldOffsetTop,
        //to relative fields
        fieldOffsetLeft = 0, //Bitbloq value 70,
        fieldOffsetTopSource = [], //bitbloq value['header', 'nav--make', 'actions--make', 'tabs--title'],
        fieldOffsetTopForced = 0,
        mouseDownBloq = null,
        draggingBloq = null,
        startPreMouseMove = null,
        preMouseMoveX,
        preMouseMoveY;

    var setOptions = function(options) {
        fieldOffsetTopSource = options.fieldOffsetTopSource || [];
        fieldOffsetLeft = options.fieldOffsetLeft || 0;
        fieldOffsetTopForced = options.fieldOffsetTopForced || 0;
    };

    var getFieldOffsetTop = function(source) {
        var fieldOffsetTop = 0;
        if (fieldOffsetTopForced) {
            fieldOffsetTop = fieldOffsetTopForced;
        } else {
            var tempElement;
            for (var i = 0; i < source.length; i++) {
                tempElement = document.getElementsByClassName(source[i]);
                if (tempElement[0]) {
                    fieldOffsetTop += tempElement[0].clientHeight;
                }
            }
        }

        return fieldOffsetTop;
    };

    var bloqMouseDown = function(evt) {
        //console.log('bloqMouseDown');
        //console.log(evt.target.tagName);
        if (evt.target.tagName !== 'SELECT') {
            //to avoid mousemove event on children and parents at the same time
            evt.stopPropagation();

            mouseDownBloq = evt.currentTarget;
            startPreMouseMove = true;
            document.addEventListener('mousemove', bloqPreMouseMove);
            document.addEventListener('mouseup', bloqMouseUpBeforeMove);
        }
    };

    var bloqMouseUpBeforeMove = function() {
        //console.log('bloqMouseUpBeforeMove');
        mouseDownBloq = null;
        document.removeEventListener('mousemove', bloqPreMouseMove);
        document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
    };

    //to avoid move bloqs with a 1 px movement
    var bloqPreMouseMove = function(evt) {
        if (startPreMouseMove) {
            preMouseMoveX = evt.pageX;
            preMouseMoveY = evt.pageY;
            startPreMouseMove = false;

            //we take values to the bloqsMouseMove from the first move
            var position = mouseDownBloq.getBoundingClientRect();

            //mouse position respect bloq
            dragBloqMousePositionX = evt.pageX - position.left;
            dragBloqMousePositionY = evt.pageY - position.top;

            //the mouse position its relative to the document, we need the top offset from header
            fieldOffsetTop = getFieldOffsetTop(fieldOffsetTopSource);

            //position to control the translate and the distance
            dragPreviousTopPosition = position.top;
            dragPreviousLeftPosition = position.left;

            //to add the scroll to the mouse positions
            scrollTop = $field[0].scrollTop;
        } else {

            var distanceX = evt.pageX - preMouseMoveX,
                distanceY = evt.pageY - preMouseMoveY;

            //console.log('distance', Math.abs(distanceX), Math.abs(distanceY));
            if ((Math.abs(distanceX) >= 5) || (Math.abs(distanceY) >= 5)) {
                document.removeEventListener('mousemove', bloqPreMouseMove);
                document.addEventListener('mousemove', bloqMouseMove);
            }
        }
    };

    var bloqMouseMove = function(evt) {
        //console.log('bloqMouseMove');
        var bloq = null;
        //actions to do before start to move
        if (mouseDownBloq) {
            bloq = bloqs[mouseDownBloq.getAttribute('data-bloq-id')];

            if (!bloq.isConnectable()) {
                //console.log('its not connectable');
                bloq.doConnectable();
                $field.append(bloq.$bloq);
            }
            document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
            document.addEventListener('mouseup', bloqMouseUp);

            mouseDownBloq.className = mouseDownBloq.className.concat(' dragging');

            switch (bloq.bloqData.type) {
                case 'statement':
                case 'statement-input':
                    statementDragStart(bloq);
                    break;
                case 'output':
                    outputDragStart(bloq);
                    break;
                case 'group':
                    throw 'Group cant be moved';
                default:
                    throw 'Not defined bloq dragstart!!';
            }
            mouseDownBloq = null;
            draggingBloq = bloq;
        }

        bloq = bloq || draggingBloq;
        var distance = moveBloq(bloq, evt.clientX, evt.clientY);

        switch (bloq.bloqData.type) {
            case 'statement':
            case 'statement-input':
                utils.redrawTree(bloq, bloqs, connectors);
                if (distance > 10) {
                    handleCollisions([bloq.connectors[0], utils.getLastBottomConnectorUuid(bloq.uuid, bloqs, connectors)], evt);
                }
                break;
            case 'output':
                if (distance > 10) {
                    handleIOCollisions(bloq, availableIOConnectors);
                }
                break;
            default:
                throw 'Not defined bloq drag!!';
        }

    };

    var bloqMouseUp = function() {
        //console.log('bloqMouseUp');
        scrollTop = 0;
        var $dropConnector = $('.connector.available').first(),
            bloq = draggingBloq;

        if ($dropConnector[0]) {

            switch (bloq.bloqData.type) {
                case 'statement':
                case 'statement-input':
                    statementDragEnd(bloq, $dropConnector);
                    break;
                case 'output':
                    outputDragEnd(bloq, $dropConnector);
                    break;
                default:
                    throw 'Not defined bloq drag!!';
            }
            window.dispatchEvent(new Event('bloqs:connect'));

            if (!bloq.$bloq.closest('.bloq--group')[0]) {
                bloq.disable();
                if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                    utils.executeFunctionOnConnectedStatementBloqs('disable', bloq, bloqs, connectors);
                }
            } else {
                bloq.enable();
                if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                    utils.executeFunctionOnConnectedStatementBloqs('enable', bloq, bloqs, connectors);
                }
            }
        } else {
            bloq.disable();
            if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                utils.executeFunctionOnConnectedStatementBloqs('disable', bloq, bloqs, connectors);
            }

        }
        availableConnectors = [];
        availableIOConnectors = [];
        $('.bloq').removeClass('dragging');
        $('.connector.available').removeClass('available');
        $('.bloq--dragging').removeClass('bloq--dragging');
        $field.focus();
        window.dispatchEvent(new Event('bloqs:dragend'));

        draggingBloq = null;
        dragPreviousTopPosition = 0;
        dragPreviousLeftPosition = 0;

        document.removeEventListener('mousemove', bloqMouseMove);
        document.removeEventListener('mouseup', bloqMouseUp);
    };

    var statementDragStart = function(bloq) {

        var previousConnector = connectors[bloq.connectors[0]].connectedTo;

        if (previousConnector) {
            var previousBloq = bloqs[connectors[previousConnector].bloqUuid];

            var itsInsideAConnectorRoot = utils.itsInsideAConnectorRoot(bloq, bloqs, connectors);

            //desenganchamos
            connectors[previousConnector].connectedTo = null;
            connectors[bloq.connectors[0]].connectedTo = null;

            //miramos si estaba enganchado a un connector-root para sacarlo del parent
            if (itsInsideAConnectorRoot) {

                //setTimeout(function() {
                if (previousBloq.bloqData.type === 'group') {
                    //remove class that show help on group bloqs
                    previousBloq.$bloq.removeClass('with--content');
                }
                removeFromStatementInput(bloq);
                utils.redrawTree(previousBloq, bloqs, connectors);
                // }, 0);

            }
        }

        availableConnectors = [];

        for (var connectorUuid in connectors) {

            if (connectors[connectorUuid].data.type !== 'connector--empty') {
                if (utils.getBloqByConnectorUuid(connectorUuid, bloqs, connectors).isConnectable()) {
                    if (!utils.connectorIsInBranch(connectorUuid, bloq.uuid, bloqs, connectors)) {
                        availableConnectors.push(connectorUuid);
                    }
                }
            }
        }
    };

    var removeFromStatementInput = function(firstBloqToRemove) {
        var $totalBloqsToRemove = [firstBloqToRemove.$bloq];
        var childConnectorUuid = connectors[firstBloqToRemove.connectors[1]].connectedTo,
            bloqToRemove,
            top = firstBloqToRemove.$bloq.outerHeight(true);

        firstBloqToRemove.$bloq.removeClass('inside-bloq');
        while (childConnectorUuid) {
            bloqToRemove = bloqs[connectors[childConnectorUuid].bloqUuid];
            $totalBloqsToRemove.push(bloqToRemove.$bloq);
            bloqToRemove.$bloq.removeClass('inside-bloq');
            bloqToRemove.$bloq[0].style.transform = 'translate(' + 0 + 'px,' + top + 'px)';
            top += bloqToRemove.$bloq.outerHeight(true);
            childConnectorUuid = connectors[bloqToRemove.connectors[1]].connectedTo;
        }
        utils.appendArrayInOneTime($field, $totalBloqsToRemove);

    };

    var outputDragStart = function(bloq) {
        var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
        if (outputConnector.connectedTo) {
            bloq.$bloq.removeClass('nested-bloq');

            var bloqConnector = IOConnectors[outputConnector.connectedTo],
                oldBloq = bloqs[bloqConnector.bloqUuid];

            //remove the logical conexions
            bloqConnector.connectedTo = null;
            outputConnector.connectedTo = null;

            if (oldBloq.bloqData.returnType && (oldBloq.bloqData.returnType.type === 'fromInput')) {
                updateSoftVar(oldBloq);
            }

            $field[0].appendChild(bloq.$bloq[0]);
        }

        //store the available connectors
        availableIOConnectors = [];
        for (var connectorUuid in IOConnectors) {
            if (IOConnectors[connectorUuid].data.type === 'connector--input') {
                if (utils.getBloqByConnectorUuid(connectorUuid, bloqs, IOConnectors).isConnectable()) {
                    if (!IOConnectors[connectorUuid].connectedTo) {
                        if (utils.sameConnectionType(bloq, utils.getBloqByConnectorUuid(connectorUuid, bloqs, IOConnectors), IOConnectors[connectorUuid].data.acceptType, bloqs, IOConnectors, softwareArrays)) {
                            if (!utils.connectorIsInBranch(connectorUuid, bloq.uuid, bloqs, IOConnectors)) {
                                availableIOConnectors.push(connectorUuid);
                            }
                        }
                    }
                }
            }
        }

        // console.log('availableIOConnectors',availableIOConnectors);
    };

    var moveBloq = function(bloq, clientX, clientY) {
        var position = bloq.$bloq[0].getBoundingClientRect(),
            distance = Math.round(Math.sqrt(Math.pow(dragPreviousTopPosition - position.top, 2) + Math.pow(dragPreviousLeftPosition - position.left, 2))),
            x,
            y,
            destinationX,
            destinationY;
        if (scrollTop !== $field[0].scrollTop) {
            scrollTop = $field[0].scrollTop;
        }

        x = clientX - fieldOffsetLeft;
        y = clientY - fieldOffsetTop + scrollTop;

        destinationX = (x - dragBloqMousePositionX);
        destinationY = (y - dragBloqMousePositionY);

        bloq.$bloq[0].style.transform = 'translate(' + destinationX + 'px,' + destinationY + 'px)';
        if (distance > 10) {
            dragPreviousTopPosition = position.top;
            dragPreviousLeftPosition = position.left;
        }
        if (bloq.bloqData.type === 'statement-input') {
            utils.redrawTree(bloq, bloqs, connectors);
        }

        return distance;
    };

    var statementDragEnd = function(bloq, $dropConnector) {

        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = $('[data-connector-id="' + dropConnectorUuid + '"]').attr('data-canconnectwith');

        //console.log('dragConnectorUuid', dragConnectorUuid);
        //console.log('dropUuid', dropConnectorUuid);
        var areDroppingInsideABloq = utils.itsARootConnector(connectors[dropConnectorUuid]) || utils.itsInsideAConnectorRoot(utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, connectors), bloqs, connectors);

        //console.log('areDroppingInsideABloq?', areDroppingInsideABloq);

        setLogicalConnections(dropConnectorUuid, dragConnectorUuid);
        if (areDroppingInsideABloq) {
            connectorRootDragEnd(bloq, $dropConnector);
        } else {
            placeNestedBloq(dropConnectorUuid, dragConnectorUuid);
        }

    };

    var connectorRootDragEnd = function(dragBloq, $dropConnector) {
        //console.log('connectorRootDragEnd');
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid];

        dragBloq.$bloq.addClass('inside-bloq');
        dragBloq.$bloq.removeAttr('style');

        if (utils.itsARootConnector(connectors[dropConnectorUuid])) {
            var $dropContainer = dropBloq.$bloq.find('.bloq--extension__content');
            $dropContainer.first().append(dragBloq.$bloq);
            dropBloq.$bloq.addClass('with--content');
        } else {
            dropBloq.$bloq.after(dragBloq.$bloq);
        }

        //var childNodes

        var somethingConnectedInBottomUuid = connectors[dragBloq.connectors[1]].connectedTo;
        var branchBloq;
        var childNodes = [];
        while (somethingConnectedInBottomUuid) {
            branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
            childNodes.push(branchBloq.$bloq);
            branchBloq.$bloq.addClass('inside-bloq');
            branchBloq.$bloq.removeAttr('style');

            somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;

        }
        dragBloq.$bloq.after(utils.jqueryObjectsArrayToHtmlToInsert(childNodes));

        //se repinta el arbol donde esta el dropbloq, porq cambiara de tamaño
        utils.redrawTree(dropBloq, bloqs, connectors);
    };

    var outputDragEnd = function(bloq, $dropConnector) {
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = utils.getOutputConnector(bloq, IOConnectors).uuid;

        $dropConnector.append(bloq.$bloq);
        bloq.$bloq.addClass('nested-bloq').removeAttr('style');

        IOConnectors[dropConnectorUuid].connectedTo = dragConnectorUuid;
        IOConnectors[dragConnectorUuid].connectedTo = dropConnectorUuid;

        var dropBloq = utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, IOConnectors);
        var dragBloq = utils.getBloqByConnectorUuid(dragConnectorUuid, bloqs, IOConnectors);

        if (dropBloq.bloqData.returnType && (dropBloq.bloqData.returnType.type === 'fromInput')) {
            if (!dragBloq.bloqData.returnType.pointer) {
                updateSoftVar(dropBloq);
            }
        }
    };

    var handleCollisions = function(dragConnectors) {
        var i,
            found,
            $dropConnector,
            $dragConnector,
            tempBloq;

        // For each available connector
        availableConnectors.forEach(function(dropConnectorUuid) {
            $dropConnector = connectors[dropConnectorUuid].jqueryObject;
            i = 0;
            found = false;
            while (!found && (i < dragConnectors.length)) {
                $dragConnector = connectors[dragConnectors[i]].jqueryObject;

                if ((connectors[dragConnectors[i]].data.type === connectors[dropConnectorUuid].data.accept) && utils.itsOver($dragConnector, $dropConnector, 20)) {
                    found = true;
                } else {
                    i++;
                }
            }
            tempBloq = utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, connectors);
            if (found) {
                $dropConnector.addClass('available');
                $dropConnector.attr('data-canconnectwith', dragConnectors[i]);

                if (tempBloq.bloqData.type === 'group') {
                    tempBloq.$bloq.addClass('bloq--dragging');
                }
            } else {
                if (tempBloq.bloqData.type === 'group') {
                    tempBloq.$bloq.removeClass('bloq--dragging');
                }
                $dropConnector.removeClass('available');
                $dropConnector.removeAttr('data-canconnectwith');
            }
        });
    };

    var handleIOCollisions = function(bloq, availableIOConnectors) {
        var dropConnector;
        var dragConnector = utils.getOutputConnector(bloq, IOConnectors);
        availableIOConnectors.forEach(function(dropConnectorUuid) {
            dropConnector = IOConnectors[dropConnectorUuid];
            if (utils.itsOver(dragConnector.jqueryObject, dropConnector.jqueryObject, 0) && utils.sameConnectionType(bloqs[dragConnector.bloqUuid], bloqs[dropConnector.bloqUuid], dropConnector.data.acceptType, bloqs, IOConnectors, softwareArrays)) {
                dropConnector.jqueryObject.addClass('available');
            } else {
                dropConnector.jqueryObject.removeClass('available');

            }
        });
    };

    var setLogicalConnections = function(dropConnectorUuid, dragConnectorUUid) {
        //console.log('conectamos', dropConnectorUuid, connectors[dropConnectorUuid].data.type, 'con ', dragConnectorUUid, connectors[dragConnectorUUid].data.type);
        //console.log('conectado con', connectors[dropConnectorUuid].connectedTo, 'y el otro con', connectors[dragConnectorUUid].connectedTo);
        if (connectors[dropConnectorUuid].connectedTo) {
            var dropBottomConnectorUuid, dragBloqLastBottomConnectorUuid, dropTopConnectorUuid, dragBloqFirstTopConnectorUuid;
            switch (connectors[dropConnectorUuid].data.type) {
                case 'connector--bottom':
                    dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
                    connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
                    break;
                case 'connector--top':
                    dropTopConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqFirstTopConnectorUuid = utils.getFirstTopConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dropTopConnectorUuid].connectedTo = dragBloqFirstTopConnectorUuid;
                    connectors[dragBloqFirstTopConnectorUuid].connectedTo = dropTopConnectorUuid;
                    break;
                case 'connector--root':
                    dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
                    connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
                    break;
                default:
                    throw 'connector on setLogicalConnections no handled ' + connectors[dropConnectorUuid].data.type;
            }
        }
        connectors[dropConnectorUuid].connectedTo = dragConnectorUUid;
        connectors[dragConnectorUUid].connectedTo = dropConnectorUuid;
    };

    var placeNestedBloq = function(dropConnectorUuid, dragConnectorUuid) {
        //console.log('Nest');

        var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid];
        //console.log(dropBloq, dragBloq);

        switch (dropBloq.bloqData.type) {
            case 'statement':
            case 'statement-input':
                utils.redrawTree(utils.getBloqByConnectorUuid(dragConnectorUuid, bloqs, connectors), bloqs, connectors);
                break;
            case 'output':
                break;
            default:
                throw 'bloqtype not defined in nesting ' + dropBloq.bloqData.type;
        }
    };

    var updateSoftVar = function(bloq, name, type, args) {
        var dynamicContentType = bloq.bloqData.createDynamicContent;
        //console.log('updating softVar', dynamicContentType);
        if (!dynamicContentType) {
            throw 'We are adding a softVar on a bloq that not defined the dynamic content';
        }
        if (!softwareArrays[dynamicContentType]) {
            throw 'dynamicContentType not defined ' + bloq.bloqData.name;
        }
        var found = false,
            i = 0;
        while (!found && (i < softwareArrays[dynamicContentType].length)) {
            if (softwareArrays[dynamicContentType][i].bloqUuid === bloq.uuid) {
                found = true;
            }
            i++;
        }
        type = type || utils.getTypeFromBloq(bloq, bloqs, IOConnectors, softwareArrays);
        //arguments if any:
        if (bloq.bloqData.type === 'statement-input' && bloq.bloqData.arguments) {
            args = args || utils.getArgsFromBloq(bloq, bloqs, IOConnectors);
        } else {
            args = '';
        }
        var softVar;
        if (found) {
            softVar = softwareArrays[dynamicContentType][i - 1];
            softVar.name = name || softVar.name;
            softVar.type = type;
            softVar.args = args;
            if (softVar.name) {
                //cambiar data-value cuando el valor sea el mismo que el de la variable que se cambia
                // $('select[data-varreference=' + softVar.id + ']').attr({
                //     'data-value': softVar.name
                // });
                $('option[data-var-id="' + softVar.id + '"]').attr({
                    value: softVar.name
                }).html(softVar.name);

            } else {
                removeSoftVar(bloq);
            }

        } else {
            if (name) {
                softVar = {
                    name: name,
                    id: utils.generateUUID(),
                    bloqUuid: bloq.uuid,
                    type: type,
                    args: args
                };
                softwareArrays[dynamicContentType].push(softVar);
                $('select[data-dropdowncontent="' + dynamicContentType + '"]').append($('<option>').attr({
                    'data-var-id': softVar.id,
                    value: softVar.name
                }).html(softVar.name));
            }
        }
        //update type of all vars
        updateSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
        // console.log('afterUpdating: ', softwareArrays);
    };

    var removeSoftVar = function(bloq) {
        var dynamicContentType = bloq.bloqData.createDynamicContent;
        var found = false,
            i = 0;
        while (!found && (i < softwareArrays[dynamicContentType].length)) {
            if (softwareArrays[dynamicContentType][i].bloqUuid === bloq.uuid) {
                found = true;
            }
            i++;
        }
        if (found) {
            var softVar = softwareArrays[dynamicContentType][i - 1];
            softwareArrays[dynamicContentType].splice(i - 1, 1);
            $('option[data-var-id="' + softVar.id + '"]').remove();
        }
        updateSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
    };

    var updateSoftVarTypes = function(softwareArrays, dynamicContentType, bloqs, IOConnectors) {

        var tempSoftVar;
        for (var i = 0; i < softwareArrays[dynamicContentType].length; i++) {
            tempSoftVar = softwareArrays[dynamicContentType][i];
            tempSoftVar.type = utils.getTypeFromBloq(bloqs[tempSoftVar.bloqUuid], bloqs, IOConnectors, softwareArrays);
        }
        //utils.drawSoftwareArray(softwareArrays);
    };

    var removeBloq = function(bloqUuid, redraw) {
        //console.log('remove:', bloqUuid);
        var bloq = bloqs[bloqUuid],
            i;
        if (bloq) {
            //disconnect
            var topConnector, bottomConnector, outputConnector;
            window.dispatchEvent(new Event('bloqs:bloqremoved'));
            bloq.$bloq[0].removeEventListener('mousedown', bloqMouseDown);
            //if its moving remove all listener
            if ((mouseDownBloq && mouseDownBloq.getAttribute('data-bloq-id') === bloqUuid) ||
                (draggingBloq && draggingBloq.uuid)) {

                document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
                document.removeEventListener('mousemove', bloqPreMouseMove);
                document.removeEventListener('mousemove', bloqMouseMove);
                document.removeEventListener('mouseup', bloqMouseUp);
            }
            switch (bloq.bloqData.type) {
                case 'statement-input':
                case 'group':
                    var tempBloq,
                        childConnector = connectors[bloq.connectors[2]].connectedTo;

                    while (childConnector) {
                        tempBloq = utils.getBloqByConnectorUuid(childConnector, bloqs, connectors);
                        childConnector = connectors[tempBloq.connectors[1]].connectedTo;
                        removeBloq(tempBloq.uuid);
                    }
                    /* falls through */
                case 'statement':

                    topConnector = connectors[bloq.connectors[0]].connectedTo;
                    bottomConnector = connectors[bloq.connectors[1]].connectedTo;

                    if (topConnector && bottomConnector) {
                        connectors[topConnector].connectedTo = bottomConnector;
                        connectors[bottomConnector].connectedTo = topConnector;

                        if (redraw) {
                            utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                        }

                    } else if (topConnector) {
                        connectors[topConnector].connectedTo = null;
                        var previousBloq = bloqs[connectors[topConnector].bloqUuid];
                        if (previousBloq.bloqData.type === 'group') {
                            previousBloq.$bloq.removeClass('with--content');
                        }

                        if (redraw) {
                            utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                        }
                    } else if (bottomConnector) {
                        connectors[bottomConnector].connectedTo = null;
                    }
                    //remove the inputs bloqs inside in 1 level
                    var uuid;
                    for (i = 0; i < bloq.IOConnectors.length; i++) {
                        uuid = bloq.IOConnectors[i];
                        if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                            removeBloq(IOConnectors[IOConnectors[uuid].connectedTo].bloqUuid);
                        }
                    }
                    break;
                case 'output':
                    outputConnector = IOConnectors[bloq.IOConnectors[0]].connectedTo;

                    if (outputConnector) {
                        IOConnectors[outputConnector].connectedTo = null;
                    }
                    break;
                default:
                    throw 'we dont know how to delete: ' + bloq.bloqData.type;
            }

            //remove visual
            bloq.$bloq.remove();
            //removeLogical
            var key;
            for (i = 0; i < bloq.connectors.length; i++) {
                delete connectors[bloq.connectors[i]];
            }
            for (i = 0; i < bloq.IOConnectors.length; i++) {
                delete IOConnectors[bloq.IOConnectors[i]];
            }

            //si es un bloq que genera dinmayc content
            if (bloq.bloqData.createDynamicContent) {
                removeSoftVar(bloq);
            } else {
                for (key in softwareArrays) {
                    updateSoftVarTypes(softwareArrays, key, bloqs, IOConnectors);
                }
            }

            //remove the bloq
            delete bloqs[bloqUuid];

        } else {
            throw 'Cant delete this bloq: ' + bloqUuid;
        }

    };

    var buildContent = function(bloq) {

        var componentsArray = bloq.componentsArray,
            bloqData = bloq.bloqData;
        var $tempElement;
        for (var j = 0; j < bloqData.content.length; j++) {
            for (var k = 0; k < bloqData.content[j].length; k++) {
                $tempElement = createBloqElement(bloq, bloqData.content[j][k], componentsArray, softwareArrays);
                if (bloqData.content[j][k].position === 'DOWN') {
                    bloq.$contentContainerDown.addClass('with-content');
                    bloq.$contentContainerDown.append($tempElement);
                } else {
                    bloq.$contentContainer.append($tempElement);
                }
            }
        }
    };

    var buildStatementConnector = function(tempUuid, bloqConnectors, bloq, tempConnector, $container) {
        var $connector = $('<div>').attr({
            'data-connector-id': tempUuid
        });

        $connector.addClass('connector connector--offline ' + bloqConnectors.type);

        $container.append($connector);

        connectors[tempUuid] = tempConnector;

        bloq.connectors.push(tempUuid);
        return $connector;
    };

    var buildConnectors = function(bloqConnectors, bloq) {
        //connectors
        var $connector, tempUuid, tempConnector, $container;
        for (var i = 0; i < bloqConnectors.length; i++) {

            tempUuid = 'connector:' + utils.generateUUID();

            tempConnector = {
                uuid: tempUuid,
                data: bloqConnectors[i],
                bloqUuid: bloq.uuid,
                connectedTo: null
            };

            switch (bloqConnectors[i].type) {
                case 'connector--top':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.children('.bloq--statement-input__header');
                    } else {
                        $container = bloq.$bloq.children('.bloq--fixed');
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);
                    break;
                case 'connector--bottom':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.find('.bloq--extension--end');
                    } else {
                        $container = bloq.$bloq.children('.bloq--fixed');
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);
                    break;
                case 'connector--root':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.children('.bloq--statement-input__header');
                    } else {
                        $container = bloq.$bloq;
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);

                    break;
                case 'connector--input':
                    $connector = $(bloq.$bloq.find('.bloqinput[data-connector-name="' + bloqConnectors[i].name + '"]'));

                    $connector.attr({
                        'data-connector-id': tempUuid
                    }).addClass('connector ' + bloqConnectors[i].type);
                    tempConnector.contentId = $connector.attr('data-content-id');
                    IOConnectors[tempUuid] = tempConnector;
                    bloq.IOConnectors.push(tempUuid);
                    break;
                case 'connector--output':
                    $connector = $('<div>').attr({
                        'data-connector-id': tempUuid
                    }).addClass('connector connector--offline ' + bloqConnectors[i].type);

                    bloq.$bloq.append($connector);

                    tempConnector.returnType = bloq.bloqData.returnType;
                    IOConnectors[tempUuid] = tempConnector;

                    bloq.IOConnectors.push(tempUuid);
                    break;
                case 'connector--empty':
                    $connector = $('<div>');
                    connectors[tempUuid] = tempConnector;

                    bloq.connectors.push(tempUuid);
                    break;
                default:
                    throw 'Connector not defined to build';
            }
            tempConnector.jqueryObject = $connector;
        }
    };

    var createBloqElement = function(bloq, elementSchema, componentsArray, softwareArrays) {
        var i,
            $tempElement,
            $element = null,
            arrayOptions,
            key;
        switch (elementSchema.alias) {
            case 'staticDropdown':
                //component
                $element = $('<select>');
                $element.attr({
                    name: '',
                    'data-content-id': elementSchema.id
                });

                var childs = [];
                for (i = 0; i < elementSchema.options.length; i++) {
                    $tempElement = $('<option>').attr({
                        value: elementSchema.options[i].value,
                        'data-i18n': elementSchema.options[i].label
                    }).html(translateBloq(lang, elementSchema.options[i].label));
                    childs.push($tempElement);
                }
                utils.appendArrayInOneTime($element, childs);
                if (elementSchema.value) {
                    $element.val(elementSchema.value);
                }

                $element.change(function() {
                    window.dispatchEvent(new Event('bloqs:change'));
                });

                if (bloq.bloqData.returnType && bloq.bloqData.returnType.type === 'fromDropdown') {
                    $element.change(function() {
                        updateSoftVar(bloq);
                    });
                }

                break;
            case 'dynamicDropdown':
                $element = $('<select>');
                $element.attr({
                    name: '',
                    'data-content-id': elementSchema.id,
                    'data-dropdowncontent': elementSchema.options,
                    'data-value': elementSchema.value
                });

                switch (elementSchema.options) {
                    case 'voidFunctions':
                    case 'returnFunctions':
                    case 'softwareVars':
                    case 'classes':
                    case 'objects':
                        arrayOptions = softwareArrays[elementSchema.options];
                        $element.change(function() {
                            //if we change a dynamicDropdown, can be for two reasons
                            // We are a output and we refresh vars of the old BLoq
                            // We are selecting a variable in a statement, and we update the dont change type
                            if (bloq.bloqData.type === 'output') {
                                var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
                                //if its connected to another bloq, we update the vars of the old bloq
                                if (outputConnector.connectedTo) {

                                    var bloqConnector = IOConnectors[outputConnector.connectedTo],
                                        oldBloq = bloqs[bloqConnector.bloqUuid];

                                    if (oldBloq.bloqData.returnType && (oldBloq.bloqData.returnType.type === 'fromInput')) {
                                        updateSoftVar(oldBloq);
                                    }
                                }
                            }
                        });
                        break;
                    case 'varComponents':
                        arrayOptions = [];

                        for (key in componentsArray) {
                            if (componentsArray[key].length >= 1) {
                                arrayOptions = arrayOptions.concat(componentsArray[key]);
                            }
                        }
                        break;
                    case 'clocks':
                        arrayOptions = [];
                        arrayOptions = componentsArray.clocks;
                        break;
                    case 'hts221':
                        arrayOptions = [];
                        arrayOptions = componentsArray.hts221;
                        break;
                    default:
                        arrayOptions = componentsArray[elementSchema.options];
                }
                if (!arrayOptions) {
                    throw 'Dropdowns not defined in array: ' + elementSchema.options;
                }

                //content
                utils.drawDropdownOptions($element, arrayOptions);

                if (elementSchema.value) {
                    $element.val(elementSchema.value);
                    var componentRef = arrayOptions.find(function(item) {
                        return item.name === elementSchema.value;
                    });
                    $element[0].dataset.reference = componentRef ? componentRef.uid : '';
                    $element[0].dataset.value = elementSchema.value;
                    $element.val(elementSchema.value);
                }

                $element.change(function(evt) {
                    $element[0].dataset.value = evt.currentTarget.value;
                    $element[0].dataset.reference = evt.currentTarget.selectedOptions[0].dataset.reference;
                    //$element[0].dataset.varreference = evt.currentTarget.selectedOptions[0].dataset.varId;
                    window.dispatchEvent(new Event('bloqs:change'));
                });

                break;
            case 'text':
                $element = $('<span>').attr({
                    'data-i18n': elementSchema.value
                }).html(translateBloq(lang, elementSchema.value));
                break;
            case 'removableText':
                $element = $('<span>').html(elementSchema.value);
                $element.addClass('removabletext');

                break;
            case 'numberInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                //Check that the characters are numbers
                $element.bind('input', function() {
                    var position = utils.getCaretPosition(this);
                    var a = utils.validNumber($(this).val());
                    $(this).val(a.value);
                    utils.setCaretPosition(this, position - a.removedChar);
                });
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 60,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    //console.log('change number!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'stringInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    $element.val(utils.validString($element.val()));
                    console.log('change String!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'charInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    $element.val(utils.validChar($element.val()));
                    console.log('change Char!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'codeInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function() {
                    console.log('change SCinput!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'multilineCodeInput':
                $element = $('<textarea class="msd-elastic: \n;" ng-model="bar" cols="40" rows="1"></textarea>').attr({
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'name': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                setTimeout(function() {
                    $('[name="' + elementSchema.id + '"]').autogrow({
                        onInitialize: true
                    });
                }, 0);
                $element.change(function() {
                    console.log('change multilineCode!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'multilineCommentInput':
                $element = $('<textarea class="msd-elastic: \n;" ng-model="bar" cols="40" rows="1"></textarea>').attr({
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'name': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                setTimeout(function() {
                    $('[name="' + elementSchema.id + '"]').autogrow({
                        onInitialize: true
                    });
                }, 0);

                $element.keyup(function() {
                    bloqsUtils.delay(function() {
                        $element.val(utils.validComment($element.val()));
                    }, 1000);
                });

                $element.change(function() {
                    $element.val(utils.validComment($element.val()));
                    console.log('change multilineComment!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'varInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);

                bloq.varInputs = [];
                bloq.varInputs.push($element);
                $element.addClass('var--input');
                $element.on('keyup', function(evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                //Transform the name to create valid function / variables names
                $element.keyup(function() {
                    bloqsUtils.delay(function() {
                        var name = utils.validName($element.val(), softwareArrays);
                        $element.val(name);
                        if (name) {
                            updateSoftVar(bloq, name);
                        } else {
                            removeSoftVar(bloq, name);
                        }
                    }, 1000);
                });

                $element.change(function() {
                    console.log('change varInput!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'bloqInput':
                $element = $('<div>').attr({
                    'data-connector-name': elementSchema.name,
                    'data-content-id': elementSchema.bloqInputId
                });
                $element.addClass('bloqinput');
                break;
            case 'headerText':
                $element = $('<h3>').html(elementSchema.value);
                $element.addClass('headerText');
                break;
            case 'descriptionText':
                $element = $('<p>').html(elementSchema.value);
                $element.addClass('descriptionText');
                break;
            default:
                throw 'elementSchema not defined: ' + elementSchema.alias;
        }

        return $element;
    };

    var translateBloqs = function(newLang) {
        if (newLang !== lang) {
            lang = newLang;
            var bloqElements, bloqPlaceholders, i18nKey;
            for (var currentBloq in bloqs) {

                bloqPlaceholders = bloqs[currentBloq].$bloq.find('[data-placeholder-i18n]');

                bloqElements = bloqs[currentBloq].$bloq.find('[data-i18n]');

                for (var i = 0; i < bloqPlaceholders.length; i++) {
                    i18nKey = bloqPlaceholders[i].getAttribute('data-placeholder-i18n');
                    bloqPlaceholders[i].placeholder = translateBloq(lang, i18nKey);
                }

                for (var j = 0; j < bloqElements.length; j++) {
                    i18nKey = bloqElements[j].getAttribute('data-i18n');
                    bloqElements[j].innerHTML = translateBloq(lang, i18nKey);
                }

            }
        }
    };

    var destroyFreeBloqs = function() {
        var uuid, bloq;
        for (uuid in bloqs) {
            bloq = bloqs[uuid];
            if (bloq.isConnectable()) {
                switch (bloq.bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        if (!connectors[bloq.connectors[0]].connectedTo) {
                            removeBloq(uuid);
                        }
                        break;
                    case 'output':
                        if (!IOConnectors[bloq.IOConnectors[0]].connectedTo) {
                            removeBloq(uuid);
                        }
                        break;
                    case 'group':
                        break;
                    default:
                        throw 'its free? ' + bloq.bloqData.type;
                }
            }
        }
    };

    /**
     * Get bloqs that are not connected
     *
     */
    var getFreeBloqs = function() {
        var bloq,
            result = [],
            bloqGroup,
            tempBloq,
            connectedConnector;
        for (var uuid in bloqs) {
            bloq = bloqs[uuid];
            if (bloq.isConnectable()) {
                switch (bloq.bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        if (!connectors[bloq.connectors[0]].connectedTo) {
                            bloqGroup = [bloq.getBloqsStructure()];
                            connectedConnector = connectors[bloq.connectors[1]].connectedTo;
                            while (connectedConnector) {
                                tempBloq = utils.getBloqByConnectorUuid(connectedConnector, bloqs, connectors);
                                bloqGroup.push(tempBloq.getBloqsStructure());
                                connectedConnector = connectors[tempBloq.connectors[1]].connectedTo;
                            }
                            result.push({
                                position: bloq.$bloq.position(),
                                bloqGroup: bloqGroup
                            });
                        }
                        break;
                    case 'output':
                        if (!IOConnectors[bloq.IOConnectors[0]].connectedTo) {
                            bloqGroup = [bloq.getBloqsStructure()];
                            result.push({
                                position: bloq.$bloq[0].getBoundingClientRect(),
                                bloqGroup: bloqGroup
                            });
                        }
                        break;
                    case 'group':
                        break;
                    default:
                        throw 'its free? ' + bloq.bloqData.type;
                }
            }
        }
        return result;
    };

    var updateDropdowns = function() {
        var key;
        for (key in softwareArrays) {
            updateDropdown(key);
        }
    };

    var updateDropdown = function(softwareArrayKey) {
        var $element, tempValue;
        $('select[data-dropdownContent="' + softwareArrayKey + '"]').each(function(index, element) {
            $element = $(element);
            tempValue = $element.attr('data-value');
            bloqsUtils.drawDropdownOptions($element, softwareArrays[softwareArrayKey]);
            if (tempValue) {
                $element.val(tempValue);
            }
        });
    };

    var translateBloq = function(lang, key) {
        return bloqsLanguages.texts[lang][key] || bloqsLanguages.texts['en-GB'][key] || bloqsLanguages.texts['es-ES'][key] || key;
    };

    // Block Constructor
    var Bloq = function Bloq(params) {
        this.uuid = 'bloq:' + utils.generateUUID();

        $field = params.$field || $field;

        this.bloqData = params.bloqData;
        this.componentsArray = params.componentsArray;
        this.connectors = [];
        this.IOConnectors = [];

        var enable = false,
            connectable,
            that = this;

        this.collapseGroupContent = function() {

            var $fieldContent = that.$bloq.children('.field--content');
            //$fieldContent = $(e.currentTarget).parent().find('.field--content');
            $fieldContent.toggleClass('field--collapsed');
            that.connectable = !that.connectable;
            $fieldContent.parent().toggleClass('collapsed--field');
        };

        this.enable = function(onlyParent) {
            if (!enable) {
                this.$bloq.removeClass('disabled');
                //console.log('activamos', this.uuid, this.bloqData.name);
                if (this.bloqData.content && this.bloqData.content[0]) {
                    for (var i = 0; i < this.bloqData.content[0].length; i++) {
                        if (this.bloqData.content[0][i].alias === 'bloqInput') {
                            var uuid;
                            for (var j = 0; j < this.IOConnectors.length; j++) {
                                uuid = this.IOConnectors[j];
                                if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                    utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).enable();
                                }
                            }
                        }
                    }
                }

                enable = true;

                if (this.connectors[2] && !onlyParent) {
                    var connector = connectors[this.connectors[2]].connectedTo,
                        tempBloq;
                    while (connector) {
                        tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                        tempBloq.enable();
                        connector = connectors[tempBloq.connectors[1]].connectedTo;
                    }
                }
            }
        };

        this.disable = function(onlyParent) {
            this.$bloq.addClass('disabled');
            if (enable) {

                //console.log('activamos', this.uuid, this.bloqData.name);
                if (this.bloqData.content && this.bloqData.content[0]) {
                    for (var i = 0; i < this.bloqData.content[0].length; i++) {
                        switch (this.bloqData.content[0][i].alias) {
                            case 'bloqInput':
                                //disable the inputs bloqs inside in 1 level
                                var uuid;
                                for (var j = 0; j < this.IOConnectors.length; j++) {
                                    uuid = this.IOConnectors[j];
                                    if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                        utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).disable();
                                    }
                                }
                                break;
                            default:
                        }
                    }
                }

                enable = false;

                if (this.connectors[2] && !onlyParent) {
                    var connector = connectors[this.connectors[2]].connectedTo,
                        tempBloq;
                    while (connector) {
                        tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                        tempBloq.disable();
                        connector = connectors[tempBloq.connectors[1]].connectedTo;
                    }
                }
            }
        };

        this.itsEnabled = function() {
            return enable;
        };

        this.doConnectable = function() {
            if (!connectable) {
                // console.log('make them connectable', this.uuid, this.bloqData.name);
                if (this.bloqData.content && this.bloqData.content[0]) {
                    for (var i = 0; i < this.bloqData.content[0].length; i++) {
                        if (this.bloqData.content[0][i].alias === 'bloqInput') {
                            var uuid;
                            for (var j = 0; j < this.IOConnectors.length; j++) {
                                uuid = this.IOConnectors[j];
                                if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                    utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).doConnectable();
                                }
                            }
                        }
                    }
                }
                if (this.connectors[2]) {
                    var connector = connectors[this.connectors[2]].connectedTo,
                        tempBloq;
                    while (connector) {
                        tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                        tempBloq.doConnectable();
                        connector = connectors[tempBloq.connectors[1]].connectedTo;
                    }
                }
                connectable = true;
                this.$bloq[0].dispatchEvent(new Event('bloq:connectable'));
            }
        };

        this.doNotConnectable = function() {
            connectable = false;
        };

        this.isConnectable = function() {
            return connectable;
        };

        this.itsFree = function() {
            return (this.$bloq.closest('.bloq--group').length === 0);
        };

        //creation
        this.$bloq = $('<div>').attr({
            'data-bloq-id': this.uuid,
            tabIndex: 0
        });

        this.$bloq.addClass('bloq bloq--' + this.bloqData.type + ' ' + this.bloqData.bloqClass);

        bloqs[this.uuid] = this;

        //this.disable();
        this.doNotConnectable();

        switch (this.bloqData.type) {
            case 'statement-input':
                this.$bloq.append('<div class="bloq--statement-input__header"></div><div class="bloq--extension"><div class="bloq--extension__content"></div> <div class="bloq--extension--end"></div></div>');
                this.$contentContainer = this.$bloq.find('.bloq--statement-input__header');
                this.$contentContainerDown = this.$bloq.find('.bloq--extension--end');
                //this.$bloq.attr('draggable', true);
                buildContent(this);
                this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                buildConnectors(params.bloqData.connectors, this);
                this.$contentContainer.children().children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                this.$contentContainer.children().children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                this.$contentContainer.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                this.$contentContainerDown.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                this.$contentContainerDown.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                break;
            case 'statement':
                this.$bloq.append('<div class="bloq--fixed">');
                this.$contentContainer = this.$bloq.find('.bloq--fixed');
                //this.$bloq.attr('draggable', true);
                buildContent(this);
                this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                buildConnectors(params.bloqData.connectors, this);
                this.$bloq.children().children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                this.$bloq.children().children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                break;
            case 'output':
                this.$contentContainer = this.$bloq;
                //this.$bloq.attr('draggable', true);
                buildContent(this);
                this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                buildConnectors(params.bloqData.connectors, this);
                this.$bloq.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                this.$bloq.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                break;
            case 'group':
                this.$bloq.append('<div class="field--header"><button class="btn btn--collapsefield"></button><h3 data-i18n="' + this.bloqData.headerText + '">' + translateBloq(lang, this.bloqData.headerText) + '</h3></div><div class="field--content"><p data-i18n="' + this.bloqData.descriptionText + '">' + translateBloq(lang, this.bloqData.descriptionText) + '</p><div class="bloq--extension--info" data-i18n="drag-bloq" > ' + translateBloq(lang, 'drag-bloq') + '</div><div class="bloq--extension__content"></div></div>');

                buildConnectors(params.bloqData.connectors, this);
                this.$bloq.find('.connector--root').addClass('connector--root--group');
                this.$bloq.find('.field--header .btn').on('click', this.collapseGroupContent);
                this.$bloq.find('.field--header h3').on('click', this.collapseGroupContent);
                break;
            default:
                throw 'bloqData ' + this.bloqData.type + 'not defined in bloq construction';
        }

        if (this.bloqData.createDynamicContent) {
            var name = utils.validName(this.$bloq.find('input.var--input').val());
            if (name) {
                updateSoftVar(this, name);
            } else {
                removeSoftVar(this, name);
            }
        }

        this.getIOConnectorUuidByContentId = function(contentId) {
            var found = false,
                i = 0,
                result = null;

            while (!found && (i < this.IOConnectors.length)) {
                if (IOConnectors[this.IOConnectors[i]].contentId === contentId) {
                    found = true;
                    result = this.IOConnectors[i];
                }
                i++;
            }
            return result;
        };

        /**
         * Get the bloq's code, substituting each input's value
         * @return {[type]} code            [description]
         */
        this.getCode = function(previousCode) {
            var code = this.bloqData.code;
            var childBloq, childConnectorId;
            var elementTags = _.without(_.pluck(this.bloqData.content[0], 'id'), undefined);
            var childrenTags = _.without(_.pluck(this.bloqData.content[0], 'bloqInputId'), undefined);
            var value = '',
                type = '';
            var connectionType = '';

            elementTags.forEach(function(elem) {
                var element = this.$contentContainer.find('> [data-content-id="' + elem + '"]');
                if (element.length === 0) {
                    element = this.$contentContainer.find('[data-content-id="' + elem + '"]');
                }
                value = element.val() || '';
                //hardcoded!!
                for (var j = 0; j < this.componentsArray.sensors.length; j++) {

                    if (value === this.componentsArray.sensors[j].name) {
                        type = this.componentsArray.sensors[j].type;
                        if (type === 'analog') {
                            value = 'analogRead(' + this.componentsArray.sensors[j].pin.s + ')';
                        } else if (type === 'digital') {
                            value = 'digitalRead(' + this.componentsArray.sensors[j].pin.s + ')';
                        } else if (type === 'LineFollower') { // patch. When the new Web2Board is launched with float * as return, remove this
                            value = '(float *)' + this.componentsArray.sensors[j].name + '.read()';

                        } else {
                            value = this.componentsArray.sensors[j].name + '.read()';
                        }
                        code = code.replace(new RegExp('{' + elem + '.type}', 'g'), value);
                    }

                }
                if (element.attr('data-content-type') === 'stringInput') {
                    value = utils.validString(value);
                } else if (element.attr('data-content-type') === 'charInput') {
                    value = utils.validChar(value);
                } else if (element.attr('data-content-type') === 'multilineCommentInput') {
                    value = utils.validComment(value);
                }
                var valueWithoutAsterisk = value.replace(' *', '');
                code = code.replace(new RegExp('{' + elem + '}.withoutAsterisk', 'g'), valueWithoutAsterisk);
                code = code.replace(new RegExp('{' + elem + '}', 'g'), value);
            }.bind(this));

            var bloqInputConnectors = utils.getInputsConnectorsFromBloq(IOConnectors, bloqs, this);
            if (childrenTags.length > 0) {
                // search for child bloqs:
                for (var k = 0; k < bloqInputConnectors.length; k++) {

                    value = '';
                    connectionType = '';
                    type = '';
                    var a = IOConnectors[bloqInputConnectors[k]];
                    if (a) {
                        childConnectorId = a.connectedTo;
                        if (childConnectorId !== null) {
                            childBloq = utils.getBloqByConnectorUuid(childConnectorId, bloqs, IOConnectors);
                            value = childBloq.getCode();
                            type = childBloq.bloqData.returnType;
                        }
                        if (type.type === 'fromDynamicDropdown') {
                            connectionType = utils.getFromDynamicDropdownType(childBloq || this, type.idDropdown, type.options, softwareArrays, this.componentsArray);
                        } else if (type.type === 'fromDropdown') {
                            connectionType = utils.getTypeFromBloq(childBloq || this, bloqs, IOConnectors, softwareArrays);
                        } else {
                            connectionType = type.value;
                            if (connectionType === 'string') {
                                connectionType = 'String';
                            }
                        }
                    }
                    if (connectionType === undefined) {
                        connectionType = '';
                    }
                    code = code.replace(new RegExp('{' + childrenTags[k] + '.connectionType}', 'g'), connectionType);
                    code = code.replace(new RegExp('{' + childrenTags[k] + '}', 'g'), value);

                }
            }
            //search for regular expressions:
            var reg = /(.*)\?(.*):(.*)/g;
            if (reg.test(code)) {
                code = eval(code); // jshint ignore:line
            }
            var children = [];
            if (this.connectors[2]) {
                value = '';
                childConnectorId = connectors[this.connectors[2]].connectedTo;
                if (childConnectorId) {
                    childBloq = utils.getBloqByConnectorUuid(childConnectorId, bloqs, connectors);
                    var branchConnectors = utils.getBranchsConnectorsNoChildren(childBloq.uuid, connectors, bloqs);

                    branchConnectors.forEach(function(branchConnector) {
                        if (utils.itsInsideAConnectorRoot(bloqs[connectors[branchConnector].bloqUuid], bloqs, connectors)) {
                            var bloqId = connectors[branchConnector].bloqUuid;
                            if (bloqId !== children[children.length - 1]) {
                                children.push(bloqId);
                            }
                        }
                    });
                }
                children.forEach(function(elem) {
                    value += bloqs[elem].getCode();
                });
                // if (children.length >= 1) {
                //     for (i in children) {
                //         value += bloqs[children[i]].getCode();
                //     }
                // }
                code = code.replace(new RegExp('{STATEMENTS}', 'g'), value);
            }
            if (code.indexOf('{CLASS-OUTSIDE}') >= 0) {
                var rootParentName = utils.getClassName(this, bloqs, connectors);
                if (rootParentName) {
                    code = code.replace(new RegExp('{CLASS-OUTSIDE}', 'g'), rootParentName);
                }
                code = code.replace(new RegExp('{CLASS-OUTSIDE}', 'g'), '');
            }
            if (previousCode === undefined) {
                previousCode = '';
            } else { //the previousCode is always (from now) inserted after the void setup(){ string
                code = bloqsUtils.splice(code, code.indexOf('{') + 1, 0, previousCode);
            }
            if (!this.itsEnabled()) {
                //TODO: search highest parent disabled and add the comment characters
                // code = '/*' + code + '*/';
                code = '';
            }
            return code;
        };

        this.getBloqsStructure = function() {
            var result = {},
                tempBloq;
            result.name = this.bloqData.name;
            result.enable = this.itsEnabled();

            var rootConnector = this.connectors[2];
            if (rootConnector) {
                result.childs = [];
                var connectedConnector = connectors[rootConnector].connectedTo;
                while (connectedConnector) {
                    tempBloq = utils.getBloqByConnectorUuid(connectedConnector, bloqs, connectors);
                    result.childs.push(tempBloq.getBloqsStructure());
                    connectedConnector = connectors[tempBloq.connectors[1]].connectedTo;
                }
            }
            result.content = [
                []
            ];
            var tempObject, value, selectedValue, attributeValue;
            if (this.bloqData.content[0]) {

                for (var i = 0; i < this.bloqData.content[0].length; i++) {
                    tempObject = null;
                    switch (this.bloqData.content[0][i].alias) {
                        case 'varInput':
                        case 'stringInput':
                        case 'numberInput':
                        case 'multilineCodeInput':
                        case 'multilineCommentInput':
                        case 'codeInput':
                        case 'charInput':
                            value = this.$bloq.find('[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                            if (value) {
                                tempObject = {
                                    alias: this.bloqData.content[0][i].alias,
                                    id: this.bloqData.content[0][i].id,
                                    value: value
                                };
                            }
                            break;
                        case 'bloqInput':
                            //get the inputs bloqs inside in 1 level
                            var uuid,
                                connectedBloq;
                            uuid = this.getIOConnectorUuidByContentId(this.bloqData.content[0][i].bloqInputId);
                            if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                connectedBloq = utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors);
                                tempObject = {
                                    alias: this.bloqData.content[0][i].alias,
                                    bloqInputId: this.bloqData.content[0][i].bloqInputId,
                                    value: connectedBloq.getBloqsStructure()
                                };
                            }

                            break;
                        case 'dynamicDropdown':
                            attributeValue = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"][data-dropdowncontent="' + this.bloqData.content[0][i].options + '"]').attr('data-value');
                            selectedValue = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"][data-dropdowncontent="' + this.bloqData.content[0][i].options + '"]').val();
                            //only software Vars get value from val(), hardware, use attribute or val()
                            var variableType = this.bloqData.content[0][i].options;
                            var itsSoftwareValue = Object.keys(softwareArrays).indexOf(variableType);

                            if (itsSoftwareValue !== -1) {
                                value = selectedValue;
                            } else {
                                value = attributeValue || selectedValue;
                            }

                            // console.log('val', attributeValue, selectedValue);
                            if (value) {
                                tempObject = {
                                    alias: this.bloqData.content[0][i].alias,
                                    id: this.bloqData.content[0][i].id,
                                    value: value
                                };
                            }
                            break;
                        case 'staticDropdown':
                            //value = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                            value = this.$contentContainer.find('> select[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                            if (value) {
                                tempObject = {
                                    alias: this.bloqData.content[0][i].alias,
                                    id: this.bloqData.content[0][i].id,
                                    value: value
                                };
                            }
                            break;
                        case 'text':
                            //we dont catch this field
                            break;
                        default:
                            throw 'I dont know how to get the structure from this contentType :( ' + this.bloqData.content[0][i].alias;
                    }
                    if (tempObject) {
                        result.content[0].push(tempObject);
                    }

                }
            }

            return result;
        };

        return this;
    };


    var buildBloqWithContent = function(data, componentsArray, schemas, $field) {

        var tempBloq,
            originalBloqSchema = schemas[data.name],
            bloqSchema,
            lastBottomConnector,
            tempNodeBloq,
            tempOutputBloq,
            inputConnectorUuid,
            $dropContainer,
            i;


        if (!originalBloqSchema) {
            console.error('no original schema', data);
        }
        //fill the schema with content
        bloqSchema = bloqsUtils.fillSchemaWithContent(originalBloqSchema, data);
        tempBloq = new Bloq({
            bloqData: bloqSchema,
            componentsArray: componentsArray,
            $field: $field
        });

        if (data.content) {
            for (i = 0; i < data.content[0].length; i++) {
                if (data.content[0][i].alias === 'bloqInput') {
                    inputConnectorUuid = tempBloq.getIOConnectorUuidByContentId(data.content[0][i].bloqInputId);
                    $dropContainer = tempBloq.$bloq.find('[data-connector-id="' + inputConnectorUuid + '"]').first();
                    //console.debug($dropContainer);
                    //inputConnectorUuid = $dropContainer.attr('data-connector-id');
                    //console.debug(inputConnectorUuid);
                    tempOutputBloq = buildBloqWithContent(data.content[0][i].value, componentsArray, schemas, $field);
                    tempOutputBloq.$bloq.addClass('nested-bloq');
                    //Connections in bloqInput
                    //logical
                    if (!IOConnectors[inputConnectorUuid]) {
                        console.debug('not connector?', originalBloqSchema);
                    }
                    IOConnectors[inputConnectorUuid].connectedTo = tempOutputBloq.IOConnectors[0];
                    IOConnectors[tempOutputBloq.IOConnectors[0]].connectedTo = inputConnectorUuid;
                    //visual
                    //$dropContainer[0].appendChild(tempOutputBloq.$bloq[0])
                    $dropContainer.append(tempOutputBloq.$bloq);
                }
            }
        }

        if (data.childs) {

            $dropContainer = tempBloq.$bloq.find('.bloq--extension__content');
            lastBottomConnector = tempBloq.connectors[2];

            if (data.childs.length > 0) {
                tempBloq.$bloq.addClass('with--content');
            }
            for (i = 0; i < data.childs.length; i++) {
                tempNodeBloq = buildBloqWithContent(data.childs[i], componentsArray, schemas, $field);
                //Connections in statement
                //logical
                connectors[lastBottomConnector].connectedTo = tempNodeBloq.connectors[0];
                connectors[tempNodeBloq.connectors[0]].connectedTo = lastBottomConnector;
                lastBottomConnector = tempNodeBloq.connectors[1];

                //visual
                tempNodeBloq.$bloq.addClass('inside-bloq');
                $dropContainer.append(tempNodeBloq.$bloq);
            }
        }

        if (data.enable) {
            tempBloq.enable(true);
        } else {

            tempBloq.disable();
        }
        if (tempBloq.bloqData.createDynamicContent) {
            updateSoftVar(tempBloq);
        }

        return tempBloq;
    };

    exports.Bloq = Bloq;
    exports.updateSoftVar = updateSoftVar;
    exports.connectors = connectors;
    exports.IOConnectors = IOConnectors;
    exports.bloqs = bloqs;
    exports.removeBloq = removeBloq;
    exports.translateBloqs = translateBloqs;
    exports.getFreeBloqs = getFreeBloqs;
    exports.destroyFreeBloqs = destroyFreeBloqs;
    exports.updateDropdowns = updateDropdowns;
    exports.setOptions = setOptions;
    exports.buildBloqWithContent = buildBloqWithContent;

    return exports;

})(window.bloqs = window.bloqs || {}, _, bloqsUtils, bloqsLanguages, undefined);