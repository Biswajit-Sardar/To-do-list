let plus= document.getElementById("plus");
let minus= document.getElementById("minus");
let number= document.getElementById("number");

let count=0;


function update(coun){
    count=count+coun;
        number.innerHTML=count;
        if (count>=10) {
         plus.setAttribute("disabled",true);
        }
        else{
            plus.removeAttribute("disabled",false);
        }

        if (count<=0) {
            minus.setAttribute("disabled",true)
        }
        else{
            minus.removeAttribute("disabled",false)
        }

}

plus.addEventListener("click", ()=>{
        update(1)
    
})

minus.addEventListener("click", ()=>{
    

    update(-1)
        /*count--;
        number.innerHTML=count;
        
        if (count>=1 && count>=10) {
            minus.removeAttribute("disabled",false)
        }*/
})