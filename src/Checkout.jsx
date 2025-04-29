import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style_checkout.css';
import PaymentPlanSection from './PaymentPlanSection';
import PaymentDataSection from './PaymentDataSection';

function Checkout() {
  // FORM VALUES
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardName: '',
    cpf: '',
    couponCode: '',
    installments: 'Selecionar',
  });

  // State for payment plan selection: default is 'Anual à Vista'
  const [paymentPlan, setPaymentPlan] = useState('false');

  // HANDLE FORM FIELD CHANGES
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle installment select change
  const handleInstallmentsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      installments: value,
    }));
    // If "1x" is selected, set paymentPlan to 'false' (Anual à Vista)
    if (value === '1x') {
      setPaymentPlan('false');
    } else {
      setPaymentPlan('true');
    }
  };

  // Handle payment plan selection
  const handlePaymentPlanChange = (e) => {
    const { value } = e.target;
    setPaymentPlan(value);
    // If "Anual à Vista" is selected, set installments to '1x'
    if (value === 'false') {
      setFormData((prevData) => ({
        ...prevData,
        installments: '1x',
      }));
    }
  };

  // Initialize the navigate function
  const navigate = useNavigate()

  // Handle form submission using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/success');

    // Include paymentPlan in the form data
    const dataToSubmit = { ...formData, paymentPlan };

    try {
      const response = await axios.post('https://api-endpoint.com/pay', dataToSubmit, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Payment Successful:', response.data);
        // Redirect to the success page after payment success
        window.location.href = '/success';
      } else {
        console.log('Payment Failed:', response.data);
        // Handle failure, show error message
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or server errors
      alert('Error while processing payment. Please try again later.');
    }
  };


  return (
    <div className="app-container">
        {/* NAVBAR */}
        <header className="navbar">
            <img src="/assets/arrow.png" className="back_img" alt="Go Back"/>
            <img src="/assets/icon.png" className="icon_img" alt="Icon"/>
        </header>

        {/* MAIN */}
        <main className="checkout_card">

            {/* PAYMENT DATA SECTION */}
            <div className="payment_data_section">
              <form className='payment_data_container'>
                <PaymentDataSection 
                  formData={formData} 
                  handleChange={handleChange} 
                  handleInstallmentsChange={handleInstallmentsChange} 
                  paymentPlan={paymentPlan}/>

                  {/* PAY BUTTON */}
                  <button type='submit' className="CTA" onClick={handleSubmit}>Finalizar pagamento</button>
              </form>
            </div>

            {/* PAYMENT PLAN SECTION */}
            <div className='payment_plan_section'>
              <PaymentPlanSection 
                paymentPlan={paymentPlan} 
                handlePaymentPlanChange={handlePaymentPlanChange}
                />
            </div>

        </main>
    </div>
  );
}

export default Checkout;
