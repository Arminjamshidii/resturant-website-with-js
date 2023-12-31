// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxNTVmZWY0N2E1Mzg0ZmQ1NDI1MDkzMGIxMTEyMWYwNTMxYzI0MzBjYmMwM2RhZTAyMGM4MDkzM2IzYThjMzJhMDFkOTM3ZjQyYWQzYTNmIn0.eyJhdWQiOiIyMjU1MCIsImp0aSI6IjYxNTVmZWY0N2E1Mzg0ZmQ1NDI1MDkzMGIxMTEyMWYwNTMxYzI0MzBjYmMwM2RhZTAyMGM4MDkzM2IzYThjMzJhMDFkOTM3ZjQyYWQzYTNmIiwiaWF0IjoxNjg1NzgyODc3LCJuYmYiOjE2ODU3ODI4NzcsImV4cCI6MTY4ODM3NDg3Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.f-AObZsnN6VT3PqzBXcqdWzAQXyVbxR3GZTjSXvSCMheDzjoCe_33shBo3CkGoGyI9V1piUh-27s8mxNZL3eiSAEpRzKZ_JUjh1DpOqjV11IyBt_f_hv_e3xtWykzIVPlNQgHjrziigTH-VuEmX2fm3KLJr7zgtr4YYoRnuRUjc9C36tH8DzCdLwMACK-kUQgc3WJIWK8_ovQ_yTONOjTehDjsRsRBF_orM_k0m4wHFgrZp9ts12TAQcUuCumSSofNmRlYyZz9Y5HjHVT2mjKmCKHJ_tWsCl46xmjLHf8zHzfNJyWQ9unBGKKvsg5vuS3xXP0m1NCXc-72tf_PK8iw

//====================menu nav ==================

const menuTab =document.querySelector('.menu-tab')
const menuNavHeader=document.querySelector('.menu-nav-header')

menuNavHeader.addEventListener("click",showMenu );
menuTab.addEventListener("mouseleave",hiddenMenu);

function showMenu() {
  menuTab.classList.add('show')
  
}
function hiddenMenu(){
  menuTab.classList.remove('show')
}




//=======================slidershow=======================
const slides = document.querySelectorAll('.slide');

let cunt= 0;

function showSlide() {
  slides[cunt].classList.remove('show');
  cunt = (cunt + 1) % slides.length;
  slides[cunt].classList.add('show');
}

setInterval(showSlide, 4000);


//========================= hotest dishes items =========================
const btnItems = document.querySelectorAll('.hotest-dishes-btn div');
const displayItem=document.querySelector('.hotest-dishes-items');
const displayItemLunch=document.querySelector('.hotest-dishes-items-lunch');
const displayItemDinner=document.querySelector('.hotest-dishes-items-dinner');


btnItems[0].addEventListener("click",showBreakfast);
btnItems[1].addEventListener("click",showLunch);
btnItems[2].addEventListener("click",showDinner);
function showBreakfast() {
  btnItems[0].style.opacity=1
  btnItems[1].style.opacity=0.7
  btnItems[2].style.opacity=0.7
  displayItem.classList.add('display-item')
  displayItemLunch.classList.remove('display-item')
  displayItemLunch.classList.remove('display-item')


}
function showLunch() {
  btnItems[0].style.opacity=0.7
  btnItems[1].style.opacity=1
  btnItems[2].style.opacity=0.7
  displayItem.classList.remove('display-item')
  displayItemLunch.classList.add('display-item')
  displayItemDinner.classList.remove('display-item')

}
function showDinner() {
  btnItems[0].style.opacity=0.7
  btnItems[1].style.opacity=0.7
  btnItems[2].style.opacity=1
  displayItem.classList.remove('display-item')
  displayItemLunch.classList.remove('display-item')
  displayItemDinner.classList.add('display-item')
  
}


import { foodItem } from "./componet.js";

const foodItem1 = new foodItem(7, "Egg fries","./asset/food/breakfast/egg fries.png");
const foodItem2 = new foodItem(17, "Germany breakfast","./asset/food/breakfast/germany breakfast.png");
const foodItem3 = new foodItem(15, "spanish breakfast","./asset/food/breakfast/apanish breakfast.png");
const foodItem4 = new foodItem(5, "indonisia ","./asset/food/breakfast/indonisia break 2.png");
const foodItem5 = new foodItem(12, "chef suggestion","./asset/food/breakfast/chef suggestion.png");
const foodItem6 = new foodItem(20, "stake","./asset/food/breakfast/stake breakfast.png");

import { foodItemLunch  } from "./componet.js";
const foodItemLunch1 = new foodItemLunch(25, "spiacial pizza","./asset/food/dinner and lunch/pizza.png");
const foodItemLunch2 = new foodItemLunch(29, "iranian kabab","./asset/food/dinner and lunch/iranian kabab.png");
const foodItemLunch3 = new foodItemLunch(12, "spageti","./asset/food/dinner and lunch/spageti.png");
const foodItemLunch4 = new foodItemLunch(10, "cheese burger","./asset/food/dinner and lunch/cheese burger.png");
const foodItemLunch5 = new foodItemLunch(28, "pizza beef","./asset/food/dinner and lunch/pizza beef.png");
const foodItemLunch6 = new foodItemLunch(15, "italian spageti","./asset/food/dinner and lunch/spageti2.jpg");

import{foodItemDinner} from "./componet.js"
const foodItemDinner1 = new foodItemDinner(15, "italian spageti","./asset/food/dinner and lunch/spageti2.jpg");
const foodItemDinner2 = new foodItemDinner(28, "pizza beef","./asset/food/dinner and lunch/pizza beef.png");
const foodItemDinner3 = new foodItemDinner(25, "spcial pizza","./asset/food/dinner and lunch/pizza.png");
const foodItemDinner4 = new foodItemDinner(10, "cheese burger","./asset/food/dinner and lunch/cheese burger.png");
const foodItemDinner5 = new foodItemDinner(20, "chicken strips","./asset/food/dinner and lunch/chicken strips.png");
const foodItemDinner6 = new foodItemDinner(12, "spageti","./asset/food/dinner and lunch/spageti.png");



// =====================show more button for chef discript=================


   
  const showMorebtn = document.querySelector('.chef-discript-show-more')
  
  showMorebtn.addEventListener("click",showMore);
const showText=document.querySelector( '.show-text')

  function showMore() {
    
    showText.classList.toggle('show-text')
    
      
    }
    //=============================== responsive hamburger menu ============================

const hambergurMenuShow=document.querySelector('.hamburger-menu')
const hambergurMenu=document.querySelector('.hamburger-menu-image').addEventListener("click",()=>{
  hambergurMenuShow.classList.add('hamburger-menu-show')

})

const hambergurMenuClose=document.querySelector('.close-icon').addEventListener("click",()=>{
  hambergurMenuShow.classList.remove('hamburger-menu-show')
})

  
//================================= menu in menu responsive =====================================

const menuInMenu =document.querySelector('.menu-in-menu')
console.log(menuInMenu);
const menu = document.querySelector('.arrow-menu').addEventListener("click",()=>
menuInMenu.classList.toggle('menu-in-menu'));

