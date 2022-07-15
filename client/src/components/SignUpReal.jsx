import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL, pagenation} from './signup'

const SignUpReal = ({setPage}) => {
    const [id, setid] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')


    const handleIdChange = (e) => {
        setid(e.target.value)
    }
    const handleNicknameChange = (e) => {
        setNickname(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmitSignIn = async () => {
        const body = {
            id,
            password,
            email,
            nickname,
        }
        await axios.post(`${BASE_URL}/user/signUp`, body)
        setPage(pagenation.signIn)
    }

    return (
        <div className='rectangle'>
            <div className='input_header'>
                회원가입
            </div>

            <div className='id_input'>
                <label className='id_label'>
                    <div className='text1'>ID<br/></div>
                    <input type="id" onChange={handleIdChange}/>
                </label>
                
                <label className='password_label'>
                    <div className='text2'>PASSWORD<br/></div>
                    <input type="password" onChange={handlePasswordChagne}/>
                </label>
                
                <label className='nickname_label'>
                    <div className='text3'>NICKNAME<br/></div>
                    <input type="name" onChange={handleNicknameChange}/>
                </label>
                <label className='email_label'>
                    <div className='text4'>E-mail<br/></div>
                    <input type="email" onChange={handleEmailChange}/>
                </label>

                <button type='submit' onClick={handleSubmitSignIn} >제출하기</button>
            </div>
        </div>
    )
    function handlePasswordChagne(e) {
      setPassword(e.target.value)
    }
}

export default SignUpReal 