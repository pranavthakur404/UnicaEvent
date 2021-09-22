// banner logic
var mainBanner = document.getElementById('banner-sec');
var textBoxOne = document.getElementById('text-one');
var textBoxTwo = document.getElementById('text-two');
var textBoxThree = document.getElementById('text-three');
var bannerPoint1 = document.getElementById('circle-one');
var bannerPoint2 = document.getElementById('circle-two');
var bannerPoint3 = document.getElementById('circle-three');
 

function bannerOne(){
    mainBanner.style.backgroundImage="url('/image/banner1.jpg')";
    textBoxOne.style.display="block";
    textBoxTwo.style.display="none";
    textBoxThree.style.display="none";
    bannerPoint1.style.color="#FF635C"
    bannerPoint2.style.color="white";
    bannerPoint3.style.color="white";
}
function bannerTwo(){
    mainBanner.style.backgroundImage="url('/image/banner2.jpg')";
    textBoxTwo.style.display="block";
    textBoxOne.style.display="none";
    textBoxThree.style.display="none";
    bannerPoint2.style.color="#FF635C"
    bannerPoint1.style.color="white";
    bannerPoint3.style.color="white";
}
function bannerThree(){
    mainBanner.style.backgroundImage="url('/image/banner3.jpg')";
    textBoxThree.style.display="block";
    textBoxTwo.style.display="none";
    textBoxOne.style.display="none";
    bannerPoint3.style.color="#FF635C"
    bannerPoint1.style.color="white";
    bannerPoint2.style.color="white";
}
// banner logic ends

// counter start
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var count1=1;
var count2=1;
var count3=1;
var count4=1;

setInterval(() => {
    
     if(count1 <= 67){
         num1.innerHTML=count1;
         count1++;
     }
     
    if(count2 <= 117){
        num2.innerHTML=count2;
        count2++;
    }

    if(count3 <= 18){
        num3.innerHTML=count3;
        count3++;
    }
    
    if(count4 <= 12){
        num4.innerHTML=count4;
        count4++;
    }
}, 40);
// counter ends

// testimonials section
var message1 = document.getElementById('msg1');
var message2 = document.getElementById('msg2');
var point1 = document.getElementById('p1');
var point2 = document.getElementById('p2');

function testimonial1(){
    message2.style.display="none";
    message1.style.display="flex";
    point2.style.color="black";
    point1.style.color="yellow";
}
function testimonial2(){
    message1.style.display="none";
    message2.style.display="flex";
    point1.style.color="black";
    point2.style.color="yellow";
}

// testimonials ends

// toggle nav

let toggleNav = document.getElementById('toggle-navigation');


function toggleOff(){
     toggleNav.style.left="-1500px";
     toggleNav.style.position="absolute";
}

function toggleOn(){
      toggleNav.style.left="0px";
      toggleNav.style.position="sticky"; 
}