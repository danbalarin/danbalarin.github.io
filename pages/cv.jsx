import React, { Component } from 'react';
import Link from 'next/link';
import styles from './cv.module.scss';
import PolyCanvas from '~/components/PolyCanvas/PolyCanvas';
import CustomMarkdown from '~/components/CustomMarkdown/CustomMarkdown';
import Head from 'next/head'

const cvUrl = "/static/cv.md";

class CV extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Head>
                    <title key="title">Dan Balarin - CV</title>
                </Head>
                <PolyCanvas y_colors={["#111", "#333"]} className={styles.bg} />
                <div className={styles.container}>
                    <div className={styles.controls}>
                        <Link href={"/"} ><a title={"Home"}><i className={'icon-home'} /></a></Link>
                        <Link href={"/cv-printable"} ><a title={"Printable version"}><i className={'icon-print'} /></a></Link>
                        <a href={cvUrl} title={"Download MD file of this CV"} download><i className={'icon-file-code'} /></a>
                        <a href="./" onClick={e => this.child.loadMD(e)} title={"Reload CV"}><i className={'icon-cw'} /></a>
                    </div>
                    {/* Ref and calling child method is against Reacts design, but having whole state management system just for one state change is unreasonable to me */}
                    <CustomMarkdown mdUrl={cvUrl} onRef={ref => (this.child = ref)} />
                </div>
            </div>
        )
    }
}

export default CV;
