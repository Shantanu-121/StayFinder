import axios from "axios";
import { toast } from "react-hot-toast";

export const handlePayment = async ({ amount}) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load.");
    return { success: false };
  }

  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/payment/capturePayment",
      { amount }
    );

    return new Promise((resolve, reject) => {
      const options = {
        key: "rzp_test_2fpOVWN2aCppO7",
        amount: data.order.amount,
        currency: "INR",
        name: "StayFinder",
        description: "Booking Payment",
        order_id: data.order.id,
        handler: function (response) {
          resolve({
            success: true,
            paymentId: response.razorpay_payment_id,
          });
        },
        prefill: {
          name: "Shantanu Singh",
          email: "singhshantanu121@gmail.com",
          contact: "7388693970",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    });
  } catch (error) {
    console.error("Payment error:", error);
    return { success: false };
  }
};

//verify payment
async function verifyPayment(bodyData, token, navigate, dispatch, userId) {
  axios
    .post(
      "http://localhost:4000/api/v1/payment/verifyPayment",
      {
        bodyData,
        userId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      return response.data.success;
    })
    .catch((error) => {
      console.log("PAYMENT VERIFY ERROR....", error);
    });
}
