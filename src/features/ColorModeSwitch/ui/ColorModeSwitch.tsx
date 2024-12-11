import {
    Dropdown,
    IconButton,
    ListItemDecorator,
    Menu,
    MenuButton,
    MenuItem,
    useColorScheme,
} from '@mui/joy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTranslation } from 'react-i18next';

export const ColorModeSwitch = () => {
    const { mode, setMode } = useColorScheme();
    const { t } = useTranslation();

    const handleLightModeChoose = () => {
        setMode('light');
    };

    const handleDarkModeChoose = () => {
        setMode('dark');
    };

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { color: 'neutral', size: 'sm' } }}
            >
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </MenuButton>
            <Menu placement="right-start">
                <MenuItem onClick={handleLightModeChoose}>
                    <ListItemDecorator>
                        <LightModeIcon />
                    </ListItemDecorator>{' '}
                    {t('LightTheme')}
                </MenuItem>
                <MenuItem onClick={handleDarkModeChoose}>
                    <ListItemDecorator>
                        <DarkModeIcon />
                    </ListItemDecorator>{' '}
                    {t('DarkTheme')}
                </MenuItem>
            </Menu>
        </Dropdown>
    );
};
