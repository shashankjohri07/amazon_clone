import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="font-bold text-lg mb-4">Get to Know Us</h4>
            <ul className="space-y-2">
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-bold text-lg mb-4">Connect with Us</h4>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-4">Make Money with Us</h4>
            <ul className="space-y-2">
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-4">Let Us Help You</h4>
            <ul className="space-y-2">
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center text-sm">
          <div>
            <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-700 px-3 py-1 rounded">English</button>
            <button className="bg-gray-700 px-3 py-1 rounded">India</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
