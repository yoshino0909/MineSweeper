var Square = function(){
	this.opened=false;
	this.flagged=false;
	
	this.isOpened=function(){
		return this.opened;
	};
//Šø‚ğ—§‚Ä‚é true
	this.setFlag=function(){
		this.flagged=true;
		return true;
	};	
//Šø‚ğ‚¨‚ë‚· false
	this.offFlag=function(){
		this.flagged=false;
		return true;
	};
//Šø‚Ìó‘Ô‚ğŠm”F‚·‚é
	this.isFlagged=function(){
		return this.flagged;
	};

};
