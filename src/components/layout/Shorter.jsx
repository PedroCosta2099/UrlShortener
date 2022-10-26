import '../../styles/layout/Shorter.scss'
import React, { useState,useEffect } from "react";
import Button from "../common/Button";
import Link from '../common/Link';
import api from '../../utils/api';
import { v4 as key } from "uuid";

const getLocalStorage = () => {
    let links = localStorage.getItem("links")

    if (links) {
        return JSON.parse(localStorage.getItem("links"))
    } else {
        return []
    }
}

 function Shorter() {
    const [text, setText] = useState("")
    const [links, setLinks] = useState(getLocalStorage())
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Input is empty")
        } else {
            const shortenLink = async () => {
                const res = await api({params:{url:text}}) 
                //axios.get('https://api.shrtco.de/v2/shorten?url=' + text)
                //fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = res.data
                console.log(data.result)
                setLinks(prevLinks => [...prevLinks,data.result])
            }

            shortenLink()
        }
    }


    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links))
    }, [links])

    return(
        <div className='short'>
        <section id='shorter'>
            <form id='form' onSubmit={handleSubmit}>
                <input
                placeholder="Shorten a link here..."
                type={'url'}
                name="link"
                id="link"
                value={text}
                onChange={(e) => setText(e.target.value)}
                >

                </input>
                <Button id={'shorten'} text={'Shorten It!'}/>
            </form>
            <div id='links'>
            {links?.map(

            
                 link => <Link key={key()} original={link.original_link} shorten={link.short_link} />
              ) }
            </div>
        </section>
    </div>
    );
}

export default Shorter;