import './cards/cards.css';
import Cards from "./cards/cards";
import CardDeck from "./carddeck/carddeck";
import generate from "./generate/generate";
import {Component} from "react";

class App extends Component {
    render() {
        let cardTmp = [];
        const Poker = {
            deck: CardDeck(),
            getCard: ()=> {
                const indexCard = generate(Poker.deck.length-1);
                const tmpCard = Poker.deck[indexCard];
                Poker.deck.splice(indexCard, 1);
                return  tmpCard;
            },
            getCards: (props) => {
                const tmpCards = [];
                for (let i = 0; i < props; i++) {
                    tmpCards.push(Poker.getCard());
                };
                return tmpCards;
            },
        };
        cardTmp = [...Poker.getCards(5)];
        console.log(cardTmp);
        console.log(Poker.deck);
        return (
            <div className="playingCards faceImages">
                <ul className="table">
                    <li><Cards rank={cardTmp[0].rank} suitName={cardTmp[0].suitName} suit={cardTmp[0].suit}/></li>
                    <li><Cards rank={cardTmp[1].rank} suitName={cardTmp[1].suitName} suit={cardTmp[1].suit}/></li>
                    <li><Cards rank={cardTmp[2].rank} suitName={cardTmp[2].suitName} suit={cardTmp[2].suit}/></li>
                    <li><Cards rank={cardTmp[3].rank} suitName={cardTmp[3].suitName} suit={cardTmp[3].suit}/></li>
                    <li><Cards rank={cardTmp[4].rank} suitName={cardTmp[4].suitName} suit={cardTmp[4].suit}/></li>
                    <li><div className="card back"></div></li>
                </ul>
            </div>
        )

    }
}

export default App;
