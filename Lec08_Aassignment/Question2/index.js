// Assuming user need to reload the page
// to clear content from previous search
const form = document.querySelector('#userId');
const body = document.querySelector('body');
const input = document.querySelector('input');
const ul = document.createElement('ul');
const postsTitle = document.createElement('li');
const infoTitle = document.createElement('li');
body.append(ul);
console.log(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
   

    try {
        if (input.value < 1) {
            throw new Error ('User Id is invalid ')
        } 
        else if (input.value > 10) {
            throw new Error ('User Id is invalid ')
        } 
    } catch (e) {
        alert('User not found, please try another user id');
    }
   
    let postId = (async function () {
        try {
            const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${input.value}`)
            return post.json();
        } catch (e) {
            console.log("Error:", e)
        }
        return false;
    
    })();
    let userInfo = (async function () {
        try {
            const info = await fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`)
            let info1 = await info.json();
            return info1;
        } catch (e) {
            console.log("Error:", e)
        }
       
    })();

    let userTodo = (async function () {
        try {
            const todo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${input.value}`)
            return todo.json();
        } catch (e) {
            console.log("Error:", e)
        }
    })();
  
    ul.append(postsTitle);
    postsTitle.innerHTML = `Users ${input.value}'s Information Posts & Todos: `;
    const resultPromise = Promise.all([userInfo, postId, userTodo])
    resultPromise.then(result => {
        
            const li = document.createElement('li');
            ul.append(li);
            li.innerHTML = `id: ${result[0].id}, name: ${result[0].name}, username:${result[0].username}
            phone:${result[0].phone}, email: ${result[0].email}, website: ${result[0].website}, address: street ${result[0].address.street}
            , suite ${result[0].address.suite}, city ${result[0].address.city}, company: bs:${result[0].company.bs},  
            catchPhrase: ${result[0].company.catchPhrase}, name: ${result[0].company.name}`
        
        for (let i = 0; i < result[1].length; i++){
            const li = document.createElement('li');
            ul.append(li);
            li.innerHTML = `userId: ${result[1][i].userId}, id: ${result[1][i].id}, title:${result[1][i].title},
             body: ${result[1][i].body}`
           
          
        }
        for (let i = 0; i < result[2].length; i++){
            const li = document.createElement('li');
            ul.append(li);
            li.innerHTML = `userId: ${result[2][i].userId}, id: ${result[2][i].id}, title:${result[2][i].title}
            , completed: ${result[2][i].completed}`
            console.log(result[1][i])
            // }
        }
       console.log(result[2])
       
        })
      
;})
