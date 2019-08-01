
import './sidebar.scss'
import { Spring } from 'react-spring/renderprops'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useTransition, animated } from 'react-spring'
import './sidebar.scss'

const Sidebar = () =>{
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(300px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 60, innerHeight:60 },
            { transform: 'perspective(300px) rotateX(10deg)', color: '#28d79f' },
            { transform: 'perspective(300px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: 'red' },
    })
    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['<div>']), 1000))
        ref.current.push(setTimeout(() => set(['<div>']), 5000))
        ref.current.push(setTimeout(() => set(['<div>']), 4000))
    }, [])

    useEffect(() => void reset(), [])


    return(

        <div id='sidebar'>
            <div>
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div>
                <div>


                    <img src= {require ("../images/download (2).png")} alt="twitch"/>
                </div>

        </div>

    )
};

export default Sidebar;