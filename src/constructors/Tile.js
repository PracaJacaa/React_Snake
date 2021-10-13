import React from "react";
import ReactDOM from "react-dom";

class Tile extends React.Component{
    constructor(props){
        super(props);
        };

    render() {
        const snakeXCoordinate = this.props.snake[0];
        const snakeYCoordinate = this.props.snake[1];

        let isSnake = this.props.X === snakeXCoordinate && this.props.Y === snakeYCoordinate ? "snake" : "";
        let className = `tile ${isSnake} `;

        


        return( <div 
            className={className} 
            id={this.props.X , this.props.Y}>

                {`X ${this.props.X} - Y ${this.props.Y}`}

                </div>
            );
       };
    }

export default Tile;
