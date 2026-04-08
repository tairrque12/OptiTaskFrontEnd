import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';

function ScheduleDemoPage({onScheduledDemo}) {

    //Validation Schema - The RuleBook
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(3, 'Name Must Be At Least 3 Characters')
            .required('First Name Is Required'),
        lastName: Yup.string()
            .optional(),
        email: Yup.string()
            .email('Invalid Email Address')
            .optional(),
        phoneNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
            .required('Phone Number Is Required'),
        location: Yup.string()
            .required('Please Select A Location'),
        date: Yup.date()
            .min(new Date(), 'Please Select A Future Date')
            .required('Please Select A Date'),
        time: Yup.string()
            .required('Please Select A Time')
    })

    // This Validates Form
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });

    //Submit Handler - Called Only If Data Is Good & Validation Passes
    function onSubmit(data) {
        onScheduledDemo(data);
    }

    return (
            <div className="demo-page">
            <h1 className="demo-title">Schedule A Demo</h1>
            <p className="demo-subtext">Experience Both Tesla Optimus & Figure 03 Humanoid Robots </p>

            <form onSubmit={handleSubmit(onSubmit)}>

            {/* FIRST NAME INPUT */}
            <input
            type="text"
            placeholder="First Name"
            className={`demo-signup ${errors.firstName ? 'error' : ''}`}
            {...register('firstName')}
            />
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

            {/*LAST NAME INPUT */}
            <input
            type="text"
            placeholder="Last Name"
            className={`demo-signup ${errors.lastName ? 'error' : ''}`}
            {...register('lastName')}
            />
            {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

            {/* EMAIL INPUT */}
            <input
            type="email"
            placeholder="Email Address"
            className={`demo-signup ${errors.email ? 'error' : ''}`}
            {...register('email')}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            {/* Phone Number Input */}
            <input
            type="tel"
            placeholder="Enter Phone Number"
            className={`demo-signup ${errors.phoneNumber ? 'error' : ''}`}
            {...register('phoneNumber')}
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}

            {/* Location */}
            <select
            className={`demo-signup${errors.location? 'error' : ''}`}
            {...register('location')}
            >
            <option value="">Select OptiTask Location</option>
            <option value="value1">Label 1</option>
            <option value="value2">Label 2</option>
            </select>
            {errors.location && <p className="error-message">{errors.location.message}</p>}

            {/* Date */}
            <input
            type="date"
            className={`demo-signup${errors.date ? 'error' : ''}`}
            {...register('date')}
            />
            {errors.date && <p className="error-message">{errors.date.message}</p>}

            {/* Time */}
            <select
            className={`demo-signup ${errors.time ? 'error' : ''}`}
            {...register('time')}
            >
            <option value="">Select A Demo Time...</option>
            <option value="09:00">9:00 AM</option>
            <option value="09:30">9:30 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="14:30">2:30 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="15:30">3:30 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="16:30">4:30 PM</option>
            <option value="17:00">5:00 PM</option>
            </select>
            {errors.time && <p className="error-message">{errors.time.message}</p>}

                <button type="submit" className="demo-signup">
                    Schedule OptiTask Demo
                </button>


            </form>
        </div>

    )

}
export default ScheduleDemoPage;