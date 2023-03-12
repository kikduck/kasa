import './catalog.scss'
import data from '../../data/housing.json';
import Card from '../card/card';

export default function Catalog() {
    const locations = [];

    for (let i = 0; i < data.length; i++) {
        const { id, title, cover } = data[i]; // récupération des variables souhaitées de chaque objet location
        const location = { id, title, cover }; // création d'un nouvel objet avec les variables récupérées
        locations.push(location);
    }
    const cards = locations.map(location => (
        <Card id={location.id} title={location.title} cover={location.cover} />
    ));
    return (
        <section className='catalog'>
            {cards}{ }
        </section>
    )
}