import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function SignUpPage({ onSignUp }) {

    // Validation schema - The RuleBook
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters'),
        email: Yup.string()
            .email('Invalid email address'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
    });

    // Sets Up Form With Validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    // Submit handler - Called Only If Validation Passes
    function onSubmit(data) {
        onSignUp(data);
    }

    return (
        <div className="signup-page">
            <video autoPlay muted loop className="signup-video">
                <source src="/videos/SignUpVid.mp4" type="video/mp4" />
            </video>

            <div className="signup-overlay">
                <h1 className="signup-title">Create An OptiTask Account</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* FIRST NAME INPUT */}
                    <input
                        type="text"
                        placeholder="First Name"
                        className={`signup-input ${errors.firstName ? 'error' : ''}`}
                        {...register('firstName')}
                    />
                    {/* FIRST NAME ERROR MESSAGE */}
                    {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}


                    {/* LAST NAME INPUT */}
                    <input
                        type="text"
                        placeholder="Last Name"
                        className={`signup-input ${errors.lastName ? 'error' : ''}`}
                        {...register('lastName')}
                    />
                    {/* LAST NAME ERROR MESSAGE */}
                    {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

                    {/* EMAIL INPUT */}
                    <input
                        type="email"
                        placeholder="Email"
                        className={`signup-input ${errors.email ? 'error' : ''}`}
                        {...register('email')}
                    />
                    {/* EMAIL ERROR MESSAGE */}
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                    {/* PASSWORD INPUT */}
                    <input
                        type="password"
                        placeholder="Password"
                        className={`signup-input ${errors.password ? 'error' : ''}`}
                        {...register('password')}
                    />
                    {/* PASSWORD INPUT ERROR MESSAGE */}
                    {errors.password && <p className="error-message">{errors.password.message}</p>}

                    <button type="submit" className="signup-button">
                        Create Account
                    </button>

                </form>
            </div>
        </div>
    );
}

export default SignUpPage;