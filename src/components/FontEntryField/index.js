import React from 'react';
import PropTypes from 'prop-types'

const FontEntryField = ({ link, addLink }) => {

  function handleChange(e) {
    let head = document.getElementsByTagName('head')[0]
    let link = document.createElement('link');
    let value = e.target.value;
    link.href = value

    addLink(value)

    head.appendChild(link)
  }

  return (
    <textarea
      placeholder="https://somefont.google.com"
      value={link}
      onChange={handleChange}>
    </textarea>
  )
}

FontEntryField.propTypes = {
  link: PropTypes.string,
  addLink: PropTypes.func.isRequired
}

export default FontEntryField