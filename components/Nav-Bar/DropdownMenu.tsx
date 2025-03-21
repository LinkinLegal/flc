import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

interface DropdownMenuProps {
  label: string;
  isActive: boolean;
  onToggle: () => void;
  menuType: "tax" | "businessSetup" | "serviceSetup";
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  isActive,
  onToggle,
  menuType,
}) => {
  const renderTaxMenu = () => (
    <div className="absolute right-0 mt-3 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        <Link
          href="vat"
          className="block px-4 py-2 text-sm text-[#000000] hover:text-primary "
          role="menuitem"
        >
          Vat & Tax Consultancy
        </Link>
        <Link
          href="#"
          className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
          role="menuitem"
        >
          Corporate Tax
        </Link>
      </div>
    </div>
  );

  const renderBusinessSetupMenu = () => (
    <div className="absolute right-0 mt-3 w-full md:w-[1000px] h-auto md:h-[400px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100 flex flex-col md:flex-row">
      <div className="hidden md:flex w-full md:w-1/3 bg-primary p-4 text-white flex-col items-center justify-center text-center">
        <h1 className="text-xl font-bold mb-2">
          Hey, We are First Legal Counsel
        </h1>
        <p className="text-3xl font-extrabold">
          The #1 UAE <br />
          Business Setup Expert
        </p>
      </div>

      <div className="w-full md:w-1/3 p-4 text-primary text-justify flex flex-col items-center justify-center text-center md:overflow-auto overflow-auto">
        <ul className="text-justify">
          <li className="block px-5 py-2 mt-4 text-3xl text-primary transition-colors duration-300">
            Free Zone
          </li>
          <li className="pl-2">
            <Link
              href="/overview"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Overview
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/business-activities"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Business Activities
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/free-zone"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Free Zone License Locations and Pricing
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/residence-visa"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              UAE Residence Visa
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/registration-process"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Registration Process
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/solution"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Our Solution
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 p-4 text-primary text-justify flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl mb-4 px-32 text-justify"></h3>
        <ul className="text-left">
          <li className="block px-5 py-2 text-3xl text-primary transition-colors duration-300">
            MainLand
          </li>
          <li className="pl-2">
            <Link
              href="mainland-overview"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Overview
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/mainland-sponsorship"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Sponsorship
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/mainland-license"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Dubai MainLand License
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="tags/business-activities"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Business Activities
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="mainland-visas"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Mainland Visas
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="mainland-virtuefit"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              VirtuFit
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
  const renderServiceSetupMenu = () => (
    <div className="absolute right-0 mt-3 w-[1000px] h-[400px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100 flex">
      <div className="w-1/3  w-[333px] p-4 text-white flex flex-col items-center justify-top text-center">
        <ul className="text-justify">
          <li className="block px-5 py-2 mt-4 text-3xl text-primary transition-colors duration-300">
            Essential Services
          </li>
          <li className="pl-2">
            <Link
              href="/bank-account-opening"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Bank Account Opening in UAE
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/accounting-services"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Accounting Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/compliance-services"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Complaince Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="health-insurance"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Health Insurance
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-1/3 w-[333px] mt-3 p-4 text-primary text-justify flex flex-col items-center justify-top text-center">
        <ul className="text-justify">
          <li className="block px-5 py-2  text-3xl text-Primary transition-colors duration-300">
            Operational Services
          </li>

          <li className="pl-2">
            <Link
              href="legal-services"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Legal Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="mail-management"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Mail Management
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="virtual-receptionist"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary  transition-colors duration-300"
              role="menuitem"
            >
              Virtual Receptionist
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-1/3 w-[333px] p-3  text-primary text-justify flex flex-col items-center justify-top text-center">
        <ul className="text-justify">
          <li className="block px-5 py-2 mt-4 text-3xl text-Primary transition-colors duration-300">
            Support Services
          </li>
          <li className="pl-2">
            <Link
              href="tourist-visa"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Tourist Visa Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/golden-visa"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Golden Visa UAE
            </Link>
          </li>

          <li className="pl-2">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Pro Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Will Prepration Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              TradeMark & CopyRight Registration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="relative inline-block text-left cursor-pointer">
      <div
        onClick={onToggle}
        className="text-white font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2 transition-colors duration-700 font-lg flex items-center"
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {label}
        <FaAngleDown
          className={`ml-1 transform ${
            isActive ? "" : "rotate-180"
          } transition-transform duration-300`}
        />
      </div>
      {isActive &&
        (menuType === "tax"
          ? renderTaxMenu()
          : menuType === "businessSetup"
            ? renderBusinessSetupMenu()
            : renderServiceSetupMenu())}
    </div>
  );
};

export default DropdownMenu;
