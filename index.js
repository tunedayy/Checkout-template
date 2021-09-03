const accItems = document.querySelectorAll('.accordion-item');
const accInfo = document.querySelector('.information');
const accShipping = document.querySelector('.shipping');
const accPayment = document.querySelector('.payment');

accItems.forEach(function (accItem){
    const accHead = accItem.querySelector('.accordion-head');
    const formBtn = accItem.querySelector('.form-btn');
    accHead.addEventListener('click', function(){
        accItem.classList.toggle('show')
    });
   formBtn.addEventListener('click', function(){
       if(formBtn.classList.contains('to-shipping')){
           accInfo.classList.remove('show');
           accShipping.classList.add('show');
       }
       else{
           accShipping.classList.remove('show');
           accPayment.classList.add('show')
       }
   })
})

