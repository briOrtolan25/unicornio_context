import React, { useState, useEffect } from 'react';
import UnicornsView from './UnicornsView';

const UnicornsContainer = () => {
  const [unicorns, setUnicorns] = useState([]);
  const [selectedUnicorn, setSelectedUnicorn] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const API_URL = 'https://crudcrud.com/api/afb22a452a8a4a2a2a2cadda52e4d78a6/unicorns '; // API

  useEffect(() => {
    getUnicorns();
  }, []);

  const getUnicorns = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUnicorns(data);
  };

  const handleCreate = async (newUnicorn) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUnicorn),
    });
    getUnicorns();
  };

  const handleUpdate = async (updatedUnicorn) => {
    await fetch(`${API_URL}/${updatedUnicorn.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUnicorn),
    });
    getUnicorns();
    setSelectedUnicorn(null);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    getUnicorns();
  };

  const openEditDialog = (unicorn) => {
    setSelectedUnicorn(unicorn);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedUnicorn(null);
    setIsDialogOpen(false);
  };

  return (
    <UnicornsView
      unicorns={unicorns}
      onCreate={handleCreate}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      selectedUnicorn={selectedUnicorn}
      openEditDialog={openEditDialog}
      isDialogOpen={isDialogOpen}
      closeDialog={closeDialog}
    />
  );
};

export default UnicornsContainer;
