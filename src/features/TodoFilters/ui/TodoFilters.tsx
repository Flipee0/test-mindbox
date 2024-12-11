import { ChangeEventHandler, FC, MouseEvent, useState } from 'react';
import {
    CompletenessFilter,
    completenessFilters,
} from '@/features/TodoFilters';
import { Button, Input, ToggleButtonGroup } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { useDebounced } from '@/shared/hooks';

type TodoFiltersProps = {
    search: string;
    onSearchChange: (search: string) => void;
    completenessFilter: CompletenessFilter;
    onCompletenessFilterChange: (
        completenessFilter: CompletenessFilter,
    ) => void;
};

export const TodoFilters: FC<TodoFiltersProps> = ({
    search,
    onSearchChange,
    completenessFilter,
    onCompletenessFilterChange,
}) => {
    const { t } = useTranslation();
    const [searchFieldValue, setSearchFieldValue] = useState(search);
    useDebounced(searchFieldValue, 1000, onSearchChange);

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setSearchFieldValue(event.target.value);
    };

    const handleCompletenessFilterChange = (
        _: MouseEvent<HTMLElement>,
        value: CompletenessFilter | null,
    ) => {
        if (value) {
            onCompletenessFilterChange(value);
        }
    };

    return (
        <Input
            value={searchFieldValue}
            placeholder={t('SearchTodo')}
            onChange={handleSearchChange}
            startDecorator={<SearchIcon sx={{ marginLeft: 1 }} />}
            endDecorator={
                <ToggleButtonGroup<CompletenessFilter>
                    value={completenessFilter}
                    onChange={handleCompletenessFilterChange}
                    variant="plain"
                    sx={{ height: '100%' }}
                >
                    {completenessFilters.map((filter) => (
                        <Button key={filter.value} value={filter.value}>
                            {t(filter.label)}
                        </Button>
                    ))}
                </ToggleButtonGroup>
            }
            sx={{
                '--Input-decoratorChildHeight': '100%',
                '--Input-paddingInline': '0',
            }}
        />
    );
};
