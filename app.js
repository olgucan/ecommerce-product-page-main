

document.addEventListener("DOMContentLoaded",(e)=> {


    let toggler =document.querySelector(".navbar-toggler")

    let fluidfirst=document.querySelector(".container-fluid")
    let mydiv
    let closebut
    let mydiv2
    let circle
    let sepet
    let smallimg=document.querySelectorAll(".card-body img ")
    
    //let main =document.querySelector(".main")
    toggler.addEventListener("click",(e)=> {
    
         mydiv=document.createElement("div")
        mydiv.classList.add("newdiv")
        mydiv.innerHTML =   
        "<br> <br> <br> <h4>Collections </h4>"+
        "<h4>Men </h4>"+
       " <h4>Women </h4>"+
       "<h4>About </h4>"+
       "<h4>Contact </h4>";
       closebut=document.createElement("a")
       closebut.innerHTML="<i class='fa-solid fa-xmark' style='font-size:25px'></i>"
       closebut.classList.add("mark")
       mydiv.insertBefore(closebut,mydiv.children[0])
       document.body.insertBefore(mydiv,fluidfirst)
       closebut.addEventListener("click",(e)=> {
        //console.log("dfgfdf")
     mydiv.classList.remove("newdiv")
     mydiv.classList.add("remove")
    })
    
    
    })
   let mainimg=document.querySelector(".cardolgu .card .card-img-top")

   mainimg.addEventListener("click",(e)=> {

     mydiv2=document.createElement("div")
     let mydiv3=document.createElement("div")
     let mydiv4=document.createElement("div")
    mydiv2.classList.add("fixed")
    let myfrontimg=document.createElement("img")
    myfrontimg.src=mainimg.src
    myfrontimg.classList.add("big")
     let left =document.createElement("a")
     left.innerHTML='&#8592;'
     left.className="left"
     let right =document.createElement("a")
     right.innerHTML='&#8594;'
     right.className="right"
   
    while (mydiv2.firstChild) {
        mydiv2.removeChild(mydiv2.firstChild)
    }

    mydiv3.appendChild(myfrontimg)
    mydiv3.appendChild(left)
    mydiv3.appendChild(right)

    left.addEventListener("click",(e)=> {
        let mystr6=parseInt(myfrontimg.src.match(/product-\d/)[0].slice(-1))
      // console.log(mystr6[0].slice(-1))
        //mystr6=mystr6-1
        mystr6-=1
        if (mystr6<1){
           mystr6=4
       }

       myfrontimg.src=myfrontimg.src.replace(/\d.jpg/,`${mystr6}.jpg`)
    })
    right.addEventListener("click",(e)=> {
        let mystr6=parseInt(myfrontimg.src.match(/product-\d/)[0].slice(-1))
        //mystr6=mystr6-1
        mystr6+=1
       // console.log(typeof mainimg.src)
        if (mystr6>4){
           mystr6=1
       }
       //console.log(mystr6)
        myfrontimg.src=myfrontimg.src.replace(/\d.jpg/,`${mystr6}.jpg`)
        //console.log( mainimg)
    })
    smallimg.forEach(item => {
        let tumb=document.createElement("img")
        tumb.classList.add("small")
        tumb.src=item.src
        mydiv4.appendChild(tumb)
     })
     mydiv4.style.display="flex"
     mydiv4.style.justifyContent="space-around"
     mydiv4.style.marginTop="30px"
     
     mydiv3.appendChild(mydiv4)
    mydiv2.appendChild(mydiv3)
  
    document.body.appendChild(mydiv2)
    mydiv2.addEventListener("click",(e)=> {
        if (e.target!== e.currentTarget){
            return
        }
       
            
        mydiv2.classList.add("actived")
       
    })
    

    mydiv4.addEventListener("click",(e) => {
        
        myfrontimg.src=e.target.src.replace(/-thumbnail/,"")
    })
   
   
        
    
   })
   
   smallimg.forEach(item => {
    
    item.addEventListener("click",(e)=> {
    
     
         mainimg.src=e.target.src.replace(/-thumbnail/,"")
         
    })     
         
 })
 let minus =document.querySelector(".tuss .minus")
 let number =document.querySelector(".tuss .number")
 let plus =document.querySelector(".tuss .plus")
  minus.addEventListener("click",(e)=> {
      number.innerHTML=parseInt(number.textContent)-1
  })
  plus.addEventListener("click",(e)=> {
    number.innerHTML=parseInt(number.textContent)+1
})

let ekle =document.querySelector(".ekle")
 sepet =document.querySelector(".sepet")


 sepet.addEventListener("click",(e)=> {
     
         if (sepet.children.length>1){
             console.log(sepet.firstChild)
             return
         }
    
    
    
         let emptydiv=document.createElement("div")
         emptydiv.classList.add("emptydiv")
         emptydiv.classList.add("shadow-lg")
         emptydiv.innerHTML="<h2 class='text-left display-3' style='cursor:pointer'>&#x26A0;</h2> <h1 class='display-6'>Card</h1>"+
         "<p class='lead text-center'>Your Card is empty</p>"
         document.body.insertBefore(emptydiv, document.body.firstChild);

         setTimeout(()=> {
             emptydiv.parentNode.removeChild(emptydiv)
         },5000)
        
 })
ekle.addEventListener("click",(e)=> {
    
     circle=document.createElement("div")
    circle.classList.add("circle")

    circle.textContent=number.textContent
   
    sepet.appendChild(circle)
    
  
    setTimeout(()=> {
        circle.parentNode.removeChild(circle)
    },10000)

    circle.addEventListener("click",(e)=> {
        let paketdiv=document.createElement("div")
        let topdiv=document.createElement("div")
        let downdiv=document.createElement("div")
        topdiv.textContent="Cart"
         let mysstr=mainimg.src
        mysstr= mysstr.replace(/\.jpg/,"")
        downdiv.innerHTML=`<img src='${mysstr+'-thumbnail.jpg'}' class="myimg3">
        <div class='kutu'>Autumn Limited Edition <p>$125,00*${number.textContent}=<strong>${parseInt(number.textContent)*125}$ </strong> </p> </div>`
        let dust=document.createElement("i")
        dust.className=("fa-solid fa-trash float-right mb-3")
        
        let check=document.createElement("button")
        check.innerHTML="Check Out"
        //dust.setAttribute("style","cursor:pointer")
        downdiv.appendChild(dust)
        downdiv.appendChild(check)
        paketdiv.appendChild(topdiv)
        paketdiv.appendChild(downdiv)
        
        paketdiv.classList.add("paketdiv")
        let nav=document.querySelector(".navbar")
        nav.insertBefore(paketdiv,nav.lastElementChild)
       paketdiv.addEventListener("click",(e)=> {
           if (e.target.classList.contains("fa-solid")){
               e.currentTarget.parentNode.removeChild(e.currentTarget)
           }
           console.log("fgg")
          
       })
    })
})

 
 



  




   
  



})


