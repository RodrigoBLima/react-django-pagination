import axios from 'axios';
import './styles.css'
import { POSTS_URL, LOCAL_URL } from '../utils/index'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class FormPost extends Component {
    state = {
      title: '',
      author: '',
      body: '',
      publish: '',
      error: '',
      success: '',

    }
    

  formData() {
    let form_data = new FormData();

    form_data.append('title', this.state.title)
    form_data.append('author', this.state.author)
    form_data.append('body', this.state.body)
    form_data.append('publish', this.state.publish)

    return form_data
  }

  handleSave = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: POSTS_URL,
      data: this.formData(),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log('foi');
          this.setState({ success: true })
        }
        else {
          console.log('não foi')
          this.setState({ error: true })
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    let error, success


    if (this.state.error === true) {
      error = <div>Deu ruim amigo </div>
    }

    if (this.state.success === true) {
      success = <div>Deu sucesso amigo </div>
    }

    return (
      <div className="create-posts">
        {error}
        {success}

        <h1 align="center">Crie um novo post</h1>
        <a href={LOCAL_URL + `list`}>Listagem de posts</a>

        <div className="content">
          <br /><br />
          <form onSubmit={this.handleSave}>
            <TextField
              type="text"
              name="title"
              label="Titulo"
              variant="outlined"
              onChange={this.handleChange}
            /><br /><br />
            <TextField
              type="text"
              name="author"
              label="Autor"
              variant="outlined"
              onChange={this.handleChange}
            /><br /><br />
            <TextField
              name="body"
              label="Mensagem"
              variant="outlined"
              onChange={this.handleChange}
            /><br /><br />
            <input
              className="data"
              type="date"
              name="publish"
              onChange={this.handleChange}
            /><br /><br />

            <input
              className="submit"
              type="submit"
            /><br /><br />


          </form>
        </div>

      </div>
    )
  }
}
