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
let closeBtn = document.querySelector("close-btn")



centerImg[0].classList.add("display")
bottomImg[0].classList.add("blur")

let imgChange = ()=>{
    for(let i=0;i<bottomImg.length;i++){
        bottomImg[i].addEventListener('click',()=>{
            centerImg.forEach((tag)=>{
                tag.classList.remove("display");                
            })
            bottomImg.forEach((tag)=>{
                tag.classList.remove("blur");               
            })
            centerImg[i].classList.add("display");
            bottomImg[i].classList.add("blur");
            
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

        cartBtn.addEventListener('click',()=>{
            if(count==0){
                
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