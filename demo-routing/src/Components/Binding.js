import React, { Component } from 'react'

class Binding extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) =>  {
        this.setState({ value: event.target.value });
        console.log(event.target.value );
    };

    // printData() {
    //     alert("You just clicked"+value); 
    // }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="username"
                    value={this.state.value}
                    onChange={this.handleChange} 
                />
                {/* <input type="button" onClick={this.printData}>Click</input> */}
                      
                <p>Value from input is: {this.state.value}</p>
            </div>
        )
    }
}

export default Binding
