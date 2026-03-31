import Card from 'react-bootstrap/Card';

function HowItWorks() {
    return (

        <section id="how-it-works" className="how-section">
            {/* Title */}
            <p className="how-label">How OptiTask Works</p>


            {/* Card Headings */}
            <h2 className="how-heading">Request &nbsp; → &nbsp; Match &nbsp; → &nbsp; Deploy</h2>
            <div className="how-cards">

                {/* Request Card */}
                <Card className="how-card">
                    <Card.Img variant="top" src="/images/request.png" />
                    <Card.Body>
                        <p className="how-step-number">1</p>
                        <Card.Title>Request</Card.Title>
                        <Card.Text>
                            Choose A Task. Set The Destination.
                        </Card.Text>
                    </Card.Body>
                </Card>


                {/* Arrows Between Cards */}
                <div className="how-arrow-line">
                    <div className="how-arrow-connector"></div>
                </div>


                {/* Match Card */}
                <Card className="how-card">
                    <Card.Img variant="top" src="/images/Match.png" />
                    <Card.Body>
                        <p className="how-step-number">2</p>
                        <Card.Title>Match</Card.Title>
                        <Card.Text>
                            OptiTask Assigns The Robot Instantly.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Arrow Between Cards */}
                <div className="how-arrow-line">
                    <div className="how-arrow-connector"></div>
                </div>

                {/* Deploy Card */}
                <Card className="how-card">
                    <Card.Img variant="top" src="/images/deploy.png" />
                    <Card.Body>
                        <p className="how-step-number">3</p>
                        <Card.Title>Deploy</Card.Title>
                        <Card.Text>
                            Your Robot Arrives Ready To Work.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </section>
    );
}

export default HowItWorks;