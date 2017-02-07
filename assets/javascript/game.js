var crystals = {
	wins: 0,
	losses: 0,
	init: function(){
		this.score = 0;
		$("#totalscore").html("0");
		this.generatenumbers()
	},
	generatenumbers: function(){
		function randomIntFromInterval(min,max){
    		return Math.floor(Math.random()*(max-min+1)+min);
		};
		this.score = 0;
		this.winamt = randomIntFromInterval(19, 120);
		this.crys1 = randomIntFromInterval(1, 12);
		this.crys2 = randomIntFromInterval(1, 12);
		this.crys3 = randomIntFromInterval(1, 12);
		this.crys4 = randomIntFromInterval(1, 12);
		$("#score").html(this.winamt);
		$("#crystal1").attr("data-value", this.crys1);
		$("#crystal2").attr("data-value", this.crys2);
		$("#crystal3").attr("data-value", this.crys3);
		$("#crystal4").attr("data-value", this.crys4);
	},
	determinegame: function(){
		if (parseInt($("#totalscore").html()) == this.winamt){
			this.wins++;
			$("#wins").html("Wins:"+this.wins)
			this.init();
		};
		if (parseInt($("#totalscore").html()) > this.winamt){
			this.losses++;
			$("#losses").html("Losses:"+this.losses)
			this.init();
		};
	}
};

crystals.init();

$(".crystal").on("click", function(){
	console.log($(this).attr("data-value"))
	var clickvalue = parseInt($("#totalscore").html())+parseInt($(this).attr("data-value"))
	$("#totalscore").html(clickvalue);
	crystals.determinegame();
});

