import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        //FORM
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        //LIST
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Add' />
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList 
                    list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} 
                    handleRemove={this.handleRemove} />
            </div>
        )
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then( resp => this.setState({
                 ...this.state, 
                 description, 
                 list: resp.data 
            })
        )
    }

    handleAdd() {
        const description = this.state.description

        if(description !== '') {
            axios.post(URL, { description })
                .then( resp => this.refresh() )
        }
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

}