const Figure03 = () => {
    const taskVideos = [
        {
            id: 1,
            video: "/videos/Figure03Laundry.mp4",
            title: "Household Laundry",
            description: "Figure 03 handles washing, drying, and folding with precision adaptability in unstructured home environments."
        },

    ];

    return (
        <div className="figure03-page">
            <h1>Figure 03 - Home Assistant Robot</h1>

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
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                    </div>
                </section>
            ))}

            <button className="request-button">Request Figure 03</button>
        </div>
    );
};

export default Figure03;