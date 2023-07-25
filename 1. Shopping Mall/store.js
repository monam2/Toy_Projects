$.get("./store.json").done((jsondata) => {
  products = jsondata.products;
  products.forEach((v) => {
    makeTemplete(v)
  });



  $(".buy").click(function (e) {
    let title = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    let price = e.target.parentNode.previousElementSibling.innerHTML.replace(/[^0-9]/g, ' ')
    console.log(title, price)
  })
})

const makeTemplete = ((data) => {
  let templete = `<div class="card">
<img src="./mall_images/${data.photo}" class="w-100" alt="" />
<h5>${data.title}</h5>
<p class="card-brand">${data.brand}</p>
<p class="card-price">가격 : ${data.price}</p>
<div class="btn-list">
  <button class="btn btn-light buy">구매</button>
  <button class="btn btn-light buyCancel">취소</button>
</div>
</div>`
  $(".container-templete").append(templete);
})

