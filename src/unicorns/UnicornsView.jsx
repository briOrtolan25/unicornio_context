import React, { useEffect, useState } from "react";

const UnicornsView = ({
  unicorns,
  onCreate,
  onUpdate,
  onDelete,
  selectedUnicorn,
  openEditDialog,
  isDialogOpen,
  closeDialog,
}) => {
  const [form, setForm] = useState({ name: "", color: "", age: "", poder: ""});

  useEffect(() => {
    if (selectedUnicorn) {
      setForm(selectedUnicorn);
    } else {
      setForm({ name: "", color: "", age: "", poder: ""});
    }
  }, [selectedUnicorn]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      onUpdate(form);
    } else {
      onCreate(form);
    }
    closeDialog();
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🦄 Lista de Unicornios</h1>

      <button onClick={() => openEditDialog(null)}>Crear Unicornio</button>

      <table border="1" cellPadding="8" style={{ marginTop: "1rem", width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Color</th>
            <th>Edad</th>
            <th>Poder</th>
          </tr>
        </thead>
        <tbody>
          {unicorns.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.color}</td>
              <td>{u.age}</td>
              <td>{u.poder}</td>
              <td>
                <button onClick={() => openEditDialog(u)}>Editar</button>
                <button onClick={() => onDelete(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDialogOpen && (
        <div style={{ marginTop: "2rem", border: "1px solid gray", padding: "1rem" }}>
          <h2>{form.id ? "Editar Unicornio" : "Nuevo Unicornio"}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre: </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="color">Color: </label>
              <input
                type="text"
                name="color"
                id="color"
                value={form.color}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="age">Edad: </label>
              <input
                type="number"
                name="age"
                id="age"
                value={form.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="power">Poder: </label>
              <input
                type="text"
                name="power"
                id="power"
                value={form.power}
                onChange={handleInputChange}
                required
              />
            </div>

            <br />
            <button type="submit">Guardar</button>
            <button type="button" onClick={closeDialog}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UnicornsView;
