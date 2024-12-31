import FAQ from "components/FAQ";
import Banner from "components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import icon from "assets/images/help.jpg";

import {
  faHandPeace,
  faSearch,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { userType } from "libs/isAuth";

export default function ForApplicant() {
  return (
    <>
      <div className="bg-white md:pt-32 pt-16">
        <h1 className="max-w-2xl mx-auto text-center md:text-6xl text-4xl font-bold text-gray-900">
          Greet for Applicant
        </h1>
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-14 md:py-32 py-12
          md:text-left text-center md:w-10/12 w-11/12 mx-auto "
        >
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-indigo-500"
              icon={faSearch}
            />

            <div className="text-gray-900 text-md tracking-wide pb-2 uppercase font-semibold">
              Step 1:
            </div>
            <h1 className="text-3xl text-gray-900 pb-3 font-semibold">
              Find a job
            </h1>
            <p className="text-xl font-light">
            Visit our job board to discover exciting tech roles.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-yellow-400"
              icon={faHandPeace}
            />
            <div className="text-gray-900 text-md tracking-wide pb-2 uppercase font-semibold">
              Step 2:
            </div>
            <h1 className="text-3xl text-gray-900 pb-3  font-semibold">
              Apply for job
            </h1>
            <p className="text-xl font-light">Apply for the positions that match your skills and passion.</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-5xl mb-6 text-green-500"
              icon={faMoneyBillWave}
            />

            <div className="text-gray-900 text-md tracking-wide pb-2 uppercase font-semibold">
              Step 3:
            </div>
            <h1 className="text-3xl  text-gray-900 pb-3 font-semibold">
              Await approval
            </h1>
            <p className="text-xl font-light">
            Wait for the employer to review and approve your application.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white md:pt-0 mt-20 mb-20 md:w-10/12 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-12 md:gap-6 gap-24 grid-cols-1 md:mt-20 mt-0 mx-auto">
          <div className="md:col-span-6 col-span-1 mt-0 md:text-left text-center">
            <h1 className="mx-auto md:text-left text-center md:text-6xl text-4xl font-bold text-gray-900">
              We will help you find the job you want
            </h1>
            <p className="text-xl mx-auto md:text-left text-center pt-4 md:pr-16 pr-0 mb-12">
            To access the full range of job opportunities, start by creating an account. Becoming a member 
            of our Job Portal community allows you to apply for jobs, track your applications, 
            and stay updated with the latest and most exciting career opportunities tailored just for you. 
            </p>

            {userType() === "" ? (
              <Link
                to="/sign-up/new-applicant"
                className="mx-auto w-46 hover:opacity-80 cursor-pointer items-center font-semibold text-md justify-center px-8 py-4 bg-primary rounded-xl text-black"
              >
                Sign up
              </Link>
            ) : null}
          </div>
          <img
            alt="pricing example chart"
            className="md:col-span-6 col-span-1 rounded-xl"
            src={icon}
          />
        </div>
      </div>
      <FAQ
        questionOne="Is there a limit to the number of job applications I can submit?"
        answerOne="You can apply to as many jobs as you wish, but once one of your applications is accepted, all other pending applications will automatically be withdrawn."
        questionTwo="When and how much do I get paid?"
        answerTwo="Payment varies depending on the job listing. Each job ad specifies the hiring bonus and the interview bonus. You will receive payment once your referred candidate either gets an interview or is successfully hired."
        questionThree="Do I need to create a Greeter account to refer my friends"
        answerThree="While creating a Greeter account is not mandatory to refer your friends, it is highly recommended. Having an account streamlines the referral process by eliminating the need to repeatedly enter your personal information for each referral."
      />
      <Banner
        title="Ready to refer someone?"
        button="See available jobs"
        link="/jobs"
      />
    </>
  );
}
