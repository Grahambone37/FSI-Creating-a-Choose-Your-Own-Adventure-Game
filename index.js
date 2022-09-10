//Your Code here
let nameIs = window.prompt (`What is the hero's name`)
console.log (nameIs)
let firstAnswer = window.prompt (`${nameIs} is on a quest to get medicine from the city to save their hometown. Unfortunately the path ends here, with a cliff between ${nameIs} and the city. To the left is a forest that goes miles around the cliff until it reaches the edge of the city. To the right seems to be the most rickety bridge ${nameIs} has ever seen, but it would be faster than going through the forest. Does ${nameIs} go to the left or the right?`)
console.log (firstAnswer)

//if left
if (firstAnswer == "left") {
    let secondAnswer = window.prompt (`${nameIs} values their life. The trees block out the sun, but after a while it was getting real dark. Does ${nameIs} press on or camp?`)
    if (secondAnswer == "press on") {
        let thirdAnswer = window.prompt (``)
    } else if (secondAnswer == "camp") {
        let thirdAnswer = window.prompt (`${nameIs} could light a fire and sleep on the ground, or climb up and find a spot on a tree. What is ${nameIs} feeling, tree or ground?`)
        if (thirdAnswer == "tree") {
            let 
        } else if (thirdAnswer == "ground"){
            window.alert ("The guards at the gate barely had time to evacuate the city. The next morning the sun displayed what little remained of the city that started with a forest fire. <!>Bad End<!>")
        }
    } else {
        window.alert (`${nameIs} gets mauled by wolves. <!>Bad End<!>`)
    }
}

//if else right

//if else forward

//else