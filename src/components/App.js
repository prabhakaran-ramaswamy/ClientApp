import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuBar from './MenuBar/MenuBar';
import AppToolBar from './AppToolBar/AppToolBar';
import {Grid, Row, Col} from 'react-flexbox-grid';


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid={true}>
          <Row>
            <AppToolBar/>
          </Row>
          <Row>
            <AppToolBar/>
          </Row>

        <Row around="xs">
          <Col xs={2} />
          <Col xs={2} />
          <Col xs={2} > <MenuBar /></Col>
        </Row>
      </Grid>
      </MuiThemeProvider>

    );
  }
}

export default App;
