import { Link } from "react-router-dom";

const NewsCard = ({ items: { id, cover, title, time, description } }) => {
    return (
        <>
            <div className="news-card">
                <div className="news-card__image">
                    <img src={cover} alt="imagem" className="overlay" />
                    <div className="news-card-image__gradient"></div>
                </div>
                <div className="news-card__text">
                    <span className="news-card-text__time">{time}</span>
                    <Link className="news-card-text__title" to={`/icafrn-site/noticias/${id}`}>{title}</Link>
                    <p className="news-card-text__description">{description}</p>
                </div>
            </div>
        </>
    )
};

export default NewsCard;