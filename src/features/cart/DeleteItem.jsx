import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispath = useDispatch();
  return (
    <Button type="small" onClick={() => dispath(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
