import React from 'react';
//import nannyInfos from '../../fakedatanannies'
import DisplayNannies from './DisplayNannies';
import NannyProfile from './NannyProfile'
import axios from 'axios';
import $ from 'jquery';

class SearchNannies extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
        view : "feed",
        nannyInfos : [],
        currentNanny : {},
        }
    }

    componentDidMount() {
        let token = localStorage.getItem("auth-token");
        axios.get('http://localhost:5000/parent/SearchNannies', {headers: { 'x-auth-token': token }})
          .then(response => {
            console.log('Received data from server: ', response.data)
            this.setState({
              nannyInfos: response.data
            })
          })
          .catch(error => {
            console.error('Error fetching data from server: ', error)
          })
      }

      /*componentDidMount(){
        let token = localStorage.getItem("auth-token");
        $.post('http://localhost:5000/parent/SearchNannies', {headers: { 'x-auth-token': token }},
         (res) => {
                 console.log('server response: ',res)
                 this.setState({
                    nannyInfos: res
                  })
                 }
         )
      }*/





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
    