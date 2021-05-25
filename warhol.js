const soup_button_div = document.getElementById('soupCan');
const quote_div = document.querySelector('.quoteboard > p');




function randomQuote() { 
    
    const quotes = [
    "I\'m sure I'm going to look in the mirror and see nothing. People are always calling me a mirror and if a mirror looks into a mirror, what is there to see?",
    "The thing is to think of nothing, B. Look, nothing is exciting, nothing is sexy, nothing is not embarrassing. The only time I ever want to be something is outside a party so I can get in.",
    "I want to die with my bluejeans on...",
    "At a certain point in my life, in the late 50s, I began to feel that 1 was picking up problems from the people I knew. One friend was hopelessly involved with a married woman, another had confided that he was homosexual, a woman I adored was manifesting strong signs of schizophrenia. I had never felt that I had problems, because I had never specifically defined any, but now I felt that these problems of friends were spreading themselves onto me like germs.",
    "But when I was eighteen a friend stuffed me into a Kroger's shopping bag and took me to New York.",
    "At the times in my life when I was feeling the most gregarious and looking for bosom friendships. I couldn't find any takers so that exactly when I was alone was when I felt the most like not being alone. The moment I decided I'd rather be alone and not have anyone telling me their problems, everybody I'd never even seen before in my life started running after me to tell me things I'd just decided I didn't think it was a good idea to hear about. As soon as I became a loner in my own mind, that's when I got what you might call a 'following.' As soon as you stop wanting something you get it. I've found that to be absolutely axiomatic.",
    "In the 60s everybody got interested in everybody.In the 70s everybody started dropping everybody.The 60s were Clutter. The 70s are very empty ",
    " The acquisition of my tape recorder really finished whatever emotional life I might have had, but I was glad to see it go. Nothing was ever a problem again, because a problem just meant a good tape and when a problem transforms itself into a good tape it's not a problem any more. An interesting problem was an interesting tape. Everybody knew that and performed for the tape. You couldn't tell which problems were real and which problems were exaggerated for the tape. Better yet, the people telling you the problems couldn't decide any more if they were really having the problems or if they were just performing. ", 
    " Love affairs get too involved, and they're not really worth it. But if, for some reason, you feel that they are, you should put in exactly as much time and energy as the other person. In other words, 'I'll pay you if you pay me.'",
    " There should be a course in the first grade on love. There should be courses on beauty and love and sex. With love as the biggest course And they should show the kids, I always think, how to make love and tell and show them once and for all how nothing it is. But they won't do that, because love and sex are business.",
    " Fantasy love is much better than reality love. Never doing it is very exciting. The most exciting attractions are between two opposites that never meet.",
    " I don't see anything wrong with being alone it feels great to me. People make a big thing about personal love. It doesn't have to be such a big thing. The same for living— people make a big thing about that too. But personal living and personal loving are the two things the Eastern-type wise men don't think about.",
    "The biggest price you pay for love is that you have to have somebody around, you can't be on your own, which is always so much better. The biggest disadvantage, of course, is no room in bed. Even a pet cuts into your bed room. ",
    "You can be just as faithful to a place or a thing as you can to a person. A place can really make your heart skip a beat, especially if you have to take a plane to get there. ",
    " I always knew that I would never get married, because I don't want any children, I don't want them to have the same problems that I have. I don't think anybody deserves it.",
    "My ideal wife would have a lot of bacon, bring it all home, and have a TV station besides.",
    " So today, if you see a person who looks like your teenage fantasy walking down the street, it's probably not your fantasy, but someone who had the same fantasy as you and decided instead of getting it or being it, to look like it, and so he went to the store and bought the look that you both like. So forget it.Just think about all the James Deans and what it means."
    ];
    const randomNumber = (Math.floor(Math.random() * quotes.length));
    console.log(quotes[randomNumber]);
    quote_div.innerHTML = `${quotes[randomNumber]}`;
    
 }


function main () {
    soup_button_div.addEventListener('click', function() {
        randomQuote();
    })
}

main();