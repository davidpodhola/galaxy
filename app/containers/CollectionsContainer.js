//---MODULE IMPORTS---//

import React, {PropTypes, Component} from 'react'
import Collections from "../components/Collections"

let collectionsMock = [{
        name: "mock1",
        info: "more info"
    }, {
        name: "mock2",
        info: "more info"
    }, {
        name: "mock3",
        info: "more info"
    }, {
        name: "mock4",
        info: "more info"
    }, {
        name: "mock5",
        info: "more info"
    }, {
        name: "mock6",
        info: "more info"
    },
    {
        name: "mock7",
        info: "more info"
    },
]

//---MODULE EXPORTS---//

// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes

class CollectionsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : []
        }
    }

    componentWillMount() {
        // TODO: collections state should be an axios GET call in the component or passed from the LoginContainer?
        var self = this;
        this.setState(
          Object.assign(self.state, { collections: collectionsMock } )
        );
    }

    render() {
        return (
            <Collections collections={this.state.collections}/>
        );
    }

}

export default CollectionsContainer;
