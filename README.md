Web aplikacija za budžetiranje omogućava korisnicima praćenje zajedničkih i ličnih troškova, sa posebnim funkcionalnostima u zavisnosti od korisničke uloge. Postoje tri vrste korisnika: admin, VIP korisnik, i regularni korisnik.
Korisničke uloge i funkcionalnosti
# 1.	Admin

o	Stranica sa korisnicima: Prikaz svih korisnika u tabeli sa opcijom da im menja ulogu iz regularnog u VIP i obrnuto.

o	Stranica sa statistikom:
1)	Ukupan broj korisnika.
2)	Broj VIP korisnika.
3)	Broj regularnih korisnika.
4)	Ukupan broj kreiranih grupa.
5)	Prosečan broj troškova po grupi.
6)	Ukupna suma svih troškova.
7)	Prosečna vrednost pojedinačnog troška.
# 2.	VIP korisnik
o	Grupe:
1)	Kreiranje novih grupa i dodavanje korisnika u grupe.
2)	Kreiranje troškova unutar grupa sa detaljima: naziv troška, iznos, i korisnik koji ga je platio.
3)	Automatski obračun dugovanja ostalih korisnika prema osobi koja je platila trošak.
4)	Evidencija isplaćenih dugovanja unosi se od strane korisnika koji prima novac.
o	Profil korisnika:
1)	Prikaz broja grupa u kojima učestvuje.
2)	Ukupan iznos koji duguje.
3) Ukupan iznos koji drugi korisnici duguju njemu.
o	Lični troškovi:
1)	Kreiranje i praćenje ličnih troškova bez povezanosti sa grupama.
2) Analiza lične potrošnje kroz vremenski period.
# 3.	Regularni korisnik
o	Ima iste funkcionalnosti kao VIP korisnik osim mogućnosti vođenja ličnih troškova.

# Kloniranje projekta i neophodne postavke
 
- Klonirati repozitorijum komandom ` git clone https://github.com/elab-development/internet-tehnologije-2024-projekat-budzetiranje_2021_0150.git ` na željenu destinaciju na vašem računaru
- U željenom tekstualnom editoru otvoriti klonirani projekat (preporuka VSCode)
 
# Pokretanje Laravel API-ja
 
- Pozicionirati se u iteh-back folder komandom `cd back`
- Instalirati composer komandom `composer install`
- Kreirati .env fajl u root-u iteh-back projekta i podesiti informacije o konekciji sa bazom: DB_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST
- Popuniti bazu podacima komandom `php artisan migrate:fresh --seed`
- Pokrenuti aplikaciju komandom `php artisan serve`
 
# Pokretanje React domaceg
 
- Pozicionirati se u front_domaci folder komandom `cd front_domaci` (Neophodno je prvo pozicionirati se u root direktorijum komandom `cd ..`)
- Komandom `npm install` ( ili `npm i`), instalirati neophodne pakete za pokretanje same aplikacije
- Pokrenuti aplikaciju komandom `npm start`

# Pokretanje React projekta
 
- Pozicionirati se u front_projekat folder komandom `cd front_projekat` (Neophodno je prvo pozicionirati se u root direktorijum komandom `cd ..`)
- Komandom `npm install` ( ili `npm i`), instalirati neophodne pakete za pokretanje same aplikacije
- Pokrenuti aplikaciju komandom `npm start`

