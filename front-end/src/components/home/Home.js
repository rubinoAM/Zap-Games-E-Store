import React, { Component } from 'react';
import Carousel from './Carousel';
import Content from './Content';
import MiniNav from './MiniNav';
import './home.css';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            showAlert:false,
        }
    }

    componentDidMount(){
        if(this.props.location.search == "?added=item"){
            this.setState({
                showAlert: true,
            })
        }
    }

    render(){
        return(
            <div className="col s12 home">
                <SweetAlert
                    show={this.state.showAlert}
                    title="Game Added!"
                    text="We have updated your cart with your new game. Please feel free to look around for more games to buy!"
                    onConfirm={()=> this.setState({showAlert: false})}
                />
                <Carousel />
                <MiniNav />
                <Content />
            </div>
        )
    }
}

export default Home;