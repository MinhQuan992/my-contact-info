import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faCakeCandles,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./components/avatar/avatar";
import ContactField from "./components/contact-field/contact-field";
import {
  SocialIcon,
  SocialIconProps,
} from "./components/custom-icon/custom-icon";

function App() {
  const socialIconValues: SocialIconProps[] = [
    {
      type: "facebook",
      link: "https://www.facebook.com/quantmvo",
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/quantmvo/",
    },
    {
      type: "github",
      link: "https://github.com/MinhQuan992",
    },
  ];
  const contactFieldValues = [
    {
      label: "Email",
      value: "tranminhquanvo@gmail.com",
      icon: (
        <FontAwesomeIcon className="text-[#1773EA] text-lg" icon={faEnvelope} />
      ),
    },
    {
      label: "Location",
      value: "Go Vap District, Ho Chi Minh City",
      icon: (
        <FontAwesomeIcon
          className="text-red-600 text-lg"
          icon={faLocationDot}
        />
      ),
    },
    {
      label: "Company",
      value: "KMS Technology",
      icon: (
        <FontAwesomeIcon className="text-green-600 text-lg" icon={faBuilding} />
      ),
    },
    {
      label: "Birthday",
      value: "September, 2000",
      icon: (
        <FontAwesomeIcon
          className="text-pink-600 text-lg"
          icon={faCakeCandles}
        />
      ),
    },
  ];
  return (
    <div className="h-screen bg-white flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Avatar />
        <p className="text-3xl font-bold mt-3">Quan Tran Minh Vo</p>
        <p className="text-xl font-light mt-3">Software Engineer</p>
        <div className="py-3 mt-2 flex gap-3">
          {socialIconValues.map((value) => {
            return (
              <SocialIcon
                key={value.type}
                type={value.type}
                link={value.link}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-[#F4F6F6] w-[22rem] p-4 rounded-lg shadow-lg shadow-dark-500 mt-4">
        {contactFieldValues.map((fieldValue, index) => {
          return (
            <ContactField
              key={fieldValue.label}
              label={fieldValue.label}
              value={fieldValue.value}
              icon={fieldValue.icon}
              hasBottomBorder={index !== contactFieldValues.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
