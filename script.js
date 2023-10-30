const checkbox = document.getElementById('check');
const navlist = document.getElementsByClassName('navbar-link-container');

const box = document.getElementsByClassName('navbar-links')[0];

checkbox.addEventListener('click', function handleClick() {
if (checkbox.checked) {
box.style.left = '-60%';
} else {
box.style.left = '-100%';
}
});
for(var i=0;i<navlist.length;i++){
navlist[i].addEventListener('click' , ()=>{
    box.style.left = '-100%';
    checkbox.checked=false;
})
}