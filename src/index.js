import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Grid from "./constructors/Grid";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            gridSize:[9,9],
            snake:[],
            apple:[],
        };
    }

    getRandomApple(gridSize){
        let xSize = gridSize[0]
        let ySize = gridSize[1]

        let xApple = this.props.apple[Math.floor(Math.random()*gridSize.length)];
        let yApple = this.props.apple[Math.floor(Math.random()*gridSize.length)];

        return [xApple,yApple]
    }

    getMiddleOfCordsSnake(gridSize){
        let xSize = gridSize[0]
        let ySize = gridSize[1]

        let xMiddle = parseInt(xSize / 2);
        let yMiddle = parseInt(ySize / 2);

        return [xMiddle, yMiddle];

    }

    componentDidMount() {
        let ValofmiddleCoordinates = this.getMiddleOfCordsSnake(this.state.gridSize);
        this.setState({ snake: ValofmiddleCoordinates });
      }


    Randomfood(){
        let apple = this.props.apple[Math.floor(Math.random()*gameGrid.length)];
        console.log(apple);
    }

    render () {

        return (
                <Grid 
                    grid={this.props.gameGrid}
                    snake={this.state.snake}
                    apple={this.state.apple}
                />
               )
    } 

}

ReactDOM.render(<Game />, document.getElementById("root"));

