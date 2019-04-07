import React, { Component } from 'react';
import Link from 'next/link';
import styles from './SocialButton.module.scss';
import PropTypes from 'prop-types';

const SocialButtonShape = {
    //** URL or Link to address of button */
    url: PropTypes.string.isRequired,
    //** Icon class name */
    iconClass: PropTypes.string.isRequired,
    //** Button text */
    text: PropTypes.string.isRequired,
    //** Is it Link or anchor */
    isLink: PropTypes.bool
};
class SocialButton extends Component {
    static propTypes = SocialButtonShape;
    static defaultProps = {isLink: false};
    body() {
        return [<i className={this.props.iconClass} key={this.props.url + "icon"} />, <span key={this.props.url + "text"}>{this.props.text}</span>]
    }

    link() {
        return <Link prefetch href={this.props.url}><a className={styles.btn}>{this.body()}</a></Link>
    }

    anchor() {
        return <a href={this.props.url} className={styles.btn}>{this.body()}</a>
    }

    render() {
        if(this.props.isLink) {
            return this.link();
        } else {
            return this.anchor();
        }
    }
}

export default SocialButton;
