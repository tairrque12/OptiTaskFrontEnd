function ServicesSection() {
    return (

        <section id="services" className="services-section">
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
                <h2 className="services-heading">OptiTask Services</h2>
                <p className="services-subtext">
                    Purpose Built For Every Task.
                </p>
                <button className="services-button">Explore Services &nbsp; →</button>
            </div>
        </section>
    );
}

export default ServicesSection;