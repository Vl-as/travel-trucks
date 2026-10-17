'use client';

import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import Input from './Input/Input';
import Button from '../Button/Button';
import { useMutation } from '@tanstack/react-query';
import { bookCamper } from '@/services/booking';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import Toast from '../Toast/Toast';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Please enter your full name.')
    .min(4, 'Full name must be at least 4 characters long.')
    .max(60, 'Full name cannot exceed 60 characters.')
    .matches(
      /^[a-zA-Z\u0400-\u04FF]+(?:\s+[a-zA-Z\u0400-\u04FF]+)+$/,
      'Please enter your full name (first and last name).'
    ),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter your email.'),
});

interface BookingFormValues {
  name: string;
  email: string;
}

const initialValues: BookingFormValues = {
  name: '',
  email: '',
};

interface BookingFormProps {
  camperId: string;
  className?: string;
}

function BookingForm({ camperId, className }: BookingFormProps) {
  const { mutate, isPending } = useMutation({
    mutationFn: bookCamper,
    onSuccess: data => {
      toast(<Toast type="success" message={data.message} />);
    },
    onError: () => {
      toast(
        <Toast type="error" message="Something went wrong. Try again later." />
      );
    },
  });

  const handleSubmit = (
    contactInfo: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    mutate(
      { camperId, contactInfo },
      {
        onSuccess: () => {
          resetForm();
        },
      }
    );
  };

  return (
    <div className={clsx(css.formCard, className)}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
            <Input type="text" name="name" placeholder="Name*" />
            <Input type="email" name="email" placeholder="Email*" />
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                Sending
                <span className={css.loader} aria-label="Sending"></span>
              </>
            ) : (
              'Send'
            )}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default BookingForm;
