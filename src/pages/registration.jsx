"use client";
import React, { useState } from 'react'
import { Users, Trophy, Zap } from 'lucide-react'

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    track: '',
    members: Array(4).fill(null).map(() => ({
      name: '',
      registerNumber: '',
      year: '',
      college: '',
      email: '',
      phoneNumber: ''
    }))
  })

  const [errors, setErrors] = useState({
    teamName: '',
    track: '',
    members: Array(4).fill(null).map(() => ({
      name: '', registerNumber: '', year: '', college: '', email: '', phoneNumber: ''
    }))
  })

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email.trim())
  }

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone)
  }

  const validateRegisterNumber = (regNo) => {
    return /^[A-Z0-9]+$/i.test(regNo.trim()) && regNo.trim().length > 0
  }

  const validateYear = (year) => {
    const validYears = ['1st', '2nd', '3rd', '4th', '1', '2', '3', '4', 'first', 'second', 'third', 'fourth']
    return validYears.includes(year.toLowerCase().trim())
  }

  const validateName = (name) => {
    return /^[a-zA-Z\s]{2,}$/.test(name.trim())
  }

  const handleTeamChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members]
    newMembers[index] = { ...newMembers[index], [field]: value }
    setFormData(prev => ({ ...prev, members: newMembers }))

    if (errors.members[index][field]) {
      const newErrors = { ...errors }
      newErrors.members[index] = { ...newErrors.members[index], [field]: '' }
      setErrors(newErrors)
    }
  }

  const validateForm = () => {
    const newErrors = {
      teamName: '',
      track: '',
      members: Array(4).fill(null).map(() => ({
        name: '', registerNumber: '', year: '', college: '', email: '', phoneNumber: ''
      }))
    }

    let isValid = true

    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required'
      isValid = false
    } else if (formData.teamName.trim().length < 3) {
      newErrors.teamName = 'Team name must be at least 3 characters'
      isValid = false
    } else if (formData.teamName.trim().length > 50) {
      newErrors.teamName = 'Team name must not exceed 50 characters'
      isValid = false
    }

    if (!formData.track.trim()) {
      newErrors.track = 'Domain is required'
      isValid = false
    } else if (formData.track.trim().length < 2) {
      newErrors.track = 'Domain must be at least 2 characters'
      isValid = false
    }

    for (let i = 0; i < 2; i++) {
      const member = formData.members[i]

      if (!member.name.trim()) {
        newErrors.members[i].name = 'Name is required'
        isValid = false
      } else if (!validateName(member.name)) {
        newErrors.members[i].name = 'Name should contain only letters (minimum 2 characters)'
        isValid = false
      }

      if (!member.registerNumber.trim()) {
        newErrors.members[i].registerNumber = 'Register number is required'
        isValid = false
      } else if (!validateRegisterNumber(member.registerNumber)) {
        newErrors.members[i].registerNumber = 'Register number must contain only letters and numbers'
        isValid = false
      }

      if (!member.year.trim()) {
        newErrors.members[i].year = 'Year is required'
        isValid = false
      } else if (!validateYear(member.year)) {
        newErrors.members[i].year = 'Enter valid year (1st, 2nd, 3rd, or 4th)'
        isValid = false
      }

      if (!member.college.trim()) {
        newErrors.members[i].college = 'College is required'
        isValid = false
      } else if (member.college.trim().length < 3) {
        newErrors.members[i].college = 'College name must be at least 3 characters'
        isValid = false
      }

      if (!member.email.trim()) {
        newErrors.members[i].email = 'Email is required'
        isValid = false
      } else if (!validateEmail(member.email)) {
        newErrors.members[i].email = 'Enter a valid email address'
        isValid = false
      }

      if (!member.phoneNumber.trim()) {
        newErrors.members[i].phoneNumber = 'Phone number is required'
        isValid = false
      } else if (!validatePhone(member.phoneNumber)) {
        newErrors.members[i].phoneNumber = 'Phone number must be exactly 10 digits'
        isValid = false
      }

      if (Object.values(newErrors.members[i]).some(err => err)) isValid = false
    }

    for (let i = 2; i < 4; i++) {
      const member = formData.members[i]
      const hasAnyData = Object.values(member).some(val => val.trim())

      if (hasAnyData) {
        if (!member.name.trim()) {
          newErrors.members[i].name = 'Name is required'
        } else if (!validateName(member.name)) {
          newErrors.members[i].name = 'Name should contain only letters (minimum 2 characters)'
        }

        if (!member.registerNumber.trim()) {
          newErrors.members[i].registerNumber = 'Register number is required'
        } else if (!validateRegisterNumber(member.registerNumber)) {
          newErrors.members[i].registerNumber = 'Register number must contain only letters and numbers'
        }

        if (!member.year.trim()) {
          newErrors.members[i].year = 'Year is required'
        } else if (!validateYear(member.year)) {
          newErrors.members[i].year = 'Enter valid year (1st, 2nd, 3rd, or 4th)'
        }

        if (!member.college.trim()) {
          newErrors.members[i].college = 'College is required'
        } else if (member.college.trim().length < 3) {
          newErrors.members[i].college = 'College name must be at least 3 characters'
        }

        if (!member.email.trim()) {
          newErrors.members[i].email = 'Email is required'
        } else if (!validateEmail(member.email)) {
          newErrors.members[i].email = 'Enter a valid email address'
        }

        if (!member.phoneNumber.trim()) {
          newErrors.members[i].phoneNumber = 'Phone number is required'
        } else if (!validatePhone(member.phoneNumber)) {
          newErrors.members[i].phoneNumber = 'Phone number must be exactly 10 digits'
        }

        if (Object.values(newErrors.members[i]).some(err => err)) isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      const filledMembers = formData.members.filter((member, index) => {
        if (index < 2) return true
        return Object.values(member).some(val => val.trim())
      })

      const submissionData = {
        ...formData,
        members: filledMembers
      }

      console.log('Form Data:', submissionData)
      console.log('Total Members:', filledMembers.length)

      try {
        const response = await fetch('http://localhost:8000/registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        })

        if (response.ok) {
          alert(`Registration Successful! Your team has been registered with ${filledMembers.length} member${filledMembers.length > 1 ? 's' : ''}.`)
        } else {
          const errorData = await response.json()
          alert(`Registration failed: ${errorData.detail || 'Unknown error'}`)
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('An error occurred while registering. Please try again.')
      }
    }
  }

  const memberFields = [
    { field: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { field: 'registerNumber', label: 'Register Number', type: 'text', placeholder: 'e.g., RA12345, 21CS001, etc.' },
    { field: 'year', label: 'Year', type: 'text', placeholder: '1st / 2nd / 3rd / 4th' },
    { field: 'college', label: 'College', type: 'text', placeholder: 'Your college name' },
    { field: 'email', label: 'Email', type: 'email', placeholder: 'yourname@example.com' },
    { field: 'phoneNumber', label: 'Phone Number', type: 'tel', placeholder: '10-digit number', maxLength: 10 }
  ]

  const handleKeyDown = (e, currentIndex, currentField) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const inputs = document.querySelectorAll('input')
      const currentInputIndex = Array.from(inputs).findIndex(input =>
        input === e.target
      )

      if (currentInputIndex !== -1 && currentInputIndex < inputs.length - 1) {
        inputs[currentInputIndex + 1].focus()
      } else if (currentInputIndex === inputs.length - 1) {
        handleSubmit()
      }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #2d1b4e 0%, #3d2463 20%, #5c3570 40%, #6b4280 60%, #5c3570 80%, #3d2463 100%)'
    }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="relative">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 mx-auto mb-3 sm:mb-4 animate-pulse" />
              <div className="absolute inset-0 bg-purple-300 blur-2xl opacity-50" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 mb-3 sm:mb-4 tracking-tight
            animate-pulse px-4" style={{
              textShadow: '0 0 40px rgba(216,180,254,0.6), 0 0 60px rgba(216,180,254,0.4)'
            }}>
            IDEATHON
          </h1>

          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-purple-300" />
            <p className="text-lg sm:text-xl md:text-2xl text-purple-200 font-bold tracking-widest">TEAM REGISTRATION</p>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-purple-300" />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6 sm:space-y-8">
          {/* Team Information */}
          <div className="bg-purple-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-400/30 
            shadow-[0_8px_32px_rgba(168,85,247,0.4)]">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Team Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium tracking-wide uppercase">Team Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => handleTeamChange('teamName', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Enter your team name"
                    className="w-full bg-purple-950/40 border border-purple-400/30 rounded-lg py-3 sm:py-3.5 px-3 sm:px-4 text-white text-sm sm:text-base
                      placeholder-purple-300/50 outline-none transition-all duration-500 backdrop-blur-sm
                      focus:border-purple-400/70 focus:bg-purple-950/50"
                    style={{
                      boxShadow: 'none',
                      minHeight: '44px'
                    }}
                    onFocus={(e) => {
                      e.target.style.boxShadow = '0 0 20px rgba(216,180,254,0.4), inset 0 0 15px rgba(216,180,254,0.15), 0 0 40px rgba(216,180,254,0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                {errors.teamName && <span className="text-red-400 text-xs mt-1 sm:mt-1.5 block leading-tight">{errors.teamName}</span>}
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium tracking-wide uppercase">Domain / Track</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.track}
                    onChange={(e) => handleTeamChange('track', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="AI, Web Dev, Blockchain, etc."
                    className="w-full bg-purple-950/40 border border-purple-400/30 rounded-lg py-3 sm:py-3.5 px-3 sm:px-4 text-white text-sm sm:text-base
                      placeholder-purple-300/50 outline-none transition-all duration-500 backdrop-blur-sm
                      focus:border-purple-400/70 focus:bg-purple-950/50"
                    style={{
                      boxShadow: 'none',
                      minHeight: '44px'
                    }}
                    onFocus={(e) => {
                      e.target.style.boxShadow = '0 0 20px rgba(216,180,254,0.4), inset 0 0 15px rgba(216,180,254,0.15), 0 0 40px rgba(216,180,254,0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                {errors.track && <span className="text-red-400 text-xs mt-1 sm:mt-1.5 block leading-tight">{errors.track}</span>}
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-purple-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-400/30 
            shadow-[0_8px_32px_rgba(168,85,247,0.4)]">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Team Members</h2>
            </div>

            {[0, 1, 2, 3].map((index) => {
              const isMandatory = index < 2
              const isLeader = index === 0
              const ranks = ['Member 1 - Team Leader', 'Member 2', 'Member 3', 'Member 4']
              const rankColors = ['from-purple-400 to-pink-500', 'from-fuchsia-400 to-purple-500',
                'from-violet-400 to-fuchsia-500', 'from-pink-400 to-purple-500']

              return (
                <div key={index} className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 backdrop-blur-md transition-all duration-500
                  ${isLeader ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50'
                    : 'bg-purple-900/20 border border-purple-400/25'}`}
                  style={{
                    boxShadow: isLeader
                      ? '0 8px 32px rgba(168,85,247,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
                      : '0 4px 24px rgba(168,85,247,0.2), inset 0 1px 1px rgba(255,255,255,0.05)'
                  }}>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-4 border-b border-gray-700/50 gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${rankColors[index]} 
                        flex items-center justify-center shadow-lg flex-shrink-0`}>
                        {isLeader ? <Trophy className="w-6 h-6 text-white" /> : <Users className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">{ranks[index]}</h3>
                        <p className="text-xs text-gray-400">
                          {isMandatory ? 'Required' : 'Optional'}
                        </p>
                      </div>
                    </div>
                    {isMandatory && (
                      <div className="bg-red-500/20 border border-red-500/40 rounded-full px-3 py-1 self-start sm:self-auto">
                        <span className="text-red-400 text-xs font-semibold">MANDATORY</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {memberFields.map(({ field, label, type, placeholder, maxLength }) => (
                      <div key={field} className="mb-3 sm:mb-4">
                        <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium tracking-wide uppercase">{label}</label>
                        <div className="relative">
                          <input
                            type={type}
                            value={formData.members[index][field]}
                            onChange={(e) => {
                              let val = e.target.value
                              if (field === 'phoneNumber') {
                                val = val.replace(/\D/g, '')
                              } else if (field === 'name') {
                                val = val.replace(/[^a-zA-Z\s]/g, '')
                              } else if (field === 'registerNumber') {
                                val = val.toUpperCase()
                              }
                              handleMemberChange(index, field, val)
                            }}
                            onKeyDown={(e) => handleKeyDown(e, index, field)}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            className="w-full bg-purple-950/40 border border-purple-400/30 rounded-lg py-3 sm:py-3.5 px-3 sm:px-4 text-white text-sm sm:text-base
                              placeholder-purple-300/50 outline-none transition-all duration-500 backdrop-blur-sm
                              focus:border-purple-400/70 focus:bg-purple-950/50"
                            style={{
                              boxShadow: 'none',
                              minHeight: '44px'
                            }}
                            onFocus={(e) => {
                              e.target.style.boxShadow = '0 0 20px rgba(216,180,254,0.4), inset 0 0 15px rgba(216,180,254,0.15), 0 0 40px rgba(216,180,254,0.2)'
                            }}
                            onBlur={(e) => {
                              e.target.style.boxShadow = 'none'
                            }}
                          />
                        </div>
                        {errors.members[index][field] && (
                          <span className="text-red-400 text-xs mt-1 sm:mt-1.5 block leading-tight">{errors.members[index][field]}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full relative group overflow-hidden rounded-lg sm:rounded-xl p-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #a855f7, #ec4899, #a855f7)',
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite'
            }}>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg py-4 sm:py-5 px-6 sm:px-8 
              transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-500">
              <span className="text-white text-base sm:text-lg md:text-xl font-bold tracking-widest flex items-center justify-center gap-2 sm:gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                REGISTER TEAM
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}

export default Registration