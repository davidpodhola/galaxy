//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux'

import { addCollection } from '../redux/actions'
import Collection from '../components/Collection'

// https://quickleft.com/blog/redux-plain-english-workflow/

var styles = {
  container: {
    width: '100%',
    height: '100%%'
  },
  header :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center',
    padding: 5,
  }
};



let createHandlers = function(dispatch) {
  let onClick = function(node, data) {
    dispatch( addCollection( ))
  };

  return {
    onClick,
    // other handlers
  };
}

const CollectionsContainer = React.createClass({

  propTypes: {
    collections : PropTypes.array.isRequired
  },

componentWillReceiveProps(nextProps) {
  console.log('nextProps:' + nextProps);
},

componentWillMount() {
  console.log(this.props.collections);
},

  render() {

// const handlers = createHandlers(this.props.dispatch);

// console.log(handlers);

      return (
        <div style={styles.container}>
          <div style={styles.header}>
            <div>
              {"SEARCH"}
            </div>
            <div>
              <RaisedButton
                label="New"
                icon={
                  <FontIcon className="material-icons">
                    {'+'}
                  </FontIcon>
                }
                onClick={this.props.onClick}
                />
            </div>
          </div>
          <GridList cols={3} cellHeight={200}>
            {this.props.collections.map((coll,  i) => (
              <Collection
                key={coll.id}
                name={coll.name}
                info={coll.info}
                />
            ))}
          </GridList>
        </div>
      )
  }

})

function mapStateToProps(state, ownProps) {
// console.log(state);
    return {
      collections: state.collectionsReducer.collections,
      // collections: state.collections,
    }
}

// https://github.com/reactjs/redux/issues/916

function mapDispatchToProps (dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(addCollection())
        }
    }
}

// export default connect(mapStateToProps)(CollectionsContainer)
export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer)
