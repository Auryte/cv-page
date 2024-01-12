'use client';

import MuiModal from '@mui/material/Modal';

import { modalStyles } from './Modal.styles';
import { ModalComponent } from './Modal.types';

export const Modal: ModalComponent = (props) => {
  const { children, isOpen } = props;

  return (
    <MuiModal
      open={isOpen}
      sx={modalStyles}
    >
      {children}
    </MuiModal>
  );
};
