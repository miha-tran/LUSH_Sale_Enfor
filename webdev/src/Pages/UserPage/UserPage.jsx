import "./UserPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import graphic from '../../assets/graphic.png';
import product from '../../assets/product2.jpg';
import productGraph from '../../assets/productGraph3.jpg'
function UserPage() {
  const [member, setMember] = useState(null);
  const [email, setEmail] = useState("");
  const [creditcard, setCreditCard] = useState(null);

  const inputMember = (event) => {
    setMember(event.target.value);
  };
console.log(member)
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputCreditCard = (event) => {
    setCreditCard(event.target.value);
  };

  const submitResult = (event) => {
    event.preventDefault();
    try {
      if (!member || !email || !creditcard) {
        alert("Please fill the information on the form");
      } else {
        const userPost = async () => {
          const body = { member: member, email: email, creditcard: creditcard };
         
          const newComment = await axios.post('http://localhost:8080/api/userPOS', body);
          setMember("");
          setEmail("");
          setCreditCard("");
          console.log(body)
        };
        userPost();
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <header className="header">
        
          <h1 className="header__logo">
          <NavLink className="header__link header__logo" to="/">
            Lush
          </NavLink>
          </h1>
        
                        
         <h3> <NavLink to='/visualization' className="header__link  header__visualpageLink"> Data Visuals ... </NavLink> </h3> 
        
        
      </header>
      {/* <div className="branch-description">
        <h3 className="branch-description__Text">Natural, Fresh, Ethical </h3>
      </div> */}
      <div>Product</div>
      {/* Adding an inventory item to be pursued */}
      <section className="product">
          <div className="product__subdiv1">
          <div className="product__Images">
          <img src={product} alt="Product Image" className="product__image1"/>
          {/* <img src={productGraph} alt="Related stat" className="product__image1"/> */}
          </div>
          <div className="product__description">
            <p className="product__description--Text1">EGGS ON LEGS</p>
            <p className="product__description--Text2">BATH BOMB</p>
          </div>
          </div>        
          <div className="product__subdiv2">
            <div className="product__buttons">
            <button className="product__buttons--Negative"> - </button>
            <input type="text" className="product__buttons--Input" placeholder="1"/>
            <button className="product__buttons--Positive"> + </button>
            </div>
            <p className="product__price">$34.00</p>
          </div>
          <div className="product__subdiv3">
          <p className="product__subdiv3--availability"> In stock </p>
          <p className="product__subdiv3--Text"> Online delivery available </p>
          </div>
      </section>
      {/* <h3 className="user-info__header"> PAYMENT </h3> */}
      <main className="user-info">
       <form
          className="user-info__forms"
          onSubmit={(event) => submitResult(event)}
        >
          <div className="user-info__wrapper">
            <label className="user-info__Label">MEMBER NUMBER </label>
            <input
              type="text"
              className="user-info__input"
              onChange={(event) => inputMember(event)}
              value={member}
              placeholder="768.."
            />
          </div>
          <div className="user-info__wrapper">
            <label className="user-info__Label">EMAIL </label>
            <input
              type="email"
              className="user-info__input"
              onChange={(event) => inputEmail(event)}
              value={email}
              placeholder="user@gmail.com"
            />
          </div>
          <div className="user-info__wrapper">
            <label className="user-info__Label"> CREDIT CARD INFORMATION </label>
            <input
              type="text"
              className="user-info__input"
              onChange={(event) => inputCreditCard(event)}
              value={creditcard}
              placeholder="125-xxx-5678"
            />
          </div>
          {/* not sure what to do with the button... text? does it need functionality? */}
          <input type="submit" className="user-info__button" />
        </form>
      </main>
        {/* <section className="advertisement">
          <h3 className="advertisement__header">Thank you for your purchase</h3>
          <p className="advertisement__text">Lush products use 100% ...</p>
          <div className="advertisement__subdiv">
          <img src={graphic} alt="Companies comparisson" className="advertisement__image"/>

          </div> 
          
        </section> */}
      

      {/*  */}
    </>
  );
}

export default UserPage;
