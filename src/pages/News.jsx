import { useState } from "react";
import NewsCard from "../components/NewsCard";
import { newsData } from "../newsData";

const News = () => {
    const [allNews, setAllNews] = useState(newsData);
    return (
        <section className="all-news">
            {allNews.map((news) => (
                <NewsCard key={news.id} items={news} />
            ))}
        </section>
    )
};


export default News;

