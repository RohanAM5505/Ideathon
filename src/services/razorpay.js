// src/services/razorpay.js

export const initiatePayment = async ({ formData, onSuccess }) => {
  // 1. Ensure Razorpay SDK loaded
  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded. Please refresh.");
    return;
  }

  try {
    // 2. Create order from backend
    const orderRes = await fetch(" https://razorpay-backend-g4km.onrender.com/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await orderRes.json();

    if (!order.id) {
      throw new Error("Order creation failed");
    }

    // 3. Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "Ideathon Registration",
      description: "Registration: ₹150 | Platform Fee: ₹6",
      notes: {
        registration_fee: "₹150",
        platform_fee: "₹6",
        total: "₹156"
      },
      prefill: {
        name: formData.leaderName,
        email: formData.leaderEmail,
        contact: formData.leaderPhone,
      },
      theme: {
        color: "#7c3aed",
      },

      // ✅ THIS IS THE MOST IMPORTANT PART
      handler: async function (response) {
       
        try {
          // 4. VERIFY PAYMENT WITH BACKEND
          const verifyRes = await fetch(
            " https://razorpay-backend-g4km.onrender.com/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            }
          );
          
         

          const verifyData = await verifyRes.json();
         

          if (verifyData.success) {
            // ✅ VERIFIED PAYMENT — SAFE
            
            onSuccess(response);
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        } catch (err) {
          console.error("Verification error:", err);
          alert("Payment verification failed.");
        }
      },

      modal: {
        ondismiss: () => {
          alert("Payment cancelled");
        },
      },
    };

    // 5. Open Razorpay checkout
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error(err);
    alert("Payment failed. Please try again.");
  }
};
