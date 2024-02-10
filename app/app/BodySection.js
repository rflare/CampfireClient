import { useContext } from 'react'

import { ErrorSection } from '@/components/ErrorSection.js'
import { TopSection } from './TopSection.js'
import { MiddleSection } from './MiddleSection.js'
import { StateContext } from './StateContext.js'


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
