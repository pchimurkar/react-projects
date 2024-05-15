import './App.css'
import CheckOutStepper from './components/CheckOutStepper/CheckOutStepper'

function App() {
  
  const CHECKOUT_STEPS =[
    {
      name :"Customer Info",
      Component:()=><div>Provide your contact details.</div>
    },
    {
      name :"Shipping Info",
      Component:()=><div>Enter your shipping address.</div>
    },
    {
      name :"Payment",
      Component:()=><div>Complete payment for your order.</div>
    },
    {
      name :"Delivered ",
      Component:()=><div>Your order has been delivered.</div>
    }
  ]

  return (
    <>
    <h1>Checkout</h1>
      <CheckOutStepper stepConfig={CHECKOUT_STEPS}/>
    </>
  )
}

export default App
