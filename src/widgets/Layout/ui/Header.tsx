import { FC } from 'react';
import { Stack, Typography, useTheme } from '@mui/joy';
import { ColorModeSwitch } from '@/features/ColorModeSwitch';
import { LangPicker } from '@/features/LangPicker';

export const Header: FC = () => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            padding={2}
            position="sticky"
            top="0"
            sx={{
                bgcolor: theme.palette.background,
                backdropFilter: 'blur(5px)',
                zIndex: 1000,
            }}
        >
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography level="title-lg">TODO</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
                <ColorModeSwitch />
                <LangPicker />
            </Stack>
        </Stack>
    );
};
