import './about.scss'
import Header from '../../components/layout/header/header'
import Banner from '../../components/banner/banner'
import Footer from '../../components/layout/footer/footer'
import data from '../../data/about.json'
import Collapse from '../../components/collapse/collapse'
export default function About() {
    const dataAbout = [];

    for (let i = 0; i < data.length; i++) {
        const { id, title, content } = data[i]; // récupération des variables souhaitées de chaque objet location
        const oneDataAbout = { id, title, content }; // création d'un nouvel objet avec les variables récupérées
        dataAbout.push(oneDataAbout);
    }
    const collapse = dataAbout.map(oneDataAbout => (
        <Collapse key={oneDataAbout.id} title={oneDataAbout.title} content={oneDataAbout.content} />
    ));
    return (
        <div className='about'>
            <Header />
            <Banner />
            <section className='section_collapse'>
                {collapse}{ }
            </section>
            <Footer />
        </div>
    )
}