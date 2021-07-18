import './cards.css'

const Cards = props => {
    const rankLow = props.rank.toLowerCase();
    return (
        <div className={`card rank-${rankLow} ${props.suitName}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </div>
    )
};


export default Cards;