'use client';

import { CustomExpandIcon } from '@/components/Accordion/components/CustomExpandIcon/CustomExpandIcon';
import { Box } from '@/uiKit/Box/Box';
import { Typography } from '@/uiKit/Typography/Typography';
import { AccordionDetails, AccordionSummary, List, ListItem } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import { styles } from './Accordion.styles';
import { useState } from 'react';
import { WorkExperienceProps } from '@/app/[lang]/resume/config/experienceOptions.config';
import { AccordionComponent } from './Accordion.types';

export const Accordion: AccordionComponent = (props) => {
  const { accordionContent, dictionary, ...restAccordionProps } = props;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {accordionContent.map((content: WorkExperienceProps, index: number) => (
        <MuiAccordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={styles.accordion}
          {...restAccordionProps}
        >
          <AccordionSummary
            expandIcon={<CustomExpandIcon dictionary={dictionary} />}
            sx={styles.accordionSummary}
          >
            <Box sx={styles.summaryTextWrapper}>
              <Typography sx={styles.date}>{content.date}</Typography>
              <Typography sx={styles.title}>{content.id}</Typography>
              <Typography sx={styles.role}>{content.role}</Typography>
              <Typography>{content.intro}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={styles.accordionDetails}>
            <List sx={styles.list}>
              {content.chapters.map((chapter: string, index: number) => (
                <ListItem
                  key={index}
                  sx={{ display: 'list-item' }}
                >
                  {chapter}
                </ListItem>
              ))}
            </List>
            <Typography sx={styles.toolsText}>
              <strong>{dictionary.tools}</strong> {content.tools}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};
