const loadMobileData = () => {
    const inputValue = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayMobile(data.data))
}

const displayMobile = (mobiles) => {
    console.log(mobiles);
    mobiles.forEach((mobile) => {
        console.log(mobile)
    })
}