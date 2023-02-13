// import React from 'react'
// import styled from 'styled-components'
// import StripeCheckout from 'react-stripe-checkout';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const KEY = "pk_test_51I5bysCDMSg6mIGeYmFW8jbOopQ1DO7kIbvEqWAIiCt7L2kDbAjhY0NVI7iwuR02WS6CsiSTaO2diqrJ9ReFQUQA00la9VeJwW"

// const Pay = () => {
//   const [stripeToken,setStripeToken] = useState(null)
//   const navigate = useNavigate();

//      const onToken =(token)=>{
//       setStripeToken(token)
//      }
    
//      useEffect(()=>{
//       const makeRequest = async ()=>{
//         try{
//       const res = await axios.post("http://localhost:5000/api/checkout/payment",{
//         tokenId:stripeToken.id,
//         amount:2000
//           }
//           )
//           console.log(res.data);
//           navigate("/success");

//         }catch(err){
//              console.log(err);
//         }
//       }
//       stripeToken && makeRequest()
//      },[stripeToken])


//   return (
//     <Container>

//         <StripeCheckout
//         name='E-Shop'
//         image='https://www.clipartmax.com/png/middle/270-2707415_confirm-icon-payment-success.png'
//         billingAddress
//         shippingAddress
//         description='Your Total amount is $20'
//         amount={2000}
//         token={onToken}
//         stripeKey={KEY}
//         >
//         </StripeCheckout>
//       {/* <Button>Pay Now</Button> */}
              
//     </Container>
//   )
// }
// const Container = styled.div`
// height: 100vh;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// const Button = styled.button`
// width: 100px;
// padding: 15px;
// background-color: #000;
// color: #fff;
// border-radius: 8px;
// border: none;

// `
// export default Pay