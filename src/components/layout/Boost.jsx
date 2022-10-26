import React from 'react';
import '../../styles/layout/Boost.scss'
import Button from '../common/Button';


function Boost() {
    return ( 
        <section id="boost">
            <h1 id="title">
                Boost your links today
            </h1>
            <Button id={'get-started'} text={'Get Started'}/>
        </section>
     );
}

export default Boost;