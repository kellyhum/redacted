/**
 * script.js
 * used for the random text generation feature and container overflow management
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
    /*----Variables----*/
    let initialLorem = loremIpsum.split(' ');
        //paragraphAmount = document.querySelector('#number-input');
    
    /*----Functions----*/
    //Function for generating random numbers from 0 to array length
    const randomNumber = (array) => Math.floor(Math.random() * array.length); 

    /*----Loops----*/
    //Pulls random words from wordBank and replaces words from initialLorem
    for (i = 0; i < 25; i++) {
        let randomWordBank = wordBank[randomNumber(wordBank)];
        initialLorem.splice(randomNumber(initialLorem), 1, randomWordBank);
    }

    //Convert to sentence, push to text container on screen
    let finalLorem = initialLorem.join(' ');
    document.querySelector('.container-text').innerHTML = finalLorem;

    //Conditional for if there's more than 1 paragraph
    if (paragraphAmount.nodeValue > 1) {
        for (i = 0; i < paragraphAmount.nodeValue; i++) {

        }
    } else {

    }
}

mainGenerator();