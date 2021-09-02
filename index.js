let count =1;
let star = document.createElement("div");
star.setAttribute("class","star");
document.body.append(star);

//create stars
function createstar()
{
    star.innerHTML="";
        for(let i=0;i<50;i++)
        {
        star.innerHTML +=`<i class="fas fa-star Sanim"></i>
        `;
        
        }
     createAnim();
     clearanim();

}




//create animation
let a;
function createAnim()
{
 a = setInterval(() => {
    for(let i=0;i<50;i++)
    {
        let icon = document.querySelectorAll(".Sanim")[i];
        if(i==0)
        {
            icon.style.transform += `translateX(10px)`+`translateY(-10px)`;
        }
        else if(i%2==0)
        {
            icon.style.transform += `translateX(${i*10*Math.random()}px)`+`translateY(${-i*10*Math.random()}px)`;
        }
        else{
            icon.style.transform += `translateX(${-i*10*Math.random()}px)`+`translateY(${-i*10*Math.random()}px)`;
        }
    }
},100);
}


//clearinterval and erase
function clearanim()
{
    setTimeout(() => {
        
        clearInterval(a);
       let star = document.querySelector(".star");
        star.innerHTML="";
    },1000);
}
