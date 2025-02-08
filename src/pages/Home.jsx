import { useState } from 'react';
import { Link } from 'react-router-dom';

import LastNewsCard from '../components/LastNewsCard.jsx';
import { lastNewsData } from "../lastNewsData.js"

const Home = () => {
    const [lastNews, setLastNews] = useState(lastNewsData);
    return (
        <div>
            <section className='hero section--green'>
                <div className='hero-container'>
                    <h1 className='hero__title'>ICAF-RN</h1>
                    <p className='hero__paragraph'>
                        Bem-vindos a página do Instituto de Cooperação de Agricultura Familiar do Rio Grande do Norte
                    </p>
                    <Link to={'/icafrn-site/sobre-nos/'} className='btn btn-success'>Conheça-nos</Link>
                </div>
            </section>
            <section className='section-last-news'>
                <div className="section-last-news__text">
                    <h1 className='section__title'>Últimas notícias</h1>
                    <Link className='button' to={'/icafrn-site/noticias/'}>Veja todas as notícias</Link>
                </div>
                <div className='section-last-news__container'>
                    {lastNews.map((lastNew) => (
                        <LastNewsCard key={lastNew.id} items={lastNew} />
                    ))}
                </div>
            </section>
        </div>
    )
};

export default Home;