import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './navbar'

export default class Reading extends Component {
  constructor(props){
    super(props);
      this.state = {
        show2014List: false,
        show2015List: false,
        show2016List: false
      }
      this.show2014List = this.show2014List.bind(this);
      this.show2015List = this.show2015List.bind(this);
      this.show2016List = this.show2016List.bind(this);
  }

  show2014List(props){
      this.setState({
        show2014List: true
    })
    return <twentyFourteen />
  }

  show2015List(){
      this.setState({
        show2015List: true
    })
    console.log('bonjour')
  }

  show2016List(){
      this.setState({
        show2016List: true
    })
    console.log('bonjour')
  }


      render () {
        return (
          <div id="reading-page">
        <Navbar />
        <div>

        <div id="reading-text">
          The best stuff I read each year.
        </div>

        <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={this.show2014List}>twenty fourteen.</button>
            <button type="button" className="btn btn-default" onClick={this.show2015List}>twenty fifteen.</button>
            <button type="button" className="btn btn-default" onClick={this.show2016List}>twenty sixteen.</button>
        </div>

        </div>
        <img src="files/img/books.jpg" />
      </div>
        )
       }
     }
