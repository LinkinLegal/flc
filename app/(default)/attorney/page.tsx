"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMail, FiPhone, FiSearch } from "react-icons/fi";
import Cta from "../common/Cta";
import Heading from "../common/Heading";
interface Attorney {
  id: number;
  name: string;
  country: string;
  expertise: string;
  description: string;
  email: string;
  mobile: string;
  image: string;
  year: string;
}

const AttorneyList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("");
  const [filteredAttorneys, setFilteredAttorneys] = useState<Attorney[]>([]);

  const attorneys: Attorney[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      expertise: "Corporate Law",
      description:
        "Specializing in Corporate Law and International Business Transactions",
      email: "sarah.johnson@legalfirm.com",
      mobile: "+1 (555) 123-4567",
      image: "images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      year: "2023",
    },
    {
      id: 2,
      name: "David Chen",
      country: "Singapore",
      expertise: "Maritime Law",
      description: "Expert in Maritime Law and International Trade Disputes",
      email: "david.chen@legalfirm.com",
      mobile: "+65 9876 5432",
      image: "images.unsplash.com/photo-1556157382-97eda2d62296",
      year: "2022",
    },
    {
      id: 3,
      name: "Emma Thompson",
      country: "United Kingdom",
      expertise: "Patent Law",
      description: "Specialized in Intellectual Property and Patent Law",
      email: "emma.thompson@legalfirm.com",
      mobile: "+44 20 7123 4567",
      image: "images.unsplash.com/photo-1580489944761-15a19d654956",
      year: "2021",
    },
  ];

  const expertiseOptions: string[] = Array.from(
    new Set(attorneys.map((attorney) => attorney.expertise))
  );

  const handleSearch = () => {
    const filtered = attorneys.filter((attorney) => {
      const matchesSearch =
        attorney.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesExpertise =
        !selectedExpertise || attorney.expertise === selectedExpertise;

      return matchesSearch && matchesExpertise;
    });
    setFilteredAttorneys(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedExpertise]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {" "}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Heading
          title="ATTORNEYS"
          subtitle="FLC A LEADING VIRTUAL LAW FIRM"
          paragraph="FLC is composed of talented and experienced attorneys who hail from premier global law firms. Lawyers who join our team are part of a new generation of attorneys who believe it’s time to change the old, inefficient ways of practicing law to focus on what is most important: delivering greater value to our clients."
        />

        <div className="mb-8 max-w-3xl mx-auto relative z-10 items-start">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, country, or description..."
                className="w-[500px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search attorneys"
              />
            </div>

            <div className="relative flex-1">
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
                className="w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                aria-label="Select expertise"
              >
                <option value="">Select Expertise</option>
                {expertiseOptions.map((expertise) => (
                  <option key={expertise} value={expertise}>
                    {expertise}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </div>
        {filteredAttorneys.length === 0 ? (
          <div className="text-center text-gray-500 py-8 relative z-10">
            No attorneys found matching your search criteria.
          </div>
        ) : (
          <div className="relative z-10 px-4 sm:px-8 lg:px-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {filteredAttorneys.map((attorney, index) => (
              <motion.div
                key={attorney.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center mb-12 space-y-6 lg:space-y-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left Section: Attorney Info */}
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8 text-right" : "lg:pl-8 text-left"}`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-shadow transform hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src={`https://${attorney.image}`}
                        alt={attorney.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1507679799987-c73779587ccf";
                        }}
                      />
                    </div>
                    <Link
                      href="/attorney/profile"
                      className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300"
                      aria-label={`View details about ${attorney.name}`}
                    >
                      {attorney.name}
                    </Link>

                    <p className="text-blue-600 font-medium mb-2">
                      {attorney.expertise}
                    </p>
                    <p className="text-gray-600 mb-4">{attorney.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600 justify-center">
                        <FiMail className="w-5 h-5 mr-2" />
                        <a
                          href={`mailto:${attorney.email}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {attorney.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600 justify-center">
                        <FiPhone className="w-5 h-5 mr-2" />
                        <a
                          href={`tel:${attorney.mobile}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {attorney.mobile}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section: Year and Circle */}
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-xl transform transition-all hover:scale-110"></div>
                  <div
                    className={`absolute top-10 ${index % 2 === 0 ? "left-0" : "right-0"} transform ${
                      index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                    } bg-blue-500 text-white px-4 py-1 rounded-full shadow-lg transition-all hover:scale-105`}
                  >
                    {attorney.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <Cta />
      </div>
    </div>
  );
};

export default AttorneyList;
