import React, { Component } from 'react';
import Waypoint from 'react-waypoint';


class WhenInView extends Component {
    constructor(props){
        super(props);
        this.state = {
            isInView: false
        };
        this.onEnter = this.onEnter.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }


      onEnter({ currentPosition }){
        console.log(currentPosition)
        if (currentPosition === Waypoint.inside){

            this.setState({
                isInView: true
            });
        }
    }
        onLeave({ currentPosition }){
        console.log(currentPosition)
        if (this.currentPosition === Waypoint.below){  

            this.setState({
                isInView: false
            });
        }
    }

    render(){
        return (
            <div>
            <Waypoint onEnter = {this.onEnter} onLeave ={this.onLeave}></Waypoint>
            {this.props.children({ isInView: this.state.isInView})}
            </div>
        );
    }
}
export default WhenInView;