function HeroSection() {
    return (
        <section id="home" className="hero-section">
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/hero-section.mp4" type="video/mp4" />

            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <p className="hero-kicker">OptiTask</p>
                <h1>Your Task. Our Robot. Done.</h1>

                <p className="hero-subtext">
                    On-Demand Humanoid Robots For Home, Businesses, & Everyday Life.
                </p>

                <button className="hero-button">Request A Robot</button>
            </div>
        </section>
    );
}

export default HeroSection;