import React, { Component } from 'react';


class Signup extends Component {
    render() {
        return (
            <div className='rectangle'>
                <div className='input_header'>
                    회원가입
                </div>

                <form className='id_input'>
                    <label className='id_label'>
                        <div className='text1'>ID<br/></div>
                        <input type="id"/>
                    </label>
                    <input type="submit" value="생성" />
                </form>

                <form className='password_input'>
                    <label className='password_label'>
                        <div className='text2'>PASSWORD<br/></div>
                        <input type="password"/>
                    </label>
                    <input type="submit" value="생성" />
                </form>

                <form className='nickname_input'>
                    <label className='nickname_label'>
                        <div className='text3'>NICKNAME<br/></div>
                        <input type="name"/>
                    </label>
                    <input type="submit" value="입력" />
                </form>

                <form className='email_input'>
                    <label className='email_label'>
                        <div className='text4'>E-mail<br/></div>
                        <input type="email"/>
                    </label>
                    <input type="submit" value="입력" />
                </form>
            </div>
        );
    }
}

export default Signup;