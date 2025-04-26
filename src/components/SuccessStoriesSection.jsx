"use client"
import SuccessStoryCard from "./SuccessStoryCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const SuccessStoriesSection = () => {
  const stories = [
    {
      id: 1,
      quote:
        "I thought my life would always be carrying bricks and hearing the sounds of machines. Now, I carry books, and the only sound I hear is my teacher's voice.",
      name: "Sarah",
      age: "10",
      description:
        "Rescued from a textile factory at age 8, Sarah struggled to trust anyone. With support from our rehabilitation program, she enrolled in school and discovered her love for science. She dreams of becoming a doctor to help other children in need.",
    },
    {
      id: 2,
      quote:
        "For the first time, I have friends my age. I don't feel invisible anymore.",
      name: "Ravi",
      age: "12",
      description:
        "Ravi was rescued from bonded labor in agriculture. After joining our program, he not only caught up with his studies but also became a youth ambassador, spreading awareness about child labor in his village.",
    },
    // Add more story objects here
  ];

  const handlePrev = () => {
    console.log("Previous story");
  };

  const handleNext = () => {
    console.log("Next story");
  };

  return (
    <section className="container mx-auto py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Our Success Stories
      </h2>

      <p className="text-lg text-gray-600 mb-8 text-center">
        From Shadows to Sunshine: Stories of Transformation
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-gray-700 hover:bg-gray-200 focus:outline-none z-10"
          aria-label="Previous Story"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {" "}
          {stories.map((story) => (
            <SuccessStoryCard
              key={story.id}
              quote={story.quote}
              name={story.name}
              age={story.age}
              description={story.description}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-gray-700 hover:bg-gray-200 focus:outline-none z-10"
          aria-label="Next Story"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="text-lg text-orange-600 mt-12 text-center font-semibold">
        Encouraging readers to support more success stories..
      </p>
    </section>
  );
};

export default SuccessStoriesSection;
