import { useContext } from 'react'

import { ErrorSection } from './ErrorSection.jsx'
import { TopSection } from './TopSection.jsx'
import { MiddleSection } from './MiddleSection.jsx'
import { StateContext } from './StateContent.jsx'


export function BodySection() {

    const state = useContext(StateContext)

    if(state.err){
        return <ErrorSection />
    }
    
    return <>
        <TopSection/>

        <br/>

        <MiddleSection />

        <br/>
    </>
}