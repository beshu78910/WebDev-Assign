
const body = document.querySelector('body');
const ul = document.createElement('ul');
body.append(ul);
console.log(body);
const parsedData = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        // console.log('Respone', res)
        return res.json();
    })
    .then(data => {
        console.log('Data Parsed')
        // console.log(data)
        return data;
    })
    .catch(e => {
        console.log('OH No! Error!', e);
    })

const printData = (async () => {
    const a = await parsedData;

    for (let i = 0; i < a.length; i++){
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML = `id: ${a[i].id}, name: ${a[i].name}
        , username: ${a[i].username}, email: ${a[i].email}, phone: ${a[i].phone}, address: street: ${a[i].address.street} 
        , suite: ${a[i].address.suite}, city: ${a[i].address.city}, zipcode: ${a[i].address.zipcode}, geo: lat:${a[i].address.geo.lat}, 
        lng:${a[i].address.geo.lng}, company: name: ${a[i].company.name}, catchtPhrase: ${a[i].company.catchPhrase}, bs: ${a[i].company.bs}}`;
    }
    console.log(a);
   
    
})();

