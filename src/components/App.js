import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuBar from './MenuBar/MenuBar';
import {Grid, Row, Col} from 'react-flexbox-grid';


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>

        <Grid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6} />
            </Row>
          </Col>
        </Row>

        <Row>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={6} />
          </Row>
        </Col>
        </Row>

        <Row>
          <Col xs={6} md={3}> <MenuBar /> </Col>
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
