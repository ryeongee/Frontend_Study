import React, { useState } from 'react';
/*
// onKeyPress 이벤트에 바로 입력하는 방식 (보기 어려울 수 있음)
const OnKeyPressPractice = () =>{
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
                onKeyPress={e =>{
                    if(e.key === 'Enter') {
                        onClick();
                    }}
                }
            />
            <button onClick={onClick}>입력</button>
        </>
    );
};
*/
// 미리 함수 생성 방식(깔끔함)
const OnKeyPressPractice = () =>{
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

    const onKeyPress = e =>{
        if(e.key === 'Enter') {
            onClick();
        }
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
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>입력</button>
        </>
    );
};

export default OnKeyPressPractice;