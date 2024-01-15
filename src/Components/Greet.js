import {react,Component} from 'react'

class Greet extends Component{
    constructor(){
        super();
        this.state={
            firstName:'Ehasanul',
            lastName:'Hoque'
        }
    }
    handleNameChange(){
        this.setState({
            firstName:'Morzina',
            lastName:'Hoque'
        });
        console.log(this.state);
    }
    render(){
        
        return (<>
        <h1>Hello {this.state.firstName} {this.state.lastName}</h1>
        <button onClick={this.handleNameChange}>Change Name</button>
        </>) 
    }
}
export default Greet;

