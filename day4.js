window.onload = function (){
    const btn=document.getElementById('btn');
    const txt = document.getElementById('text');

    btn.addEventListener('click', function(){
        if (txt.innerHTML === 'Hello'){
            txt.innerHTML = 'welcome!';
        } else {
            txt.innerHTML = 'Hello';
        }
    });
}