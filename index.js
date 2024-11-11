let input=document.getElementById("color")
let input2=document.getElementById("BRadius")
let image=document.querySelector("img");


function colorchange(x){
    console.log(x);
   if(x.key==="Enter") {
    document.body.style.background=input.value
   }
}

function RadiusChange(z){
    console.log(z)
        if(z.key === "Enter"){
            image.style.borderRadius=`${input2.value}px`
        }
}