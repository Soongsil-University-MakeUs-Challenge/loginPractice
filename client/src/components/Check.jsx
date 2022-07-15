import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL, pagenation} from './signup'

const SignIn = ({setPage, setUserInfo, userInfo}) => {

    
    const handleGetInfo = async() => {
        const signInResponse = await axios.get(`/user`)
        setUserInfo(signInResponse.data) 
        setPage(pagenation.chage)
    } 
    console.log(1123123)
    return (
        <>
            <div>
                <button onClick={handleGetInfo}>누르면 정보가 나와요 쨘</button>
                <div>{userInfo && userInfo.nickname}</div>
            </div>
        </>
    )
}
export default SignIn