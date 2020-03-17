import axios from 'axios'
import './styles.css'
import { POSTS_URL, LOCAL_URL } from '../utils/index'
import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

export default class ListPost extends Component {
    state = {
        posts: [],
        links: '',
    }

    componentDidMount() {
        this.loadPosts(POSTS_URL)
    }

    loadPosts = async (url) => {
        await axios.get(url)
            .then((res) => {
                console.log(res.data);
                const posts = res.data.results
                this.setState({
                    posts,
                    links: res.data.links,
                })

            })
    }

    handleDelete = (id) => {
        let DELETE_URL = POSTS_URL + id;
        axios.delete(DELETE_URL)
            .then(res => {
                alert("Postagem deletada com sucesso !");
                window.scrollTo(0, 0);

            });

    }

    handleUpdate = (post) => {
        console.log(post)

    }

    prevPage = () => {
        let toPage = this.state.links.previous
        this.loadPosts(toPage);
    }

    nextPage = () => {
        let toPage = this.state.links.next
        this.loadPosts(toPage);
    }

    render() {
        const { links } = this.state
        const { posts } = this.state

        return (
            <div className="posts-list">
                <h1 align="center">Lista de postagens</h1>

                <a href={LOCAL_URL}>Cadastrar nova postagem</a><br /><br />

                <div className="pagination">
                    <button disabled={links.previous === null} onClick={this.prevPage}>Anterior</button>
                    <button disabled={links.next === null} onClick={this.nextPage}>Próximo</button>
                </div>

                <div className="content">
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
                            {posts.map((post) => {
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
            </div>
        )
    }
}
