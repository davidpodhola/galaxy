import React, {PropTypes, Component} from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    paper: {
        height: 120,
        width: 200,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    button: {
        // margin: 12
    }
};

class Collection extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
             <Paper style={styles.paper} zDepth={2}>
                <h1> {this.props.name} </h1>
                <h2> {this.props.info} </h2>

                    <RaisedButton
                          label="Delete"
                          labelPosition="before"
                          style={styles.button}
                        />

            </Paper>
        )
    }

}

Collection.propTypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
};

Collection.defaultProps = {
    name: "",
    info: ""
}

export default Collection
