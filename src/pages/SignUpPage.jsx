import { useState } from 'react';
import * as Yup from 'yup';

function SignUpPage({ onSignUp }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})


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
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password Must Be At least 8 Characters')
            .required('Password Is Required')
    });

    async function handleSubmit() {
        // Clears Any Previous Errors
        setErrors({});

        try {
            // Validate All Fields Are Correct
            await validationSchema.validate(
                { firstName, lastName, email, password },
                { abortEarly: false } // Collect All The Errors Not Just The First One.
            );

            // If All Validation Is Good, This Will Advance You To Next Page
            onSignUp({ firstName, lastName, email, password});


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

                {/* FIRST NAME INPUT */}
                <input
                    type="text"
                    placeholder="First Name"
                    className={`signup-input ${errors.firstName ? 'error' : ''}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {/* Error Message */}
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}


                {/* LAST NAME INPUT */}
                <input
                    type="text"
                    placeholder="Last Name"
                    className={`signup-input ${errors.lastName ? 'error' : ''}`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {/* Error Message */}
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}


                {/* EMAIL INPUT */}
                <input
                    type="email"
                    placeholder="Email"
                    className={`signup-input ${errors.email ? 'error' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Error Message */}
                {errors.email && <p className="error-message">{errors.email}</p>}


                {/* Password Input */}
                <input
                type="password"
                placeholder="Password"
                className={`signup-input ${errors.password ? 'error' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {/* Error Message */}
                {errors.password && <p className="error-message">{errors.password}</p>}


                <button className="signup-button" onClick={handleSubmit}>Create Account</button>
            </div>
        </div>
    );
}

export default SignUpPage;