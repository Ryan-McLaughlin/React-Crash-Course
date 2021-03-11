// eslint-disable-next-line
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => { /*object of whatever props you pass in (props.type) use {} to destructure*/
    const onClick = () => {
        console.log('clicked Button')
    }

    return (
        <header className='header'>
            <h1 style={{}}>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                // onClick={onClick
                onClick={onAdd}
            />
        </header>
    )
}

// prop types - built in type system for your property
Header.defaultProps = { // need this for the app to load
    title: 'Task Tracker'
}

Header.propTypes = { /* lower case .propTypes */ /* setting this to an object */
    title: PropTypes.string.isRequired, /* upper case .PropTypes */ /* the prop type of title isRequired to be string */
}

// CSS in JS
// <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
