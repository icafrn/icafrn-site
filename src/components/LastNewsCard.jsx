import { Link } from "react-router-dom";

const LastNewsCard = ({ items: { id, cover, title, time } }) => {
    return (
        <>
            <div className="card-box">
                <div className="card-box__image">
                    <img src={cover} alt="imagem" className="overlay" />
                    <div className="card-box-image__gradient"></div>
                </div>
                <div className="card-box__text">
                    <Link className="card-box-text__title" to={`/icafrn-site/noticias/${id}`}>{title}</Link>
                    <span className="card-box-text__time">{time}</span>
                </div>
            </div>
        </>
    )
};

export default LastNewsCard;