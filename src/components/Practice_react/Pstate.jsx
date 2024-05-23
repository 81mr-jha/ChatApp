import React from 'react';


class Pstate extends React.Component{



    constructor(){
        super();

        this.state={
            msg : 'India is the largest and biggest democracy in the world? If Agree hit it '
        }
    }


    subscribe(){
        this.setState({
            msg:'Thanks buddy for agreeing'
        })
    }

    render(){
        return(
                <div>
                <h1>{this.state.msg}</h1>
                <button onClick= { ()=> {this.subscribe()}}>Click here
                </button>
                </div>
        ) 
            
        
    }
}


export default Pstate;