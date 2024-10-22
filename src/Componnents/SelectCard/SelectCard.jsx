

import PropTypes from 'prop-types';

function SelectCard({ card,handleRemove }) {
  return (
    <div className="relative">
      <img
        style={{ width: "80px", borderRadius: "3px" }}
        src={card.img}
        alt=""
      />
      <span onClick={() => handleRemove(card.id)} className="close">x</span>
    </div>
  );
}

SelectCard.propTypes = {
  card : PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default SelectCard;
