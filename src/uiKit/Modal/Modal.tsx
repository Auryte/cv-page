'use client';

import MuiModal from '@mui/material/Modal';

import { modalStyles } from './Modal.styles';
import { ModalComponent } from './Modal.types';

export const Modal: ModalComponent = (props) => {
  const { children, isOpen, ...modalMuiProps } = props;

  return (
    <MuiModal
      open={isOpen}
      {...modalMuiProps}
      sx={modalStyles}
    >
      {children}
    </MuiModal>
  );
};
