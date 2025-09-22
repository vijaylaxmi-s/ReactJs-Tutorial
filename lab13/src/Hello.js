import React, { Component } from 'react';
import App from './App'

class Hello extends Component{
    static displayName = "MyHelloComponent";
    static defaultProps = {
          myTrainer :"S Dande",
          mycolor:"Red"
    }
    constructor(props){
        super(props);
        console.log(1, "[Hello] - constructor()");
        this.state = {
        message:"Ok Guys!!"
        }
      }

      static getDerivedStateFromProps(myprops, mystate){
        console.log(2,"[Hello] - getDerivedStateFromProps()");
        console.log("[Hello] -" , myprops);
        console.log("[Hello] -", mystate);
         return {message:"updated Message here "};
      }


    render() {
        console.log(3,"[Hello] - render()");
       // console.log(2,"[Hello] - ", Hello.displayName);
        //console.log(3,"[Hello] - ", Hello.defaultProps);
        console.log("[Hello] - ", this.state);
        console.log("[Hello] - ", this.props);


        return(
          <div className="container">
            <h3 className="text-center">I am Hello Component!!!</h3>
            <br/>
            <h4>My Trainer: {this.props.myTrainer}</h4>
            <h4>My Color: {this.props.mycolor}</h4>

          </div>
        );

    }

}

export default Hello;
