let url = 'https://reqres.in/api/colors',
    url2 = 'https://reqres.in/api/colors?page=2',
    sum = 0,
    idCard = 'color-card-',
    idNum = 'colorId',
    idYear = 'year',
    idHex = 'hex',
    idPant = 'pantone';

fetch(url) 
.then(response => response.json() )
.then(data => {

    for (var i = 0; i < 6; i++) {
        resName = idNum + sum.toString();
        resYear = idYear + sum.toString();
        resHex = idHex + sum.toString();
        resPant = idPant + sum.toString();
        resCard = idCard + sum.toString();
        let colorId = document.getElementById(resName),
            yearId = document.getElementById(resYear),
            hexId = document.getElementById(resHex),
            pantId = document.getElementById(resPant),
            cardId = document.getElementById(resCard)
        colorId.innerHTML = `<p>${data.data[i].name}</p>`
        yearId.innerHTML = `<p>${data.data[i].year}</p>`
        hexId.innerHTML = `<p>${data.data[i].color}</p>`
        pantId.innerHTML = `<p>${data.data[i].pantone_value}</p>`
        cardId.style.backgroundColor = data.data[i].color
        sum ++; 
    }
})
.catch(err => console.log(err));

fetch(url2) 
.then(response => response.json() )
.then(data => {

    for (var i = 0; i < 3; i++) {
        resName = idNum + sum.toString();
        resYear = idYear + sum.toString();
        resHex = idHex + sum.toString();
        resPant = idPant + sum.toString();
        resCard = idCard + sum.toString();
        let colorId = document.getElementById(resName),
            yearId = document.getElementById(resYear),
            hexId = document.getElementById(resHex),
            pantId = document.getElementById(resPant),
            cardId = document.getElementById(resCard)
        colorId.innerHTML = `<p>${data.data[i].name}</p>`
        yearId.innerHTML = `<p>${data.data[i].year}</p>`
        hexId.innerHTML = `<p>${data.data[i].color}</p>`
        pantId.innerHTML = `<p>${data.data[i].pantone_value}</p>`
        cardId.style.backgroundColor = data.data[i].color
        sum ++; 
    }
})
.catch(err => console.log(err));








