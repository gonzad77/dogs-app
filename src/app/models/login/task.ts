export interface Login {
    Email: string;
    Password: string;
}

const DefaultLogin = () => {
    return {
        Email: '',
        Password: ''
    } as Login;
};

export { DefaultLogin };
