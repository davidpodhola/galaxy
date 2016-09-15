import React, {PropTypes, Component} from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 120,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Collection extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
             <Paper style={style} zDepth={2}>
                <h1> {this.props.name} </h1>
                <h2> {this.props.info} </h2>
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
