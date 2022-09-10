let categ1 = "Category1 Best Agriculture";
let categ2 = "Category2 Best Health Solution";


        //function to change category
        function editNames(){
            categ1 = prompt("Change Catefory1 Name")
            categ2 = prompt("Change Category2 Name")

            if(categ1.length < 1 || categ2.length < 1) {
                alert('please enter a valid name');
                return;

            }
            document.querySelector("c.Category1")
            .innerHTML = categ1;

            document.querySelector("c.Category2")
            .innerHTML = categ2;
        }

        // function to roll the dice
        function rollTheDice(){
            let diceNum1 = document.querySelector(".img1");
            let diceNum2 = document.querySelector(".img2");

            diceNum1.setAttribute("src", "diceroll.gif")
            diceNum2.setAttribute("src", "diceroll.gif")

            let result = document.querySelector('h1')
            result.innerHTML = ""
            setTimeout(() => {
                let randomNumber1 = Math.floor(Math.random() * 6) + 1;
                let randomNumber2 = Math.floor(Math.random()* 6) + 1;
                

                diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
                diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');
            
                // determine the winner
                if(randomNumber1 === randomNumber2){
                    result.innerHTML = "Draw!"
                }
                else if(randomNumber1 < randomNumber2){
                    result.innerHTML = (categ2 + "WINS!");
                }
                else{
                    result.innerHTML = (categ1 + "WINS!");
                
                }
            
            }, 2500);
        }
