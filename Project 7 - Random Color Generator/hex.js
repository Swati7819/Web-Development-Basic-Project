const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color")

btn.addEventListener("click", ()=>{
    //generate random number
    let r = getRandom();
    document.body.style.backgroundColor= r;
    color.textContent = r;

})

function getRandom(){
    let color = "#";
    for(let i =0; i<6;i++)
    {
        color+= hex[Number.parseInt(Math.random()*10)];
    }

    return color;
}