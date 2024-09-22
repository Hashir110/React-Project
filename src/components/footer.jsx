const Footer = () => {
  return (
    <>
      <div className="border py-5 bg-gray-200 flex justify-between px-72">
        <div>
          <p>
            @2024 Muhammad Hashir Shaikh <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy_policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:underline">
            Licensing
          </a>
          <a href="/contact" className="hover:underline">
            Contacts
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
