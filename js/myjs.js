let mm=document.getElementById("header").innerHTML;
// console.log(mm.length)
if( mm.length == 109)
{
  regnav();
}
if( mm.length == 115)
{
  showNav();
  showFooter();
}
if( mm.length == 134)
{
  LshowNav();
  showFooter();
}
if( mm.length == 135)
{
  MshowNav();
  showFooter();
}
if( mm.length == 106)
{
  JshowNav();
  showFooter();
}
// ნავიგაციის ფორმირება
function regnav(){
  const navigaciatxt=["მთავარი","პროექტის შესახებ","კონტაქტი","რეგისტრაცია"];
  const navigaciahttp=["mtavari(this)","proeqtisshesaxeb(this);","kontaqti(this);"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  // console.log(txt);
  for (let i=0; i<mtavarinavigacia;i++){
      if(i<3){
        txt+='<li><a href="#" onclick='+navigaciahttp[i]+'>'+navigaciatxt[i]+'</a></li>';
      }
      if(i==3){
        txt+='<li><a href="registracia.html">'+navigaciatxt[i]+'</a></li>';
      }
    }
  txt+="</ul>";
  document.getElementById("regnav").innerHTML=txt;
//----------------------------------------------------------------------------------------
}
let slideIndex = 0;
showSlides();
// სლაიდის ფორმირება
function showSlides() {
  let slides = document.getElementsByClassName("slidershvili");
  //console.log (slides.length);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 5000);
}
//--------------------------------------------------------------------------------------------
let txtp="<h4>პროექტის შესახებ</h4>"+
          '<div class="mtavari">'+
          "<p>ჩვენი პროექტი წარმოადგენს მანქანებისა და მათი მწარმოებლების შესახებ ინფორმაციას</p>"+
          "<p>თუ დაგაინტერესათ მაშინ დარეგისტრირდით ჩვენს საიტზე</p>"+
          "<p>და მიიღე მეტი ინფორმაცია</p>"+
          "</div>";
let j=0;
function proeqtisshesaxeb(){
jj=0;jk=0;
if(j==0)
{
  document.getElementById("proeqtisshesaxeb").style.display = "block"
  document.getElementById("proeqtisshesaxeb").innerHTML=txtp;
}
if(j==1)
{document.getElementById("proeqtisshesaxeb").style.display = "none"}
j++;
if(j==2)
  {j=0;}
}
let txtm='<h4>მოგესალმებით </h4>'+
        '<div class="mtavari">'+
        '<p>კეთილი იყოს თქვენი მობრძანება </p>'+
        '<p>იმედია დაგაინტერესებთ ჩვენი საიტი, შეკითხვების დასასმელად შეგიძლია გამოიყენოთ "სასაუბრო" </p>'+
        '<p>კონკრეტულ გვერდებზე გათვალისწინებულია კომენტარის და რჩევების დასატოვებელი ადგილი</p>';
        '</div>';
let jj=0;
function mtavari(){
j=0;jk=0;
if(jj==0)
{
  document.getElementById("proeqtisshesaxeb").style.display = "block"
  document.getElementById("proeqtisshesaxeb").innerHTML=txtm;
}
if(jj==1)
{document.getElementById("proeqtisshesaxeb").style.display = "none"}
jj++;
if(jj==2)
  {jj=0;}
}
let txtk="<h4>კონტაქტი</h4>"+
          '<div class="mtavari">'+
          "<p>დამატებითი შეკითხვებისთვის შეგიძლიათ მოგვმართოთ ელექტრონულ ფოსტით</p>"+
          "<p><ელექტრონული ფოსტა> </p>"+
          "<p>ყურადღება!!! ფოსტაზე მომართვისას მიუთითეთ თქვენი იუზერის სახელი წინააღმდეგ შემთხვევაში თქველი წერილი არ განიხილება </p>"+
          "</div>";
let jk=0;
function kontaqti(){
  j=0;jj=0;
  if(jk==0)
  {
    document.getElementById("proeqtisshesaxeb").style.display = "block"
    document.getElementById("proeqtisshesaxeb").innerHTML=txtk;
  }
  if(jk==1)
    {document.getElementById("proeqtisshesaxeb").style.display = "none"}
    jk++;
  if(jk==2)
    {jk=0;}
}
function sasaubrosgaxsna() {
  document.getElementById("myForm").style.display = "block";
}
function sasaubrosdaxurva() {
  document.getElementById("myForm").style.display = "none";
}
function regsubmit(){
//  let x=document.getElementsByTagName('input')[6].value;
//  let y=document.getElementsByTagName('input')[7].value;
  let x=document.getElementById("pass").value;
  let y=document.getElementById("gapass").value;
  let passtext;

  if( x != y)
  {
    passtext="<p>პაროლები არ ემთხვევა ერთმანეთს</p>"
    document.getElementById("passdiv").innerHTML=passtext;
   
    document.getElementById("passdiv").style.display='block';
    document.getElementById("passdiv").style.color='#ff0000';

  }
}
// ნავიგაციის ფორმირება
function showNav(){
  const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
  const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  // console.log(mtavarinavigacia);
  for (let i=0; i<mtavarinavigacia;i++){
    if(i==0){
      txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
    }
    if(i>=1){
      txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
    }

  }
    //console.log(txt);
  
  txt+="</ul>";
  document.getElementById("navmtavari").innerHTML=txt;
  }
  //----------------------------------------------------------------------------------------
// ნავიგაციის ფორმირება lamborjini
function LshowNav(){
  const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
  const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  console.log(mtavarinavigacia);
  for (let i=0; i<mtavarinavigacia;i++){
    if(i==1){
      txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
    }
    if(i!=1){
      txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
    }

  }
  txt+="</ul>";
  document.getElementById("navmtavari").innerHTML=txt;
  }
// ნავიგაციის ფორმირება მუსტანგი
function MshowNav(){
  const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
  const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  console.log(mtavarinavigacia);
  for (let i=0; i<mtavarinavigacia;i++){
    if(i==2){
      txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
    }
    if(i!=2){
      txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
    }

  }
  txt+="</ul>";
  document.getElementById("navmtavari").innerHTML=txt;
  }
  // ნავიგაციის ფორმირება იაგუარი
  function JshowNav(){
    const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
    const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
    let mtavarinavigacia=navigaciatxt.length;
    let txt="<ul>";
    console.log(mtavarinavigacia);
    for (let i=0; i<mtavarinavigacia;i++){
      if(i==3){
        txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
      }
      if(i!=3){
        txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
      }
  
    }
    txt+="</ul>";
    document.getElementById("navmtavari").innerHTML=txt;
  }

 // ნავიგაციის ფორმირება
function regnav(){
  const navigaciatxt=["მთავარი","პროექტის შესახებ","კონტაქტი","რეგისტრაცია"];
  const navigaciahttp=["mtavari(this)","proeqtisshesaxeb(this);","kontaqti(this);"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
//  console.log(txt);
  for (let i=0; i<mtavarinavigacia;i++){
      if(i<3){
        txt+='<li><a href="#" onclick='+navigaciahttp[i]+'>'+navigaciatxt[i]+'</a></li>';
      }
      if(i==3){
        txt+='<li><a href="registracia.html">'+navigaciatxt[i]+'</a></li>';
      }
    }
  txt+="</ul>";
  document.getElementById("regnav").innerHTML=txt;
//  console.log(txt);
}
  //----------------------------------------------------------------------------------------
  // ფუტერის ფორმირება
// showFooter();
function showFooter(){
  const fotigaciatxt=["img/icons/twitter.png","img/icons/fb.png","img/icons/instagram.png","img/icons/telegram.png"];
  const fotigaciahttp=["https://twitter.com/twitter","https://www.facebook.com/","https://www.instagram.com/","https://telegram.org/"];
  let mtavarifot=fotigaciatxt.length;
  let fottxt;

  for (let i=0; i<mtavarifot; i++){
    fottxt+='<div class="footlogo"> <a target="_blank" href="'+fotigaciahttp[i]+'"><img id="footimg'+i+'" src="'+fotigaciatxt[i]+'"></a></div>';

  }
  document.getElementById("fotter").style.width="100%";
  document.getElementById("fotter").style.backgroundColor="#000000";
  document.getElementById("fotter").style.padding="15px";
  document.getElementById("fotter").style.borderRadius="10px";
  document.getElementById("fotter").style.position="fixed";
  document.getElementById("fotter").style.bottom="0";
  document.getElementById("foot").innerHTML=fottxt;
  document.getElementById("foot").style.display='flex';
  document.getElementById("foot").style.justifyContent="center"
  document.getElementById("foot").style.paddingTop="5px";
  document.getElementById("footimg0").style.width='20px';
  document.getElementById("footimg0").style.height='20px';
  document.getElementById("footimg1").style.width='20px';
  document.getElementById("footimg1").style.height='20px';
  document.getElementById("footimg2").style.width='20px';
  document.getElementById("footimg2").style.height='20px';
  document.getElementById("footimg3").style.width='20px';
  document.getElementById("footimg3").style.height='20px';
  document.getElementById("footimg1").style.marginLeft='160px';
  document.getElementById("footimg2").style.marginLeft='160px';
  document.getElementById("footimg3").style.marginLeft='160px';
}
//-----------------------------------------------------------------------------