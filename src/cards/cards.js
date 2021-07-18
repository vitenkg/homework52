import './cards.css'

const Cards = props => {
    return (
        <div className={`card rank-${props.rank} ${props.suitName}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </div>
    )
};


export default Cards;