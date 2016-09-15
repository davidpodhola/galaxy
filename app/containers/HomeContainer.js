//---MODULE IMPORTS---//

import React, {PropTypes, Component} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Drawer, AppBar, MenuItem} from 'material-ui'
import {Link} from 'react-router'

import CollectionsContainer from "./CollectionsContainer"

//---MODULE EXPORTS---//

class HomeContainer extends Component {

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
                <Drawer docked={false} open={this.state.open}  onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose}>Recent Articles</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Archive</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Completed</MenuItem>
                </Drawer>

                <AppBar title="Galaxy" onLeftIconButtonTouchTap={this.handleToggle}/>
                <CollectionsContainer/>

            </div>
        );

    }

}

HomeContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default HomeContainer;
