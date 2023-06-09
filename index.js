var randomnumber=Math.floor(Math.random()*6)+1;

var randomImage="dice"+randomnumber+".png";
var randomImageSource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomnumber1=Math.floor(Math.random()*6)+1;

var randomImage="dice"+randomnumber1+".png";
var randomImageSource2="images/"+randomImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomnumber>randomnumber1)
{
    document.querySelector("h1").innerHTML="🚩play1 wins";
}
else if (randomnumber<randomnumber1)
{
    document.querySelector("h1").innerHTML="play2 wins🚩";
}
else 
{
    document.querySelector("h1").innerHTML="DRAW🚩";
}