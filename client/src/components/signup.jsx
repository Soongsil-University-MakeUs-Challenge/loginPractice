import React, {useState} from 'react';
import SignUpReal from './SignUpReal'
import SignIn from './SignIn'
import Check from './Check'
import Change from './Change'


export const BASE_URL = 'http://localhost:5001'

export const pagenation = {
    signUp: 0,
    signIn: 1,
    check: 2,
    chage: 3,
}

const Signup = () => {
    const [page, setPage] = useState(pagenation.signIn)
    const [token, setToken] = useState('')
    const [userInfo, setUserInfo] = useState()


    return (
        <>
        {page === pagenation.signUp ? 
                <SignUpReal setPage={setPage}/ >
            : page === pagenation.signIn ? 
                <SignIn setPage={setPage} setToken={setToken}/>
            :  page === pagenation.check ? 
                <Check setPage={setPage} setUserInfo={setUserInfo} userInfo={userInfo}/>
            : page === pagenation.chage  ? 
                <Change userInfo={userInfo} setUserInfo={setUserInfo}/>
            :
            <></>}
        </>
    );

  
}


export default Signup;