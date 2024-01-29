"use client"
// components/UserManagement.js
import react, { useState } from 'react'


export default function WholesalerRoleForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, role, phoneNumber })
  }

  return (
    <div className="p-6 max-w-2xl mx-auto ">
      <h2 className="text-2xl font-bold mt-20 text-gray-900">User Management</h2>
      <div className="mt-6">
        <h3 className="text-lg font-medium bg-blue-400 p-4 text-center rounded-lg text-white">Admin users  Users</h3>
        <h4 className="text-lg font-medium bg-blue-300 p-3 text-white text-center rounded-lg">Add Users</h4>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email ID *
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Roles *
          </label>
          <div className="mt-1">
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="block w-full appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="block w-full appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            BACK
          </button>
          <button
            type="submit"
            className="ml-3 group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-[#0e547e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  )
}