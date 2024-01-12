import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { FC } from 'react';

import { WorkExperienceProps } from '@/app/[lang]/resume/config/experienceOptions.config';
import { Dictionary } from '@/lib/i18n';

export type AccordionProps = Omit<MuiAccordionProps, 'children'> & {
  accordionContent: WorkExperienceProps[];
  dictionary: Dictionary['resume'];
};

export type AccordionComponent = FC<AccordionProps>;
