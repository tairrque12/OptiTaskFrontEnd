import {Link} from "react-router-dom";
function CallToAction() {
    return (
        <section id="request" className="cta-section">
            <video
                className="cta-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/NEWCTA.mp4" type="video/mp4" />
            </video>

            <div className="cta-overlay"></div>

            <div className="cta-content">
                <h2 className="cta-heading">OptiTask</h2>
                <p className="cta-subtext">
                    Available Now.
                </p>

                <Link to="/request-cta" style={{textDecoration: "none"}}
                      className="cta-button">Request A Robot &nbsp; →</Link>
            </div>
        </section>
    );
}

export default CallToAction;