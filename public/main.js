
function getProduct(){
    axios.get('http://localhost:3000/goods')
    .then(res=>{
        console.log(res)
        for(let el of res.data){
            $('.goodsContainer').append(`<div class="goodsCard">
            
            <div class="goodsDetail">
            <h3>${el.title}</h3>
            <p>$${el.price} <button class="addToCartBtn"><i class="fa-solid fa-plus"></i></button></p>
            </div>
            
            </div>`)
        }
    })
}

getProduct()
