import React, { useCallback, useEffect, useState } from 'react';
import TodoItemProduct from '../../../components/todoIItemProduct/todoItemProduct';
import "./styles.scss"

import { observer } from "mobx-react";
import todoStores from '../../../todoStore/todoStore';


const TodoListproduct = props => {
    
    return (
        <div className='listProduct'>
            {
                    props.dataProduct && props.dataProduct.map((item,index)=>(
                        <TodoItemProduct handleAddCart={props.handleAddCart} item={item} key={index} hand />
                    ))
                
            }
        </div>
    );
};


export default observer(TodoListproduct);