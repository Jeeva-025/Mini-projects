let input8x=document.querySelector('#input8X');
let list=document.querySelector('#list');
console.log(input8x);

input8x.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value= "";
    }
})
 
let addItem=(input8X)=>{
    let listItem=document.createElement("li");
    listItem.innerHTML=`${input8X} <i class="fa fa-trash" style="color:#000000;"></i>`;
    

    listItem.addEventListener("click", function(){
        this.classList.toggle(`done`);
    })

    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove();
    })


    list.appendChild(listItem); 
}