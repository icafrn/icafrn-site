import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { newsData } from "../newsData.js";

const NewsDetail = () => {
    const [newsDataItem, setNewsDataItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    // SET A NEWS
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
                <section className="section-news">
                    <div className="news">
                        <span className="news__time">Postado em: {newsDataItem.time}</span>
                        <h1 className="news__title">{newsDataItem.title}</h1>
                        {newsDataItem.cover && (
                            <div className="news__img">
                                <img src={newsDataItem.cover} alt={newsDataItem.title} />
                            </div>
                        )}
                        {newsDataItem.paragraphs && (
                            <div className="news__paragraphs">
                                {newsDataItem.paragraphs.map((paragraph) => (
                                    <p>{paragraph}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default NewsDetail;