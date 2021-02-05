import React, { Component } from 'react';
import axios from "axios";

class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://api.postalpincode.in/pincode/110001') 
        .then(response => {
            console.log(response);
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { posts } = this.state;    
        return (
            <div>
                List of Posts 
                {
                    posts.length ?
                    posts.map(post => <div key='1'>{post.PostOffice[0].Name}</div>) :
                    null  
                }
               
            </div>
        )
    }
}

export default List
