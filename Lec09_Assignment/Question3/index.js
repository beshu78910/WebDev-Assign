
const body = $('body')[0];

const ul = $('<ul>')[0];
body.append(ul);
$(document).ready(function () {
let parsedData = $.get(
    "https://jsonplaceholder.typicode.com/users",
    
    function (data, status) {
        // console.log(data[0]);
        $(data).each(function (i) {
            const li = $('<li>');
            ul.append(li[0]);
            li.html(`{id: ${data[i].id}, name: ${data[i].name}
            , username: ${data[i].username}, email: ${data[i].email}, phone: ${data[i].phone}, address: street: ${data[i].address.street}
            , suite: ${data[i].address.suite}, city: ${data[i].address.city}, zipcode: ${data[i].address.zipcode}, geo: lat:${data[i].address.geo.lat},
            lng:${data[i].address.geo.lng}, company: name: ${data[i].company.name}, catchtPhrase: ${data[i].company.catchPhrase}, bs: ${data[i].company.bs}}`)
        })
      
    }
  ).fail(function (error) {
    console.log(error);
  });
})

