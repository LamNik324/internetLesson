import React from 'react';
import {Link} from 'react-router-dom';

export default function Bar() {
  return (
    <div>
      <Link to='/foo'>To foo</Link>
      <Link to='/'>To back</Link>
    </div>
  )
}
