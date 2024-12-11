import { FC, FormEventHandler, useState } from 'react';
import { FormControl, FormHelperText, IconButton, Input } from '@mui/joy';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';

type TodoInputProps = {
    onAddTodo: (todo: string) => void;
};

export const TodoInput: FC<TodoInputProps> = ({ onAddTodo }) => {
    const { t } = useTranslation();

    const [error, setError] = useState<string | undefined>();

    const handleAddTodo: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const text = formData.get('text');
        if (!text || typeof text !== 'string') {
            setError(t('RequiredField'));
            return;
        }
        onAddTodo(text);
        event.currentTarget.reset();
    };

    return (
        <form onSubmit={handleAddTodo}>
            <FormControl error={error !== undefined}>
                <Input
                    name="text"
                    placeholder={t('AddTodo')}
                    onChange={() => setError(undefined)}
                    endDecorator={
                        <IconButton type="submit">
                            <AddIcon />
                        </IconButton>
                    }
                />
                {error && (
                    <FormHelperText>
                        <InfoOutlined />
                        {error}
                    </FormHelperText>
                )}
            </FormControl>
        </form>
    );
};
