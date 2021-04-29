import {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>{this.props.name} working in {this.props.job}</h1>
    }
}

export default Welcome;