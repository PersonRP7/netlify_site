
message1 = `I'm not your little melon.`

message2 = `The desert is my home.`

message3 = `Bu ji. Nothing from nothing. It was the answer of a Zensunni wanderer.`

message4 = `
A waif was found at the desert's edge and brought into the sietch. At first the waif
refused to respond to his saviors, then when he spoke no one could understand his words.
As days passed he continued unresponsive, refused to dress himself or cooperate in any way.
Every time he was left alone he made odd motions with his hands. All the specialists in the sietch were
called in to study this waif but arrived at no answer. Then a very old woman passed the doorway,
saw the moving hands, and laughed. "He only imitates his father who rolls the spice-fibers into rope",
she explained. "It's the way they still do it at Shuloch. He's just trying to feel less lonely."
`
message5 = `
Waff stared at her in shock. A Zensunni Master might have said that!
He had said it himself on more than one occasion.
`
message6 = `
When logic fails, another tool must be used.
`
message7 = `
With a feeling of sadness, Waff realized that she was not, after all, Zensunni.
The Honored Matre only played word games on the fringes on non-logic, circling it,
but her tools was logic.
`
message8 = `
Again, Waff thought, she employed logic in thinking of the non-logical. How much she had
told him in these little lapses.
`
message9 = `
Not just Zensunni, Taraza thought. Sufi also. Sufi! She began to readjust her perspective
on the Tleilaxu.
`
message10 = `
Time does not count itself, Taraza said, probing. "One has only to look at any circle."
`
message11 = `
"Suns are circles", Waff said. "Each universe is a circle."
He held his breath waiting for her response.
`
message12 = `
Circles are enclosures. Whatever encloses and limits must expose itself to the infinite.
`
message13 = `
"What one cannot control one must accept," she said. "For surely that is God's doing", Waff replied.
`
message14 = `
As the Sufis said. Rot at the core always spread outward.
`
message15 = `
In the old language of the Islamiyat, she said: "It is written."
`
message16 = `
The Bene Gesserit were not powindah!
`

let memories = [
    message1, message2, message3, message4, message5,
    message6, message7, message8, message9, message10,
    message11, message12, message13, message14, message15,
    message16
]

const button = document.getElementById('distrans')
const umma = document.getElementById('umma')

button.addEventListener('click', () => {
    let random_message = memories[Math.floor(Math.random() * memories.length)]
    umma.textContent = random_message
})