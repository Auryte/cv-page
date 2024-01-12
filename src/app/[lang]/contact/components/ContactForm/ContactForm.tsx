'use client';

import { ChangeEvent, FormEvent, useCallback } from 'react';

import { PopupAlert } from '@/components/PopupAlert/PopupAlert';

import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';
import { TextField } from '@/uiKit/TextField/TextField';
import { Typography } from '@/uiKit/Typography/Typography';

import { ContactFormComponent } from '../../types/ContactPage.types';
import { styles } from './ContactForm.styles';

export const ContactForm: ContactFormComponent = (props) => {
  const {
    dictionary,
    email,
    emailError,
    error,
    isEmailError,
    isMessageError,
    isNameError,
    isSubjectError,
    isSubmitDisabled,
    message,
    messageError,
    name,
    nameError,
    onChange,
    onClose,
    subject,
    subjectError,
    submit,
    success,
  } = props;

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onChange({ name: event.target.value }),
    [onChange],
  );
  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onChange({ email: event.target.value }),
    [onChange],
  );
  const handleSubjectChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onChange({ subject: event.target.value }),
    [onChange],
  );
  const handleMessageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onChange({ message: event.target.value }),
    [onChange],
  );
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      submit();
    },
    [submit],
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        paddingBottom: '48px',
      }}
    >
      <Grid
        alignSelf='top'
        container
        item
        justifyContent='space-between'
        sx={styles.upperInputsContainer}
        xs={12}
      >
        <TextField
          color='info'
          error={isNameError}
          helperText={isNameError ? nameError : ''}
          label={dictionary.nameInputLabel}
          onChange={handleNameChange}
          sx={styles.inputLabel}
          value={name}
          variant='outlined'
        />
        <TextField
          color='info'
          error={isEmailError}
          helperText={isEmailError ? emailError : ''}
          label={dictionary.emailInputLabel}
          onChange={handleEmailChange}
          sx={styles.inputLabel}
          value={email}
          variant='outlined'
        />
        <TextField
          color='info'
          error={isSubjectError}
          helperText={isSubjectError ? subjectError : ''}
          label={dictionary.subjectInputLabel}
          onChange={handleSubjectChange}
          sx={styles.inputLabel}
          value={subject}
          variant='outlined'
        />
        <TextField
          color='info'
          multiline
          minRows={5}
          maxRows={7}
          error={isMessageError}
          helperText={isMessageError ? messageError : ''}
          label={dictionary.messagetInputLabel}
          onChange={handleMessageChange}
          sx={styles.inputLabel}
          value={message}
          variant='outlined'
        />
        {error ? <Typography sx={{ color: 'error.main' }}>{`${dictionary.error}"${error}"`}</Typography> : null}
        {success ? (
          <PopupAlert
            dictionary={dictionary}
            onClose={onClose}
            isOpen={success}
          />
        ) : null}
        <Button
          color='secondary'
          disabled={isSubmitDisabled}
          fullWidth
          size='large'
          sx={styles.submitButton}
          type='submit'
          variant='contained'
        >
          {dictionary.submit}
        </Button>
      </Grid>
    </form>
  );
};
