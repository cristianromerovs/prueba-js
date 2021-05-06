let url2 = 'https://reqres.in/api/colors?page=2',
    sum = 9,
    idCard = 'color-card-',
    idNum = 'colorId',
    idYear = 'year',
    idHex = 'hex',
    idPant = 'pantone';

fetch(url2) 
.then(response => response.json() )
.then(data => {

    for (var i = 3; i < 6; i++) {
        resNum = idNum + sum.toString();
        resYear = idYear + sum.toString();
        resHex = idHex + sum.toString();
        resPant = idPant + sum.toString();
        resCard = idCard + sum.toString();
        let colorId = document.getElementById(resNum),
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
    console.log(res);
})
.catch(err => console.log(err));
