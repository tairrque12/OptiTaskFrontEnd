import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {useForm} from "react-hook-form";

    function BookADemoPage({ onSignUp }) {

     //Validation schema - The RuleBook
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

    return (
        <div>
            <h1 className="demo-card-header">
                Book A OptiTask Demo</h1>

        {/* FIRST NAME INPUT */}
         <input
        type="text"
        placeholder="First Name"
        className={`signup-input ${errors.firstName ? 'error' : ''}`}
         {...register('firstName')}
         />
        {/* FIRST NAME ERROR MESSAGE */}
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}


        </div>
 
    );


}

export default ScheduleDemoPage;