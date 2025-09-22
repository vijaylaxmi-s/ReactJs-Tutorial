import React, { Component } from 'react';
import Hai from "./Hai";


class Hello extends Component{
    static displayName = "MyHelloComponent";
   
    constructor(props){
        super(props);
        console.log(1, "[Hello] - constructor()");
        this.state = {
        message:"Ok Guys!!"
        }
      }

      static getDerivedStateFromProps(myprops, mystate){
        console.log(2,"[Hello] - getDerivedStateFromProps()");
        return null;
      }
     
      componentDidMount() {
        console.log(4,"[Hello] - componentDidMount()");

      }

    render() {
        console.log(3,"[Hello] - render()");
        return(
          <div className="container">
            <h3 className="text-left">I am Hello Component!!!</h3>
            <br/>
            <h4> My Trainer: {this.props.mytrainer}</h4>
            <br/>
             <Hai mycolor="Red"/>

          </div>
        );

    }

}

export default Hello;
