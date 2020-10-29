export interface Task {
    IDTask: number;
    Description: string;
    Date: string;
}

const DefaultTask = () => {
    return {
        IDTask: 0,
        Description: '',
        Date: ''
    } as Task;
};

export { DefaultTask };
