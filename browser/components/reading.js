import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';
import longform from '../../data';

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

  show2014List(){
    const filteredList = longform.filter(article => {
      if (article.year === "2014"){
        return article;
      }
    })

    const selectedList = filteredList.map(article =>{
      return {
        genre: article.genre,
        title: article.title,
        article: article.article,
        caption: article.caption,
        author: article.author
      }
    })
      this.setState({
        list: selectedList
    })
  }

  show2015List(){
    const filteredList = longform.filter(article => {
      if (article.year === "2015"){
        return article;
      }
    })
    const selectedList = filteredList.map(article =>{
      return {
        genre: article.genre,
        title: article.title,
        article: article.article,
        caption: article.caption,
        author: article.author
      }
    })
      this.setState({
        list: selectedList
    })
  }

  show2016List(){
    const filteredList = longform.filter(article => {
      if (article.year === "2016"){
        return article;
      }
    })
    const selectedList = filteredList.map(article =>{
      return {
        genre: article.genre,
        title: article.title,
        article: article.article,
        caption: article.caption,
        author: article.author
      }
    })
      this.setState({
        list: selectedList
    })
  }

      render () {
        return (
          <div id="reading-page">
        <Navbar />
        <div>

        <div id="reading-text">
          The best stuff I read each year.
        </div>

        <div id="articles-border">
          {
            this.state.list.map(article => {
              return (
                <div id="list-text">
                <a href={article.article}>{article.title}</a>: {article.caption}
                </div>
              )
            })
          }
        </div>

        <div className="btn-group btn-sample" role="group">
            <button type="button" className="btn btn-default" onClick={this.show2014List}>twenty fourteen.</button>
            <button type="button" className="btn btn-default" onClick={this.show2015List}>twenty fifteen.</button>
            <button type="button" className="btn btn-default" onClick={this.show2016List}>twenty sixteen.</button>
        </div>

        </div>
        <img src="files/img/books.jpg" />
        <div id="reading-caption">
        <h5>livraria ler devagar, bairro de alcantara, lisboa.</h5>
        </div>
      </div>
        )
       }
     }
