import { FC, MouseEventHandler, PointerEventHandler } from 'react';
import { TTodo } from '@/entities/models/TTodo';
import { Card, IconButton, Stack, Typography } from '@mui/joy';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import { Reorder, useDragControls, useMotionValue } from 'motion/react';

type TodoProps = {
    todo: TTodo;
    onRemoveTodo: (todo: TTodo) => void;
    onToggleTodoIsDone: (todo: TTodo) => void;
};

export const Todo: FC<TodoProps> = ({
    todo,
    onRemoveTodo,
    onToggleTodoIsDone,
}) => {
    const controls = useDragControls();
    const y = useMotionValue(0);

    const handleTodoIsDone = () => {
        onToggleTodoIsDone(todo);
    };

    const handleTodoRemove: MouseEventHandler<SVGSVGElement> = (event) => {
        event.stopPropagation();
        onRemoveTodo(todo);
    };

    const handleDrag: PointerEventHandler<HTMLAnchorElement> = (event) => {
        controls.start(event);
    };

    return (
        <Reorder.Item
            value={todo}
            id={todo.id}
            style={{ y }}
            dragListener={false}
            dragControls={controls}
        >
            <Card
                variant="soft"
                color={todo.isDone ? 'success' : 'neutral'}
                onClick={handleTodoIsDone}
            >
                <Stack direction="row" justifyContent="space-between">
                    <Typography
                        startDecorator={
                            todo.isDone ? <DoneIcon /> : <AccessTimeIcon />
                        }
                    >
                        {todo.text}
                    </Typography>
                    <Stack direction="row">
                        <IconButton
                            onPointerDown={handleDrag}
                            onClick={(event) => event.stopPropagation()}
                            sx={{ touchAction: 'none' }}
                        >
                            <DragIndicatorIcon />
                        </IconButton>
                        <IconButton color="danger">
                            <DeleteIcon onClick={handleTodoRemove} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Card>
        </Reorder.Item>
    );
};
