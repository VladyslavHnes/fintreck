import React from 'react';
import { useFormik } from 'formik';
import './TransactionForm.css';

const validate = values => {
  const errors = {};

//   if (!values.financialInstrument) {
//     errors.financialInstrument = 'Required';
//   } else if (values.financialInstrument.length > 15) {
//     errors.financialInstrument = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

  return errors;
};

export default function TransactionForm(props) { 

    const formik = useFormik({
        initialValues: {
          finInstrument: '',
          value: '',
          date: '',
        },
        validate,
        onSubmit: values => {
            props.closeModal()
            let date = values.date
            const originalDate = new Date(date); 
            const formattedDate = originalDate.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            }).replace(/\//g, '-');
            values.date = formattedDate;
            props.addTransaction(values)
            // alert(JSON.stringify(values, null, 2));
        },
     });

    return (
        <form className="tr-form" onSubmit={formik.handleSubmit} >
            <div className="tr-form-input">
                <label htmlFor="finInstrument">Financial Instrument</label>
                <input
                    id="finInstrument"
                    name="finInstrument"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.finInstrument}
                />
                {/* {formik.errors.financialInstrument ? <div>{formik.errors.financialInstrument}</div> : null} */}
            </div>

            <div className="tr-form-input">
                <label htmlFor="value">Value</label>
                <input
                    id="value"
                    name="value"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.value}
                />
                {/* {formik.errors.value ? <div>{formik.errors.value}</div> : null} */}
            </div>

            <div className="tr-form-input">
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                />
                {/* {formik.errors.date ? <div>{formik.errors.date}</div> : null} */}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}