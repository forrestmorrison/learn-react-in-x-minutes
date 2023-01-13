import PropTypes from 'prop-types'

const Header = ({ text }) => {
  return (
    <div className='container'>
        <h2>{text}</h2>
    </div>
  )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header