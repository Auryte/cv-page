import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import IconSent from '@/public/iconsSent.png';
import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';

import { styles } from './PopupAlert.styles';
import { PopupAlertComponent } from './PopupAlert.types';
import { Image } from '../Image/Image';

export const PopupAlert: PopupAlertComponent = (props) => {
  const { isOpen, dictionary, onClose } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
    >
      <Grid
        container
        item
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={styles.container}
      >
        <Image
          src={IconSent}
          alt='Message sent'
        />
        <DialogTitle>{dictionary.popupTitle}</DialogTitle>
        <DialogContent sx={styles.dialogContent}>{dictionary.popupMsg}</DialogContent>
        <DialogActions>
          <Button
            color='secondary'
            variant='contained'
            sx={styles.button}
            onClick={onClose}
          >
            {dictionary.popupConfirm}
          </Button>
        </DialogActions>
      </Grid>
    </Dialog>
  );
};
