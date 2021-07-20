import React from 'react';
import App from "../App";

class PokerHand extends React.Component {

    getOutcome = () => {
        const onDesk = App.state.onDesk;
        //let tmpCheck = [];
        //let tmpIndexCard = [];
        console.log('ok');
        const onDecksRank = onDesk.map(key =>{
            return key.rank;
        });

        const onDecksSuit = onDesk.map(key =>{
            return key.suit;
        });

        console.log(onDecksRank);
        console.log(onDecksSuit);
        //let indexOfDeck = [];



        return onDesk;
    }
}

export default PokerHand;