import './housing.scss'
import Header from '../../components/layout/header/header'
import Footer from '../../components/layout/footer/footer'
import Tag from '../../components/tag/tag'
import Slideshow from '../../components/slideshow/slideshow'
import Collapse from '../../components/collapse/collapse'
import Host from '../../components/host/host'
import Rating from '../../components/rating/rating'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import data from '../../data/housing.json';
export default function Housing() {
    let title, sideshow, host, rating, location, tags, collapses
    const navigate = useNavigate();
    const url = window.location.href;
    const lastSlashIndex = url.lastIndexOf('/');
    const id = url.substring(lastSlashIndex + 1);
    const locations = [];
    for (let i = 0; i < data.length; i++) {
        const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = data[i]; // récupération des variables souhaitées de chaque objet location
        const oneLocation = { id, title, cover, pictures, description, host, rating, location, equipments, tags }; // création d'un nouvel objet avec les variables récupérées
        locations.push(oneLocation);
    }
    const foundLogement = data.find((locations) => locations.id === id); // Vérifier si l'ID est valide ici
    useEffect(() => {

        if (!foundLogement) {
            // Si l'ID n'est pas valide, rediriger vers une page d'erreur
            navigate('/notfound');
        }
    }, [navigate, foundLogement]);

    if (foundLogement) {
        title = <h1>{foundLogement.title}</h1>
        location = <p>{foundLogement.location}</p>

        sideshow =
            <div className='housing_slideshow'>
                <Slideshow pictures={foundLogement.pictures} />
            </div>

        tags =
            <div className='housing_tags'>
                <Tag tags={foundLogement.tags} />
            </div>

        host =
            <div className='host_name'>
                <Host host={foundLogement.host} />
            </div>

        rating =
            <div className='host_rating'>
                <Rating rating={foundLogement.rating} />
            </div>

        collapses =
            <div className='housing_collapse'>
                <Collapse title="Description" content={foundLogement.description} />
                <Collapse title="Equipements" content={foundLogement.equipments} />
            </div>;
    }

    return (
        <>
            <Header />
            {sideshow}
            <main className='housing_content'>
                <div className='housing_desc'>
                    <div className='housing_infos'>
                        {title}
                        {location}
                        {tags}{ }
                    </div>
                    <div className='housing_host'>
                        {host}
                        {rating}
                    </div>
                </div>
                {collapses}
            </main>
            <Footer />
        </>

    )
}