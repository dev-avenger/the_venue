import React from 'react';
import Description from '../highlights/description';
import Discount from '../highlights/discount';

const Highlights = () => {
  return (
    <div className="highlight_wrapper">
      <Description/>
      <Discount/>
    </div>
  )
}

export default Highlights;