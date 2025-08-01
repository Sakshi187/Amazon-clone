


const images = document.querySelectorAll(".image");
var counter = 0;
// console.log(images);

images.forEach((image,index)=>
{
//     console.log(index);
    image.style.left = `$(index * 100)%`;
});

const buttonNext  = document.querySelector(".next");
const buttonprev  = document.querySelector(".prev");


buttonprev.addEventListener("click",()=>
{
    if(counter!==0)
    {    
    counter--;
    slideImage();
    }
})

buttonNext.addEventListener("click",()=>
{
    if(counter!==((images.length)-1))
    {
        counter++;
        slideImage();
    }
});

const slideImage= ()=>
{ 
    images.forEach((image)=>
    {
       
        image.style.transform = `translateX(-${counter * 100}% )`
        console.log(image.style.transform) ;
        
    }
)};

// ROW 3 IMAGES SLIDER
const row3Images = document.querySelectorAll(".row3boximages");
// console.log(row3Images.length);

var row3Counter = 0;
const row3PrevButton = document.querySelector(".shopping-section-row3-prev");
const row3NextButton = document.querySelector(".shopping-section-row3-next");


row3NextButton.addEventListener(("click"),()=>
{
   
    {
        console.log(6*row3Counter);
        console.log(row3Counter);
        console.log(row3Images.length);
        
       row3Counter += 6;
       slideRow3Image();
}}
);
row3PrevButton.addEventListener(("click"),()=>
    {
        row3Counter -= 1;
        slideRow3Image();
    
    }
    );


const slideRow3Image = () =>
{
    row3Images.forEach((row3boximages)=>
    {
        row3boximages.style.transform = `translateX(-${row3Counter * 100}%)`;
       console.log(row3boximages.style.transform);
    })
}


/*

/// books row


let booksRowContainerEl = document.querySelector(".books-box-image-margins");
console.log(booksRowContainerEl);

let booksRowContainerHTML =""

let booksRowImagelength = booksImages.length;
for( let i=0; i<booksRowImagelength; i++ )
{

    booksRowContainerHTML += `
                 <div class="booksboximagemarginsitems">
                     <img src=${booksImages[i].img} alt="" class="booksrowboximages">               
                </div>             
    `
}
booksRowContainerEl.innerHTML = booksRowContainerHTML;
console.log(booksRowContainerHTML);

//BOOKS ROW SLIDER
const booksRowImage = document.querySelectorAll(".booksboximagemarginsitems");
console.log(booksRowImage);

for(let i=0; i<booksRowImage.length; i++)
{
    console.log(booksRowImage[i]);
}

const booksRowPrevButton = document.querySelector(".shopping-section-books-prev");
const booksRowNextButton = document.querySelector(".shopping-section-books-next");

var c=0;

booksRowNextButton.addEventListener("click",()=>
{
    slidebookImage();
   
})

booksRowPrevButton.addEventListener("click",()=>
{
    slidebookImage();
        
})
const slidebookImage = () =>
    {
        booksRowImage.forEach(el=>
            {
                console.log(el);
                c -= 500;
                el.style.transform = `translateX( -${c}% )`;
            })
    }



            //    console.log(booksRowImage.style.transform);




*/
 