import CoursesAndCertifications from "./CoursesAndCertifications";
import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import Qualifications from "./Qualifications";
import Summary from "./Summary";

const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-5">
      <Profile />
      <Summary />
      <Qualifications />
      <Experience />
      <Education />
      <Projects />
      <CoursesAndCertifications />
    </div>
  );
};
export default Resume;
