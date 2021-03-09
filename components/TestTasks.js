// import { useState } from 'react'
// const testTasks = [
//     {
//         id: 1,
//         text: 'TestTasks.js'
//     },
//     {
//         id: 2,
//         testText: 'testText'
//     }
// ]

import TestTask from './TestTask.js'

const TestTasks = ({ testTasks }) => {
    return(
        <>
            {testTasks.map((testTask) => (
                <TestTask key={testTask.id} testTask={testTask} />
            ))}
        </>
    )
}

export default TestTasks
