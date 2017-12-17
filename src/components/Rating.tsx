import * as React from 'react';

const star_0 = require('../assets/0_stars.png');
const star_1 = require('../assets/1_star.png');
const star_2 = require('../assets/2_stars.png');
const star_3 = require('../assets/3_stars.png');
const star_4 = require('../assets/4_stars.png');
const star_5 = require('../assets/5_stars.png');
const stars = [star_0, star_1, star_2, star_3, star_4, star_5];

export interface Props {
    rating: number;
}

const style = {
    'max-width': '120px'
}

class Rating extends React.Component <Props>{
    render() {
        return (
            <img src={stars[this.props.rating]} className="App-logo" alt="logo" style={style} />

        );
    }
}

export default Rating;