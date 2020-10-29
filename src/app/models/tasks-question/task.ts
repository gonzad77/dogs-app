export interface TasksQuestion {
    ID: number;
    Description: string;
    IDFather: number;
}

const DefaultTasksQuestion = () => {
    return {
        ID: 0,
        Description: '',
        IDFather: 0
    } as TasksQuestion;
};

export { DefaultTasksQuestion };
