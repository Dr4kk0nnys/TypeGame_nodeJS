const input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
    - Handy little method for user input through the terminal
    - Also the core of the application

    - It works as a main function, However
    - It could be a separate function
*/


class Game {
    constructor() {
        this.phrase = this.GetRandomPhrase()

        this.correct = 0
        this.wrong = {
            value: 0, // For the number of misspelled words
            words: [] // For the actual words
        }
        /*
            - Both correct and worng, will not only keep count
            - Ob how is the user going
            - But will also keep count on the percentage of right words
        
            -> percentage formula: (value) * 100 / (length)
                -> (value) = correct
                -> (length) = phrase.split(' ').length
        */

        this.StartGame()
    }

    StartGame() {
        console.log(`Start time:  ${this.GetDate()} \n\n`)
        console.log(`Type the phrase bellow: \n\n${this.phrase}\n\n`)

        input.question('> ', (typed) => {
            /*
                - Typed == what the user typed
                - input.question opens a prompt
                - for the user type in the terminal
                - It doesn't stop node's flow if there's something else
                - to be executed
                - However, as there's nothing under this method
                - The code will stop and only continue after the user press 'Enter'
            */


            for (let i = 0; i < this.phrase.split(' ').length; i++) {
                let phraseWord = this.phrase.split(' ')[i]
                let typeWord = typed.split(' ')[i]

                if (phraseWord == typeWord) {
                    this.correct++
                } else {
                    this.wrong.value++
                    this.wrong.words.push(`Correct: ${phraseWord}  Typed: ${typeWord}`)
                }
            }

            console.log(`\n\nEnd time:  ${this.GetDate()}`)

            console.log('\n') // Aesthetic
            this.wrong.words.forEach((word) => {
                console.log(word)
            })
            console.log('\n') // Aesthetic


            let percentage = this.correct * 100 / this.phrase.split(' ').length
            console.log(`Correct: ${this.correct}  \nWrong: ${this.wrong.value}  \nPercentage: ${percentage}%`)

            input.close()
        })
    }

    GetRandomPhrase() {
        let phrases = [`Life is one big road with lots of signs. So when you riding through the ruts, don't complicate your mind. Flee from hate, mischief and jealousy. Don't bury your thoughts, put your vision to reality. Wake Up and Live!`,
            `Don't be afraid to give your best to what seemingly are small jobs. Every time you conquer one it makes you that much stronger. If you do the little jobs well, the big ones will tend to take care of themselves.`,
            `A man who risks his life in shooting big game in order to secure good specimens for natural history collections, or to rid a district of a man-eater or other dangerous neighbor, is a sportsman in the true sense.`,
            `I've done routes where I've climbed 200 feet off the ground and just been, like, 'What am I doing?' I then just climbed back down and went home. Discretion is the better part of valor. Some days are just not your day. That's the big thing with free soloing: when to call it.`,
            `I am not a big technology person. I don't go on the Internet really much at all. Drawing is like a zen thing; it's private, which in this day and age is harder to come by.`,
            `'USA Today' once did a big article called, 'Who said it? Was it Norm or George Bush?' They had quotes of mine and quotes of his, and they went to some congressmen and senators and said, 'Who said it?' It was hysterical.`,
            `There are big lines between those who play video games and those who do not. For those who don't, video games are irrelevant. They think all video games must be too difficult.`,
            `This big part flies off on the floor. The other part goes like this and lands in my foot! Standing up! It's standing in my foot! Right in the side of my foot. The flute glass. I think I'm like in one of my own pictures.`,
            `I don't want to be a grumpy old man or too pessimistic, because if I have a chance, I would prefer to watch a film in the cinema with an audience on a big screen instead of watching it on a cell phone. It's a very different experience, but somehow I think this form will have its own future and life.`,
            `I'm a big believer in the emotion of design, and the message that's sent before somebody begins to read, before they get the rest of the information; what is the emotional response they get to the product, to the story, to the painting - whatever it is.`,
            `The most important thing I can tell you about aging is this: If you really feel that you want to have an off-the-shoulder blouse and some big beads and thong sandals and a dirndl skirt and a magnolia in your hair, do it. Even if you're wrinkled.`,
            `I think Clinton, after getting into office and into Washington, was shocked at being bludgeoned. So he spent time trying to be all things to all people - one way guaranteed not to be successful or respected in a lion's den. You can't just play around with all those big cats - you've got to take somebody on.`,
            `When the human race neglects its weaker members, when the family neglects its weakest one - it's the first blow in a suicidal movement. I see the neglect in cities around the country, in poor white children in West Virginia and Virginia and Kentucky - in the big cities, too, for that matter.`,
            `I know that campaigns can seem small, and even silly. Trivial things become big distractions. Serious issues become sound bites. And the truth gets buried under an avalanche of money and advertising. If you're sick of hearing me approve this message, believe me - so am I.`]

        let randomNumber = Math.floor(Math.random() * (phrases.length - 0))
        /*
            - randomNumber will return a number
            - Between 0 and the length of phrases
        */


        return phrases[randomNumber]
    }

    GetDate() {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        return `${hours}:${minutes}:${seconds}`
    }
}

new Game()