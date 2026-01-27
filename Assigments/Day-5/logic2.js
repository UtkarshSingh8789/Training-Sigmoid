let product=[
    {pName:"camera",pBrand:"Sony",pPrice:50000,pImage:"https://static.vecteezy.com/system/resources/thumbnails/040/174/297/small/ai-generated-professional-dslr-camera-on-brick-path-surrounded-by-pink-petals-photo.jpeg"},
    {pName:"headphone",pBrand:"Apple",pPrice:30000,pImage:"https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"},
    {pName:"watch",pBrand:"Titan",pPrice:5000,pImage:"https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="},
    {pName:"perfume",pBrand:"Bellavita",pPrice:500,pImage:"https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?cs=srgb&dl=pexels-valeriya-1961791.jpg&fm=jpg"},
]
let container=document.getElementById("MainDiv")
for(p of product){
    container.innerHTML+=
    `<div>
        <img src=${p.pImage} />
        <h2>${p.pName}</h3>
        <h3>${p.pBrand}</h3>
        <p>${p.pPrice}</p>
    </div>`
}