import React, { useState } from 'react';
/*
// 그냥 리턴에 넣는 방식(지저분함)
const OnChangePractice = () =>{
    const [ message, setMessage ] = useState('');
    return (
        <>
            <input 
                type="text" 
                name="message" 
                placeholder="아무거나 입력해 주세요." 
                onChange={
                    (e) =>{
                        setMessage(e.target.value);
                    }
                }
            />
            <button onClick={
                ()=>{
                    alert("입력값 : "+message); 
                    setMessage('');
                    }}>
                확인
            </button>
        </>
    );
};
*/
// 함수화 시켜서 넣는 방식(깔끔함)
const OnChangePractice = () =>{
    const [ message, setMessage ] = useState('');
    const onChange = e =>{
        setMessage(e.target.value);
    };
    const onClick = () =>{
        alert("입력값 : "+message);
        setMessage('');
    };
    return (
        <>
            <input 
                type="text" 
                name="message" 
                placeholder="아무거나 입력해 주세요." 
                onChange={onChange}
            />
            <button onClick={onClick}>확인</button>
        </>
    );
};

export default OnChangePractice;