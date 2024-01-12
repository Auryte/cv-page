export const styles = {
  accordion: {
    'border': 'none',
    'boxShadow': 'none',
    '& .MuiAccordionSummary-root': {
      backgroundColor: 'background.default',
    },
    '& .MuiCollapse-root': {
      backgroundColor: 'background.default',
    },
  },
  accordionSummary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: '24px',
    fontWweight: 600,
  },
  title: {
    paddingY: '16px',
    fontSize: '36px',
    fontWweight: 300,
  },
  role: {
    paddingBottom: '56px',
    fontSize: '24px',
    fontWweight: 600,
  },
  summaryTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'text.main',
  },
  accordionDetails: {
    '& .MuiCollapse-root': {
      backgroundColor: 'background.default',
    },
    'color': 'text.main',
  },
  list: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
  },
  toolsText: {
    textTransform: 'uppercase',
    paddingTop: '24px',
  },
};
