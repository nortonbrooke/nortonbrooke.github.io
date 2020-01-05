import React from 'react';
import './Image.css';

function Image(props) {
    let classes = ['Image'];
    if (props.shape) {
        switch(props.shape) {
            case 'circle': 
                classes.push('cir');
                break;
            case 'square': 
                classes.push('sqr');
                break;
            default:
                break;
        }
    }
    if (props.size) {
        switch(props.size) {
            case 'large':
                classes.push('lg');
                break;
            case 'medium': 
                classes.push('md');
                break;
            case 'small':
                classes.push('sm');
                break;
            default: 
                break;
        }
    }
    return (<img className={classes.join(' ')} src={props.src} alt={props.desc} aria-label={props.desc} />);
}

Image.defaultProps = {
    desc: '',
    src: '',
    shape: null,
    size: null
};

export default Image;
