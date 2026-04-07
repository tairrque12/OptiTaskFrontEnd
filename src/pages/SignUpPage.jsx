import { useState } from 'react';

function SignUpPage({ onSignUp }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit() {
        if (!firstName || !lastName || !email) {
            alert('Please fill out all fields');
            return;
        }
        onSignUp();
    }

    return (
        <div className="signup-page">
            <video autoPlay muted loop className="signup-video">
                <source src="/videos/SignUpVid.mp4" type="video/mp4" />
            </video>

            <div className="signup-overlay">
                <h1 className="signup-title">Reserve Your Access</h1>
                <h6 className="signup-subsection">Premium Humanoid Robot Rentals. Launching Soon</h6>

                <input
                    type="text"
                    placeholder="First Name"
                    className="signup-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    className="signup-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="signup-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="signup-button" onClick={handleSubmit}>Join WaitList</button>
            </div>
        </div>
    );
}

export default SignUpPage;