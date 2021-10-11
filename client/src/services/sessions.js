const session = {
    user: null,
    messages: []
};

export default session;

export function Login(email, password){
    session.user = {
        FirstName: 'Moshe',
        LastName: email,
        Password: password,
        id: 613,
    }
}