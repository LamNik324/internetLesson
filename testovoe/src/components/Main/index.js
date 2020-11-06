import React from 'react';
import {Link} from 'react-router-dom';
import Foo from '../Foo';
import Bar from '../Bar';

export default function Main() {
  return (
    <div>
      <Link to='/bar'>To bar</Link>
      <Link to='/foo'>To foo</Link>
    </div>
  )
}
