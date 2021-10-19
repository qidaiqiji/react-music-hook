import React, { useEffect, useRef, forwardRef, useState } from 'react'
import BScroll from '@better-scroll/core'
import { ScrollContainer } from './style'


const Scroll = forwardRef((props, ref) => {
    const scrollContainer = useRef()

    const [bScroll, setbScroll] = useState(null)

    useEffect(() => {
        const scroll = new BScroll(scrollContainer.current,{
            scrollY: true,
            click: true
        })
        setbScroll(scroll)
        return () => {
            setbScroll(null)
        }
    }, [])

    // useEffect(() => {
    //     if (!bScroll) return
    //     console.log('p', bScroll)
    //     bScroll.on('scroll', (scroll) => {
    //         console.log('ooo')
    //     })
    //     bScroll.on('scrollEnd', () => {
    //         console.log('结束')
    //     })
    // }, [bScroll])

    return <ScrollContainer className=".wrapper" ref={scrollContainer}>
        { props.children }
    </ScrollContainer>

})
export default Scroll