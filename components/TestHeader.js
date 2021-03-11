// eslint-disable-next-line
import PropTypes from 'prop-types'
import Button from './Button'

const TestHeader = ({ title }) => {
    const onClick = () => {
        console.log('test button clicked')
    }

    return (
        <header className='testHeader'>
            <h1 style={{}}>{title}</h1>
            <Button color='red' text='Test' onClick={onClick} />
            
        </header>
    )
}

TestHeader.defaultProps = {
    title: 'Test Task'
}

TestHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TestHeader