import { Link } from "react-router-dom";

export default function InfoBar() {
  return (
    <div className=" bg-[#FF5151] text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="relative">
          <p className="ml-3 text-white font-medium">
            <span className="mr-2"></span>
            <span>
              <strong> Welcome</strong> to <strong>my</strong> to
              2THN! {" "}
              <Link to="/jobs" className="border-b-2 border-gray-50 ">
                Your dream space for hiring and working 🩵
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
