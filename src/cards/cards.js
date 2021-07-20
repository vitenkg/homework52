import './cards.css'

const Cards = props => {
    console.log(props);
    return (
        <div className={`card ${props.rankClass} ${props.suitName}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </div>
    )
}

export default Cards;