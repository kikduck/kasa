import './banner.scss'
export default function Banner() {
    const pathname = window.location.pathname;
    const lastSlashIndex = pathname.lastIndexOf('/');
    const urlPart = pathname.substring(lastSlashIndex);
    let className = 'banner_home'
    let textClassName
    if (urlPart === '/about') {
        className = 'banner_about'
        textClassName = 'text_about'
    }
    let banner = 'banner'
    let Classes = className
    if (banner) {
        Classes += ' banner';
    }

    return (
        <section className={Classes}>
            <p className={textClassName}>Chez vous, partout et ailleurs</p>
        </section>
    )
}