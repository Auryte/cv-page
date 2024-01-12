'use client';

import emailjs from '@emailjs/browser';
import { useEffect, useReducer } from 'react';

import { filteredError, getTemplateId } from '@/app/[lang]/contact/utils/contactHelpers';
import { validateContactData } from '@/app/[lang]/contact/utils/validateContactData';
import { fields } from '@/constants';

import { ContactFormReducerTypes, ContactFormState, UseContactPageStoreType } from '../types/ContactPage.types';

const initialState: ContactFormState = {
  email: '',
  emailError: '',
  error: '',
  isSubmitDisabled: false,
  message: '',
  messageError: '',
  name: '',
  nameError: '',
  subject: '',
  subjectError: '',
  success: false,
};

export const useContactPageStore: UseContactPageStoreType = (dictionary, lang) => {
  const [state, setState] = useReducer<ContactFormReducerTypes>(
    (prevState, nextState) => ({
      ...prevState,
      ...nextState,
    }),
    initialState,
  );

  const submit = () => {
    const { data, errors } = validateContactData(
      {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      },
      dictionary,
    );

    if (errors) {
      setState({
        emailError: filteredError(fields.email, errors)?.message,
        messageError: filteredError(fields.message, errors)?.message,
        nameError: filteredError(fields.name, errors)?.message,
        subjectError: filteredError(fields.subject, errors)?.message,
      });

      return;
    }

    if (!errors && data) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          getTemplateId(lang),
          data,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        .then(
          (response) => {
            if (response.status === 200) {
              setState({
                email: '',
                isSubmitDisabled: false,
                message: '',
                name: '',
                subject: '',
                success: true,
              });
            }
          },
          (error: { text: string }) => {
            setState({
              error: error.text,
              isSubmitDisabled: false,
            });
          },
        );
    }
  };

  const handleClose = () => {
    setState({
      success: false,
    });
  };

  useEffect(() => {
    setState({
      nameError: '',
      isSubmitDisabled: false,
    });
  }, [setState, state.name]);

  useEffect(() => {
    setState({
      emailError: '',
      isSubmitDisabled: false,
    });
  }, [setState, state.email]);

  useEffect(() => {
    setState({
      subjectError: '',
      isSubmitDisabled: false,
    });
  }, [setState, state.subject]);

  useEffect(() => {
    setState({
      messageError: '',
      isSubmitDisabled: false,
    });
  }, [setState, state.message]);

  return {
    state,
    setState,
    submit,
    handleClose,
  };
};
