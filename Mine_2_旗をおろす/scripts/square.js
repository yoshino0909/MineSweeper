var Square = function(){
	this.opened=false;
	this.flagged=false;
	
	this.isOpened=function(){
		return this.opened;
	};
//旗を立てる true
	this.setFlag=function(){
		this.flagged=true;
		return true;
	};	
//旗をおろす false
	this.offFlag=function(){
		this.flagged=false;
		return true;
	};
//旗の状態を確認する
	this.isFlagged=function(){
		return this.flagged;
	};

};
