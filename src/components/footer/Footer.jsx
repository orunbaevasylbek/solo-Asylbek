import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import logoInst from '../../img/inst-logo.svg';
import telegram from '../../img/telegram.svg';
import twitter from '../../img/twitter.svg';
import whatsapp from '../../img/whatssap-logo.svg'

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: 'transparent',
        display: 'flex',
        width: '100%',
        height: '250px',
    },
    container: {
        display: 'flex',


    },
    allLogo: {
        cursor: 'pointer'
    },
    imgInst: {
        width: '30px',
        height: '40px',
        marginLeft: '50px'
    },
    btnLink: {
        fontFamily: 'Dancing Script, cursive',
        cursor: 'pointer',
        color: '#fff',
        marginLeft: '50px'
    },
    paragraph: {
        marginLeft: '50px',
        fontFamily: 'Princess Sofia, cursive',
    },
    rfooter: {
        width: '100%',
        height: '100%'
    }

}))
const Footer = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.footer}>
                <div className={classes.lfooter}>

                    <p></p>
                    <Link >
                        <h4 className={classes.btnLink}>Akma    Beel</h4>
                    </Link>
                    <p className={classes.paragraph}>I'll tell you: “No, it makes sense to be jealous!
                    Guess and think where your beloved is now "
                    Kohl he loves you sincerely invisibly,
                    He can never betray

                    And if it's just a hobby,
                    Desire without feeling is just passion
                    No zeal will help you,
                    Near you, as if you were holding it on a chain.

                    Treason, if a person really wants,
                    In broad daylight at any hour.
                    And nothing can stop him,
When the fire in his soul went out.</p>
                    <Link className={classes.allLogo}>
                        <a href="https://instagram.com/akmabeel?utm_medium=copy_link">

                            <img className={classes.imgInst} src={logoInst} alt="Intagram" />
                        </a>
                        <a href="https://t.me/Asylbeks_channel">

                            <img className={classes.imgInst} src={telegram} alt="Telegram" />
                        </a>
                        <a href="https://twitter.com/Asylbek2804?s=09">

                            <img className={classes.imgInst} src={twitter} alt="Twitter" />
                        </a>
                    </Link>
                </div>
                <div className={classes.rfooter}>
                </div>
            </div>

        </>
    );
};

export default Footer;