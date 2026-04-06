import {Link} from 'react-router-dom';
function ServicesSection() {
    return (

        <section id="optimus" className="services-section">
            <video
                className="services-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/ServicesVideo.mp4" type="video/mp4" />
            </video>

            <div className="services-overlay"></div>

            <div className="services-content">
                <h2 className="services-heading">Tesla Optimus</h2>
                <p className="services-subtext">
                    Optimus. The Future Of On-Demand Work.
                </p>

                <Link to="/services-lp" style={{textDecoration: "none"}}
                      className="services-button">Explore Optimus &nbsp; →</Link>
            </div>
        </section>
    );
}

export default ServicesSection;