import React from 'react'
import Image0 from './images/0.jpg'
import Image1 from './images/1.jpg'
import Image2 from './images/2.jpg'
import Image3 from './images/3.jpg'
import Image4 from './images/4.jpg'
import Image5 from './images/5.jpg'
import Image6 from './images/6.jpg'


const fruitsName = [
    "apple","mango","banana","grapes","litchi", "cc"
];
const randomWords =() => {
    return fruitsName[Math.floor(Math.random() *fruitsName.length)];
}
class Game extends React.Component {

    static defaultProps={
        images:[Image0,Image1,Image2,Image3,Image4,Image5,Image6],
        maxWrong:6
    } 
    constructor(props){
        super(props);
        this.state ={
            mistake:0,
            answer: randomWords(),
            alphabet : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            guessed:new Set([])

        }
    }   
    GuessWords(){
       return  this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter: ' _ ') )
    }
   
    handleGuess = e => {
        let lette= e.target.value;
        // console.log(lette)
        this.setState( l => ({
            guessed: l.guessed.add(lette),
            mistake:l.mistake + (l.answer.includes(lette) ? 0 : 1) 
        }))

    }
    createButtons(){
       return this.state.alphabet.split("").map(letter => (
            <button className="btn btn-lg btn-primary m-2"
            key={letter}
            value={letter}
            onClick={this.handleGuess}
            disabled= {this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ))
    }
    reset =()=> {
        this.setState({
            mistake:0,
            answer: randomWords(),
            alphabet : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            guessed:new Set([])

        })
    }
    
    render(){
        let gameOver = this.state.mistake >= this.props.maxWrong;
        let isWinner = this.GuessWords() === this.state.answer;
        console.log( this.GuessWords())
        // console.log(this.state.answer)
        let gameStart = this.createButtons();
      
        if(isWinner){
            gameStart = "you win"
        }
        if(gameOver){
            gameStart= "you lost"
        }
        return (
            <div className="container">
                <h1 className="text-center">Hangman</h1>
                <p className="text-right">{`${this.state.mistake}/${this.props.maxWrong} wrong guesses`}</p>
                <p className="text-center">
                    <img src={this.props.images[this.state.mistake]}/>
                </p>
                <hr/>
                <div className="text-center">
                    <p>
                        {!gameOver ? this.GuessWords(): this.state.answer}
                    </p>
                    <p>{gameStart} </p>
                    <button className="btn btn-info" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
    
};
    
export default Game;