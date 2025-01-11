import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PracticeAreaTable = () => {
  const practiceAreas = [
    {
      id: 1,
      area: "Alternate Dispute Resolution",
      description:
        "Expert guidance in mediations, arbitrations, and negotiations to resolve disputes efficiently outside the courtroom.",
      contact: "+1 (555) 123-4567",
    },
    {
      id: 2,
      area: "Appellate Law",
      description:
        "Specialized representation in appeals at state and federal levels, including brief writing and oral arguments.",
      contact: "+1 (555) 234-5678",
    },
    {
      id: 3,
      area: "Business & Corporate Law",
      description:
        "Comprehensive legal services for businesses, including formation, contracts, and regulatory compliance.",
      contact: "+1 (555) 345-6789",
    },
    {
      id: 4,
      area: "Civil Litigation",
      description:
        "Strategic representation in civil disputes, from pre-trial negotiations through trial and post-trial proceedings.",
      contact: "+1 (555) 456-7890",
    },
    {
      id: 5,
      area: "Constitutional Law",
      description:
        "Expert analysis and advocacy in cases involving constitutional rights and governmental powers.",
      contact: "+1 (555) 567-8901",
    },
    {
      id: 6,
      area: "Commercial Litigation",
      description:
        "Expert analysis and advocacy in cases involving constitutional rights and governmental powers.",
      contact: "+1 (555) 567-8901",
    },
  ];

  return (
    <div className="w-full bg-card p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-heading text-foreground mb-6">
        Practice Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {practiceAreas.map((area) => (
          //  <Link href={`/practice-areas/${area.id}`} key={area.id}></Link>
          <Link href={`/practice-areas/area`}>
            <div className="p-6 bg-secondary/10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.area}
              </h3>
              <p className="text-sm text-foreground/80 mb-4">
                {area.description}
              </p>
              <div className="flex justify-between items-center">
                <BsArrowRight className="text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PracticeAreaTable;
