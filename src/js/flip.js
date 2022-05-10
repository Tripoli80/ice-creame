    (() => {
            const refs = {
                card1BtnRight: document.querySelector("[data-card1-btn-right]"),
                card1BtnLeft: document.querySelector("[data-card1-btn-left]"),                 
                card1: document.querySelector("[data-card1]"),
                card2BtnRight: document.querySelector("[data-card2-btn-right]"),
                card2BtnLeft: document.querySelector("[data-card2-btn-left]"),
                card2: document.querySelector("[data-card2]"),                
                card3BtnRight: document.querySelector("[data-card3-btn-right]"),
                card3BtnLeft: document.querySelector("[data-card3-btn-left]"),
                card3: document.querySelector("[data-card3]"),                
            };

            refs.card1BtnRight.addEventListener("click", toggleCard1);
            refs.card1BtnLeft.addEventListener("click", toggleCard1);              
            refs.card2BtnRight.addEventListener("click", toggleCard2);
            refs.card2BtnLeft.addEventListener("click", toggleCard2);
            refs.card3BtnRight.addEventListener("click", toggleCard3);
            refs.card3BtnLeft.addEventListener("click", toggleCard3);

            function toggleCard1() {
                refs.card1.classList.toggle("cards__item--rotated");                                               
            }
            function toggleCard2() {
                refs.card2.classList.toggle("cards__item--rotated");
            }   
            function toggleCard3() {
                refs.card3.classList.toggle("cards__item--rotated");
            }                       
        })();   
