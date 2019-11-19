const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

// Your sentence should look like this.
// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. 
// In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"

const sentance = `Hi. My name is ${name}, and I'm ${age} years old. 
They say that makes me a ${generationStereotype}. In ${timeSpan} I'll be ${futureAge}!
I guess that means I'll be a ${dadJoke} then. Ha ha!`

console.log(sentance);

//write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t.

const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", 
"apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]

const myFavoriteFoods = (array) => {
        let newArray = []
        for (let i = 0; i < array.length; i++) //this iterates the array {
            const  element = array[i];
            if(element.startsWith("a") || element.startsWith("t")){
                newArray.push(element) //this pushes elements that start with a or t into the newArray
            }
        }
        return newArray
}

console.log(myFavoriteFoods(foodArray));