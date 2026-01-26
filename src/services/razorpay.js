// src/services/razorpay.js

export const initiatePayment = ({ amount, formData, onSuccess }) => {
  // Check if Razorpay SDK is loaded
  if (!window.Razorpay) {
    console.error("❌ Razorpay SDK not loaded!");
    alert("Razorpay SDK not loaded. Please refresh the page and try again.");
    return;
  }

  // Check if Razorpay key is configured
  if (!import.meta.env.VITE_RAZORPAY_KEY) {
    console.error("❌ Razorpay key not found in environment variables!");
    alert("Payment configuration error. Please contact support.");
    return;
  }

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    amount: amount * 100, // paise
    currency: "INR",
    name: "Ideathon Registration",
    description: "Registration Fee: ₹150 + Platform Fee: ₹6",
    image: "/hack-logo.png",
    handler: function (response) {
      onSuccess(response);
    },
    prefill: {
      name: formData.leaderName,
      email: formData.leaderEmail,
      contact: formData.leaderPhone,
    },
    notes: {
      registration_fee: "₹150",
      platform_fee: "₹6",
      total: "₹156",
      purpose: "Ideathon Team Registration"
    },
    theme: {
      color: "#7c3aed",
    },
    modal: {
      ondismiss: function () {
        alert("Payment cancelled");
      },
    },
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("❌ Error opening Razorpay:", error);
    alert("Failed to open payment window: " + error.message);
  }
};
