import React, { Component } from 'react'
import Footer from '../components/Footer'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
import ContactForm from '../components/ContactForm'
import Title from '../components/Title';
import Loading from '../components/Loading';

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
                    <section className="empty-services">
                        <Title title="הזמנה"/>
                        <h6>להזמנות קבוצתיות של 10 אנשים ומעלה, אנא פנו אלינו - בדוא"ל או בטלפון</h6>
                            <article>
                                <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
                                <h6>04-679-2611</h6>
                            </article>
                            <article>
                                <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                                <FaEnvelope style={{ color:'#ebe050'}}/></a>
                                <h6>tiberiashostel@gmail.com</h6>
                            </article>
                            <br/>
                        </section>

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