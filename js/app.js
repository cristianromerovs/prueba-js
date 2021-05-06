let url = 'https://reqres.in/api/colors'
let url2 = 'https://reqres.in/api/colors?page=2'
let page2 = '?page=2';
let sum = 0;
let idNum = 'colorId';


fetch(url) 
.then(response => response.json() )
.then(data => {

    for (var i = 0; i < 6; i++) {
        res = idNum + i.toString();
        let colorId = document.getElementById(res)
        colorId.innerHTML = `<p>${data.data[i].name}</p>`
        sum ++; 
    }

    console.log(sum, res, i);
})
.catch(err => console.log(err));

fetch(url2) 
.then(response => response.json() )
.then(data2 => {

    for (var x = 5; x < 7; x++) {
        res = idNum + x.toString();
        let colorId = document.getElementById(res)
        colorId.innerHTML = `<p>${data2.data[x].name}</p>`
        sum ++; 
    }

    console.log(sum, res, x);
})
.catch(err => console.log(err));


