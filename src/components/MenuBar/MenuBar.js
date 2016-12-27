import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


export default class MenuBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
        <Menu desktop={true} width={320}>
      <MenuItem primaryText="Single" insetChildren={true} />
      <MenuItem primaryText="1.15" insetChildren={true} />
      <MenuItem primaryText="Double" insetChildren={true} />
      <MenuItem
        primaryText="Custom: 1.2"
        checked={true}
        rightIcon={<ArrowDropRight />}
        menuItems={[
          <MenuItem
            primaryText="Show"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="Show Level 2" />,
              <MenuItem primaryText="Grid lines" checked={true} />,
              <MenuItem primaryText="Page breaks" insetChildren={true} />,
              <MenuItem primaryText="Rules" checked={true} />,
            ]}
          />,
          <MenuItem primaryText="Grid lines" checked={true} />,
          <MenuItem primaryText="Page breaks" insetChildren={true} />,
          <MenuItem primaryText="Rules" checked={true} />,
        ]}
      />
      <Divider />
      <MenuItem primaryText="Add space before paragraph" />
      <MenuItem primaryText="Add space after paragraph" />
      <Divider />
      <MenuItem primaryText="Custom spacing..." />
    </Menu>
        </Popover>
      </div>
    );
  }
}
