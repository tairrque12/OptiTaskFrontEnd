import {Link} from 'react-router-dom';
function HeroSection() {
    return (
        <section id="figure03" className="hero-section">
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/Figure03.mp4" type="video/mp4" />

            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <p className="hero-kicker"></p>
                <h1>Figure 03</h1>

                <p className="hero-subtext">
                    The Future Of Home-Help Is Here.
                </p>

                <Link to="/figure03" style={{textDecoration: "none"}}
                      className="hero-button">Explore Figure 03 &nbsp; →</Link>
            </div>
        </section>
    );
}

export default HeroSection;