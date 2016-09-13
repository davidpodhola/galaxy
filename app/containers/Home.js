//---MODULE IMPORTS---//

import React, {PropTypes, Component} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Drawer, AppBar, MenuItem} from 'material-ui'
import {Link} from 'react-router'

//---MODULE EXPORTS---//

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        });
        console.log("click")
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <Drawer docked={false} open={this.state.open}>
                    <MenuItem containerElement={< Link to = "/first" />} onTouchTap={this.handleClose}>First</MenuItem>
                    <MenuItem containerElement={< Link to = "/second" />} onTouchTap={this.handleClose}>Second</MenuItem>
                </Drawer>

                <AppBar title="Galaxy" onLeftIconButtonTouchTap={this.handleToggle}/>
                <div>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

Home.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default Home;
