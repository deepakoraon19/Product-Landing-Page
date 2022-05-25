let plusBtn = document.querySelector(".plus")
let minusBtn = document.querySelector(".minus")
let counterTxt  = document.querySelector(".count")
let cartBtn = document.querySelector(".cart-img")
let cartFloat = document.querySelector(".cart-float")
let addCart = document.querySelector(".add-cart")
let centerImg  = document.querySelectorAll(".center-img")
let bottomImg  = document.querySelectorAll(".bottom-img")
let overlay = document.querySelector(".overlay")
let overImg = document.querySelectorAll(".overlay-img")
let closeBtn = document.querySelector(".close-btn")
let cartPrice = document.querySelector(".cart-price")
let totalPrice = document.querySelector(".total-price")
let cartCount = document.querySelector(".cart-count")
let cartNum = document.querySelector(".cart-num")
let deleteCart = document.querySelector(".delete")
let itemsList = document.querySelector(".items-list")


centerImg[0].classList.add("display")
bottomImg[0].classList.add("blur")

closeBtn.addEventListener('click',()=>{
    overlay.classList.remove("display")
})


let imgChange = ()=>{
    for(let i=0;i<bottomImg.length;i++){
        bottomImg[i].addEventListener('click',()=>{
            let j=i%4;
            centerImg.forEach((tag)=>{
                tag.classList.remove("display");                
            })
            bottomImg.forEach((tag)=>{
                tag.classList.remove("blur");               
            })
            overImg.forEach((tag)=>{
                tag.classList.remove("display");               
            })
            centerImg[j].classList.add("display");
            overImg[j].classList.add("display")
            bottomImg[j].classList.add("blur");
            
        })
    }
}

let slideImg = ()=>{
    for(let i=0;i<centerImg.length;i++)
    {
        centerImg[i].addEventListener('click',()=>{
            overlay.classList.add("display")
            // closeBtn.classList.add("display")
            overImg[0].classList.add("display")

        })
    }
}



let counterBtn = ()=>{
    let count=0;
    let total=0;
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

        addCart.addEventListener('click',()=>{
             itemsList.classList.remove("none") 
            total=total+count;
            cartNum.textContent=total;
            cartCount.classList.add("display")
            cartPrice.innerHTML=`$125.00 x ${total} `
            totalPrice.innerHTML=`$${total*125}`                      
            count=0;
            counterTxt.textContent=count;
        })

        deleteCart.addEventListener('click',()=>{
            itemsList.classList.add("none")
            total=0;
            count=0;
            cartNum.textContent=total;
        })

        cartBtn.addEventListener('click',()=>{
            if(total!=0){
                
            }
            if(!cartFloat.classList.contains("display")){
                cartFloat.classList.add("display");
            }
            else cartFloat.classList.remove("display")
        })
    }
}


imgChange();
slideImg();
counterBtn()();



{/* <div class="items-list">
      <div class="cart-items round-corner flex">
        <img class="item-img round-corner" src="./images/image-product-1-thumbnail.jpg">
        <div class="flex cart-desc">
          <span>Fall Limited Edition Sneakers</span>
          <span>fasaf</span>         
        </div>
      </div>
    </div> */}

// let cartItems = document.createElement("div")
// let cartImg = document.createElement("img")
// let cartDesc = document.createElement("span")
// let cartPrice = document.createElement("div")

