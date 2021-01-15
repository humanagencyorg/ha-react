import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ src, className, inline, ref }) => (
  // Vova: unset max-width: none; for img tag
  // because on MultiSelectOptionButton icon hidden
  // when text overflowed is active and max-width: 100%;
  inline    ?
    <img src={src} style={{maxWidth: 'none'}} />    :
    <div className={className} ref={ref}>
      <img src={src} />
    </div>
);

Icon.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

Icon.defaultProps = {
  inline: false,
};

export default Icon;
