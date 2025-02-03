import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <div>
            <section className='hero section--green'>
                <div className='hero-container'>
                    <h1 className='hero__title'>ICAF-RN</h1>
                    <p className='hero__paragraph'>
                        Bem-vindos a página do Instituto de Cooperação de Agricultura Familiar do Rio Grande do Norte
                    </p>
                    <Link to={'/sobre-nos/'} className='btn btn-success'>Conheça-nos</Link>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
};

export default Home;