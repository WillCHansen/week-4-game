// this is the object
var crystals = {

	// Some initial values
	wins: 0,
	losses: 0,

	// this function initializes the game. it accepts html element ids and classes as arguements
	// the element in the first and second parameter will have its innerhtml edited
	// the element in the third parameter will be looped through and assigned a "data-value" attribute of a random number
	init: function(totalScoreId, scoreId, crystalClass){
		this.score = 0;
		$("#totalscore").html("0");
		$(scoreId).html(Math.floor(Math.random()*(120-19+1)+19));
		$(crystalClass).each(function(){
			$(this).attr("data-value", Math.floor(Math.random()*(12-1+1)+1));
		});
	},

	// this function determins if a game was won or lost and returns 1 if either of those conditions are met
	// it accepts jquery id selectors as parameters
	// the third and fourth parameters will have their innerhtml edited
	determinegame: function(totalScoreId, scoreId, winId, lossId){
		if (parseInt($(totalScoreId).html()) == parseInt($(scoreId).html())){
			this.wins++;
			$(winId).html("Wins:"+this.wins);
			return 1;
		};
		if (parseInt($(totalScoreId).html()) > parseInt($(scoreId).html())){
			this.losses++;
			$(lossId).html("Losses:"+this.losses);
			return 1;
		};
		return 0;
	}
};

// initialize the game on load
crystals.init("#totalscore", "#score", ".crystal");

// here is our event handler. 
// everytime something with the class crystal is clicked...
// we add the data-value attribute of the clicked button to the total score elements innerhtml
// we run our determine game method to see if the user won or lost
$(".crystal").on("click", function(){
	console.log($(this).attr("data-value"));
	$("#totalscore").html(parseInt($("#totalscore").html())+parseInt($(this).attr("data-value")));
	if (crystals.determinegame("#totalscore", "#score", "#wins", "#losses")){
		crystals.init("#totalscore", "#score", ".crystal");
	};
});