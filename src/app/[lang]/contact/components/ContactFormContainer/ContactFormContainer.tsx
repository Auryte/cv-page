'use client';

import Link from 'next/link';

import { Article } from '@/components/Article/Article';
import { linkGit, linkLinkedin } from '@/constants';
import { Grid } from '@/uiKit/Grid/Grid';
import { Icon } from '@/uiKit/Icon/Icon';
import { Typography } from '@/uiKit/Typography/Typography';

import { styles } from './ContactFormContainer.styles';
import { useContactPageStore } from '../../hooks/useContactPageStore';
import { ContactFormContainerComponent } from '../../types/ContactPage.types';
import { ContactForm } from '../ContactForm/ContactForm';

export const ContactFormContainer: ContactFormContainerComponent = (props) => {
  const { dictionary, lang } = props;
  const { handleClose, state, setState, submit } = useContactPageStore(dictionary, lang);
  const {
    email,
    emailError,
    error,
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
      sx={styles.wrapper}
    >
      <Article
        dictionary={dictionary}
        sxTitle={{ fontSize: '32px' }}
        sxWrapper={styles.article}
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
              sx={styles.icon}
            />
          </Link>
          <Link
            href={linkLinkedin}
            target='_blank'
          >
            <Icon
              name='linkedin'
              fontSize='large'
              sx={styles.iconLinkedin}
            />
          </Link>
        </Grid>
      </Grid>
      <ContactForm
        dictionary={dictionary}
        email={email}
        emailError={emailError}
        error={error}
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
