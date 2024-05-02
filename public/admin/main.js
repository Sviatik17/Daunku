$('.addGoods').click(()=>{
    let data ={
        title:$('#title').val(),
        price:$('#price').val()
    }

    axios.post('http://localhost:3000/add-goods',data)
    .then(res=>{
        console.log(res)
    })
})