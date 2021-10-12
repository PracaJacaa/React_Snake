import React from "react";
import ReactDOM from "react-dom";

class Game extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <></>
        );
    }
}
class Grid extends React.Component{
    constructor(props){
        super(props);
        }
        render(){
            const Snake_Game_GridX = Array(7).fill(Array(7));
            let Gameindex = Xindex + Yindex;
            return(
                <>
                {
                    Snake_Game_GridX.map((Snake_Game_GridX,Xindex))
                }
                <button>siema</button>
                </>
            );
            }
        }
       
class HeadandBody extends React.Component{
    constructor(props){
        super(props);
            }
            render(){
                return(<></>
                );
            }
        }
ReactDOM.render(<Grid/>, document.getElementById("root"));