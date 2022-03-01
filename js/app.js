const loadMobileData = () => {
    const inputValue = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayMobile(data.data.splice(0,20)))
}

const displayMobile = (mobiles) => {
    console.log(mobiles);
    const parent = document.getElementById('parent')
    mobiles.forEach((mobile) => {
        console.log(mobile.slug);
            const div=document.createElement('div')
            div.innerHTML = `
            <div class="col">
             <div class="card h-100">
                 <img src="${mobile.image}" class="card-img-top width-img mx-auto" alt="...">
                <div class="card-body">
                 <h6 class="card-title fs-6">${mobile.phone_name}</h6>
                <p class="card-text">Brand: ${mobile.brand}</p>
            </div>
            <div class="card-footer bg-white border-0">
        <button onclick="loadeDetailData('${mobile.slug}')" class="btn btnColor font-size">Details</button>
      </div>
    </div>
  </div>
         `
        console.log(mobile.slug);
        parent.appendChild(div)
        console.log(mobile);
    })
}

const loadeDetailData = (detailId) => {
    console.log(detailId);
    const url = `https://openapi.programming-hero.com/api/phone/${detailId}`
    fetch(url)
        .then(res => res.json())
    .then(data=>console.log(data))
}