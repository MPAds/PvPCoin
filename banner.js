function banners() {  // Banners
gfx=new Array();
wdh=new Array();
hgt=new Array();
lnk=new Array();

gfx[0]="images/ssworldairporttransfer_com.png";
gfx[1]="images/artdeko_info.png";
gfx[2]="images/sportdiva_ru.png";
gfx[3]="images/ss_wholesaleit.png";
gfx[4]="images/cookingmeat_ru.png";
gfx[5]="images/trackingsticker_com.png";
gfx[6]="images/meditainment_com.png";
// gfx[7]="put you next image name here and remove the //.png";
// gfx[8]="put you next image name here and remove the //.png";

lnk[0]="http://www.shareasale.com/r.cfm?b=330108&u=671906&m=35339&urllink=&afftrack=";
lnk[1]="http://www.artdeko.info/";
lnk[2]="http://sportdiva.ru/";
lnk[3]="http://www.shareasale.com/r.cfm?b=553517&u=671906&m=48174&urllink=&afftrack=" ;
lnk[4]="http://cookingmeat.ru/";
lnk[5]="http://www.shareasale.com/r.cfm?b=596741&u=671906&m=52596&urllink=&afftrack=";
lnk[6]="http://www.shareasale.com/r.cfm?b=128852&u=671906&m=9747&urllink=&afftrack=";
// lnk[7]="put you next hyperlink here and remove the //";
// lnk[8]="put you next hyperlink here and remove the //";


// Edit the random number below after finished with the to


wdh[0]="200";
hgt[0]="30";

function banner1() {
rnd0=Math.floor(Math.random()*7);
document.getElementById("b1").innerHTML =('<a target="_blank" href="'+lnk[rnd0]+'"><IMG SRC="'+gfx[rnd0]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
 }
function banner2() {
rnd1=Math.floor(Math.random()*7);
document.getElementById("b2").innerHTML =('<a target="_blank" href="'+lnk[rnd1]+'"><IMG SRC="'+gfx[rnd1]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner3() {
rnd2=Math.floor(Math.random()*7);
document.getElementById("b3").innerHTML =('<a target="_blank" href="'+lnk[rnd2]+'"><IMG SRC="'+gfx[rnd2]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner4() {
rnd3=Math.floor(Math.random()*7);
document.getElementById("b4").innerHTML =('<a target="_blank" href="'+lnk[rnd3]+'"><IMG SRC="'+gfx[rnd3]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner5() {
rnd4=Math.floor(Math.random()*7);
document.getElementById("b5").innerHTML =('<a target="_blank" href="'+lnk[rnd4]+'"><IMG SRC="'+gfx[rnd4]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner6() {
rnd5=Math.floor(Math.random()*7);
document.getElementById("b6").innerHTML =('<a target="_blank" href="'+lnk[rnd5]+'"><IMG SRC="'+gfx[rnd5]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}

banner1()
banner2()
        do {
   banner2()
} while (rnd1 == rnd0);
		 
			
banner3()
         while ((rnd2 == rnd1) || (rnd2 == rnd0)){
			banner3()
			}
banner4()
         while ((rnd3 == rnd2) || (rnd3 == rnd1) || (rnd3 == rnd0)){
			banner4()
			}	
banner5()
         while ((rnd4 == rnd3) || (rnd4 == rnd2) || (rnd4 == rnd1) || (rnd4 == rnd0)){
			banner5()
			}			
banner6()
         while ((rnd5 == rnd4) || (rnd5 == rnd3) || (rnd5 == rnd2) || (rnd5 == rnd1) || (rnd5 == rnd0)){
			banner6()
			}
}