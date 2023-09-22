const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const content = document.querySelector('.content');

menutoggle.onclick=function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
    content.classList.toggle('active');
}