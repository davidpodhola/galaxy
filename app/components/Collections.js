//---MODULE IMPORTS---//

import React, { PropTypes, Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import Collection from '../components/Collection'

//---MODULE EXPORTS---//

class Collections extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <GridList cols={3} cellHeight={200}>
                {this.props.collections.map((coll,  i) => (
                    <Collection
                        key={i}
                        name={coll.name}
                        info={coll.info}
                        />
                ))}
            </GridList>
        );
    }
}

Collections.propTypes = {
    collections: PropTypes.array.isRequired
}

export default Collections;
