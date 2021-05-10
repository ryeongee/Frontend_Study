import React, { useState } from 'react';

/*
//기본적인 두 개 input 방식
const MultipleInputsPractice = () =>{
    const [username, setUsername] = useState('');
    const [message,setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    
    const onClick = () =>{
        alert(username+" : "+message);
        setMessage('');       
    };
    return (
        <>
            <input
                type="text"
                name="username"
                placeholder="사용자 이름을 입력해 주세요."
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무 말이나 입력해 주세요."
                onChange={onChangeMessage}
            />
            <button onClick={onClick}>입력</button>
        </>
    );
};
*/
//[e.taget.name]을 사용한 간략한 두 개 input 방식
const MultipleInputsPractice = () =>{
    const [ form, setForm ] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    
    const onClick = () =>{
        alert(username+" : "+message);
        setForm({
            username: '',
            message: ''
        });       
    };
    return (
        <>
            <input
                type="text"
                name="username"
                placeholder="사용자 이름을 입력해 주세요."
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무 말이나 입력해 주세요."
                value={message}
                onChange={onChange}
            />
            <button onClick={onClick}>입력</button>
        </>
    );
};

export default MultipleInputsPractice;