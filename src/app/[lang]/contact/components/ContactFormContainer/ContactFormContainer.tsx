'use client';

import { Article } from '@/components/Article/Article';
import { Grid } from '@/uiKit/Grid/Grid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Typography } from '@/uiKit/Typography/Typography';
import Link from 'next/link';
import { Icon } from '@/uiKit/Icon/Icon';
import { useContactPageStore } from '../../hooks/useContactPageStore';
import { linkGit, linkLinkedin } from '@/constants';
import { ContactFormContainerComponent } from '../../types/ContactPage.types';

export const ContactFormContainer: ContactFormContainerComponent = (props) => {
  const { dictionary, lang } = props;
  const { handleClose, state, setState, submit } = useContactPageStore(dictionary, lang);
  const {
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
    subject,
    subjectError,
    success,
  } = state;
  return (
    <Grid
      container
      item
      direction='column'
      sx={{ marginLeft:{ md: '250px', xs: 'auto'}, marginRight: {xs: 'auto'}, width: {md: '738px', xs: '90%'} }}
    >
      <Article
        dictionary={dictionary}
        sxTitle={{ fontSize: '32px' }}
        sxWrapper={{ width: '100%', marginLeft: 0, marginBottom: '24px' }}
      />
      <Grid
        container
        item
        direction='column'
        justifyContent='space-around'
        sx={{ minHeight: '150px' }}
        xs={12}
      >
        <Typography>aurejoslances@gmail.com</Typography>
        <Typography>+370 699 13990</Typography>
        <Grid
          container
          item
          direction='row'
          alignItems='center'
          xs={12}
        >
          <Link
            href={linkGit}
            target='_blank'
          >
            <Icon
              name='github'
              fontSize='large'
              sx={{ color: 'text.main', margin: '16px 16px 16px 0' }}
            />
          </Link>
          <Link
            href={linkLinkedin}
            target='_blank'
          >
            <Icon
              name='linkedin'
              fontSize='large'
              sx={{ color: 'text.main', margin: '16px 16px 16px 0' }}
            />
          </Link>
        </Grid>
      </Grid>
      <ContactForm
        dictionary={dictionary}
        email={email}
        emailError={emailError}
        error={error}
        isEmailError={isEmailError}
        isMessageError={isMessageError}
        isNameError={isNameError}
        isSubjectError={isSubjectError}
        isSubmitDisabled={isSubmitDisabled}
        message={message}
        messageError={messageError}
        name={name}
        nameError={nameError}
        onChange={setState}
        onClose={handleClose}
        subject={subject}
        subjectError={subjectError}
        submit={submit}
        success={success}
      />
    </Grid>
  );
};
