import React from 'react';
import '../../styles/layout/AdvancedStatistics.scss'
import icon1 from '../../media/images/icon-brand-recognition.svg'
import icon2 from '../../media/images/icon-detailed-records.svg'
import icon3 from '../../media/images/icon-fully-customizable.svg'

function AdvancedStatistics() {
    return ( 
        <section id='statistic'>
            <div id='text'>
                <h1 id='title'>Advanced Statistics</h1>
                <p id='subtitle'>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div id='cards'>
                <div className='line'></div>
                <div id='card1'>
                <div className='icon'><img src={icon1}></img></div>
                    
                    <h1 id='title'>Brand Recognition</h1>
                    <p id='content'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div id='card2'>
                    <div className='icon'><img src={icon2}></img></div>
                    <h1 id='title'>Detailed Records</h1>
                    <p id='content'>Grain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div id='card3'>
                    <div className='icon'><img src={icon3}></img></div>
                    <h1 id='title'>Fully Customizable</h1>
                    <p id='content'>Improve brand awareness and content discoverability through cutomizable links, supercharging audicence engagement.</p>
                </div>
            </div>
        </section>
         );
}

export default AdvancedStatistics;