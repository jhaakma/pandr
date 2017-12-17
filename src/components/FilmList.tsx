import * as React from 'react';
import '../css/FilmList.css';

//import Film from './Film';

export interface Props {
    title: string;//title of the list itself
    films: JSX.Element[];//Array of films to display
}

class FilmList extends React.Component <Props>{
    render() {
        return (
            <div>
                <div className="filmlist-header"><h2>{this.props.title}</h2></div>
                <tbody> {this.props.films} </tbody>
            </div>
        );
;
    }
}

export default FilmList;