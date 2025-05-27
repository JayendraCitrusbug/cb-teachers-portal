import { FamilySection } from "@/components/Organism/teacher/Family";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col p-4">
        <h1 className="font-semibold text-2xl">Family</h1>
        <FamilySection />
      </div>
      {children}
    </>
  );
};

export default layout;
