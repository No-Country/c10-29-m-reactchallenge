import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../redux/features/auth/authenticationSlice";
import "./ProfileForm.css";

const ProfileForm = ({ user }) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    dni: user.dni,
    birthday: user.birthday,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={true}
      />

      <label htmlFor="dni">DNI:</label>
      <input
        type="text"
        id="dni"
        name="dni"
        value={formData.dni}
        onChange={handleChange}
        required
      />

      <label htmlFor="birthday">Fecha de nacimiento:</label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={formData.birthday}
        onChange={handleChange}
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ProfileForm;
