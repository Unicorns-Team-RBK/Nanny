import React from 'react';
import nannyInfos from '../../fakedatanannies'
import DisplayNannies from './DisplayNannies';
import NannyProfile from './NannyProfile'

class SearchNannies extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
        view : "feed",
        nannyInfos : nannyInfos,
        currentNanny : {},
        }
    }

    changeView(option, index) {
        this.setState({
          view: [option],
          currentNanny: this.state.nannyInfos[index]
        });
    }
    
    // renderView() {
    //     const { view } = this.state;
    
    //     if (view === 'feed') {
    //       return <DisplayNannies nannyInfos={this.state.nannyInfos} handleClick={(index) => this.changeView('anypostview', index)} />
    //     } else {
    //       return <NannyProfile post={this.state.currentPost} />
    //     }
    //   }

    render(){
      const { view } = this.state;
        return (
            <div>
                <button>SEARCH</button>
                <div className="main">
                    {
                       view === 'feed' ?
                         <DisplayNannies nannyInfos={this.state.nannyInfos} handleClick={(index) => this.changeView('anypostview', index)} />
                        :
                         <NannyProfile Info={this.state.currentNanny} />
                    }
                </div>
            </div>
        )
    }
}      
     
export default  SearchNannies;
    