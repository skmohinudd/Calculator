const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for(i = 0; i < btns.length; i++){
    allBtns = btns[i]
    allBtns.addEventListener('click',function(){
        var number = this.getAttribute('data-num');
        screen.value += number;
    })
}

equalBtn.addEventListener('click', function(){
 if(screen.value === ''){
     alert('Enter Value')
 }else{
    let value = eval(screen.value);
    screen.value = value;
 }
})

clearBtn.addEventListener('click',function(){
    screen.value = '';
})