import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL, pagenation} from './signup'

const SignIn = ({setPage, setToken}) => {
    const [id, setid] = useState('')
    const [password, setPassword] = useState('')

    const handleIdChange = (e) => {
        setid(e.target.value)
    }
    function handlePasswordChagne(e) {
        setPassword(e.target.value)
    }
    const handleSubmitSignIn = async() => {
        const body = {
            id,
            password,
        }
        const signInResponse = await axios.post(`${BASE_URL}/user/signIn`, body)
        setToken(signInResponse.data.token)
       localStorage.setItem('token', `Bearer ${signInResponse.data.token}`);
       axios.defaults.headers.common['Authorization'] = `Bearer ${signInResponse.data.token}`;
        setPage(pagenation.check)    
    } 
    return (
        <>
                <label className='id_label'>
                    <div className='text1'>ID<br/></div>
                    <input type="id" onChange={handleIdChange}/>
                </label>
                
                <label className='password_label'>
                    <div className='text2'>PASSWORD<br/></div>
                    <input type="password" onChange={handlePasswordChagne}/>
                </label>
                <button type='submit' onClick={handleSubmitSignIn} >제출하기</button> 
        </>
    )
}
export default SignIn