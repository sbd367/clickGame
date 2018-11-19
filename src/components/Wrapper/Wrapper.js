import React from "react";
import "./Wrapper.css";
import buttonList from "../../imageLib.json";
import Picture from "../Pictures";

class Wrapper extends React.Component {
    state = {
        buttonList,
        points: 0
    }

    endGame(){
        console.log(buttonList)
        for(var i=0; i<buttonList.length; i++){
            if(buttonList[i].clicked === true){
                buttonList[i].clicked = false
            }
        }

        this.setState({points: 0})
        alert("You lose! points set back to 0")
    }
    changeChecked = id => {
        this.state.buttonList.find((clkd, i) => {
            if (clkd.id === id) {

                if(buttonList[i].clicked === false){

                buttonList[i].clicked = true;
                this.setState({points : this.state.points + 1}, function(){
                    console.log(this.state.points);
                });
                this.state.buttonList.sort(() => Math.random() - 0.5)
                return true; 
                } else {
                this.endGame()
                }
            }
            return console.log("this")
        });
      }

    render(){
        return(
            <div className="container">
                <div className="wrapper">
                {
                    this.state.buttonList.map(card =>{
                        return<Picture 
                        
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        image={card.image}
                        location={card.location}
                        checked={card.clicked}
                        update_check={this.changeChecked}
                        />
                        
                    })
                }
            </div>
            <h1 id="lePoints">Points: {this.state.points}</h1>
            </div>
        )
    }
}
export default Wrapper