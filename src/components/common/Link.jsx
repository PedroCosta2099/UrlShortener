import React, { useState } from 'react';
import Button from './Button';
import '../../styles/common/Link.scss'

function Link({original,shorten}) {
    const [text,setText] = useState('Copy')
    
    const copyShort = (e) =>{
        e.target.classList.toggle('dark')
        navigator.clipboard.writeText(shorten)
        setText('Copied!')
        
    }
    return (  
        <div className='link'>
            <p>{original}</p>
            <div id='short'>
                <p>{shorten}</p>
                <Button id={'copy'} text={text} action={e => copyShort(e)}/>
            </div>
        </div>
    );
}

export default Link;
