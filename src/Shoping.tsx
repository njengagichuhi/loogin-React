import React from 'react'
import { useState } from 'react'

const Shoping = () => {
    const [profile, setProfile] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
      };
  return (
    <div className='container m-3 bg-danger'><form  onSubmit={handleSubmit}>
        <div className='form-group d-block'>
    <input
    className='p-2 m-2'
      value={profile.firstName || ''}
      onChange={handleChange}
      name="firstName"
      type="text"
      placeholder="First Name"
    />
    <input
    className='p-2 m-2'
      value={profile.lastName || ''}
      onChange={handleChange}
      type="text"
      name="lastName"
      placeholder="Last Name"
    />
    <input
    className='p-2 m-2'
      value={profile.bday || ''}
      onChange={handleChange}
      type="date"
      name="bday"
    />
    <input
    className='p-2 m-2'
      value={profile.password || ''}
      onChange={handleChange}
      type="password"
      name="password"
      placeholder="Password"
    />
    <button className='p-2 m-2' type="submit">Save Profile</button>
    </div>
  </form>
</div>
  )
}

export default Shoping