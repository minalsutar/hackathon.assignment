
import React, { useState } from 'react';

const Category = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', description: 'Lorem ipsum', status: 'Active' },
    { id: 2, name: 'Jane Doe', description: 'Dolor sit amet', status: 'Inactive' },
  ]);

  const [newData, setNewData] = useState({ id: '', name: '', description: '', status: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (editIndex !== null) {
      // Edit existing row
      const updatedData = [...data];
      updatedData[editIndex] = newData;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Add new row
      setData([...data, { ...newData, id: data.length + 1 }]);
    }

    // Clear the form
    setNewData({ id: '', name: '', description: '', status: '' });
  };

  const handleEdit = (index) => {
    setNewData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.status}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2>Add/Edit Row</h2>
        <label>ID:</label>
        <input type="text" name="id" value={newData.id} onChange={handleInputChange} disabled />
        <label>Name:</label>
        <input type="text" name="name" value={newData.name} onChange={handleInputChange} />
        <label>Description:</label>
        <input type="text" name="description" value={newData.description} onChange={handleInputChange} />
        <label>Status:</label>
        <input type="text" name="status" value={newData.status} onChange={handleInputChange} />
        <button onClick={handleAdd}>Add/Edit</button>
      </div>
    </div>
  );
};

export default Category;