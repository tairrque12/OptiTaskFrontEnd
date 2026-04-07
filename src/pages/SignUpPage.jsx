import { useState } from 'react';
import * as Yup from 'yup';

function SignUpPage({ onSignUp }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('')


    // Defines Validation Schema - The RuleBook
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters')
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
    });

    async function handleSubmit() {
        // Clears Any Previous Errors
        setErrors({});

        try {
            // Validate all fields
            await validationSchema.validate(
                { firstName, lastName, email },
                { abortEarly: false } // Collect All The Errors Not Just The First One.
            );

            // If All Validation Is Good, This Will Advance You To Next Page
            onSignUp({ firstName, lastName, email });


       // This Catches All Errors.
        } catch (validationErrors) {
            const formattedErrors = {};

            //For Each Loop That Loops Through All Errors.
            validationErrors.inner.forEach((error) => {
                formattedErrors[error.path] = error.message;
            });
            setErrors(formattedErrors);
            //This Sets The Errors For The JSX.
        }
    }


    return (
        <div className="signup-page">
            <video autoPlay muted loop className="signup-video">
                <source src="/videos/SignUpVid.mp4" type="video/mp4" />
            </video>

            <div className="signup-overlay">
                <h1 className="signup-title">Create An OptiTask Account</h1>

                <input
                    type="text"
                    placeholder="First Name"
                    className="signup-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {/* Error Message */}
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}

                <input
                    type="text"
                    placeholder="Last Name"
                    className="signup-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {/* Error Message */}
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}


                <input
                    type="email"
                    placeholder="Email"
                    className="signup-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Error Message */}
                {errors.email && <p className="error-message">{errors.email}</p>}


                <button className="signup-button" onClick={handleSubmit}>Create Account</button>
            </div>
        </div>
    );
}

export default SignUpPage;