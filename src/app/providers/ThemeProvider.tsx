import { CssVarsProvider } from '@mui/joy/styles';
import { FC, PropsWithChildren } from 'react';
import { CssBaseline } from '@mui/joy';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <CssVarsProvider modeStorageKey="AppColorMode">
            <CssBaseline />
            {children}
        </CssVarsProvider>
    );
};
