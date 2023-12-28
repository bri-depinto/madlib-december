let adjective = prompt('enter an adjective:')
let noun = prompt('enter an noun:')
let verb = prompt('enter an verb:')
let adverb = prompt('enter an adverb:')
let pluralnoun = prompt('enter a plural noun:')
let place = prompt('enter a place:')
let verbinpasttense = prompt('enter a verb in the past tense:')
let animal = prompt('enter an animal:')
let sense = prompt('enter one of the five senses in the past tense:')
let verbing = prompt('enter a verb ending in ing:')
let nounn = prompt('enter a noun:')
let nounnn = prompt('enter a noun:')
let adjectivee = prompt('enter an adjective:')
let adjectiveee = prompt('enter an adjective:')
let adjectiveeee = prompt('enter an adjective:')
let adverbb = prompt('enter an adverb:')
let adverbbb = prompt('enter an adverb:')
let adverbbbb = prompt('enter an adverb:')
let feeling = prompt('enter a plural emotion:')


let story = `Once upon a time in a ${adjective} Wonderland, I ${adverb} wrapped gifts for my family. I wrapped them in ${pluralnoun} with ${noun} themed bows and ${adverbb} hid them in ${place} so no one could find them. To get there, I ${verbinpasttense} my ${animal} past ${nounn} shops when I ${sense} a ${verbing} Christmas Tree holding a ${nounnn}! I was in a state of ${feeling}. I ${adverbbb} took a ${adjective} picture and ${verbinpasttense}. Finally, after fighting a ${adjectivee} ${adjectiveeee} snow monster, I ${adverbbbb} hid the presents. Merry Christmas and I hope you have a ${adjectiveee} holiday! `

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`