import React from "react";
import ReactDOM from "react-dom";
import Tile from "./Tile";


class Grid extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        const gameGrid = Array(9).fill(Array(9).fill(null));  
        let snakeX = this.props.snake[0];
        let snakeY = this.props.snake[1];
        let points = this.props.points;
            
            return (
                <div className="xGrid">
                    {gameGrid.map((gridY,YIndex) => {
                        return(
                        <div className="yGrid">
                            {gridY.map((gridX,XIndex) => {
                               return <Tile X={XIndex} Y={YIndex} snake={this.props.snake} apple={this.props.apple} snakeHead={this.props.snakeHead}/>
                            })}
                        </div>
                        )
                    }
                    )}
                    <p>X {snakeX} // Y {snakeY} </p>
                    <p>points {points}</p>
                </div>

            )           
    }
}


export default Grid;
