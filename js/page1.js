let url = 'https://reqres.in/api/colors',
    url2 = 'https://reqres.in/api/colors?page=2',
    sum = 0,
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
        let colorId = document.getElementById(resName)
        let yearId = document.getElementById(resYear)
        let hexId = document.getElementById(resHex)
        let pantId = document.getElementById(resPant)
        colorId.innerHTML = `<p>${data.data[i].name}</p>`
        yearId.innerHTML = `<p>${data.data[i].year}</p>`
        hexId.innerHTML = `<p>${data.data[i].color}</p>`
        pantId.innerHTML = `<p>${data.data[i].pantone_value}</p>`
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
        let colorId = document.getElementById(resName),
            yearId = document.getElementById(resYear),
            hexId = document.getElementById(resHex),
            pantId = document.getElementById(resPant)
        colorId.innerHTML = `<p>${data.data[i].name}</p>`
        yearId.innerHTML = `<p>${data.data[i].year}</p>`
        hexId.innerHTML = `<p>${data.data[i].color}</p>`
        pantId.innerHTML = `<p>${data.data[i].pantone_value}</p>`
        sum ++; 
    }
})
.catch(err => console.log(err));





