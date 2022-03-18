const form = document.querySelector('#userId');
const input = document.querySelector('input');
console.log(form);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let postId = (async function () {
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${input.value}`)
        return post.json();
    
    })();
    let userInfo = (async function () {
        try {
            const info = await fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`)
            return info.json();
        } 
        catch (e) {
            console.log("Error:", e)
        }
       
    })();

    let userTodo = (async function () {
        const todo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${input.value}`)
        return todo.json();
    })();
    // console.log(userTodo);
    const resultPromise = Promise.all([postId, userInfo, userTodo])
        .then(result => {
            console.log(result);
            
        })
        .catch(error => console.log(error))
})
