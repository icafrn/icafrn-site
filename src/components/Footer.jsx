import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-content__contatcs">
                    <h3>ICAF-RN</h3>
                    <p>Acreditamos que a agricultura familiar é a base da segurança alimentar e da economia local</p>
                    <p>CNPJ: 11.316.560/0001-76</p>

                    <div className="contacts__social-media">
                        <a href="#"> <FaInstagram size={30} color="#fff" /> </a>
                    </div>
                </div>
                <div className="footer-content__pages">
                    <ul className="pages-links">
                        <li>
                            <h3>Páginas</h3>
                        </li>
                        <li>
                            <Link to={'/icafrn-site'}>Início</Link>
                        </li>
                        <li>
                            <Link to={'/icafrn-site/sobre-nos/'}>Sobre nós</Link>
                        </li>
                        <li>
                            <Link to={'/icafrn-site/noticias/'}>Notícias</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;