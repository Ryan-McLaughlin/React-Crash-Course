// eslint-disable-next-line
import PropTypes from 'prop-types'
import Button from './Button'

const Test = ({ title }) => {
    const onClick = () => {
        console.log('test button clicked')
    }

    return (
        <header className='header'>
            <h1 style={{}}>{title}</h1>
            <Button color='red' text='Test Button' onClick={onClick} />
            
        </header>
    )
}

Test.defaultProps = {
    title: 'TestTask Tracker'
}

Test.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Test