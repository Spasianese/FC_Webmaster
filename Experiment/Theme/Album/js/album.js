var model = document.getElementById("Song--Modal");
var close = document.getElementById("Close");
var lyrics = document.getElementById("Song__Lyrics");
var songOne = document.getElementById("song1");
var songName =  document.getElementById("Song--Name");

// When the song is clicked a modal will pop up containing all the information relating to the song
songOne.addEventListener("click", function()
{
  let verse1 = "Will you hold the line? <br/> When every one of them is giving up or giving in, tell me <br/> In this house of mine? <br/> Nothing ever comes without a consequence or cost, tell me <br/> Will the stars align? <br/> Will heaven step in? Will it save us from our sin? Will it? <br/> 'Cause this house of mine stands strong <br/> That's the price you pay <br/> Leave behind your heartache, cast away <br/> Just another product of today <br/> Rather be the hunter than the prey <br/> And you're standing on the edge, face up 'cause you're a <br/> Natural <br/> A beating heart of stone <br/> You gotta be so cold <br/> To make it in this world <br/> Yeah, you're a natural <br/> Living your life cutthroat <br/> You gotta be so cold <br/> Yeah, you're a natural <br/> Will somebody <br/> Let me see the light within the dark trees' shadows and <br/> What's happenin'? <br/> Lookin' through the glass find the wrong within the past knowin' <br/> We are the youth <br/> Cut until it bleeds, inside a world without the peace facing <br/> A bit of the truth, the truth <br/> That's the price you pay <br/> Leave behind your heartache, cast away <br/> Just another product of today <br/> Rather be the hunter than the prey <br/> And you're standing on the edge, face up 'cause you're a <br/> Natural <br/> A beating heart of stone <br/> You gotta be so cold <br/> To make it in this world <br/> Yeah, you're a natural <br/> Living your life cutthroat <br/> You gotta be so cold <br/> Yeah, you're a natural <br/> Deep inside me, I'm fading to black, I'm fading <br/> Took an oath by the blood of my hand, won't break it <br/> I can taste it, the end is upon us, I swear <br/> Gonna make it <br/> I'm gonna make it <br/> Natural <br/> A beating heart of stone <br/> You gotta be so cold <br/> To make it in this world <br/> Yeah, you're a natural <br/> Living your life cutthroat <br/> You gotta be so cold <br/> Yeah, you're a natural <br/> Natural <br/> Yeah, you're a natural";
  model.style.zIndex  = "900";
  model.style.display = "block";
  lyrics.innerHTML = verse1;
  songName.innerHTML = "Natural";
});

    // Functions to close the modal //

function closeSong() {
  model.style.display = "none";
  model.style.zIndex = "-900"
};