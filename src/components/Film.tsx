import * as React from 'react';
import '../css/Global.css';
import '../css/Film.css';
import Rating from './Rating';

export interface Props {
    title: string;
    description: string;
    rating: number;
}


class Film extends React.Component <Props> {
    render() {
        return (
            <div className="Film">
                <h2>{this.props.title}</h2>
                {this.props.description}<br></br>
                <Rating rating={this.props.rating} />
            </div>
        );
    }
}

export default Film;