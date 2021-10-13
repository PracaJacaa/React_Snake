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
            movmentTo: "up",
        };
    }

    Howtomove(){
        window.addEventListener('W', handleKey(event));
        window.addEventListener('A', handleKey(event));
        window.addEventListener('S', handleKey(event));
        window.addEventListener('D', handleKey(event));

        handleKey =(event)=>{
            if(event.key === 'W'){
                console.log('w')
              }
            
        }
    }

    getRandomApple(gridSize){
        let xSize = gridSize[0]
        let ySize = gridSize[1]

        let xApple = Math.floor(Math.random()*xSize);
        let yApple = Math.floor(Math.random()*ySize);

        let xSnake = this.state.snake[0];
        let ySnake = this.state.snake[1];

        if(xApple === xSnake && yApple === ySnake){
            return this.getRandomApple(gridSize)
        }
        else {
            return [xApple,yApple]
        }
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

        let ValofrandomApple = this.getRandomApple(this.state.gridSize);
        this.setState({ apple: ValofrandomApple });
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

