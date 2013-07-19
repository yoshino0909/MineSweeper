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
//旗を立てる
	this.setFlag=function(row,col){
//		return this.squares[row][col].setFlag();
		return squares[row][col].setFlag();
	};
//旗をおろす
	this.offFlag=function(row,col){
//		return this.squares[row][col].offFlag();
		return squares[row][col].offFlag();
	};
	
//旗の状態を確認する
	this.isFlagged=function(row,col){
//		return this.squares[row][col].isFlagged();
		return squares[row][col].isFlagged();
	};


	//Squareオブジェクトをrow*col個作成　square[i][j]として使う
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