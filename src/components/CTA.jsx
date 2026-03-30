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
                <source src="/videos/CTA-Video.mp4" type="video/mp4" />
            </video>

            <div className="cta-overlay"></div>

            <div className="cta-content">
                <h2 className="cta-heading">OptiTask</h2>
                <p className="cta-subtext">
                    The Future Is Autonomous.
                </p>
                <button className="cta-button">Request A Robot &nbsp; →</button>
            </div>
        </section>
    );
}

export default CallToAction;