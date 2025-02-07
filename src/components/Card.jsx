import { Link } from "react-router-dom";

const Card = ({ items: { id, cover, title, time } }) => {
    return (
        <>
            <div className="card-box">
                <div className="card-box__image">
                    <img src={cover} alt="imagem" />
                </div>
                <div className="card-box__text">
                    <Link className="card-box-text__title" to={`/icafrn-site/noticias/${id}`}>{title}</Link>
                    <span className="card-box-text__time">{time}</span>
                </div>
            </div>
        </>
    )
};

export default Card;