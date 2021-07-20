export const cardsRank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const cardsSuit = ['♠', '♥', '♣', '♦'];
export const cardsSuitName = ['spades', 'hearts', 'clubs', 'diams'];

const CardDeck = () => {
    let cardDeck = [];
    for (let i = 0; i < cardsSuit.length; i++) {
        for (let j = 0; j < cardsRank.length; j++) {
            cardDeck.push({rankClass: 'rank-' + cardsRank[j].toLowerCase() ,rank: cardsRank[j], suit: cardsSuit[i], suitName: cardsSuitName[i]});
        }
        ;
    }
    ;
    return cardDeck;
};

export default CardDeck;