import { useEffect, useState } from "react";
import axios from "axios";
import "./MotorList.css";

export default function MotorList() {
  const [motors, setMotors] = useState([]);
  const [search, setSearch] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [updateData, setUpdateData] = useState({ name: "", category: "", price: "" });

  useEffect(() => {
    fetchMotors();
  }, []);

  const fetchMotors = () => {
    axios.get("http://localhost:3000/Products/getall")
      .then(res => setMotors(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this motor?")) {
      axios.delete(`http://localhost:3000/Products/${id}`)
        .then(() => setMotors(prevMotors => prevMotors.filter(motor => motor.id !== id)))
        .catch(() => alert("Error deleting motor"));
    }
  };

  const handleSearch = () => {
    (function() {
      axios.get(`http://localhost:3000/Products/search/${search}`)
        .then(res => setMotors(res.data))
        .catch(() => alert("Search failed"));
    })();
  };

  const handleCancelSearch = () => {
    setSearch("");
    fetchMotors();
  };

  // Update logic
  const handleUpdateClick = (motor) => {
    setUpdateId(motor.id);
    setUpdateData({ name: motor.name, category: motor.category, price: motor.price });
  };

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdateSave = (id) => {
    axios.put(`http://localhost:3000/Products/${id}`, updateData)
      .then(() => {
        setMotors(prevMotors =>
          prevMotors.map(motor =>
            motor.id === id ? { ...motor, ...updateData } : motor
          )
        );
        setUpdateId(null);
      })
      .catch(() => alert("Update failed"));
  };

  const handleUpdateCancel = () => {
    setUpdateId(null);
  };

  return (
    <div>
      <form style={{textAlign: "center", marginBottom: "2rem"}}>
        <input
          type="text"
          placeholder="Search motors..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc"}}
        />
        <button
          type="button"
          style={{marginLeft: "1rem"}}
          onClick={handleSearch}
        >
          Search
        </button>
        {search && (
          <button
            type="button"
            style={{marginLeft: "1rem", background: "#ccc"}}
            onClick={handleCancelSearch}
          >
            Cancel Search
          </button>
        )}
      </form>
      <div className="motor-list">
        {motors.map(motor => (
          <div key={motor.id} className="motor-card">
            {motor.image && <img src={motor.image} alt={motor.name} className="motor-img" />}
            <div className="motor-info">
              {updateId === motor.id ? (
                <>
                  <input
                    name="name"
                    value={updateData.name}
                    onChange={handleUpdateChange}
                    placeholder="Name"
                  />
                  <input
                    name="category"
                    value={updateData.category}
                    onChange={handleUpdateChange}
                    placeholder="Category"
                  />
                  <input
                    name="price"
                    value={updateData.price}
                    onChange={handleUpdateChange}
                    placeholder="Price"
                    type="number"
                  />
                  <button
                    onClick={() => handleUpdateSave(motor.id)}
                    style={{marginTop: "1rem", background: "#27ae60"}}
                  >
                    Save
                  </button>
                  <button
                    onClick={handleUpdateCancel}
                    style={{marginTop: "1rem", marginLeft: "1rem"}}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3>{motor.name}</h3>
                  <p><b>Category:</b> {motor.category}</p>
                  <p><b>Price:</b> ${motor.price}</p>
                  <button
                    onClick={() => handleUpdateClick(motor)}
                    style={{marginTop: "1rem", background: "#2980b9"}}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(motor.id)}
                    style={{marginTop: "1rem", marginLeft: "1rem", background: "#e74c3c"}}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}