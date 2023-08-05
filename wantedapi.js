let wanteds = document.querySelector('.container');
let wantedsName = document.querySelector('.name');
let wantedsImage = document.querySelector('.wimage');
let wantedsDesc = document.querySelector('.description');
let wantedseyes = document.querySelector('.eyes');

document.addEventListener(
    "DOMContentLoaded", async function () {
       console.log("function called"); 

       let data = await fetch("https://api.fbi.gov/wanted/v1/list");
       let response = await data.json();

       console.log("Total records ===> " +response.total);
       console.log(response);
       
       for (let index = 0; index < response.items.length; index++) {
        console.log(response.items[index].title);

        // wanteds.innerHTML = `
        // <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg"  height= "150"
        // width= "150"><br>`;

        // wantedsName.innerHTML = `
        // <h3>${response.items[index].title}</h3>
        // `;

        image = `<img src=${response.items[index].images[0].large}  height= "150"
        width= "150"><br>`;
        wantedsName.insertAdjacentHTML('beforeend',image);

        name = `<h3>${response.items[index].title}</h3>`;
        wantedsName.insertAdjacentHTML('beforeend',name);

        description = `<h5>${response.items[index].description}</h5><hr>`;
        wantedsName.insertAdjacentHTML('beforeend',description);
       } }
)