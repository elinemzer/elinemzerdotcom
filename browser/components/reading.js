import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import longform from '../../data';
import classNames from 'classnames';

export default class Reading extends Component {
  constructor(props){
    super(props);
      this.state = {
        list: []
      }
      this.show2014List = this.show2014List.bind(this);
      this.show2015List = this.show2015List.bind(this);
      this.show2016List = this.show2016List.bind(this);
  }

  componentWillMount() {
    this.show2016List();
  }

  show2014List(){
    const filteredList = longform.filter(article => {
      if (article.year === "2014"){
        return article;
      }
    })

    const selected2014List = filteredList.map(article =>{
      return {
        genre: article.genre,
        title: article.title,
        article: article.article,
        caption: article.caption,
        author: article.author
      }
    })
      this.setState({
        list: selected2014List
    })
  }

  show2015List(){
    const filteredList = longform.filter(article => {
      if (article.year === "2015"){
        return article;
      }
    })
    const selected2015List = filteredList.map(article =>{
      return {
        genre: article.genre,
        title: article.title,
        article: article.article,
        caption: article.caption,
        author: article.author
      }
    })
      this.setState({
        list: selected2015List
    })
  }

  show2016List(){
    const filteredList = longform.filter(article => {
      if (article.year === "2016"){
        return article;
      }
    })
    const selected2016List = filteredList.map(article =>{
      return {
        genre: article.genre,
        title: article.title,
        article: article.article,
        caption: article.caption,
        author: article.author
      }
    })
      this.setState({
        list: selected2016List
    })
  }

      render () {

        return (
          <div id="reading-page">
            <Navbar />
          <div className="container-fluid">
            <div id="reading-text">
              The best stuff I read each year.
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <ul className="nav nav-tabs col-md-offset-5">
                <li role="presentation"  onClick={this.show2014List}><a href='#/reading'>twenty fourteen.</a></li>
                <li role="presentation"  onClick={this.show2015List}><a href='#/reading'>twenty fifteen.</a></li>
                <li role="presentation"  onClick={this.show2016List}><a href='#/reading'>twenty sixteen.</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-5">
              <img  src="files/img/books.jpg" />
              <div id="reading-caption">
              <h5>livraria ler devagar, bairro de alcantara, lisboa.</h5>
              </div>
            </div>


              <div className="col-md-7" id="articles-border">
                {
                  this.state.list.map(article => {
                    return (
                      <div id="list-text" key={article.title}>
                        <a href={article.article}>{article.title}</a>: {article.caption}
                      </div>
                    )
                  })
                }
              </div>
            </div>

        </div>

      </div>
        )
       }
     }
