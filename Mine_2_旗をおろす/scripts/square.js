var Square = function(){
	this.opened=false;
	this.flagged=false;
	
	this.isOpened=function(){
		return this.opened;
	};
//���𗧂Ă� true
	this.setFlag=function(){
		this.flagged=true;
		return true;
	};	
//�������낷 false
	this.offFlag=function(){
		this.flagged=false;
		return true;
	};
//���̏�Ԃ��m�F����
	this.isFlagged=function(){
		return this.flagged;
	};

};
