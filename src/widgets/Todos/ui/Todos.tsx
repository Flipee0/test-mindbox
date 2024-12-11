import { FC } from 'react';
import { useTodos } from '@/widgets/Todos/hooks/useTodos';
import { TodoList } from '@/entities/ui/TodoList';
import { Button, Stack, Typography } from '@mui/joy';
import { TodoInput } from '@/features/TodoInput/ui/TodoInput';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoFilters } from '@/features/TodoFilters';

export const Todos: FC = ({}) => {
    const { t } = useTranslation();

    const { todos, visibleTodos, actions, setTodos, filters } = useTodos();

    const renderTodos = () => {
        if (!todos.length) {
            return <Typography>{t('ThereIsNothingToDo')}</Typography>;
        }
        if (!visibleTodos.length) {
            return <Typography>{t('TodosNotFound')}</Typography>;
        }
        return (
            <TodoList
                todos={visibleTodos}
                onReorder={setTodos}
                onRemoveTodo={actions.removeTodo}
                onToggleTodoIsDone={actions.toggleTodoIsDone}
            />
        );
    };

    return (
        <Stack alignItems="center">
            <Stack maxWidth="720px" width="100%" gap={3}>
                <Typography level="title-lg">{t('MyTodos')}</Typography>
                <TodoInput onAddTodo={actions.addTodo} />
                <Stack gap={1}>
                    <Stack direction="row" justifyContent="flex-end">
                        <Button
                            color="danger"
                            onClick={actions.removeCompletedTodos}
                            endDecorator={<DeleteIcon />}
                        >
                            {t('RemoveCompleted')}
                        </Button>
                    </Stack>
                    <TodoFilters
                        search={filters.search}
                        onSearchChange={filters.setSearch}
                        completenessFilter={filters.completenessFilter}
                        onCompletenessFilterChange={
                            filters.setCompletenessFilter
                        }
                    />
                    {renderTodos()}
                </Stack>
            </Stack>
        </Stack>
    );
};
