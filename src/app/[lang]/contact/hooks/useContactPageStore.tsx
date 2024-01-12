'use client';

import { ContactFormState, ContactFormReducerTypes, UseContactPageStoreType } from '../types/ContactPage.types';
import { useEffect, useReducer } from 'react';
import { validateContactData } from '@/services/validateContactData';
import emailjs from '@emailjs/browser';
import { filteredError, getTemplateId } from '@/utils/contactStore';

const initialState: ContactFormState = {
  email: '',
  emailError: '',
  error: '',
  isEmailError: false,
  isMessageError: false,
  isNameError: false,
  isSubjectError: false,
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
    setState({
      emailError: '',
      error: '',
      isEmailError: false,
      isMessageError: false,
      isNameError: false,
      isSubjectError: false,
      isSubmitDisabled: true,
      messageError: '',
      nameError: '',
      subjectError: '',
      success: false,
    });
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
        emailError: filteredError('email', errors)?.message,
        isEmailError: filteredError('email', errors)?.message ? true : false,
        isMessageError: filteredError('message', errors)?.message ? true : false,
        isNameError: filteredError('name', errors)?.message ? true : false,
        isSubjectError: filteredError('subject', errors)?.message ? true : false,
        messageError: filteredError('message', errors)?.message,
        nameError: filteredError('name', errors)?.message,
        subjectError: filteredError('subject', errors)?.message,
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
          function (response) {
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
          function (error) {
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
      isNameError: false,
      isSubmitDisabled: false,
    });
  }, [setState, state.name]);

  useEffect(() => {
    setState({
      isEmailError: false,
      isSubmitDisabled: false,
    });
  }, [setState, state.email]);

  useEffect(() => {
    setState({
      isSubjectError: false,
      isSubmitDisabled: false,
    });
  }, [setState, state.email]);

  useEffect(() => {
    setState({
      isMessageError: false,
      isSubmitDisabled: false,
    });
  }, [setState, state.email]);

  return {
    state,
    setState,
    submit,
    handleClose,
  };
};
