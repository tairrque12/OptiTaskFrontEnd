import {Link} from "react-router-dom";

const Figure03 = () => {
    const taskVideos = [
        {
            id: 1,
            video: "/videos/Figure03Laundry.mp4",
            title: "Laundry Handled",
            description: "Laundry Done Before You Even Think About It."
        },

        {
            id: 2,
            video: "/videos/Dishes.mp4",
            title: "Intelligence For The Home",
            description: "Built To Move Through Real Homes With Intelligence."
        },

        {
            id: 3,
            video:"/videos/Groceries.mp4",
            title: "Home Help Reimagined",
            description: "Figure Handles The Routine That Keeps Your Home Moving."
        },
        {
            id: 4,
            video: "/videos/RequestFigure03.mp4",
            title: "Ready To Bring Figure 03 Home?",
            description: <Link to="/request-cta" className="cta-button">REQUEST FIGURE03 →</Link>
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

export default Figure03;