import { Link } from 'react-router-dom';

function Optimus() {
    const specs = [
        { label: 'Height', value: '5\'8"' },
        { label: 'Weight', value: '135 LBS' },
        { label: 'Payload', value: '45 LBS' },
        { label: 'Runtime', value: '18 HRS' },
        { label: 'Speed', value: '5 MPH' }
    ];

    return (
        <section className="optimus-services">
            <video
                className="optimus-hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/Optimus.mp4" type="video/mp4" />
            </video>

            <div className="optimus-specs">
                <h1 className="optimus-title">TESLA OPTIMUS</h1>
                

                <div className="spec-list">
                    {specs.map((spec) => (
                        <div key={spec.label} className="spec-item">
                            <span className="spec-label">{spec.label}</span>
                            <span className="spec-value">{spec.value}</span>
                        </div>
                    ))}
                </div>

                <Link to="/request-cta" className="optimus-reserve-btn">RESERVE OPTIMUS →</Link>
            </div>
        </section>
    );
}

export default Optimus;