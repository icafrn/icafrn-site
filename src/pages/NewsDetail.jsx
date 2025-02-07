import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { newsData } from "../newsData.js";

const NewsDetail = () => {
    const [newsDataItem, setNewsDataItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        let newsFound = null;
        setIsLoading(true);
        for (let i = 0; i < newsData.length; i++) {
            if (newsData[i].id == parseInt(id)) {
                newsFound = newsData[i]
                break
            }
        }
        setIsLoading(false);
        setNewsDataItem(newsFound);
    }, [id]);


    return (
        <>  

            {isLoading && (
                <p>Carregando</p>
            )}

            {newsDataItem && (
                <section className="news">
                    <h1 className="news__title">{newsDataItem.title}</h1>
                    <p className="news__time">Postado em: {newsDataItem.time}</p>
                    <img className="news__img" src={newsDataItem.cover} alt={newsDataItem.title} />
                </section>
            )}
        </>
    );
};

export default NewsDetail;