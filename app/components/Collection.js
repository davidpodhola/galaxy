import React, {PropTypes, Component} from 'react'

class Collection extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <h2> {this.props.info} </h2>
            </div>
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
