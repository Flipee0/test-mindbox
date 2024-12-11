import { useTodos } from '@/widgets/Todos/hooks/useTodos';
import { act, renderHook } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { todosKey } from '@/widgets/Todos/constants/todosKey';
import {
    mockInitialTodos,
    mockTodosAfterChangeCompleteness,
    mockTodosAfterChangeCompletenessAndRemove,
    mockTodosAfterFilterActive,
    mockTodosAfterRemove,
    mockTodosAfterSetSearch,
    mockTodosAfterSetSearchAndFilterActive,
    mockTodosAfterSetSearchAndFilterCompleted,
    mockTodoToAdd,
} from '@/widgets/Todos/__tests__/useTodos.mocks';
import { CompletenessFilter } from '@/features/TodoFilters';

vi.mock('uuid', () => {
    return {
        v4: vi.fn(() => '4'),
    };
});

localStorage.setItem(todosKey, JSON.stringify(mockInitialTodos));

describe('useTodos', () => {
    afterEach(() => {
        localStorage.clear();
        localStorage.setItem(todosKey, JSON.stringify(mockInitialTodos));
    });

    test('read todos from localStorage', () => {
        const { result } = renderHook(useTodos);

        expect(result.current.todos).toEqual(mockInitialTodos);
    });

    test('addTodo', () => {
        const { result } = renderHook(useTodos);

        act(() => result.current.actions.addTodo(mockTodoToAdd.text));
        expect(result.current.todos).toEqual([
            ...mockInitialTodos,
            mockTodoToAdd,
        ]);
    });

    test('removeTodo', () => {
        const { result } = renderHook(useTodos);

        act(() => result.current.actions.removeTodo(result.current.todos[1]));
        expect(result.current.todos).toEqual(mockTodosAfterRemove);
    });

    test('toggle isDone and remove completed', () => {
        const { result } = renderHook(useTodos);

        act(() =>
            result.current.actions.toggleTodoIsDone(result.current.todos[0]),
        );
        expect(result.current.todos).toEqual(mockTodosAfterChangeCompleteness);

        act(() => result.current.actions.removeCompletedTodos());

        expect(result.current.todos).toEqual(
            mockTodosAfterChangeCompletenessAndRemove,
        );
    });

    test('set search and filter', () => {
        const { result } = renderHook(useTodos);

        act(() => result.current.filters.setSearch('Go to'));
        expect(result.current.visibleTodos).toEqual(mockTodosAfterSetSearch);

        act(() =>
            result.current.filters.setCompletenessFilter(
                CompletenessFilter.COMPLETED,
            ),
        );
        expect(result.current.visibleTodos).toEqual(
            mockTodosAfterSetSearchAndFilterCompleted,
        );

        act(() =>
            result.current.filters.setCompletenessFilter(
                CompletenessFilter.ACTIVE,
            ),
        );
        expect(result.current.visibleTodos).toEqual(
            mockTodosAfterSetSearchAndFilterActive,
        );

        act(() => result.current.filters.setSearch(''));
        expect(result.current.visibleTodos).toEqual(mockTodosAfterFilterActive);
    });
});
