import React, { Component } from 'react';



class AlreadyLogin extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Welcome Diwakar Rana</h1>
                <h3>you are Already booked room</h3>
                details are:
                hostel no : B4
                room no:  23
            </div>
        );
    }
}

export default AlreadyLogin;