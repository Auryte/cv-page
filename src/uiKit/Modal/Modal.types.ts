import { ModalProps as MUIModalProps } from '@mui/material/Modal';
import { FC, PropsWithChildren } from 'react';

export type ModalProps = {
  isOpen: boolean;
};

export type ModalComponent = FC<PropsWithChildren<Omit<MUIModalProps, 'open'> & ModalProps>>;
