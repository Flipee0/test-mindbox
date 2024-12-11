import { FC, PropsWithChildren } from 'react';
import { Box, Stack } from '@mui/joy';
import { Header } from '@/widgets/Layout/ui/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack>
            <Header />
            <Box p={2}>{children}</Box>
        </Stack>
    );
};
