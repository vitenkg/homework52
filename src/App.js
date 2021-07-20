import './cards/cards.css';
import Cards from "./cards/cards";
import CardDeck, {cardsRank} from "./carddeck/carddeck";
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
        deck: [],
        combinations: '',
        quantity: 0,
    };

    getCard = () => {
        const indexCard = generate(this.state.deck.length - 1);
        const tmpCard = this.state.deck[indexCard];
        this.state.deck.splice(indexCard, 1);
        return tmpCard;
    };

    getCards = (props) => {
        const tmpCards = [];
        if ((this.state.quantity - props) >= 0) {
            for (let i = 0; i < props; i++) {
                tmpCards.push(this.getCard());
            }
            this.setState({
                    quantity: this.state.quantity - props,
                }
            )
        }

        return tmpCards;
    };

    newDeck = () =>{
        this.setState({
            deck: CardDeck(),
            quantity: 52,
        });
        console.log('Новая Колода в деле');
    }

    newCards = () => {
        //const mass = this.getCards(5);
        const mass = [
            {
                rank: "3",
                rankClass: "rank-3",
                suit: "♠",
                suitName: "spades",
            },
            {
                rank: "9",
                rankClass: "rank-9",
                suit: "♠",
                suitName: "spades",
            },
            {
                rank: "10",
                rankClass: "rank-10",
                suit: "♥",
                suitName: "hearts",
            },
            {
                rank: "A",
                rankClass: "rank-a",
                suit: "♥",
                suitName: "hearts",
            },
            {
                rank: "Q",
                rankClass: "rank-q",
                suit: "♠",
                suitName: "spades",
            },
        ];
        this.setState({
            onDesk: mass,
        })
        return true;
    };

    getOutcome = () => {
        let onDesk = [...this.state.onDesk];
        let onDeskCheck = [];
        let onDeskIndexCard = [];
        let indexOfDesk = [];
        let suitOfDeck = [];
        let combination = '';
        let countMax = 0;
        const mix = [];
        const onDeskNumbers = [];
        const onDeskLetters =[];
        const rankCard = [...cardsRank];

        for (const i in onDesk) {
            const number = parseInt(onDesk[i].rank);
            console.log(number);
            if (number > 0) {
                onDeskNumbers.push(onDesk[i]);
            } else {
                onDeskLetters.push(onDesk[i]);
            }

        }
        onDesk.splice(0, 5);
        onDeskNumbers.sort((a, b) => a.rank > b.rank ? 1 : 1);
        for (let i = 9; i < rankCard.length; i++){
            for (let j = 0; j < onDeskLetters.length; j++) {
                if (onDeskLetters[j].rank === rankCard[i]) {
                    mix.push(onDeskLetters[j]);
                }
            }
        }

        onDeskLetters.splice(0, onDeskLetters.length);
        for (const i in mix) {
            onDeskLetters.push(mix[i]);
        }
        onDesk =  onDeskNumbers.concat(onDeskLetters);

        const onDesksRank = onDesk.map(key => {
            return key.rank;
        });

        const onDesksSuit = onDesk.map(key => {
            return key.suit;
        });

        for (let i = 0; i < onDesk.length; i++) {
            const cards = [...onDesksRank];
            onDeskIndexCard = cards[i];
            cards.splice(i, 1);
            if (cards.includes(onDeskIndexCard)) {
                indexOfDesk.push(i);
            }
        }

        for (let i = 0; i < indexOfDesk.length; i++) {
            onDeskCheck.push(onDesk[indexOfDesk[i]]);
        }

        if (onDeskCheck.length === 0) {
            let count = [];
            for (let i = 0; i < onDesk.length; i++) {
                const cards = [...onDesksSuit];

                let onDesksSuitTmp = cards[i];
                cards.splice(i, 1);
                if (cards.includes(onDesksSuitTmp)) {
                    suitOfDeck.push(onDesksSuitTmp);
                }
            }
            for (const i in suitOfDeck){
                let countIn = 0;
                for (const j in suitOfDeck) {
                    if (suitOfDeck[i] === suitOfDeck[j]) {
                        countIn++;
                    };
                }
                if (countMax < countIn) {
                    countMax = countIn;
                }
            }

            if ((suitOfDeck.length === 5) && (countMax === 5)) {
                if (suitOfDeck[0] === suitOfDeck[3]) {
                    combination = 'Flush';
                }
            }

            count = 0;
            for (let i = 1; i < onDesk.length; i++) {
                const number = parseInt(onDesksRank[i-1]) + 1;
                console.log(number);
                if ((number) === parseInt(onDesksRank[i])) {
                    count ++;
                }
            }
            if (count === 4) {
                combination = 'Straight';
            }
        }

        if (onDeskCheck.length === 2) {
            combination = 'One Pair';
        }

        if (onDeskCheck.length === 4) {
            if (onDeskCheck[0].rank !== onDeskCheck[2].rank) {
                combination = 'Two Pair';
            } else {
                combination = 'Four of a Kind';
            }
        }

        if (onDeskCheck.length === 3) {
            combination = 'Three of a Kind';
        }

        if (onDeskCheck.length === 5) {
            if (onDeskCheck[0].rank !== onDeskCheck[3].rank) {
                combination = 'Full House';
            }
        }

        if (combination.length === 0) {
            combination = 'Набор Карт';
        }

        console.log(`Карты на руках - ${combination}`);
        this.setState({
            combinations: combination,
        })
        return combination;
    };



    render() {


            return (
                <div className="playingCards faceImages">
                    <button onClick={this.newDeck}>Новая колода</button>
                    <button onClick={this.newCards}>Раздать</button>
                    <button onClick={this.getOutcome}>Комбинация</button>
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
                    <div>У Вас комбинация - {this.state.combinations}</div>
                    <div>колоде - {this.state.quantity}</div>
                </div>
            )
        }
}

export default App;
