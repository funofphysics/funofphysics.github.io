const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');
let opened = false;

openBtn.addEventListener('click', () => {
    opened = !opened;
    if(opened){
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    }else{
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    }
});

closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
    content.style.marginLeft = '0';
});
