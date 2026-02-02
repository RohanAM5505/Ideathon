"use client";
import React, { useState } from 'react'
import { Users, CheckCircle } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import { initiatePayment } from '../services/razorpay'
import { saveRegistration } from '../services/registrationservice'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const navigate = useNavigate();

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

  /**
   * Reset all form fields to initial state
   */
  const resetForm = () => {
    setFormData({
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
    });
    
    setErrors({
      teamName: '',
      track: '',
      members: Array(4).fill(null).map(() => ({
        name: '', registerNumber: '', year: '', college: '', email: '', phoneNumber: ''
      }))
    });
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

  /**
   * Handles form submission and payment initiation
   * Validates form data before proceeding to payment
   */
  const handleSubmit = () => {
    console.log("🚀 [REGISTRATION] Form submission started");
    
    // Validate form - checks all required fields
    const isValid = validateForm();
    
    // Stop if validation fails and show error messages
    if (!isValid) {
      console.log("❌ [VALIDATION] Form validation failed");
      return;
    }
    
    console.log("✅ [VALIDATION] Form validation passed");

    // Filter members: Always include first 2 (mandatory), include 3rd and 4th only if they have data
    const filledMembers = formData.members.filter((member, index) => {
      if (index < 2) return true; // First 2 members are mandatory
      return Object.values(member).some(val => val.trim()); // Include optional members only if filled
    });

    // Prepare final submission data
    const submissionData = {
      ...formData,
      members: filledMembers,
    };
    
    console.log("📝 [DATA] Prepared submission data:", {
      teamName: submissionData.teamName,
      track: submissionData.track,
      memberCount: filledMembers.length,
      leaderName: filledMembers[0].name,
      leaderEmail: filledMembers[0].email
    });

    // Initiate Razorpay payment
    console.log("💳 [PAYMENT] Initiating Razorpay payment...");
    try {
      initiatePayment({
        amount: 156, // ₹156 (₹150 registration + ₹6 platform fee)
        formData: {
          leaderName: submissionData.members[0].name,
          leaderEmail: submissionData.members[0].email,
          leaderPhone: submissionData.members[0].phoneNumber,
        },
        onSuccess: async (paymentResponse) => {
          console.log("✅ [PAYMENT] Payment successful!");
          console.log("💰 [PAYMENT] Payment Response:", {
            paymentId: paymentResponse.razorpay_payment_id,
            orderId: paymentResponse.razorpay_order_id,
            signature: paymentResponse.razorpay_signature
          });
          
          // Combine registration data with payment details
          const finalDataWithPayment = {
            ...submissionData,
            payment: {
              paymentId: paymentResponse.razorpay_payment_id,
              orderId: paymentResponse.razorpay_order_id || null,
              signature: paymentResponse.razorpay_signature || null,
              amount: 156,
              currency: 'INR',
              status: 'success',
              timestamp: new Date().toISOString()
            },
            registrationDate: new Date().toISOString()
          };
          
          console.log("📦 [DATA] Final data with payment:", finalDataWithPayment);
          
          // Save to Firebase
          console.log("🔄 [FIREBASE] Attempting to save registration to Firebase...");
          try {
            const docId = await saveRegistration(finalDataWithPayment);
            console.log("✅ [FIREBASE] Registration saved successfully! Document ID:", docId);
            
            // Show success modal
            console.log("🎉 [UI] Showing success modal");
            setShowSuccessModal(true);
            
            // Reset form fields
            console.log("🔄 [UI] Resetting form");
            resetForm();
          } catch (firebaseError) {
            console.error("❌ [FIREBASE ERROR] Save failed:", firebaseError);
            console.error("❌ [FIREBASE ERROR] Error details:", {
              message: firebaseError.message,
              code: firebaseError.code,
              stack: firebaseError.stack,
              name: firebaseError.name
            });
            console.error("❌ [FIREBASE ERROR] Payment ID that failed to save:", paymentResponse.razorpay_payment_id);
            console.error("❌ [FIREBASE ERROR] Full data that failed:", finalDataWithPayment);
            alert("Payment successful but failed to save registration data. Please contact support with payment ID: " + paymentResponse.razorpay_payment_id);
          }
        },
      });
    } catch (error) {
      console.error('❌ Payment initiation error:', error);
      alert('Failed to open payment window. Please check console for details.');
    }
  };


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
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden overflow-x-hidden pt-16">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        
        {/* Animated Background Effects */}
       

        {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text 
            bg-gradient-to-r from-white via-purple-100 to-pink-100 mb-2 sm:mb-3 md:mb-4 tracking-tight
             px-2 sm:px-4" style={{
            textShadow: '0 0 40px rgba(216,180,254,0.6), 0 0 60px rgba(216,180,254,0.4)'
          }}>
            IDEATHON 6.0
          </h1>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4">
            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-purple-300" />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-purple-200 font-bold tracking-wider sm:tracking-widest">TEAM REGISTRATION</p>
            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-purple-300" />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Team Information */}
          <div className="bg-purple-900/30 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-400/30 
            shadow-[0_8px_32px_rgba(168,85,247,0.4)]">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-300 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Team Information</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-300 text-[10px] xs:text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2 font-medium tracking-wide uppercase">Team Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => handleTeamChange('teamName', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Enter your team name"
                    className="w-full bg-purple-950/40 border border-purple-400/30 rounded-md sm:rounded-lg py-2 sm:py-3 md:py-3.5 px-2 sm:px-3 md:px-4 text-white text-xs sm:text-sm md:text-base
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
                {errors.teamName && <span className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-1.5 block leading-tight font-medium">{errors.teamName}</span>}
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-300 text-[10px] xs:text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2 font-medium tracking-wide uppercase">Domain / Track</label>
                <div className="relative">
                  <select
                    value={formData.track}
                    onChange={(e) => handleTeamChange('track', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    className="w-full bg-purple-950/40 border border-purple-400/30 rounded-md sm:rounded-lg py-2 sm:py-3 md:py-3.5 px-2 sm:px-3 md:px-4 text-white text-xs sm:text-sm md:text-base
                      outline-none transition-all duration-500 backdrop-blur-sm
                      focus:border-purple-400/70 focus:bg-purple-950/50 appearance-none cursor-pointer"
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
                  >
                    <option value="" className="bg-purple-950 text-gray-400">Select a domain</option>
                    <option value="HEALTH-TECH INNOVATIONS" className="bg-purple-950">HEALTH-TECH INNOVATIONS</option>
                    <option value="IOT-DRIVEN HARDWARE OPTIMIZATION" className="bg-purple-950">IOT-DRIVEN HARDWARE OPTIMIZATION</option>
                    <option value="ARTIFICIAL INTELLIGENCE" className="bg-purple-950">ARTIFICIAL INTELLIGENCE</option>
                    <option value="BLOCKCHAIN FOR SOCIAL IMPACT" className="bg-purple-950">BLOCKCHAIN FOR SOCIAL IMPACT</option>
                    <option value="SUSTAINABLE DEVELOPMENT" className="bg-purple-950">SUSTAINABLE DEVELOPMENT</option>
                  </select>
                  <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.track && <span className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-1.5 block leading-tight font-medium">{errors.track}</span>}
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-purple-900/30 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-400/30 
            shadow-[0_8px_32px_rgba(168,85,247,0.4)]">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-300 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Team Members</h2>
            </div>

            {[0, 1, 2, 3].map((index) => {
              const isMandatory = index < 2
              const isLeader = index === 0
              const ranks = ['Member 1 - Team Leader', 'Member 2', 'Member 3', 'Member 4']
              const rankColors = ['from-purple-400 to-pink-500', 'from-fuchsia-400 to-purple-500', 
                                  'from-violet-400 to-fuchsia-500', 'from-pink-400 to-purple-500']

              return (
                <div key={index} className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 backdrop-blur-md transition-all duration-500
                  ${isLeader ? 'bg-gradient-to-br from-purple-700/20 to-pink-400/20 border-2 border-purple-400/50' 
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
                        {isLeader ? <img src="/leader.svg" alt="Leader" className="w-6 h-6" /> : <Users className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">{ranks[index]}</h3>
                        <p className="text-xs text-gray-400">
                          {isMandatory ? 'Required' : 'Optional'}
                        </p>
                      </div>
                    </div>
                    {isMandatory && (
                      <div className="bg-red-500/20 border border-red-500/40 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 self-start sm:self-auto">
                        <span className="text-red-400 text-[10px] sm:text-xs font-semibold">MANDATORY</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {memberFields.map(({ field, label, type, placeholder, maxLength }) => (
                      <div key={field} className="mb-2 sm:mb-3 md:mb-4">
                        <label className="block text-gray-300 text-[10px] xs:text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2 font-medium tracking-wide uppercase">{label}</label>
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
                            className="w-full bg-purple-950/40 border border-purple-400/30 rounded-md sm:rounded-lg py-2 sm:py-3 md:py-3.5 px-2 sm:px-3 md:px-4 text-white text-xs sm:text-sm md:text-base
                              placeholder-purple-300/50 outline-none transition-all duration-500 backdrop-blur-sm
                              focus:border-purple-400/70 focus:bg-purple-950/50"
                            style={{
                              boxShadow: 'none',
                              minHeight: '36px'
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
                          <span className="text-red-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1 md:mt-1.5 block leading-tight">{errors.members[index][field]}</span>
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
          type="button"
            onClick={handleSubmit}
            className="w-full relative group overflow-hidden rounded-md sm:rounded-lg md:rounded-xl p-0.5 sm:p-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #a855f7, #ec4899, #a855f7)',
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite'
            }}>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-md sm:rounded-lg py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 
              transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-500">
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider sm:tracking-widest flex items-center justify-center gap-2 sm:gap-3">
                CHECKOUT
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-pink-900/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-md w-full border-2 border-purple-400/50 shadow-[0_0_50px_rgba(168,85,247,0.5)]">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircle className="w-20 h-20 sm:w-24 sm:h-24 text-green-400 animate-pulse" />
                <div className="absolute inset-0 bg-green-400 blur-2xl opacity-40" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Thank You for Registering!
              </h2>
              <p className="text-base sm:text-lg text-purple-200 mb-3">
                Your registration for <span className="font-bold text-white">IDEATHON</span> has been confirmed.
              </p>
              <p className="text-sm sm:text-base text-purple-300">
                You will be added to the WhatsApp group soon.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6" />

            {/* Info Text */}
            <p className="text-center text-xs sm:text-sm text-purple-300 mb-6">
              Check your email for confirmation and further details.
            </p>

            {/* Go to Home Button */}
            <button
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/');
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-sm sm:text-base"
            >
              GO TO HOME PAGE
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      </div>
    </>
  )
}

export default Registration