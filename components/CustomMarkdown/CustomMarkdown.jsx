import React, { Component } from 'react';
import styles from './CustomMarkdown.module.scss';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const CustomMarkdownShape = {
    //** URL to MD file */
    mdUrl: PropTypes.string.isRequired,
    //** reference */
    onRef: PropTypes.func,
};
class CustomMarkdown extends Component {
    static propTypes = CustomMarkdownShape;
    constructor() {
        super();
        this.state = {cv: "", loading: true};
        this.loadMD = this.loadMD.bind(this);
    }

    loadMD(event) {
        this.setState({loading: true});
        if(event) {
            event.preventDefault();
        }
        fetch(this.props.mdUrl)
        .then(res => res.text())
        .then(res => {
            this.setState({cv: res, loading: false});
        });
    }

    componentDidMount() {
        this.loadMD();
        if(this.props.onRef) {
            this.props.onRef(this);
        }
    }

    componentWillUnmount() {
        if(this.props.onRef) {
            this.props.onRef(null);
        }
    }

    render() {
        return <div className={styles.container}>
            {this.state.loading ? 
                <h1 className={styles.loading}>Loading CV (after 5s try to reload the page)</h1> : 
                <ReactMarkdown source={this.state.cv} className={styles.cv} />
            }
        </div>
    }
}

export default CustomMarkdown;
