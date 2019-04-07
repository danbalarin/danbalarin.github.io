import React, { Component } from 'react';
import styles from './PolyCanvas.module.scss';
import Trianglify from 'trianglify';
import PropTypes from 'prop-types';

const defaultColorPalette = ["#111","#1d1d1d","#222","#222","#1d1d1d","#111"];
const PolyCanvasShape = {
    //** Colors defining the X axis colors, either [D3 Color scheme string](https://beta.observablehq.com/@mbostock/d3-color-schemes) or array of hex values */
    x_colors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    //** Colors defining the Y axis colors, either [D3 Color scheme string](https://beta.observablehq.com/@mbostock/d3-color-schemes) or array of hex values */
    y_colors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
const defaultProps = {
    x_colors: defaultColorPalette,
    y_colors: defaultColorPalette,
    className: ""
};
class PolyCanvas extends Component {
    static propTypes = PolyCanvasShape;
    static defaultProps = defaultProps;
    componentDidMount() {
        let pattern = Trianglify({
            width: window.innerWidth,
            height: window.innerHeight,
            x_colors: this.props.x_colors,
            y_colors: this.props.y_colors
        });
        pattern.canvas(document.getElementById('canvasbg'));
    }

    render() {
        let {className, ...nextProps} = this.props;
        return <canvas id={'canvasbg'} className={[styles.bg, className].join(' ')} style={{backgroundColor: this.props.x_colors[this.props.x_colors.length/2]}} {...nextProps}></canvas>
    }
}

export default PolyCanvas;
