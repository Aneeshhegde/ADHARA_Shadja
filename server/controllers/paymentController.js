const Razorpay = require('razorpay');

const hasValidKeys = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return false;
  }

  if (keyId.startsWith('YOUR_') || keySecret.startsWith('YOUR_')) {
    return false;
  }

  return true;
};

const createRazorpayInstance = () => new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create payment order
exports.createOrder = async (req, res) => {
  try {
    const { amount, currency, receipt, description } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid amount is required'
      });
    }

    if (!hasValidKeys()) {
      return res.status(400).json({
        success: false,
        message: 'Razorpay is not configured. Set valid RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in server/.env.'
      });
    }

    const razorpay = createRazorpayInstance();
    const options = {
      amount: Math.round(Number(amount) * 100),
      currency: currency || 'INR',
      receipt: receipt || `receipt_${Date.now()}`,
      description: description || 'Contribution to ADHARA SHADJA'
    };

    const order = await razorpay.orders.create(options);
    return res.json({ success: true, data: order });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Payment order creation failed: ${error.message}`
    });
  }
};

// Verify payment
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    if (!hasValidKeys()) {
      return res.status(400).json({
        success: false,
        message: 'Razorpay is not configured. Set valid RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in server/.env.'
      });
    }

    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest('hex');

    if (generatedSignature === razorpay_signature) {
      return res.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id
      });
    }

    return res.status(400).json({
      success: false,
      message: 'Payment verification failed'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Payment verification failed: ${error.message}`
    });
  }
};
