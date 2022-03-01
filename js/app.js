const loadMobileData = () => {
    document.getElementById('parent').innerHTML=''
    const inputValue = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobile(data.data.splice(0, 20)));
        document.getElementById('search-input').value=''
    
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
    document.getElementById('details-parent').innerText='' //clear previous mobile info
    console.log(detailId);
    const url = `https://openapi.programming-hero.com/api/phone/${detailId}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayMobileInfo(data))
}

const displayMobileInfo = (info) => {
    console.log(info.data.name);
    const detailsParent = document.getElementById('details-parent');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col mb-5">
    <div class="card">
      <img src="${info.data.image}" class="card-img-top width-detail-img mx-auto" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name:${info.data.name}</h5>
        <p class="card-text">Release date: ${info.data.releaseDate}</p>
      </div>
    </div>
  </div>
  <div class="mb-3">
  <h4>Feature</h4>
</div>
<div>
  <h4>Specifications</h4>
</div>
    `
    detailsParent.appendChild(div)
}