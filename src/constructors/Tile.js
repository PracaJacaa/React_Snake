import React from "react";
import ReactDOM from "react-dom";

class Tile extends React.Component{
    constructor(props){
        super(props);
        };

    render() {
        const snakeXCoordinate = this.props.snake[0];
        const snakeYCoordinate = this.props.snake[1];

        //const snakeXBodyCoordinate = this.props.snakeBody[0];
        //const snakeYBodyCoordinate = this.props.snakeBody[1];
        
        const AppleXCoordinate = this.props.apple[0];
        const AppleYCoordinate = this.props.apple[1];

        let isSnake = this.props.X === snakeXCoordinate && this.props.Y === snakeYCoordinate ? "snake" : "";
        let isapple = this.props.X === AppleXCoordinate && this.props.Y === AppleYCoordinate ? "apple" : "";
        //let isBody = this.props.X === snakeXBodyCoordinate && this.props.Y === snakeYBodyCoordinate ? "body" : "";

        let className = `tile ${isSnake} ${isapple}`;



        return( <div 
            className={className} 
            id={this.props.X , this.props.Y}>

                {}

                </div>
            );
       };
    }

export default Tile;
