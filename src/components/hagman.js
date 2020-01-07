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
            alphabet : [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
            guessed:[]

        }
        this.handleClick = this.handleClick.bind(this);
    }
    guessWords(){
        return this.state.answer.split("").map((letter) => (this.state.guessed.includes(letter)? letter: '  _  '))
    }
    handleClick(e) {
        let letter = e.target.value;
        this.setState(l => ({
            mistake: l.mistake + (l.answer.includes(letter) ? 0 : 1),
            // guessed : l.letter
		}));
		
      }
    
    render() {
            let gameOver = this.state.mistake >= this.props.maxWrong;
           
        return (
            <div className="hangman container">
                <h1 className="text-center">Hangman</h1>
                    <p className="text-right">{`${this.state.mistake}/${this.props.maxWrong} wrong guesses`}</p>
               <div className='text-center'>
                    <img src={this.props.images[this.state.mistake]}  alt="i"/>
               </div>
               <hr/>
               <p className="text-center">{
                   !gameOver ? this.guessWords():this.state.answer}</p>
                <div className="container">
                    {this.state.alphabet.map((letter, index) => 
                    <button className="btn btn-lg btn-primary m-2"
                     key={index} 
                     value={letter}
                     onClick={this.handleClick} 
                    disabled={this.state.guessed.includes(letter)}
                     >
                     {letter}
                    </button>)}
                </div>
            </div>
        )
    }
}

export default Game;
