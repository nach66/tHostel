import React from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default class Home extends React.Component {

    state = {
        open: true,
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        const { open } = this.state;
        return (
            <>
                <Images title="אכסניית טבריה" 
                        subtitle="הבית שלך בצפון"
                />
                <Modal open={open} center
                    onClose={this.onCloseModal}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                    styles={{
                        modal: {
                            animation: `${
                            open ? 'customEnterAnimation' : 'customLeaveAnimation'
                        } 500ms`,
                        },
                    }}
                >
                    <h2>כותרת</h2>
                    <p>
                        בהתאם להנחיות משרד הבריאות אנחנו נהיה סגורים 😢 
                        החל מיום שישי ה - 18 לספטמבר (מ- 14:00) עד ה - 11 באוקטובר. 
                        אבל...😏 
                        אם אתם מחפשים מקום ידידותי להעביר בו את הסגר, אנחנו משכירים חדרים פרטיים לתקופות קצרות, 14 יום ויותר. 
                        מוזמנים לפנות אלינו ולקבל הצעת מחיר.
                    </p>
                </Modal>

                <Search/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}