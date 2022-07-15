import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL, pagenation} from './signup'

const Change = ({userInfo, setUserInfo}) => {
    const [nickname, setNickname] = useState('')

    const [email, setEmail] = useState('')

    console.log('--------')
    console.log(userInfo)
    console.log('--------')
    const handleNicknameChange = (e) => {
        setNickname(e.target.value)
    }
    function handleEmailChagne(e) {
        setEmail(e.target.value)
    }
    
    const handleInfoUpdate = async() => {
        const signInResponse = await axios.post(`/user`, {nickname})
        setUserInfo({...userInfo, nickname})
        setUserInfo(prev => ({...prev, nickname}))
    } 
    return (
        <>
            <div>
               쨔쟌 
            <label className='id_label'>
                    <div className='text1'>nickname<br/></div>
                    <input type="id" onChange={handleNicknameChange}/>
                </label>
                
                <label className='password_label'>
                    <div className='text2'>email<br/></div>
                    <input type="password" onChange={handleEmailChagne}/>
                </label>
                
                <button onClick={handleInfoUpdate}>누르면 정보가 나와요 쨘</button>
                <div>ㅇ이게 보이면 제대로 온거에요{userInfo && userInfo.nickname}</div>
            </div>
        </>
    )
}
export default Change