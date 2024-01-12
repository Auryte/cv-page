import { SxProps, Theme } from "@mui/material";
import { FC } from "react";

export interface HeadingProps {
    heading: string; 
    sx?: (object & SxProps<Theme>) | undefined
}

export type HeadingComponent = FC<HeadingProps>