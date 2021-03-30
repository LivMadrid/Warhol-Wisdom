const quotes = [
    "I\'m sure I'm going to look in the mirror and see nothing. People are always calling me a mirror and if a mirror looks into a mirror, what is there to see?",
    "The thing is to think of nothing, B. Look, nothing is exciting, nothing is sexy, nothing is not embarrassing. The only time I ever want to be something is outside a party so I can get in.",
    "I want to die with my bluejeans on...",
    "At a certain point in my life, in the late 50s, I began to feel that 1 was picking up problems from the people I knew. One friend was hopelessly involved with a married woman, another had confided that he was homosexual, a woman I adored was manifesting strong signs of schizophrenia. I had never felt that I had problems, because I had never specifically defined any, but now I felt that these problems of friends were spreading themselves onto me like germs.",
    "But when I was eighteen a friend stuffed me into a Kroger's shopping bag and took me to New York."
 ]

{ function randomQuote() { 
     const randomNumber = Math.floor(Math.random() * quotes.length);
     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
 }
}