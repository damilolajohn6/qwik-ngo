import MeetsNeedsSection from "@/components/MeetsNeedsSection";
import ProgramSection from "@/components/ProgramSection";
import ProgramsHero from "@/components/ProgramsHero";

const ProgramsPage = () => {

  const sharedRescuePoints = [
    "We collaborate with local authorities, community leaders, and child welfare organizations to identify children trapped in forced labor.",
    "Our team conducts carefully planned rescue operations, ensuring the safety of the children and adhering to legal and ethical standards.",
    "After rescue, children are removed from dangerous environments and transported to our secure facilities.",
  ];

  const sharedCarePoints = [
    "Medical Assistance: Treatment for physical injuries, malnutrition, and other health concerns.",
    "Counseling and Trauma Care: Emotional support through professional counselors to help children process their experiences and begin healing.",
    "Safe Shelter: Temporary housing in our child-friendly rehabilitation centers, ensuring safety and comfort.",
  ];

  const sharedRehabPoints = [
    "Education Support: Bridging the educational gap through tailored learning programs to reintegrate children into schools.",
    "Skill Development: Basic life skills training to help children regain independence and confidence.",
    "Family Reunification: When safe and feasible, we work to reunite children with their families, providing parents with support and education to prevent re-exploitation.",
    "Long-Term Support Plans: For children unable to return to their families, we offer long-term care and placement with foster families or community support systems.",
  ];

  const images = [
    "/vission.jpg",
    "/vission.jpg",
    "/vission.jpg",
    "/vission.jpg",
  ];


  return (
    <div className="pb-10">
      <ProgramsHero />
      <ProgramSection
        title="Rescue and Rehabilitation Program"
        description="The Rescue and Rehabilitation Program is the cornerstone of our mission to break the chains of forced labor and provide children with a safe, nurturing environment..."
        rescuePoints={sharedRescuePoints}
        carePoints={sharedCarePoints}
        rehabPoints={sharedRehabPoints}
        images={images}
      />
      <ProgramSection
        title="Education For All Program"
        description="The Education for All Program is designed to address the immediate and long-term needs of children subjected to exploitation, ensuring they are rescued and supported..."
        rescuePoints={sharedRescuePoints}
        carePoints={sharedCarePoints}
        rehabPoints={sharedRehabPoints}
        images={images}
      />
      <MeetsNeedsSection />
    </div>
  );
};

export default ProgramsPage;
