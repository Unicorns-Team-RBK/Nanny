import React from 'react';
//import nannyInfos from '../../fakedatanannies'
import DisplayNannies from './DisplayNannies';


import "../Css files/Searchnannies.css";

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


    

    render(){
      const { view } = this.state;
        return (
            <div>
                <div className="Selection">
                <div>
                <label>Region</label>
                </div>
                <div>
                <select>
                    <option>Tunis</option>
                    <option>Ben Arous</option>
                    <option>Bizerte</option>
                    <option>Sousse</option>
                    <option>Mahdia</option>
                    <option>Sfax</option>
                    <option>Gabes</option>
                    <option>Nabeul</option>
                    <option>Monastir</option>
                    <option>kasserine</option>
                    <option>Kef</option>
                    <option>Beja</option>
                    <option>Gafsa</option>
                    <option>Tataouine</option>
                    <option>Sidi bouzid</option>
                    <option>Jendouba</option>
                    <option>Siliana</option>
                    <option>Kairouan</option>
                    <option>Tozeur</option>
                    <option>Ariana</option>
                    <option>Mednin</option>
                    <option>Kebili</option>
                    <option>Mennouba</option>
                    <option>Zaghouan</option>
                </select>
                </div>
                <div>
                <label>Day</label>
                </div>
                <div>
                <select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>
                </div>
                <div>
                <label>Time</label>
                </div>
                <div>
                <select>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Night</option>
                </select>
                </div>
                <button>SEARCH</button>
                </div>
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
    