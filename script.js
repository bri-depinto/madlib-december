let adjective = prompt('enter an adjective:')
let noun = prompt('enter an noun:')
let verb = prompt('enter an verb:')
let adverb = prompt('enter an adverb:')

let story = `Once upon a time in a ${adjective} wonderland, I ${adverb} wrapped gifts for my family. I wrapped them in ${pluralnoun} `

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p> ${story} </p>`