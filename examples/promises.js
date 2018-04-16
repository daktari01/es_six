"use strict"

// Immediately resolved
var myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));

var thePromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000);
});

thePromise.then((res) => {
    res += 3;
    console.log(res);
});

// Using real data
function getData(method, url){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else{
                reject({
                    status: this.status,
                    statusTest: xhr.statusText
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: this.status,
                statusTest: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then((data) => {
    // console.log(data);
    let todos = JSON.parse(data);
    let output = '';
    for(let todo of todos){
        output += `
            <li>
                <h3>${todo.title}</h3>
                <p>Completed: ${todo.completed}</p>
            </li>
        `;
    }
    document.getElementById('template').innerHTML = output;
}).catch((err) => {
    console.log(err);
});