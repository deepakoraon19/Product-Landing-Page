let plusBtn = document.querySelector(".plus")
let minusBtn = document.querySelector(".minus")
let counterTxt  = document.querySelector(".count")
let cartBtn = document.querySelector(".cart-img")

let counterBtn = ()=>{
    let count=0;
    return ()=>{
        plusBtn.addEventListener('click',()=>{
            count++;
            counterTxt.textContent=count;
        });
        minusBtn.addEventListener('click',()=>{
            if(count>0){
                count--;
                counterTxt.textContent=count;
            }
        })
    }
}

counterBtn()();
