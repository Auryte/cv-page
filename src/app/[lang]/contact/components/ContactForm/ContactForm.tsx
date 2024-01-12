'use client';

import { ChangeEvent, FormEvent, useCallback } from 'react';

import { PopupAlert } from '@/components/PopupAlert/PopupAlert';
import { fields } from '@/constants';
import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';
import { TextField } from '@/uiKit/TextField/TextField';
import { Typography } from '@/uiKit/Typography/Typography';

import { styles } from './ContactForm.styles';
import { ContactFormComponent } from '../../types/ContactPage.types';

export const ContactForm: ContactFormComponent = (props) => {
  const {
    dictionary,
    email,
    emailError,
    error,
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

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) =>
      onChange({ [inputName]: event.target.value }),
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
          error={!!nameError}
          helperText={nameError || ''}
          label={dictionary.nameInputLabel}
          onChange={(event) => handleChange(event, fields.name)}
          sx={styles.inputLabel}
          value={name}
          variant='outlined'
        />
        <TextField
          color='info'
          error={!!emailError}
          helperText={emailError || ''}
          label={dictionary.emailInputLabel}
          onChange={(event) => handleChange(event, fields.email)}
          sx={styles.inputLabel}
          value={email}
          variant='outlined'
        />
        <TextField
          color='info'
          error={!!subjectError}
          helperText={subjectError || ''}
          label={dictionary.subjectInputLabel}
          onChange={(event) => handleChange(event, fields.subject)}
          sx={styles.inputLabel}
          value={subject}
          variant='outlined'
        />
        <TextField
          color='info'
          multiline
          minRows={5}
          maxRows={7}
          error={!!messageError}
          helperText={messageError || ''}
          label={dictionary.messagetInputLabel}
          onChange={(event) => handleChange(event, fields.message)}
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
