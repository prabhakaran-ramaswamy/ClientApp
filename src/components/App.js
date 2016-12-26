import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import MyMenuBar from './menubar/MyMenuBar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <MyMenuBar/>
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
