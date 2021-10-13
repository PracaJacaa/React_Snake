import React from "react";
import ReactDOM from "react-dom";
import Tile from "./Tile";


class Grid extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const gameGrid = Array(9).fill(Array(9).fill(null));  
            
            return (
                <div className="xGrid">
                    {gameGrid.map((gridY,YIndex) => {
                        return(
                        <div className="yGrid">
                            {gridY.map((gridX,XIndex) => {
                               return <Tile X={XIndex} Y={YIndex} snake={this.props.snake} apple={this.props.apple}/>
                            })}
                        </div>
                        )
                    }
                    )}
                </div>
            )              
    }
}


export default Grid;
