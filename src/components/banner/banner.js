import './banner.scss'
export default function Banner() {
    const pathname = window.location.pathname;
    const lastSlashIndex = pathname.lastIndexOf('/');
    const urlPart = pathname.substring(lastSlashIndex);
    let className = 'banner_home'
    if (urlPart === '/about') {
        className = 'banner_about'
    }

    return (
        <section className={className}>
            <p>Chez vous, partout et ailleurs</p>
        </section>
    )
}