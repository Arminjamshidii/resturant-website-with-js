





 class foodItem {

    constructor(price,name,newSrc) {
        let hotDishesItems=document.querySelector('.hotest-dishes-items')
        let articleItem = document.createElement("article");
        articleItem.className = 'dishes-item';
        let imgBoxItem = document.createElement("div");
        imgBoxItem.className = 'img-box-item';
        let imgItem=document.createElement("img")
        imgItem.className='img-item'
        let spanPrice= document.createElement("span");
        spanPrice.className='span-price'
        let textBoldItem=document.createElement("h1")
        textBoldItem.className='text-item'
        let btnItem=document.createElement("div")
        btnItem.className='btn-item'
        hotDishesItems.appendChild(articleItem)
        articleItem.appendChild(imgBoxItem)
        imgBoxItem.appendChild(spanPrice)
        articleItem.appendChild(textBoldItem)
        articleItem.appendChild(btnItem)
        imgBoxItem.appendChild(imgItem)
        
        
        imgItem.src=newSrc

        btnItem.innerText="Order now"
    

spanPrice.innerText=`${price}$`
textBoldItem.innerText=name




    }
}


export class foodItemLunch {
    constructor(price,name,newSrc){
        let hotDishesItemsLunch=document.querySelector('.hotest-dishes-items-lunch')
        let articleItem = document.createElement("article");
        articleItem.className = 'dishes-item';
        let imgBoxItem = document.createElement("div");
        imgBoxItem.className = 'img-box-item';
        let imgItem=document.createElement("img")
        imgItem.className='img-item'
        let spanPrice= document.createElement("span");
        spanPrice.className='span-price'
        let textBoldItem=document.createElement("h1")
        textBoldItem.className='text-item'
        let btnItem=document.createElement("div")
        btnItem.className='btn-item'
        hotDishesItemsLunch.appendChild(articleItem)
        articleItem.appendChild(imgBoxItem)
        imgBoxItem.appendChild(spanPrice)
        articleItem.appendChild(textBoldItem)
        articleItem.appendChild(btnItem)
        imgBoxItem.appendChild(imgItem)
        
        
        imgItem.src=newSrc

        btnItem.innerText="Order now"
    

spanPrice.innerText=`${price}$`
textBoldItem.innerText=name

    }
}
class foodItemDinner{
    constructor(price,name,newSrc){
        let hotDishesItemsDinner=document.querySelector('.hotest-dishes-items-dinner')
        let articleItem = document.createElement("article");
        articleItem.className = 'dishes-item';
        let imgBoxItem = document.createElement("div");
        imgBoxItem.className = 'img-box-item';
        let imgItem=document.createElement("img")
        imgItem.className='img-item'
        let spanPrice= document.createElement("span");
        spanPrice.className='span-price'
        let textBoldItem=document.createElement("h1")
        textBoldItem.className='text-item'
        let btnItem=document.createElement("div")
        btnItem.className='btn-item'
        hotDishesItemsDinner.appendChild(articleItem)
        articleItem.appendChild(imgBoxItem)
        imgBoxItem.appendChild(spanPrice)
        articleItem.appendChild(textBoldItem)
        articleItem.appendChild(btnItem)
        imgBoxItem.appendChild(imgItem)
        
        
        imgItem.src=newSrc

        btnItem.innerText="Order now"
    

spanPrice.innerText=`${price}$`
textBoldItem.innerText=name

}
}
export{foodItem}
export{foodItemDinner
}




