//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import Collection from '../components/Collection'

// https://quickleft.com/blog/redux-plain-english-workflow/

const CollectionsContainer = React.createClass({

  propTypes: {
    collections : PropTypes.array.isRequired
  },

componentWillMount() {
  console.log(this.props.collections);
},

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
      )
  }

})

function mapStateToProps(state) {

console.log(state);

    return {
      collections: state.collectionsReducer.collections,
    }
}

export default connect(mapStateToProps)(CollectionsContainer)
