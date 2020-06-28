const btnSwitch = document.querySelector('#switch');


btnSwitch.addEventListener('click', () => {
    let priceBasic = document.getElementById('price-basic');
    let priceProfessional = document.getElementById('price-professional');
    let priceMaster = document.getElementById('price-master');
    btnSwitch.classList.toggle('annualy');

    if(btnSwitch.classList.contains('annualy')){
        priceBasic.innerText ='199.99';
        priceProfessional.innerText ='249.99';
        priceMaster.innerText ='399.99';
    }
    else{
        priceBasic.innerText ='19.99';
        priceProfessional.innerText ='24.99';
        priceMaster.innerText ='39.99';
    }
})