import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    studentID: "",
    class: "",
    phone: "",
    address: "",
    dob: "",
    guardian: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <p>Fill out the form carefully for registration</p>

        <div className="form-row">
          <label>Student Name</label>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Student ID</label>
        <input
          type="text"
          name="studentID"
          placeholder="Enter Student ID"
          value={formData.studentID}
          onChange={handleChange}
          required
        />

        <label>Class</label>
        <input
          type="text"
          name="class"
          placeholder="Enter Class"
          value={formData.class}
          onChange={handleChange}
          required
        />

        {/* New Fields Start Here */}

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Guardian Name</label>
        <input
          type="text"
          name="guardian"
          placeholder="Enter Guardian Name"
          value={formData.guardian}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
