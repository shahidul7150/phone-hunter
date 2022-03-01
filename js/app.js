const loadMobileData = () => {
    document.getElementById('parent').innerHTML = ''
    document.getElementById('details-parent').innerText = ''
    document.getElementById('list').innerHTML =''
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
        // console.log(mobile.slug);
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
        parent.appendChild(div)
        // console.log(mobile);
    })
}

const loadeDetailData = (detailId) => {
    document.getElementById('details-parent').innerText='' //clear previous mobile info
    // console.log(detailId);
    const url = `https://openapi.programming-hero.com/api/phone/${detailId}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayMobileInfo(data))
}

const displayMobileInfo = (info) => {
    // console.log(info.data.sensors[0]);
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
  <p><span class="fw-bold text-success">Display:</span> ${info.data.mainFeatures.displaySize}</p>
  <p><span class="fw-bold text-success">Storage:</span> ${info.data.mainFeatures.storage}</p>
  <p><span class="fw-bold text-success">Memory:</span> ${info.data.mainFeatures.memory}</p>
  <p><span class="fw-bold text-success">ChipSet:</span> ${info.data.mainFeatures.chipSet}</p>
</div>
<div>
  <h4>Other Feature</h4>
  <p><span class="fw-bold text-success">WLAN:</span> ${info.data.others.WLAN}</p>
  <p><span class="fw-bold text-success">Bluetooth:</span> ${info.data.others.Bluetooth}</p>
  <p><span class="fw-bold text-success">GPS:</span> ${info.data.others.GPS}</p>
  <p><span class="fw-bold text-success">NFC:</span> ${info.data.others.NFC}</p>
  <p><span class="fw-bold text-success">Radio:</span> ${info.data.others.Radio}</p>
  <p><span class="fw-bold text-success">USB:</span> ${info.data.others.USB}</p>
</div>

`
    const arraySensors = info.data.mainFeatures.sensors;
    const arraySensor = arraySensors.join();
    const arraysens = arraySensor.split(",")
    console.log(arraysens.length);
    document.getElementById('list').innerHTML = `
    <li>${arraysens}</li>
    `;
    // for (const prop in arraySensor) {
    //     console. log(arraySensor[prop]);
    //     ul.innerText=arraySensor[prop]
    // }
    
    detailsParent.appendChild(div);
}