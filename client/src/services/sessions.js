const session = {
    user: null,
    messages: []
};

export default session;

export function Login(){
    session.user = {
        FirstName: 'Moshe',
        LastName: 'Plotkin',
        id: 613,
    }
}