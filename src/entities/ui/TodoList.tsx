import { FC } from 'react';
import { TTodo } from '@/entities/models/TTodo';
import { Todo } from '@/entities/ui/Todo';
import { Reorder } from 'motion/react';
import { styled } from '@mui/joy';

type TodoListProps = {
    todos: TTodo[];
    onReorder: (todos: TTodo[]) => void;
    onRemoveTodo: (todo: TTodo) => void;
    onToggleTodoIsDone: (todo: TTodo) => void;
};

const ReorderGroup = styled(Reorder.Group<TTodo>)('');

export const TodoList: FC<TodoListProps> = ({
    todos,
    onReorder,
    onRemoveTodo,
    onToggleTodoIsDone,
}) => {
    return (
        <ReorderGroup
            axis="y"
            onReorder={onReorder}
            values={todos}
            sx={{
                m: 0,
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                listStyle: 'none',
            }}
        >
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo}
                    onToggleTodoIsDone={onToggleTodoIsDone}
                />
            ))}
        </ReorderGroup>
    );
};
