import { PropsWithChildren } from "react";

export type themes = 'light' | 'dark';

export type CommonProps = PropsWithChildren<{
    title: string;
}>;