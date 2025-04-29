import React from 'react';
import { useLocation } from 'react-router-dom';
import './style_success.css';

function SuccessPayment() {
  const location = useLocation();  // Use useLocation to access the state passed
  const { cpf } = location.state || {};
  
  return (
    <div>
      <header className="navbar">
        {/* NAVBAR */}
            <a href='/checkout'><img src="assets/arrow.png" className="back_img" alt="Go Back"/></a>
            <img src="assets/icon.png" className="icon_img" alt="Icon"/>
        </header>
        {/* MAIN */}
        <main className="success">
            <object data="assets/icon-success.svg" width="60px" height="60px"></object>

            <div className="success_message">
                <h1>Parabéns!</h1>
                <p>Sua assinatura foi realizada com sucesso.</p>
            </div>

            <div className="subscription">
                <div className="plan_information">

                    <object className="icon_star" data="assets/icon-star.svg" width="40px" height="40px"></object>

                    <div className="plan_text">
                        <h1>Anual | Parcelado</h1>
                        <p>R$ 479,90 | 10x R$ 47,99</p>
                    </div>
                </div>

                <div className="account_information">
                    <div className="info_key">
                        <span>E-mail</span>
                        <span>CPF</span>
                    </div>
                    
                    <div className="info_value">
                        <span>fulano@cicrano.com.br</span>
                        <span>000.000.000-00</span>

                    </div>
                </div>
            </div>

            <a className="manage_subscription" href="">Gerenciar assinatura</a>

            <a className="go_to_home" href="">IR PARA A HOME</a>

        </main>
    </div>
  );
}

export default SuccessPayment;
