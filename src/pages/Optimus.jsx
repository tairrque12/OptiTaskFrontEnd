import {Link} from "react-router-dom";

const Optimus = () => {
    const taskVideos = [
        {
            id: 1,
            video: "/videos/TeslaHeader.mp4",
            title: "Built For Real Work",
            description: "Designed For Work Humans Shouldn't Repeat."
        },

        {
            id: 2,
            video: "/videos/2Tesla.mp4",
            title: "Retail Flow Optimized",
            description: "Designed To Support Inventory At Scale."
        },

        {
            id: 3,
            video:"/videos/ACCAR.mp4",
            title: "Strength On-Demand",
            description: "Built For Demanding Task That Require Strength."
        },
        {
            id: 4,
            video: "/videos/LVOP.mp4",
            title: "Ready To Put Optimus To Work?",
            description: <Link to="/request-cta" className="cta-button">REQUEST OPTIMUS →</Link>
        }
    ];

    return (
        <div className="figure03-page">
            {taskVideos.map(task => (
                <section key={task.id} className="task-section">
                    <video
                        className="task-video"
                        src={task.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="task-overlay">
                        <div className="task-text">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                    </div>
                </section>
            ))}


        </div>
    );
};

export default Optimus;