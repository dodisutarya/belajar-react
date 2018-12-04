import React, { Component } from 'react';
import Image from "./Image";

class List extends Component {
  render() {
    return(
      <ol>
        <Image />
        <li>Nasi Padang</li>
        <li>Sate</li>
        <li>Soto Lamongan</li>
      </ol>
    );
  }
}

export default List;
