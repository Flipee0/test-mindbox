import { useEffect, useMemo, useState } from 'react';
import { TTodo } from '@/entities/models/TTodo';
import { getTodosFromLocalStorage } from '@/widgets/Todos/utils/getTodosFromLocalStorage';
import { todosKey } from '@/widgets/Todos/constants/todosKey';
import { CompletenessFilter } from '@/features/TodoFilters';
import { v4 as uuidV4 } from 'uuid';

export const useTodos = () => {
    const [todos, setTodos] = useState<TTodo[]>(getTodosFromLocalStorage());
    const [search, setSearch] = useState('');
    const [completenessFilter, setCompletenessFilter] = useState(
        CompletenessFilter.ALL,
    );
    const visibleTodos = useMemo(
        () =>
            todos
                .filter((todo) => !search || todo.text.includes(search))
                .filter(
                    (todo) =>
                        completenessFilter === CompletenessFilter.ALL ||
                        todo.isDone ===
                            (completenessFilter ===
                                CompletenessFilter.COMPLETED),
                ),
        [todos, search, completenessFilter],
    );

    useEffect(() => {
        localStorage.setItem(todosKey, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos((prev) => [
            ...prev,
            {
                id: uuidV4(),
                text,
                isDone: false,
            },
        ]);
    };

    const removeTodo = (todo: TTodo) => {
        setTodos((prev) => prev.filter((item) => item !== todo));
    };

    const toggleTodoIsDone = (todo: TTodo) => {
        setTodos((prev) =>
            prev.map((item) =>
                item === todo ? { ...item, isDone: !item.isDone } : item,
            ),
        );
    };

    const removeCompletedTodos = () => {
        setTodos((prev) => prev.filter((item) => !item.isDone));
        if (completenessFilter === CompletenessFilter.COMPLETED) {
            setCompletenessFilter(CompletenessFilter.ALL);
        }
    };

    return {
        todos,
        visibleTodos,
        setTodos,
        actions: {
            addTodo,
            removeTodo,
            toggleTodoIsDone,
            removeCompletedTodos,
        },
        filters: {
            search,
            setSearch,
            completenessFilter,
            setCompletenessFilter,
        },
    };
};
