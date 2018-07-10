import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'


export default props => (
    <div>
        <PageHeader name='Tasks' small='Add' />
        <TodoForm />
        <TodoList />
    </div>
)