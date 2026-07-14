(function() {
    'use strict';

    const tabs = document.querySelectorAll('.card');
    const transitionItem = document.querySelectorAll('.transition__item');
    const btnsContinue = document.querySelectorAll('.btn-continue');
    const depositAddress = document.querySelectorAll('.deposit-address');
    const contents = document.querySelectorAll('.content');
    const contentsFooter = document.querySelectorAll('.content__footer');
    const btnsPrev = document.querySelectorAll('.btn-prev');

    window.addEventListener('DOMContentLoaded', function () {
        addActive(tabs);
        addActive(transitionItem);  
    });

    function addActive(items) {
        
        items.forEach(card => {
            const cardCheck = card.querySelector('.check svg');
            
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                cardCheck.classList.toggle('active');
                card.classList.toggle('active');
                contentsFooter.forEach(content => {
                    if (card.classList.contains('active') && content) {
                        content.classList.remove('hide');
                    } else {
                        content.classList.add('hide');
                    }
                    
                    contents.forEach(el => {
                        if (card.classList.contains('active') && card.dataset.filter == el.id) {
                        
                        document.querySelector('.deposit').classList.add('hide');
                        el.classList.remove('hide');   
                        content.classList.add('hide');
                        }

                        btnsPrev.forEach(btn => {
                            btn.addEventListener('click', function() {
                                depositAddress.forEach(address => {
                                    address.classList.add('hide');
                                    el.classList.add('hide');
                                    document.querySelector('.deposit').classList.remove('hide');
                                })
                                
                            })
                        })
                        
                    })
                })        
            })
        })  
    }

    contents.forEach(content => {
        btnsContinue.forEach(btn => {
            btn.addEventListener('click', function() {
                content.classList.add('hide');
                depositAddress.forEach(address => {
                    address.classList.remove('hide');
                })
            })
        })
    })

})();



