import './cards/cards.css';
import Cards from "./cards/cards";
import CardDeck from "./carddeck/carddeck";
import generate from "./generate/generate";
import {Component} from "react";

class App extends Component {
    state = {
        onDesk: [{
                rankClass: 'back',
                rank: '',
                suitName: '',
                suit: ''
            },
            {
                rankClass: 'back',
                rank: '',
                suitName: '',
                suit: ''},
            {
                rankClass: 'back',
                rank: '',
                suitName: '',
                suit: ''},
            {
                rankClass: 'back',
                rank: '',
                suitName: '',
                suit: ''},
            {
                rankClass: 'back',
                rank: '',
                suitName: '',
                suit: ''},
        ],
        deck: CardDeck(),
    };

    getCard = () => {
        const indexCard = generate(this.state.deck.length - 1);
        const tmpCard = this.state.deck[indexCard];
        this.state.deck.splice(indexCard, 1);
        return tmpCard;
    };

    getCards = (props) => {
        const tmpCards = [];
        for (let i = 0; i < props; i++) {
            tmpCards.push(this.getCard());
        }
        this.setState(
            {onDesk: tmpCards}
       )
        return tmpCards;
    };

    newDeck = () =>{
        this.setState({
            deck: CardDeck(),
        });
        console.log('Новая Колода в деле');
    }

    newCards = () => {
        const mass = this.getCards(5);
        this.setState({
            onDesk: mass,
        })
        return true;
    };

    render() {
        const cardTmp = this.state.onDesk;
        console.log(cardTmp);
        console.log(this.state.deck);
            return (
                <div className="playingCards faceImages">
                    <button onClick={this.newDeck}>Новая колода</button>
                    <button onClick={this.newCards}>Раздать</button>
                    <ul className="table">
                        <li>
                            <Cards rank={this.state.onDesk[0].rank} rankClass={this.state.onDesk[0].rankClass} suitName={this.state.onDesk[0].suitName} suit={this.state.onDesk[0].suit}/>
                        </li>
                        <li>
                            <Cards rank={this.state.onDesk[1].rank} rankClass={this.state.onDesk[1].rankClass} suitName={this.state.onDesk[1].suitName} suit={this.state.onDesk[1].suit}/>
                        </li>
                        <li>
                            <Cards rank={this.state.onDesk[2].rank} rankClass={this.state.onDesk[2].rankClass} suitName={this.state.onDesk[2].suitName} suit={this.state.onDesk[2].suit}/>
                        </li>
                        <li>
                            <Cards rank={this.state.onDesk[3].rank} rankClass={this.state.onDesk[3].rankClass} suitName={this.state.onDesk[3].suitName} suit={this.state.onDesk[3].suit}/>
                        </li>
                        <li>
                            <Cards rank={this.state.onDesk[4].rank} rankClass={this.state.onDesk[4].rankClass} suitName={this.state.onDesk[4].suitName} suit={this.state.onDesk[4].suit}/>
                        </li>
                    </ul>
                </div>
            )
        }
}

export default App;
