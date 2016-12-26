import React from 'react';
import {MenuBar, MenuItem, Menu, Separator} from 'react-menu-bar';

class MyMenuBar extends React.Component {

  render() {
    return (
      <MenuBar onSelect={this.onSelect}>
        <MenuItem label="File">
          <Menu>
            <MenuItem command="new-window">New Window</MenuItem>
            <MenuItem command="new-file">New File</MenuItem>
          </Menu>
        </MenuItem>

        <MenuItem label="Edit">
          <Menu>
            <MenuItem command="undo">Undo</MenuItem>
            <MenuItem command="redo">Redo</MenuItem>
            <Separator />
            <MenuItem label="Find">
              <Menu>
                <MenuItem command="find">Find…</MenuItem>
                <MenuItem command="find-next">Find Next</MenuItem>
                <MenuItem command="find-previous">Find Previous</MenuItem>
                <MenuItem command="use-selection-for-find">Use Selection For Find</MenuItem>
              </Menu>
            </MenuItem>
          </Menu>
        </MenuItem>
      </MenuBar>
    );
  }
}

export default MyMenuBar;
