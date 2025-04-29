import React from 'react';

function PaymentPlanSection({ paymentPlan, handlePaymentPlanChange}) {
    return(
        <div className="payment_plan_section">
                <legend>Confira o seu plano:</legend>
                <nav className="email">fulano@cicrano.com.br</nav>

                <form className="payment_plan_container">

                    <div className="payment_plan">
                        <label for="anual_a_vista" className="payment_plan_description">
                            <strong>Anual  |  À Vista</strong><br/>
                            <span className="discount">De R$ 514,80  |  Por R$ 436,90</span>
                            <span className="discount_percentage">-15%</span><br/>
                            <span className="installments_data">10x de R$ 43,69/mês</span>
                        </label>
                        <input type="radio" id="anual_a_vista" name="splittable" value="false" checked={paymentPlan === 'false'} onChange={handlePaymentPlanChange}/>
                    </div>
                    
                    <div className="payment_plan">
                        <label for="anual_parcelado" className="payment_plan_description">
                            <strong>Anual  |  Parcelado</strong><br/>
                            <span className="discount">De R$ 514,80  |  Por R$ 479,90</span>
                            <span className="discount_percentage">-7%</span><br/>
                            <span className="installments_data">10x de R$ 47,99/mês</span>
                        </label>
                        <input type="radio" id="anual_parcelado" name="splittable" value="true" checked={paymentPlan === 'true'} onChange={handlePaymentPlanChange}/>
                    </div>

                </form>
                
                <div className="help">
                    <a className="help_CTA" href="">Sobre a cobrança</a>
                    <img src="/assets/help.png" className="help_img" alt="Help Button"/>
                </div>

            </div>
    )
}

export default PaymentPlanSection;
