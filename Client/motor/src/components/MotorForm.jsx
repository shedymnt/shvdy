import { useState } from "react";
import axios from "axios";
import "./MotorForm.css";


export default function MotorForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "sports",
    image: ""
  });

  const Change = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Submit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/products/create", form);
      alert("Motor added!");
    } catch (err) {
      alert("Error adding motor");
    }
  };

  return (
    <form onSubmit={Submit}>
      <input name="name" placeholder="Name" value={form.name} onChange={Change} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={Change} required />
      <select name="category" value={form.category} onChange={Change}>
        <option value="sports">Sports</option>
        <option value="rare">Rare</option>
        <option value="high performance">High Performance</option>
        <option value="low performance">Low Performance</option>
      </select>
      <input name="image" placeholder="Image URL" value={form.image} onChange={Change} />
      <button type="submit">Add Motor</button>
    </form>
  );
}