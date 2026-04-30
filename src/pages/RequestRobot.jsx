import { useState } from "react";

function RequestRobot() {
    // STATE: remembers which task the user selected
    const [selectedTask, setSelectedTask] = useState(null);

    // STATE: remembers when the user confirms the robot
    const [confirmedRobot, setConfirmedRobot] = useState(null);

    // STATE: remembers selected duration in hours
    const [taskDuration, setTaskDuration] = useState(null);

    // STATE: remembers what the user types for location
    const [userLocation, setUserLocation] = useState("");

    // STATE: stores the final reservation after clicking confirm
    const [reservation, setReservation] = useState(null);

    // DATA: tasks from your DB
    const tasks = [
        { id: 1, name: "Heavy Lifting & Loading", basePrice: 95.0, robotId: 1 },
        { id: 2, name: "Warehouse Inventory", basePrice: 85.0, robotId: 1 },
        { id: 3, name: "Construction Assist", basePrice: 110.0, robotId: 1 },
        { id: 4, name: "Outdoor Landscaping", basePrice: 80.0, robotId: 1 },
        { id: 5, name: "Equipment Transport", basePrice: 100.0, robotId: 1 },
        { id: 6, name: "Loading Dock Support", basePrice: 90.0, robotId: 1 },
        { id: 7, name: "Facility Maintenance", basePrice: 75.0, robotId: 1 },
        { id: 8, name: "Laundry - Wash & Fold", basePrice: 55.0, robotId: 2 },
        { id: 9, name: "Dishes & Kitchen Cleanup", basePrice: 50.0, robotId: 2 },
        { id: 10, name: "Vacuuming & Sweeping", basePrice: 50.0, robotId: 2 },
        { id: 11, name: "Grocery Unpack & Organize", basePrice: 45.0, robotId: 2 },
        { id: 12, name: "Surface & Countertop Cleaning", basePrice: 50.0, robotId: 2 },
        { id: 13, name: "Trash & Recycling", basePrice: 40.0, robotId: 2 },
        { id: 14, name: "Bed Making", basePrice: 45.0, robotId: 2 },
        { id: 15, name: "Pet Care Assist", basePrice: 55.0, robotId: 2 },
        { id: 16, name: "Dog Walking", basePrice: 66.0, robotId: 2 },
    ];

    // DATA: robots from your DB
    const robots = [
        { id: 1, name: "Tesla Optimus", description: "Heavy-Duty Industrial & Commercial Work" },
        { id: 2, name: "Figure 03", description: "Precision Household & Domestic Tasks" },
    ];

    // DERIVED VALUE: finds the robot tied to the selected task
    const matchedRobot = selectedTask
        ? robots.find((robot) => robot.id === selectedTask.robotId)
        : null;

    // SENDS RESERVATION TO SPRING BOOT BACKEND
    async function handleConfirmReservation() {
        try {
            const response = await fetch('http://localhost:8080/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // HARDCODED FOR NOW - will use logged in customer ID later
                    customer: { id: 1 },
                    // SENDS TASK ID SO BACKEND CAN LOOK UP PRICE AND ROBOT
                    task: { id: selectedTask.id },
                    location: userLocation,
                    duration: taskDuration
                })
            });

            if (response.ok) {
                // BACKEND CALCULATES TOTAL PRICE - WE USE THAT VALUE
                const saved = await response.json();
                setReservation({
                    task: selectedTask.name,
                    robot: confirmedRobot.name,
                    duration: taskDuration,
                    location: userLocation,
                    totalPrice: saved.totalPrice,
                });
            } else {
                console.error('Reservation failed - check backend logs');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    }

    return (
        <div className="reserve-page">
            <div className="reserve-header">
                <h1 className="request-robot-heading"> Request Your Robot </h1>
            </div>

            <div className="step-container">
                <p className="step-label">01. Select Your Task</p>
                <div className="task-grid">
                    {tasks.map((task) => (
                        <button
                            key={task.id}
                            onClick={() => {
                                setSelectedTask(task);
                                setConfirmedRobot(null);
                                setTaskDuration(null);
                                setUserLocation("");
                                setReservation(null);
                            }}
                            className={`task-card ${selectedTask?.id === task.id ? 'task-card-selected' : ''}`}
                        >
                            <p className="task-card-name">{task.name}</p>
                            <p className="task-card-price">${task.basePrice}/hour</p>
                        </button>
                    ))}
                </div>
            </div>

            {selectedTask && (
                <div className="step-container">
                    <h2>Selected Task</h2>
                    <div className="selected-task-display">
                        <p className="task-card-name">{selectedTask.name}</p>
                        <p className="task-card-price">${selectedTask.basePrice}/hour</p>
                    </div>

                    {matchedRobot && (
                        <div className="robot-card">
                            <h3>Assigned Robot</h3>
                            <p>{matchedRobot.name}</p>
                            <p className="robot-description">{matchedRobot.description}</p>
                            <button className="confirm-robot-btn" onClick={() => setConfirmedRobot(matchedRobot)}>
                                Confirm Robot
                            </button>
                        </div>
                    )}
                </div>
            )}

            {confirmedRobot && (
                <div className="step-container">
                    <p className="step-label">02. Select Duration</p>
                    <div className="duration-grid">
                        {[2, 4, 8, 24].map((hours) => (
                            <button
                                key={hours}
                                onClick={() => setTaskDuration(hours)}
                                className={`duration-btn ${taskDuration === hours ? 'duration-btn-selected' : ''}`}
                            >
                                {hours} Hours
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {taskDuration && (
                <div className="step-container">
                    <p className="step-label">Reservation Preview</p>
                    <div className="summary-grid">
                        <div className="summary-item">
                            <p className="summary-item-label">Task</p>
                            <p className="summary-item-value">{selectedTask.name}</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Robot</p>
                            <p className="summary-item-value">{confirmedRobot.name}</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Duration</p>
                            <p className="summary-item-value">{taskDuration} hours</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Total</p>
                            <p className="summary-item-value total-value">${selectedTask.basePrice * taskDuration}</p>
                        </div>
                    </div>
                </div>
            )}

            {taskDuration && (
                <div className="step-container">
                    <p className="step-label">03. Enter Location</p>
                    <input
                        type="text"
                        placeholder="Enter your service address"
                        value={userLocation}
                        onChange={(e) => setUserLocation(e.target.value)}
                        className="location-input"
                    />
                </div>
            )}

            {userLocation && (
                <div className="step-container">
                    <p className="step-label">Final Reservation Summary</p>
                    <div className="summary-grid">
                        <div className="summary-item">
                            <p className="summary-item-label">Task</p>
                            <p className="summary-item-value">{selectedTask.name}</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Robot</p>
                            <p className="summary-item-value">{confirmedRobot.name}</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Duration</p>
                            <p className="summary-item-value">{taskDuration} hours</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Location</p>
                            <p className="summary-item-value">{userLocation}</p>
                        </div>
                    </div>

                    <div className="total-box">
                        <p className="total-label">Total Due</p>
                        <p className="total-value">${selectedTask.basePrice * taskDuration}</p>
                    </div>

                    {/* CALLS BACKEND WHEN CLICKED */}
                    <button
                        className="confirm-reservation-btn"
                        onClick={handleConfirmReservation}
                    >
                        Confirm Reservation
                    </button>
                </div>
            )}

            {reservation && (
                <div className="success-container">
                    <h2>Reservation Saved</h2>
                    <p className="success-subtitle">Your reservation has been saved to the database.</p>
                    <div className="summary-grid">
                        <div className="summary-item">
                            <p className="summary-item-label">Task</p>
                            <p className="summary-item-value">{reservation.task}</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Robot</p>
                            <p className="summary-item-value">{reservation.robot}</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Duration</p>
                            <p className="summary-item-value">{reservation.duration} hours</p>
                        </div>
                        <div className="summary-item">
                            <p className="summary-item-label">Location</p>
                            <p className="summary-item-value">{reservation.location}</p>
                        </div>
                    </div>
                    <p className="success-total">Total: ${reservation.totalPrice}</p>
                </div>
            )}
        </div>
    );
}

export default RequestRobot;