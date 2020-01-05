import React from 'react'
import Image0 from './images/0.jpg'
import Image1 from './images/1.jpg'
import Image2 from './images/2.jpg'
import Image3 from './images/3.jpg'
import Image4 from './images/4.jpg'
import Image5 from './images/5.jpg'
import Image6 from './images/6.jpg'
// var images =[Image0,Image1,Image2,Image3,Image4,Image5,Image6]
const fruitsName = [
    "apple","mango","banana","grapes","litchi"
];
const randomWords =() => {
    return fruitsName[Math.floor(Math.random() *fruitsName.length)];
}

class Game extends React.Component {
    static defaultProps={
        images:[Image0,Image1,Image2,Image3,Image4,Image5,Image6]
    } 
    constructor(props){
        super(props);
        this.state ={
            mistake:0,
            answer: randomWords(),
            alphabet : [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

        }
    }
    handleClick(letter) {
        const alphabet = [...this.state.alphabet]
        // const index = alphabet.indexOf(letter)
        // if (index > -1) {
        //   alphabet.splice(index, 1);
        // }
        this.setState({ alphabet })
      }
    render() {
        return (
            <div className="hangman container">
                <h1 className="text-center">Hangman</h1>
               <div className='text-center'>
                    <img src={this.props.images[this.state.mistake]}  alt="image"/>
               </div>
               <hr/>
               <p className="text-center">{this.state.answer}</p>
                <div className="container">
                    {this.state.alphabet.map((letter, index) => 
                    <button className="btn btn-lg btn-primary m-2"
                     key={index} 
                     onClick={() => this.handleClick(letter)} 
                     value={letter}
                     >
                     {letter}
                    </button>)}
                </div>
            </div>
        )
    }
}

export default Game;
