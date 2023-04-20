import React, { useState } from "react";
import "./Pay.css";
import Swal from 'sweetalert2'

export default function Pay({ confirmed, setConfirmed, setDisplayCard, handlePurchase }) {
  const [name, setName] = useState(""); 
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 7));

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    handlePurchase();
  };

  return (
    <>
      <section className="card-container">
          <div className="pt-8 px-5 pb-20 cards-info">
            {!confirmed && (
              <form onSubmit={handleSubmit} className="gap-8 max-w-lg lg:h-screen">
                <div>
                  <label htmlFor="cardholder_name">Nombre del titular</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder=" Jane Appleseed"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="card_number">Número de tarjeta</label>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder=" 1234 5678 9012 3456"
                    required
                    maxLength={19}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>

                <article className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <label htmlFor="expiry_date">Fecha de EXP.</label>
                    <input
                      type="month"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="MM YY"
                      required
                      value={date.substring(0, 7)}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="flex-1">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="number"
                      name="cvc"
                      id="cvc"
                      placeholder=" 123"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </article>

                <div className="boton-tarjeta">
                  <button type="submit" className="btn-card">
                    Confirmar
                  </button>
                  
                  <button
                    className="btn-card"
                    onClick={() => setDisplayCard(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {confirmed && (
              <ThankYou
                setDisplayCard={setDisplayCard}
                handlePurchase={handlePurchase}
              />
            )}
          </div>
      </section>
    </>
  );
}

function ThankYou({ setDisplayCard, handlePurchase }) {
  Swal.fire(
    'Gracias por tu compra!',
    '',
    'success'
  );

  return (
    <>
    </>
  );
}
