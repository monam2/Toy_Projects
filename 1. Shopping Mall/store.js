$.get("./store.json").done((jsondata) => {
    products = jsondata.products;
    products.forEach((v) => {
        makeTemplete(v)
    });

    $(".buy").click(function (e) {
        let title = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        let price = e.target.parentNode.previousElementSibling.innerHTML.replace(/[^0-9]/g, '')
        console.log(title, price)
    })

    $(".searchButton").on('click', function (e) {
        let words = e.target.previousElementSibling.value
        if (words) { //단어가 있다면
            $(".container-templete").html('');
            for (let i = 0; i < products.length; i++) {
                //제목이나 브랜드명에 단어가 있으면
                if (products[i].title.includes(words)) {
                    console.log(1)

                    let templete = `<div class="card">
                    <img src="./mall_images/${products[i].photo}" class="w-100" alt="" />
                    <h5>${products[i].title}</h5>
                    <p class="card-brand">${products[i].brand}</p>
                    <p class="card-price">가격 : ${products[i].price}</p>
                    <div class="btn-list">
                        <button class="btn btn-light buy">구매</button>
                        <button class="btn btn-light buyCancel">취소</button>
                    </div>
                    </div>`
                    $(".container-templete").append(templete);

                    $("h5").html($("h5").html().replace(`${words}`,`<span style="background : yellow">${words}</span>`))


                    return
                } else if (products[i].brand.includes(words)) {
                    let templete = `<div class="card">
                    <img src="./mall_images/${products[i].photo}" class="w-100" alt="" />
                    <h5>${products[i].title}</h5>
                    <p class="card-brand">${products[i].brand}</p>
                    <p class="card-price">가격 : ${products[i].price}</p>
                    <div class="btn-list">
                    <button class="btn btn-light buy">구매</button>
                    <button class="btn btn-light buyCancel">취소</button>
                    </div>
                    </div>`
                    $(".container-templete").append(templete);
                    $(".card-brand").html($(".card-brand").html().replace(`${words}`,`<span style="background : yellow">${words}</span>`))
                    return
                } else { //제목이나 브랜드에 words가 없으면
                    alert('올바른 검색어를 입력하세요!')
                    $(".container-templete").html('');
                    products.forEach((v) => {
                        makeTemplete(v)
                    });
                    return
                }
            }
        } else { //단어가 없다면
            alert('검색어가 없습니다!');
            $(".container-templete").html('');
            products.forEach((v) => {
                makeTemplete(v)
            });
        }
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
