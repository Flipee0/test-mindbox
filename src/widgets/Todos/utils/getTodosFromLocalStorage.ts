import { TTodo } from '@/entities/models/TTodo';
import { todosKey } from '@/widgets/Todos/constants/todosKey';
import { getIsTodo } from '@/widgets/Todos/utils/getIsTodo';

export const getTodosFromLocalStorage = (): TTodo[] => {
    const localStorageValue = localStorage.getItem(todosKey);
    if (!localStorageValue) {
        return [];
    }

    let jsonValue;
    try {
        jsonValue = JSON.parse(localStorageValue);
    } catch {
        return [];
    }

    if (!Array.isArray(jsonValue)) {
        return [];
    }

    return jsonValue.filter((item) => getIsTodo(item));
};
