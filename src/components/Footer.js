import MapComponent from './MapComponent'

function Footer() {
    return (
        <div id="where" className='footer-wrapper'>
            <div className='position-info-box'>
                <a className="indication-link" href="https://www.google.com/maps/dir/?api=1&destination=45.820119656293954,9.080023380085251"><div class="open-maps-button"><i class="fa-solid fa-diamond-turn-right"></i></div></a>
                <span class="location-map teachers">Viale Geno, 10-11, 22100 Como CO</span>
            </div>
            <MapComponent></MapComponent>
            <div className='footer-container'><p>© 2024 <a className="footer-link" href="https://github.com/TambuDT">TMB</a>. Tutti i diritti riservati. Powered By <a className="footer-link" href="https://react.dev/">React.js</a></p></div>
        </div>
    )
}

export default Footer