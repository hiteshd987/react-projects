import axios from 'axios';
import React, { Component } from 'react';

class Fetching_axios extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
        // this.getData(); 
    }

    componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then( res => {
            this.setState({users: res})
            console.log(res);
        });
   
    }

    // getData = async () => {
    //     let res = await axios.get('https://api.postalpincode.in/pincode/110001')
    //     .then(({ res }) => res);
    //     this.setState({users: res})
    // }   

    render() {
        const { data } = this.state;
        return (
            <div>
               {data.map(user => 
                <h2>{user.title}</h2> 
               )} 
            </div>
        )
    }
}

export default Fetching_axios
