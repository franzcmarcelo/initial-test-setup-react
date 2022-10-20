import PropTypes from 'prop-types';

const Information = ({ title, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{name}</h2>
    </>
  )
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Information;