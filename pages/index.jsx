import React, { Component } from 'react';
import styles from './index.module.scss';
import globalStyles from './_app.scss';
import PolyCanvas from '~/components/PolyCanvas/PolyCanvas';
import SocialButton from '~/components/SocialButton/SocialButton';

const groups = [
    [
        { url: "https://github.com/danbalarin", iconClass: "icon-github-circled", text: "/danbalarin" },
        { url: "https://linkedin.com/in/dan-balarin", iconClass: "icon-linkedin", text: "/dan-balarin" },
        { url: "https://twitter.com/Kenny11_CZ", iconClass: "icon-twitter", text: "/Kenny11_CZ" },
    ],
    [
        { url: "mailto:dan.balarin@gmail.com", iconClass: "icon-mail", text: "E-mail" },
        { url: "/cv", iconClass: "icon-suitcase", text: "Circuum Vitae", isLink: true },
    ]
];

class HomePage extends Component {
    render() {
        return (
            <div className={[styles.container, globalStyles["centered"], globalStyles["h-100"], globalStyles["w-100"]].join(' ')}>
                <PolyCanvas />
                <div className={styles.profileImage}><img alt={'Pic of me, OwO'} src="/static/profile.jpg" /></div>
                <div className={styles.name}><h1 data-text="Dan Balarin">Dan  Balarin</h1></div>
                <div className={styles.about}><h2>Student, Frontend dev</h2></div>
                {groups.map((group, index) => {
                    const arr = group.map(link => { return <SocialButton {...link} key={link["url"] + "link"} /> });
                    return <div className={styles.socialSites} key={index}>{arr}</div>
                })}
                <div className={styles.projects}></div>
            </div>
        )
    }
}

export default HomePage;
