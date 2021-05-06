let url2 = 'https://reqres.in/api/colors?page=2'
let sum = 9;
let idNum = 'colorId';
let idYear = 'year';
let idHex = 'hex';
let idPant = 'pantone';

fetch(url2) 
.then(response => response.json() )
.then(data => {

    for (var i = 3; i < 6; i++) {
        resNum = idNum + sum.toString();
        resYear = idYear + sum.toString();
        resHex = idHex + sum.toString();
        resPant = idPant + sum.toString();
        let colorId = document.getElementById(resNum)
        let yearId = document.getElementById(resYear)
        let hexId = document.getElementById(resHex)
        let pantId = document.getElementById(resPant)
        colorId.innerHTML = `<p>${data.data[i].name}</p>`
        yearId.innerHTML = `<p>${data.data[i].year}</p>`
        hexId.innerHTML = `<p>${data.data[i].color}</p>`
        pantId.innerHTML = `<p>${data.data[i].pantone_value}</p>`
        sum ++; 
    }
    console.log(res);
})
.catch(err => console.log(err));
