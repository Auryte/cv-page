import { Button } from '@/uiKit/Button/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styles } from './PopupAlert.styles';
import { Image } from '../Image/Image';
import IconSent from '@/public/iconsSent.png';
import { Grid } from '@/uiKit/Grid/Grid';
import { PopupAlertComponent } from './PopupAlert.types';


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
