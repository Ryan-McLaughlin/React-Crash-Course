const TestTask = ({ testTask }) => {
    return (
        <div className='testTask'>
            <h3>id: {testTask.id}</h3>
            <h3>text: {testTask.testText}</h3>
        </div>
    )
}

export default TestTask
