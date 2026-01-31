let allProduct=[]
let cart=[]
// fetching the given url using async await to get the products;
async function getProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products)
    return data.products; // it will return the array;
  } catch (error) {
    console.log("fetched to fail the api ",error)
    return []
  }
}
// when we get the product then we will show in the form of card 
async function showProduct(arr){
    const container=document.getElementById("product_container")
    container.innerHTML = ""; 
    for(const p of arr){
        const card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
            <h3>Product-Name= ${p.title}</h3>
            <img src="${p.images[0]}" width="150"/>
            <p>Product Description= ${p.description}</p>
            <p>Product Category= ${p.category}</p>
            <p>Product Price= ${p.price}</p>
            <p>Product Category= ${p.rating}</p>
        `
        // we will create the button and when we click on it then the product_id will get stored in array;
        const btn=document.createElement("button")
        btn.textContent = "Add to Cart";
        btn.dataset.id = p.id;
        btn.className = "addToCartBtn";
        btn.addEventListener("click", () => addTocart(p.id));
        card.appendChild(btn)
        container.appendChild(card)
    }
}
function addTocart(id){
    const product=allProduct.find((p)=>(p.id==id))
    if(!product){
        console.log("product not found")
        alert("This product is not available")
        return;
    }
    if(cart.find(p => p.id === id)){
        alert("Product already in cart!")
        return;
    }
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart)); // stroing the array of product=cart in local_storage
    alert("Item Added to Cart")
    updateCart()
}
function updateCart() {
  const totalItems=cart.length;
  const totalPrice=cart.reduce((acc, item) => acc + item.price, 0);
  document.getElementById("totalItems").innerText = `Items: ${totalItems}`;
  document.getElementById("totalPrice").innerText = `Total: ₹${totalPrice}`;
}
function searchProduct(query){
    const filtered=allProduct.filter((product)=>{
        return product.title.toLowerCase().includes(query.toLowerCase())
    }) // it will filter based on query and return the array;
    showProduct(filtered)
}

// creating the debounce feature in search input to avoid multiple calls.
function debounce(fn,delay){
    let timer;
    return function innerfunction(query){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn(query)
        },delay)
    }
}
async function init(){
    cart=JSON.parse(localStorage.getItem("cart")) || []
    allProduct=await getProduct() 
    showProduct(allProduct)
    const search_id=document.getElementById("searchInput")
    const debounceSearch=debounce(searchProduct,500)// short time to make a faster search
    search_id.addEventListener("input",(e)=>{
        debounceSearch(e.target.value)
    })
}
init()


