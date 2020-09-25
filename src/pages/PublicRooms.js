import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import RoomsList from '../components/RoomsList';
import {RoomConsumer} from '../contextRooms';
import Title from '../components/Title';
import Loading from '../components/Loading';
import Services from '../components/Servies'

export default function PublicRooms() {
    return (
        <RoomConsumer>
            {value => {
                const {loading, publicRooms} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <div className="sep"/>
                        <Title title="חדרים משותפים" />
                        <section className="empty-services">
                            <h6>החדרים משותפים שלנו מכילים 8-10 אנשים. לחדרים המשותפים יש שירותים ומקלחות מחוץ לחדר.</h6>
                        </section>
                        <RoomsList rooms={publicRooms}/>
                        <ContactForm/>
                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
    );
}
