
let urltest = 'someurl';
function fakeAjax(url)  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve({url:'XXX', data: 'userinfo'}); 
        }, 2000)
    })
}
fakeAjax(urltest) 
    .then(response => {

        console.log(response.data);
       
    })
