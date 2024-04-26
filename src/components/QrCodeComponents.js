import QRCode from "qrcode.react";

const QRCodeComponent = ({ prefix, memo, encrypt, fec, className }) => {
  // Function to Base64 URL Encode input
  const base64UrlEncode = (input) => {
    const base64Encoded = btoa(unescape(encodeURIComponent(input)));
    return base64Encoded
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };

  // Generates the Zcash payment URI with dynamic adjustments
  const generateMessageLink = () => {
    let baseAmount = 0.05; // Base amount set to 0.05 ZEC
    if (encrypt) baseAmount += 0.05; // Increase by 0.05 ZEC if Encrypt is on
    if (fec) baseAmount += 0.05; // Increase by 0.05 ZEC if FEC is on

    const formattedAmount = String(Number(baseAmount.toFixed(2)));
    // Use your actual Zcash address
    const zcashAddress =
      "zcash:u1w2xxkpqq84j09rku9s3nsu7q0w2s8l2ducurgmuq0ezp97cdp7ku7pdfst6npw7sgqc4zat6tawvcqhwfde7zsvwcn4l87h8l2h484uukj2t6yh72zk96uapwvvclkctuvg0rpjkda4vwg34gl2sxlk6r27qztuqlz7zf7d2x9ycyh9g0mlhn64ey026fes4l0alxf7cx8d4un8ret9";

    const combinedInfo = `${prefix} ${encrypt ? "e1" : "e0"} ${
      fec ? "f1" : "f0"
    }`.trim();
    const fullMemo = `${combinedInfo} | ${memo}`;
    const encodedInfo = base64UrlEncode(fullMemo);
    const zcashMessageLink = `${zcashAddress}?amount=${formattedAmount}&memo=${encodedInfo}`;

    return zcashMessageLink;
  };

  // Handler to attempt opening the payment URI
  const handleQRClick = () => {
    const paymentUri = generateMessageLink();
    window.open(paymentUri, "_blank"); // Attempt to open the payment URI
  };

  // Apply blur effect conditionally
  // const qrStyle = shouldBlur ? { filter: 'blur(5px)', pointerEvents: 'none' } : {};

  return (
    <div
      className={`flex justify-center items-center p-2 w-80 border-2 mt-2 text-center cursor-pointer rounded-md border-gray-700 bg-white ${className}`} // Applied custom class name for external CSS targetingqr-container
      onClick={handleQRClick}
    >
      <QRCode
        className="text-center w-full"
        value={generateMessageLink()}
        size={178}
      />{" "}
      {/* Adjusted size */}
      <div className="mt-2 ml-2 text-black font-bold">Tap QR to Send</div>{" "}
      {/* Label added here */}
    </div>
  );
};

export default QRCodeComponent;

/* style={{ 
    padding: '5px', 
    border: '5px solid grey', 
    borderRadius: '10px', 
    backgroundColor: 'white', 
    cursor: 'pointer', // Make it visually apparent it's clickable
    textAlign: 'center', // Ensure the label is centered below the QR code
    
  }}  */