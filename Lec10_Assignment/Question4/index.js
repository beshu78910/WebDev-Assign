const request = require('request');

request("https://jsonplaceholder.typicode.com/posts", function (error, response, body) {
    console.error("error", error)
    console.log("StatusCode:", response && response.statusCode);
    console.log("body", body);
})

const id = 1;
const url1 = `https://jsonplaceholder.typicode.com/posts${id}`;
request({ url: url1 }, (error, response) => {
    if(error) {
        return console.log("error");
    }
    console.log(response.body);
})

const post = {
    userId: 1000,
    title: "post",
    body: "test post"
}
const put = {
    userId: 1000,
    title: "post",
    body: "test post"
}
request.post(
      {
    url: "https://jsonplaceholder.typicode.com/posts",
    body: JSON.stringify(post),
  },
  function (error, response) {
    console.log(`status code: ${response.statusCode}, body:${response.body}`);
  }
)
request.put(
    {
  url: "https://jsonplaceholder.typicode.com/posts",
  body: JSON.stringify(post),
},
function (error, response) {
  console.log(`status code: ${response.statusCode}, body:${response.body}`);
}
)
