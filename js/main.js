
  
  







let aboutLocation=$("#about").offset().top
console.log(aboutLocation);
$(window).scroll(function (){

let Wscroll=$(window).scrollTop()
console.log(Wscroll);
if(Wscroll>aboutLocation){
    $("#main-nav").css('backgroundColor','rgba(0,0,0,0.2)')
    $('#btn-arrow').fadeIn(400)
}
else{
    $("#main-nav").css('backgroundColor','transparent')
    $('#btn-arrow').fadeOut(400)
}

  
})

    
    $('#btn-arrow').click(function(){
          $('html,body').animate({scrollTop:0},600)
    })

let colorIte=$(".colorItem")
colorIte.eq(0).css('backgroundColor','green')
colorIte.eq(1).css('backgroundColor','blue')
colorIte.eq(2).css('backgroundColor','orange')
colorIte.eq(3).css('backgroundColor','red')
colorIte.eq(4).css('backgroundColor','yellow')


$(colorIte).click(function(e){
let colorPointer=$(e.target).css("backgroundColor")
$('h2,p,a,h4').css("color",colorPointer)
})
$("#colorIcon").click(function(){
    $('#colorBox').toggle(200)
})

   let Counter=0
   let Counte=0
   let Count=0
   let Coun=0


function setCounter(){
    Counter++;
    
document.getElementById("happy").innerHTML=Counter
    if(Counter==123){
        clearInterval(x)
    }
 
}
function setcounte(){
    Counte++;
    document.getElementById("completed").innerHTML=Counte
    if(Counte==552){
        clearInterval(y)
        
    }

}
function setcount(){
    Count++;
    document.getElementById("postss").innerHTML=Count
    if(Count==170){
        clearInterval(z)
        
    }

}
function setcoun(){
    Coun++;
    document.getElementById("positive").innerHTML=Coun
    if(Coun==427){
        clearInterval(a)
        
    }

}
let x=setInterval(setCounter,30)
let y=setInterval(setcounte,0)
let z=setInterval(setcount,20)
let a=setInterval(setcoun,10)

function displayClock(){

    let clock=new Date()
    document.getElementById('hours').innerHTML=clock.getHours()
    document.getElementById('min').innerHTML=clock.getMinutes()
    document.getElementById('sec').innerHTML=clock.getSeconds()
    
}

setInterval(displayClock,10)

$("#timeToggle").click(function(){
    $('.timeDiv').toggle(200)
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });