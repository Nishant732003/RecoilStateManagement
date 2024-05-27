import { atom ,selector} from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const todoListState = atom({
    key: 'TodoList',
    default: [],
});


export const todoListFilter = atom({
    key: 'TodoListFilter',
    default: 'Show All',
});


export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilter);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
    key: 'TodoListStats',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
         const percentCompleted =
            totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;
        return {
          totalNum,
          totalCompletedNum,
          totalUncompletedNum,
          percentCompleted,
        };
    }
});
