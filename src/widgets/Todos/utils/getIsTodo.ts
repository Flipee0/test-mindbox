import { TTodo } from '@/entities/models/TTodo';

export const getIsTodo = (data: unknown): data is TTodo => {
    const todo = data as TTodo;
    const conditions = [
        todo.id !== undefined,
        todo.text !== undefined,
        todo.isDone !== undefined,
    ];
    return conditions.every((condition) => condition);
};
