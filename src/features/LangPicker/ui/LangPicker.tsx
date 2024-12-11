import { FC } from 'react';
import { Button, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy';
import { langKey } from '@/features/LangPicker/constants/langKey';
import { useTranslation } from 'react-i18next';

export const LangPicker: FC = () => {
    const { i18n } = useTranslation();

    const handleTranslationChange = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem(langKey, lang);
    };

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: Button }}
                slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
            >
                {i18n.language}
            </MenuButton>
            <Menu>
                {i18n.languages.map((lang) => (
                    <MenuItem
                        key={lang}
                        onClick={() => handleTranslationChange(lang)}
                    >
                        {lang}
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
};
