import './housing.scss'
import Header from '../../components/layout/header/header'
import Footer from '../../components/layout/footer/footer'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import data from '../../data/housing.json';

export default function Housing() {
    const navigate = useNavigate();
    const url = window.location.href;
    const lastSlashIndex = url.lastIndexOf('/');
    const id = url.substring(lastSlashIndex + 1);
    const locations = [];
    for (let i = 0; i < data.length; i++) {
        const { id, title, cover } = data[i]; // récupération des variables souhaitées de chaque objet location
        const location = { id, title, cover }; // création d'un nouvel objet avec les variables récupérées
        locations.push(location);
    }
    const foundLogement = data.find((locations) => locations.id === id); // Vérifier si l'ID est valide ici
    useEffect(() => {

        if (!foundLogement) {
            // Si l'ID n'est pas valide, rediriger vers une page d'erreur
            navigate('/notfound');
        }
    }, [id, navigate, foundLogement]);
    return (
        <div className='housing'>
            <Header />
            <Footer />
        </div>
    )
}