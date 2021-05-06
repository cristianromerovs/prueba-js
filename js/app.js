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

    console.log(sum, res);
})
.catch(err => console.log(err));



