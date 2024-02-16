import React, { useContext } from 'react'
import { CounterContext } from '../context/context'

const Component1 = () => {
    const value = useContext(CounterContext)
    return (
        <div>
            {value.count}
        </div>
    )
}

export default Component1
