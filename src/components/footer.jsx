const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="border py-5 bg-gray-200 flex flex-col sm:flex-row justify-between px-4 sm:px-10 md:px-20 lg:px-72">
          <div className="text-center sm:text-left">
            <p>
              @2024 Muhammad Hashir Shaikh <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="space-x-0 sm:space-x-5 mt-4 sm:mt-0 flex flex-col sm:flex-row items-center">
            <a href="/about" className="hover:underline text-center">
              About
            </a>
            <a href="/privacy_policy" className="hover:underline text-center">
              Privacy Policy
            </a>
            <a href="/licensing" className="hover:underline text-center">
              Licensing
            </a>
            <a href="/contact" className="hover:underline text-center">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
