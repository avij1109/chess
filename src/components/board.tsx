
import './board.css'
const verticalAxis=["1","2","3","4","5","6","7","8"]
const horizontalAxis = ["a","b","c","d","e","f","g","h"]
const Board = () => {
  let brod=[]
  for(let j=verticalAxis.length-1;j>=0;j--){
    for(let i=0;i<horizontalAxis.length;i++){
      const number = j+i;
      if (number%2==0){
        brod.push(<div className='black-tile'>[{horizontalAxis[i]}{verticalAxis[j]}]</div>)

      }
      else{
        brod.push(<div className='white-tile'>[{horizontalAxis[i]}{verticalAxis[j]}]</div>)
      }
      
    }
  }
  return (
    <div id="chessboard">
      {brod}

    </div>
  )
}

export default Board;