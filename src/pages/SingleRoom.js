import React, { Component } from 'react'
import ContactForm from '../components/ContactForm';
import StyledHero from "../components/StyledHero";
import {RoomContext} from '../contextRooms';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import def from '../images/def.jpg';
import {FaCalendarAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            photoIndex: 0,
            isOpen: false,
            slug:this.props.match.params.slug,
            def
        };
    }

    handleExpand() {
        this.setState({ isOpen: true });
    }
    static contextType = RoomContext;
    
    render() {
        
        const { isOpen } = this.state;
        const { getRoom } = this.context;
        const { photoIndex } = this.state;
        const room = getRoom(this.state.slug);
        if (!room){
            return (
                <div className="error">
                    <h3>לצערנו אין חדר כזה</h3>
                    <Link to="/rooms" className="btn-primary2">
                        בחזרה לחדרים
                    </Link>
                </div>
            );
        }
        const {name, description, capacity, price,
            extras, minibar, tv, images} = room;
        const [mainImg,...defuldImg] = images;
            
        return (
            <>
                <StyledHero img={mainImg || def}>
                    <Banner title={name}>
                        <Link to="/rooms" className="btn-primary2">
                            בחזרה לחדרים
                        </Link>
                    </Banner>
                </StyledHero>
                <div className="sep"/>

                <section className="room-extras">
                    <div className="container" style={{marginTop: '70px'}}>
                        {defuldImg.map((item,index)=>{
                            return ( <div
                                key={index} alt="pic"
                                style={{backgroundImage: `url(${item})`}}
                                onClick={() => this.setState({ isOpen: true, photoIndex: index })}
                                ></div>);                       
                        })}
                        {isOpen && (
                            <Lightbox
                                mainSrc={defuldImg[photoIndex]}
                                nextSrc={defuldImg[(photoIndex + 1) % defuldImg.length]}
                                prevSrc={defuldImg[(photoIndex + defuldImg.length - 1) % defuldImg.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + defuldImg.length - 1) % defuldImg.length
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % defuldImg.length
                                })}
                            />
                        )}
                    </div>
                </section>
                    
                <section >
                    <div className="single-room-info">
                        <article className="description">
                            <h3>פרטים</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>מידע</h3>
                            <h6>
                                כמות אנשים בחדר : {" "} {capacity > 1? 
                                `${capacity} אנשים`: 
                                `אדם אחד`}
                            </h6>
                            <h6> {tv? "טלוויזיה בכבלים עם מסך שטוח" : "חדר טלוויזיה משותף בסמוך לחדר"}</h6>
                            <h6> {minibar && "מיני בר בחדר"} </h6>                            
                            {/* <h6>מחיר: ₪{price}</h6> */}
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>מתקנים</h6>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                        return<li key={index}>- {item}</li> })}
                    </ul>
                </section>

                <section className="empty-services">
                <Link to="/bookhere"
                    className="book-now-btn"
                    >
                        הזמן עכשיו!
                        <span style={{ fontSize: '1.2rem',margin:'9px'}}>
                            <FaCalendarAlt/>
                        </span>
                    </Link>
                </section>

                <div className="sep"/>

                <ContactForm/>

                <Footer/>
            </>
        );
    }
}