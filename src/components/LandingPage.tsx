import * as React from 'react';
import '../css/Global.css';
import FilmList from './FilmList';
import Film from './Film';

const logo = require('../assets/Logo2.jpg');

let films = Array<JSX.Element>();

films.push(<Film title="Die Hard" description="Die hard is a great Christmas Film"
                 rating={3} />);

films.push(<Film title="Lord of the Rings" description="A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron."
                 rating={5} />);



class LandingPage extends React.Component {
    render() {
        return (
            <div style={{'background-color':'black'}}>
                <div className="Header-main">
                    <div className="Header-main-box">
                        <h1 >Pandr</h1>
                    </div>
                    <img src={logo} className="App-logo"/>
                </div>
                <div className="Body-main">
                    <FilmList title="Latest Films" films={films} />
                </div>

             </div>



        );
    }
}

export default LandingPage;