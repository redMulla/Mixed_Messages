const mixedMessages = {
    badFeelings:['lonely', 'like giving up', 'neglected', 'disturbed'],
    lowSelfEsteem: ['hating yourself', 'blaming everyone', 'screaming out loud'],
    motivation: ['things will always be right at long last', 'God never forget about his children', 'your future is bright with hard work','you have the power to make everything right', 'there\'s always light at the end of a tunel']
}

const random = num =>{
    return Math.floor(Math.random() * num)
}

const buildPhrases = () => {

    let phrases = []

    for (let arr in mixedMessages){
        let mixMes = random(mixedMessages[arr].length)
        
        switch (arr) {
            case 'badFeelings':
                phrases.push(`You are feeling ${mixedMessages[arr][mixMes]}`)
                break;
            case 'lowSelfEsteem':
                phrases.push(`Sometimes you think of ${mixedMessages[arr][mixMes]}`)
                break;
            case 'motivation':
                phrases.push(`But always remember that ${mixedMessages[arr][mixMes]}`)
                break;
            default:
                'error'
                break;
        }
    }
    return phrases.join('\n');
}


console.log(buildPhrases());

