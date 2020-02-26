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

const PAGINATION_URL = 'http://127.0.0.1:8000/api/posts/';
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
            count: 0,

        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillMount() {
        console.log('will');
        console.log(PAGINATION_URL);
        axios.get(PAGINATION_URL)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    posts: res.data
                })

            })
    }
    handleDelete = (id) => {
        console.log(id);
        // let DELETE_URL = PAGINATION_URL + id;
        // console.log(DELETE_URL)
    }

    render() {
        return (
            <div>
                <h1 align="center">Lista de posts</h1>

                <div className="pagination">
                    <a href="#">&laquo;</a>
                    
                    <a href="#">1</a>
                    <a className="active" href="#">2</a>
                    <a href="#">3</a>
                    
                    
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
                        {this.state.posts.map(function (post) {
                            return <>
                                <TableRow>

                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.author}</TableCell>
                                    <TableCell>{post.body}</TableCell>
                                    <TableCell>{post.publish}</TableCell>
                                    <TableCell>
                                    {/* onClick={(e) => this.handleDelete(e,post.id)} */}
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="update">
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
