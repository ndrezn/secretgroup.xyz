var text = [
"I can SEE that she’s (I’m) watching me luv is magic but i left my heart somewhere in chicago and i think a pigeon just found it",
"I know that you know that i know that you punctuated that on PURPOSE",
"Throwing a bon voyage party for myself but i’m already gone. This is your invitation. It’s byob (BE YOUR OWN BOYFRIEND). Goodnight Chicago, see you sunshine, happy anniversary, fortunately i’m dismembered, etc",
"Two roads diverge in a pUrPLe wood. I took the one less travelled. That has made all the difference",
"Mullets are ugly: change my mind",
"Nothing too holy",
"Banana Split Lady",
"you’re welcome to anyone who has been on the receiving end of my various maternal tendencies",
"practicing. being right here. hello, i’m here!! i’m right here!",
"m getting serious WhatEverMajorLoser vibes from that girl",
"Oh debbie",
"I wanted pink converse so bad when I was 10",
"Dirt slice :)",
"do u bite yr nails like “I Do”",
"i know that you know that i know that u punctuated that on purpose",
"Happy & & & & &",
"Honey and art both costs money",
"Bewty",
"hey, Small Thing!!! you catch Some, and you infect some,",
"sleepy feelings do what they want to do i have no control over a life of their own",
"who wants to count my unibrow hairs ",
"this song reminds u of me",
"i call this one: Just Woke Up From An Airplane Nap, In My Dreams You Did the Thing That Means We Aren’t Friends Anymore",
"stupid word time: if its all the same to you im always going to be soft skin, exfoliating underwater with pearls coated with selective serotonin dripping with plasma we are stalled at the finish line, same time princes. waiting for stop sign immunity or something sweet in our mouths",
"What’s your favorite regulatory part of the cell cycle? i personally love when the ding dong inhibits the bongus from activating the shwingle, therefore regulating a cells ability to adapt to a changing environment!!!",
"Whatever works,,,,,,",
"cat spit? im saving up my dryer lint to buy a human heart",
"Quick reminder:",
"gonna wife up this newly 20 yr old piece of art",
"walkin into your dorm room like mmmm smells like emotional stability was a good year for me but a shitty year for the world. thank u to everyone who made my year filled w love and good music and kisses and sweetness and silly-ness!! you know who you are, and i love you!! we are going out w a biiiiiiiitch",
"happy girl happy bug happy bird happy paris",
"“like youre gonna eat breakfast tomorrow right like im not saying i need need to eat breakfast every single morning but i know i want breakfast to be around for a long time”—the smartest woman i know, julie andrews",
"how in the fuk do u write an essay if u are already asleep",
"BitchCraft",
"ive been doing a lot of grown up things, ok",
"excuse me why is your phone password not ‘’’limes’’’",
"spat on u like tic tac toe youre out and I FOUND MY FUCKING WALLET",
"if the song is good does it matter if the album art looks like shit",
"reborn and rekindled and refreshed and redone and remade and reheated and reread and reread and reread when did u say that about me again? reword it",
"idc im an emotional hoarder if i dont give some of my heart away i'm going to explode",
"Cross your body and your spine and your goosebumps breeze HE IS LIKE THE FLU oh my god Shut Up",
"my friend has hair like lipstick. on the eve of my publication i will lastname,first (hurt, myself)",
"i canNot stand up (for myself?) whooo so excited 2 be going 2 the THE EMOTIONAL OLYMPICS",
"your eyes.... are like pools of gasoline",
"yeah its about to be all over (me). check my toe. eat my dust. dis chik is offline. help i lose literally everything i own",
"playing kahoot by yr lonesome>>>", 
"Getting dimmer and we’re, keeping secrets"];

bg_colors = ['#D67899', '#F78F8A', '#EC90DE', '#C478D6', '#C58AF7']
fg_colors = ['#573231', '#99566D', '#824F7A', '#8C5699', '#71508F']

var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 90000);

function change() {
	document.body.style.background = bg_colors[Math.floor(Math.random() * bg_colors.length)];
	elem.innerHTML = text[Math.floor(Math.random() * text.length)];
	elem.style.color = fg_colors[Math.floor(Math.random() * fg_colors.length)]
}

change()

