const CardDeck = () => {
    const cardsRank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardsSuit = ['♠', '♥', '♣', '♦'];
    const cardsSuitName = ['spades', 'hearts', 'clubs', 'diams'];
    let cardDeck = [];
    for (let i = 0; i < cardsSuit.length; i++) {
        for (let j = 0; j < cardsRank.length; j++) {
            cardDeck.push({rank: cardsRank[j], suit: cardsSuit[i], suitName: cardsSuitName[i]});
        };
    };
    return cardDeck;
};
export default CardDeck;