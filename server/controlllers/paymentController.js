// import razorpayHelper from '../helpers/razorpayHelper.js'

// const createPaymentOrder = async (req, res) => {
//   try {
//     const { amount } = req.body;  
//     const order = await razorpayHelper.createOrder(amount);
//     return res.json(order);
//   } catch (err) {
//     return res.status(500).json({ message: 'Error creating payment order' });
//   }
// };

// export default {
//   createPaymentOrder,
// };

import razorpayHelper from '../helpers/razorpayHelper.js';

const createPaymentOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    const order = await razorpayHelper.createOrder(amount);
    return res.status(200).json(order);
  } catch (err) {
    console.error('Error in createPaymentOrder:', err);
    return res.status(500).json({ message: 'Error creating payment order' });
  }
};

export default {
  createPaymentOrder,
};
