import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import './utils/todo.css'

const PAGINATION_URL = 'http://127.0.0.1:8001/api/posts/';


export default class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                "id": 2,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 3,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 4,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 5,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 6,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 7,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 8,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 9,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            },
            {
                "id": 10,
                "title": "T5t3eaaaa",
                "author": "Michael Connor",
                "body": "aaaaaaaaaaaa",
                "publish": "2020-02-26T19:38:01.602653Z"
            }
            ],
            links: ''
            // links: {
            //     "next": null,
            //     "previous": "http://127.0.0.1:8001/api/posts/"
            // },


        }
        // this.handleDelete = this.handleDelete.bind(this)
        // this.handleUpdate = this.handleUpdate.bind(this)

    }

    componentDidMount() {
        this.loadPosts(PAGINATION_URL)
    }

    loadPosts = async (url) => {
       await axios.get(url)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    posts: res.data,
                    links: res.data.links,
                })

            })
    }
    handleDelete = (id) => {
        console.log(id);
        let DELETE_URL = PAGINATION_URL + id;
        console.log(DELETE_URL)
    }

    handleUpdate = (post) => {
        console.log(post)

    }

    prevPage = () => {
        // let toPage = this.state.links.previous
        console.log(this.state.links.previous)
        // this.loadPosts(toPage);
    }

    nextPage = () => {

        // let toPage = this.state.links.next
        console.log(this.state.links.next)

        // this.loadPosts(toPage);
    }

    render() {
        return (
            <div>
                <h1 align="center">Lista de posts</h1>

                <div className="pagination">
                    <a href="#">&laquo;</a>

                    <a href="#" onClick={this.prevPage}>Anterior</a>
                    <a href="#" onClick={this.nextPage}>Próximo</a>


                    <a href="#">&raquo;</a>
                </div>

                <Table className="" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell>Mensagem</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.posts.map((post) => {
                            return <>
                                <TableRow key={post.id}>

                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.author}</TableCell>
                                    <TableCell>{post.body}</TableCell>
                                    <TableCell>{post.publish}</TableCell>
                                    <TableCell>
                                        <IconButton aria-label="delete" onClick={() => this.handleDelete(post.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="update" onClick={() => this.handleUpdate(post)}>
                                            <CloudUploadIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </>
                        })}

                    </TableBody>
                </Table>
            </div>
        )
    }
}
