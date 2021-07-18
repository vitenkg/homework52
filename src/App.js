import './cards/cards.css';
import Cards from "./cards/cards";
import CardDeck from "./carddeck/carddeck";
import {Component} from "react";

class App extends Component {
    render() {
        const deck = CardDeck();
        console.log(deck);
        return (
            <div className="playingCards">
                <Cards rank={deck[2].rank} suitName={deck[2].suitName} suit={deck[2].suit}/>
            </div>
        )

    }
}

export default App;
