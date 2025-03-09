import React from 'react';
import {useRef, useState, useEffect} from 'react';

const Contact = () => {
    const previous = useRef(10);
    const [count, setCount] = useState(0);
    previous.current += 1;
    return (<>
    <h1>Contact Me {previous.current} !</h1>;
    <h2>Count: {count} !!</h2>
    <button onClick={() => {setCount(count+1);}}>Contact Me</button>
    </>);
};

export default Contact;
