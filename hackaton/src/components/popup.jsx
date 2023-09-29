import React, { useState } from "react";
import "../App.css";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulier ingediend:", formData);
    setFormData({
      name: "",
      email: "",
      date: "",
    });
    togglePopup();
  };

  return (
    <div className="popup-container">
      <button className="open--button" onClick={togglePopup}>
        Maak een afspraak
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={togglePopup}>
              &times;
            </span>
            <h2>Afspraak maken bij een personal trainer</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Naam:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                E-mail:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Datum:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit">Afspraak maken</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
