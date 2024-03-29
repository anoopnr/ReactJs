import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome Visitor"
        }
    }
    
    anotherMessage(){
        this.setState({
            message:"Thanks"
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.anotherMessage()}}>Subscribe</button>
            </div>
        )
        
    }
}

export default Message;