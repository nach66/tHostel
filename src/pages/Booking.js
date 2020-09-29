import React, { Component } from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'

export default class minihotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({
                isloading: false
            });
        }.bind(this), 1000);
    }
    
    render() {
        console.log(this.state.idloading);
        return (
            <>
                <div className="sep"/>
                    <Title title="הזמנה"/>
                    <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <h6>להזמנות קבוצתיות של 10 אנשים ומעלה, אנא</h6>
                            <Link 
                                style={{
                                    marginRight: '5px',
                                    fontWeight: '600',
                                    fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif'
                                }}
                                to="/contact" > פנו אלינו ישירות  :) 
                            </Link>
                    </div>

                    {this.state.isloading && <Loading/>}
                    
                    <iframe id="be_iframe" frameborder="0.5" scrolling="yes" title="booking"
                                    style={{width: '100%', height:'2700px', 
                                            padding:'30px', overflow: 'hidden'}} 
                                    src="https://minihotelpms.net/frame/reservas?hotelToken=a41ce7814d16061ac9a951e3bb1c534e||from=||to=||nAdults=1||nChilds=0||nBabies=0||start_date=||end_date=||language=HE||currency=ILS||rateCode=*ALL||roomId=||bloggerId=">
                    </iframe>
                    <div className="sep"/>
                    <ContactForm/>
                    <Footer/>
                </>
        )
    }
}

/* <iframe title="book" width="95%" height="600px" scrolling="auto"
src="https://new-booking.frontdeskmaster.com?hostelId=AJKOwMNX%2F5UDIgGxDhqQRY6JrRNTS%2BGr"/> */