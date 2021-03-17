const mixedMessages = {
    array1: ['Lonely', 'Like giving up', 'neglected','disturbed'],
    array2: ['hating yourself','blaming everyone','screaming out loud'],
    array3: ['things will always be right at long last', 'God never forget about his children', 
    'your future is bright with hard work','you have the power to make evrything right','there',"there's always light at the end of a tunel"]
    
}

console.log(`You are feeling  ${mixedMessages.array1[Math.floor(Math.random()*mixedMessages.array1.length)]}\nSometimes, you think of ${mixedMessages.array2[Math.floor(Math.random()*mixedMessages.array2.length)]}\nBut you should know that ${mixedMessages.array3[Math.floor(Math.random()*mixedMessages.array3.length)]}`)