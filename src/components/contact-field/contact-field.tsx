import React, { ReactNode } from "react";
import { FieldIcon } from "../custom-icon";

interface ContactFieldProps {
  label: string;
  value: string;
  icon: ReactNode;
  hasBottomBorder: boolean;
}

const ContactField: React.FC<ContactFieldProps> = ({
  label,
  value,
  icon,
  hasBottomBorder,
}) => {
  return (
    <>
      <div className="flex gap-3 w-fit">
        <FieldIcon icon={icon} />
        <div>
          <p className="text-sm text-[#5c5c5c]">{label}</p>
          <p className=" text-lg text-black">{value}</p>
        </div>
      </div>
      {hasBottomBorder && <hr className="text-black h-2 mt-2 pb-3" />}
    </>
  );
};

export default ContactField;
