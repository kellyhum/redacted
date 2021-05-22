/**
 * script.js
 * used for the random text generation feature
 */

//Default lorem ipsum text
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

//List containing random words
const wordBank = ['cat', 'dog', 'chicken', 'donuts', 'meow', 'purr', 'hiss', 'woof', 'sugar', 'biscuits', 'bone', 'scratch', 'nuggets', 
                'claw', 'furry', 'wild', 'pet', 'carbohydrates', 'food','hamburgers', 'fries', 'soda', 'pizza', 'parrot', 'pickle',
                'dumpling', 'soup', 'salad', 'drinks', 'growl', 'churros', 'hot dogs', 'recipe', 'chomp', 'heat', 'bird', 'squawk', 
                'ice cream', 'burritos', 'calico', 'striped', 'fun', 'pasta', 'croissants', 'post', 'apple', 'pineapple', 'pegasus', 
                'cow', 'pig', 'barnyard', 'chicken', 'teriyaki', 'coffee', 'tea', 'pie', 'moonlight', 'candy', 'sushi', 'wasabi',
                'fried rice', 'tempura', 'fish', 'chips', 'pickle', 'juice', 'mint', 'pecans', 'turtle', 'doughnuts', 'rabbit',
                'dolphin', 'ducks', 'geese', 'crow', 'crepe', 'macaron', 'eclair', 'smoothie', 'lettuce', 'carrot', 'peanut butter',
                'rose', 'tulip', 'labrador', 'fluffy', 'spotted', 'cheetah', 'leopard', 'jaguar', 'jungle', 'tiger', 'monkey', 'lion',
                'camels', 'seahorse', 'mermaid', 'goldfish', 'crackers', 'cashews', 'almonds', 'pistashios', 'raisins', 'cereal', 'caviar',
                'ramen', 'wontons', 'sashimi', 'succulent', 'bread', 'clover', 'avocado', 'tomato', 'granola', 'napoleon cake'];

//Main text generation function
const mainGenerator = () => {
    let generateButton = document.querySelector('.button_generate'),
        copyButton = document.querySelector('.button_copy');
    
    //Function for generating random numbers from 0 to array length
    const randomNumber = (array) => Math.floor(Math.random() * array.length); 

    //Function for creating the new lorem ipsum paragraph
    const generateClicked = () => {
        let initialLorem = loremIpsum.split(' '),
            value = document.querySelector('#number-input').value;

        //Pulls random words from wordBank and replaces words from initialLorem
        for (i = 0; i < 25; i++) {
            let randomWordBank = wordBank[randomNumber(wordBank)];
            let randomInitialLorem = randomNumber(initialLorem);

            initialLorem.splice(randomInitialLorem, 1, randomWordBank);
        }

        //Creates new lorem ipsum paragraph, sets value of paragraph to new lorem ipsum paragraph
        let finalLorem = initialLorem.join(' ');
        document.querySelector('.container-text').innerHTML = finalLorem; 

        //Function for when 'copy' button is clicked; copies text to clipboard
        const copyClicked = () => {
            const clipboard = navigator.clipboard;
            const text = finalLorem;
            clipboard.writeText(finalLorem);
        }

        copyButton.addEventListener('click', copyClicked);
    }

    generateButton.addEventListener('click', generateClicked);
    
}

mainGenerator();