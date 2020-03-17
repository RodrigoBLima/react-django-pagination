import React, { Component } from 'react'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import ListPost from './ListPost'


const POST_URL = 'http://127.0.0.1:8001/api/posts/';
export default class FormPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
      publish: '',
      error: '',
      success: '',

    }
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  formData() {
    let form_data = new FormData();

    // title: '',
    //   author: '',
    //   body: '',
    //   publish: '',

    form_data.append('title', this.state.title)
    form_data.append('author', this.state.author)
    form_data.append('body', this.state.body)
    form_data.append('publish', this.state.publish)

    return form_data
  }

  handleSave(e) {
    e.preventDefault();

    axios({
      method: 'POST',
      url: POST_URL,
      data: this.formData(),
      headers: { 'Content-Type': 'multipart/form-data' },
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    let error
    let success
    if (this.state.error === true) {
      error = <div>'Deu ruim amigo' </div>
    }
    if (this.state.success === true) {
      success = <div>'Deu sucesso amigo' </div>
    }
    return (
      <div>
        {error}
        {success}

        <h1 align="center">Fazer um post</h1>
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
            type="date"
            name="publish"
            onChange={this.handleChange}
          /><br /><br />
          {/* <Button variant="contained"
            color="primary"
            size="small"
            className=""
            startIcon={<SaveIcon />}
          >Salvar </Button> */}

          <input
            type="submit"
          /><br /><br />


        </form>

        {/* <ListPost /> */}
      </div>
    )
  }
}
