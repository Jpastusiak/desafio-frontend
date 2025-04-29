import React from 'react';

function PaymentDataSection({ formData, handleChange, handleInstallmentsChange, paymentPlan }) {
    return(
        <div className="payment_data_section">
            <legend>Estamos quase lá!</legend>
            <p>Insira seus dados de pagamento abaixo:</p>
            <img src="/assets/cards.png" className="cards_img" alt="Card flags"/>

                <fieldset className="payment_data_container">
                    <div className="payment_data">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input type="number" id="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange}/>
                    </div>

                    <div className="payment_data_double">
                        <div className="payment_data_double_data">
                            <label htmlFor="expirationDate">Validade</label>
                            <input type="number" id="expirationDate" placeholder="MM/AA" value={formData.expirationDate} onChange={handleChange}/>
                        </div>

                        <div className="payment_data_double_data">
                            <label htmlFor="cvv">CVV</label>
                            <input type="number" id="cvv" placeholder="000" value={formData.cvv} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="payment_data">
                        <label htmlFor="cardName">Nome impresso no cartão</label>
                        <input type="text" id="cardName" placeholder="Seu nome" value={formData.cardName} size="50" onChange={handleChange}/>
                    </div>

                    <div className="payment_data">
                        <label htmlFor="cpf">CPF</label>
                        <input type="number" id="cpf" placeholder="000.000.000-00" value={formData.cpf} onChange={handleChange}/>
                    </div>

                    <div className="payment_data">
                        <label htmlFor="couponCode">Cupom</label>
                        <input type="text" id="couponCode" placeholder="Insira aqui" value={formData.couponCode} onChange={handleChange}/>
                    </div>

                    <div className="payment_data">
                        <label htmlFor="installments">Número de parcelas</label>
                        <select id="installments" value={formData.installments} onChange={handleInstallmentsChange} disabled={paymentPlan === 'false'}>
                            <option value="Selecionar" disabled selected>Selecionar</option>
                            <option value="1x" disabled={paymentPlan === 'false'}>1x</option>
                            <option value="2x" disabled={paymentPlan === 'false'}>2x</option>
                            <option value="3x" disabled={paymentPlan === 'false'}>3x</option>
                            <option value="4x" disabled={paymentPlan === 'false'}>4x</option>
                            <option value="5x" disabled={paymentPlan === 'false'}>5x</option>
                            <option value="6x" disabled={paymentPlan === 'false'}>6x</option>
                            <option value="7x" disabled={paymentPlan === 'false'}>7x</option>
                            <option value="8x" disabled={paymentPlan === 'false'}>8x</option>
                            <option value="9x" disabled={paymentPlan === 'false'}>9x</option>
                            <option value="10x" disabled={paymentPlan === 'false'}>10x</option>
                        </select>
                    </div>

                </fieldset>
            </div>
    )
}

export default PaymentDataSection;