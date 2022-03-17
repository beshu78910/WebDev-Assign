
const button = document.querySelectorAll('button');
const tokyo = document.querySelector('.tokyo');
const london = document.querySelector('.london');
const paris = document.querySelector('.paris');
const visible = document.querySelector('.visible');
console.log(visible);
console.log(paris);
visible.style.display = 'none';

for (let i = 0; i < button.length; i++){
    button[i].onclick = function () {
        console.log(`You clicked ${i} me`);
        if (i === 0) {
            paris.style.display = 'none';
            tokyo.style.display = 'none';
            london.style.display = 'unset';
            visible.style.display = 'unset';
          

        } else if (i === 1) {
           
            london.style.display = 'none';
            paris.style.display = 'unset';
            tokyo.style.display = 'none';
            visible.style.display = 'unset';
        } 
        else if (i === 2) {
            london.style.display = 'none';
            paris.style.display = 'none';
            tokyo.style.display = 'unset';
            visible.style.display = 'unset';
        }
        
    }
}
