import React from 'react';
import {Link} from 'react-router-dom';

export default function Foo() {
  return (
    <div>
      <Link to='/bar'>To bar</Link>
      <Link to='/'>To back</Link>
    </div>
  )
}
