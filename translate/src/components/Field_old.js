import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // this is how we hook up a
  // Context object to a class component
  // contextType is a very special property name => needs to be called exactly contextType
  // static adds a property to a class itself
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Namm';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}
// static contextType = LanguageContext;
// =
// Button.contextType = LanguageContext;

export default Field;