var Board = function(row,col,mines){
/*	this.rowsize=row;
	this.colsise=col;
	this.finished=false;
	this.squares=createSquares(row,col);
*/
	var rowsize=row;
	var colsise=col;
	var finished=false;
	var squares=createSquares(row,col);
	
	this.isFinished=function(){
//		return this.finished;
		return finished;
	};
	
	this.isOpened=function(row,col){
//	if (this.squares ===undefined) return false; 
//		return this.squares[row][col].isOpened();
	if (squares ===undefined) return false; 
		return squares[row][col].isOpened();
	};
//���𗧂Ă�
	this.setFlag=function(row,col){
//		return this.squares[row][col].setFlag();
		return squares[row][col].setFlag();
	};
//�������낷
	this.offFlag=function(row,col){
//		return this.squares[row][col].offFlag();
		return squares[row][col].offFlag();
	};
	
//���̏�Ԃ��m�F����
	this.isFlagged=function(row,col){
//		return this.squares[row][col].isFlagged();
		return squares[row][col].isFlagged();
	};


	//Square�I�u�W�F�N�g��row*col�쐬�@square[i][j]�Ƃ��Ďg��
	function createSquares(row,col){ 
		var mat=[];
  		for(var i=0;i<row;i++){
  			var square=[];
  			for(var j=0;j<col;j++){
  				square[j]=new Square();
  				square[j].opened=false;
  				square[j].flagged=false;
  			}
  			mat[i]=square;
  		}
  		return mat;
  	}

};