import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Grid from "./constructors/Grid";


function arrayEqual(arryOne,arrayTwo){

    if(arryOne.length !== arrayTwo.length){
        return false;
    }
    for(var i=0 ; i< arryOne.length; i++){
        if(arryOne[i] != arrayTwo[i]){
        return false;
        }
    }
    return true
}

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            gridSize:[9,9],
            snake:[],
            apple:[],
            movmentTo: "up",
            time:0,
            points:1
        };
    }

    Crash(){
        let cordsnake = this.state.snake
        let cordapple = this.state.apple
        let points = this.state.points

        if(arrayEqual(cordsnake,cordapple)){
            console.log("crash")
            this.setState({points: points + 1})
            this.getRandomApple()
            ;
        }
    };

    Howtomove(event){
        console.log(event);
        const keyCode = event.code;
        switch(keyCode){
            case"KeyW":
                this.setState({movmentTo: "up"});
                break;

            case"KeyS":
            this.setState({movmentTo: "down"});
            break;

            case"KeyA":
            this.setState({movmentTo: "left"});
            break;

            case"KeyD":
            this.setState({movmentTo: "right"});
            break;
        }
    }


    gametick(){
        // let xSize = gridSize[0]
        // let ySize = gridSize[1]

        let xSnakePosition = this.state.snake[0];
        let ySnakePosition = this.state.snake[1];


        switch(this.state.movmentTo){
                // left example
            case "left":
                 var newSnakex = xSnakePosition <= 0 ? 8 : xSnakePosition -1
                this.setState({snake: [newSnakex, ySnakePosition]});
            break;
            case "right":
                // righ example
                var newSnakex = xSnakePosition >= 8 ? 0 : xSnakePosition +1
                this.setState({snake: [newSnakex, ySnakePosition]});
            break;
            case "down":
                var newSnakey = ySnakePosition >= 8 ? 0 : ySnakePosition +1
                this.setState({snake: [xSnakePosition, newSnakey]});
            break;
            case "up":    
                var newSnakey = ySnakePosition <= 0 ? 8 : ySnakePosition -1
                this.setState({snake: [xSnakePosition, newSnakey]});
                break;
            }
            

    }

    getRandomApple(){
        let xSize = this.state.gridSize[0]
        let ySize = this.state.gridSize[1]

        let xApple = Math.floor(Math.random()*xSize);
        let yApple = Math.floor(Math.random()*ySize);

        let xSnake = this.state.snake[0];
        let ySnake = this.state.snake[1];

        if(xApple === xSnake && yApple === ySnake){
            return this.getRandomApple()
        }
        else {
            this.setState({ apple: [xApple,yApple] }); 
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

        this.getRandomApple();


        setInterval(() => this.gametick(), 500)
        setInterval(() => this.Crash(), 501)
        

        window.addEventListener('keydown', (event) => this.Howtomove(event));
      }



    render () {

        return (
                <Grid 
                    grid={this.props.gameGrid}
                    snake={this.state.snake}
                    apple={this.state.apple}
                    points={this.state.points}
                />
               )
    } 

}

ReactDOM.render(<Game />, document.getElementById("root"));

