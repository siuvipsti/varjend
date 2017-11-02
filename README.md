# varjend

Asi iseenesest toimib aga Brackets'le ei meeldi, annab ERROR, koodi esimene rida:
let canvas, ctx;

Sellise koodiga jätkates läheb asi käest ära, seega mõned küsimused:

1. Kas (renderdamise) graafiline jutt - värvid ja joonistamine jms. võiks/peaks olema eraldatud?
2. Kuupäevade erinevuse arvutamine jt. funktsioonid võiksid samuti teises failis eksisteerida ehk
	- millises failis peaksid funktsioonid olema, et neid saaks js-s kasutada.
3. Kas ühe canvas peale saab panna erinevaid scripte (fail-e) "jooksma"?
4. Kas canvas peale on võimalik panna teine canvas?
	- kas erinevates js failides unikaalsele id-le viitamine toimib (nt. canvas id)?
	- (3./4.) segaseks jääb ka erinevates js-es initialiseerimine,
	  (kas igas script-is eraldi või tehakse seda pea-scriptis).
5. Kas (kui saab) teha pea-script ja panna sealt alam-scriptid tööle?
	- kas index-s pea-scripti määramisest piisab või peab alam-scriptidele ka viitama?