import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ColorContext.Provider value="primary">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
};

export default App;


// state = { language: 'english'};

// onLanguageChange = language => {
//   this.setState({ language });
// };
// render() {
//   return (
//     <div className="ui container">
//       <LanguageSelector onLanguageChange={this.onLanguageChange} />
//       <ColorContext.Provider value="primary">
//         <LanguageContext.Provider value={this.state.language}>
//           <UserCreate />
//         </LanguageContext.Provider>
//       </ColorContext.Provider>
//     </div>
//   )
// }