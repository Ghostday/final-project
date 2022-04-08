// Functions that fire/dispatches actions for the 
// reducers to read and deal with  



export const signUp = (payload:any) => {
    console.log('Action signUp, Payload: ', payload);
    return (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        dispatch({
            type: 'user/signup',
            payload: payload
        })
    }
}

export const logIn = (payload:any) => {
    console.log('Action logIn, Payload: ', payload);
    return (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        dispatch({
            type: 'user/login',
            payload: payload
        })
    }
}