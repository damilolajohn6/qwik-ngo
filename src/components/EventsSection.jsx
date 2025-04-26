import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const EventsSection = ({ events }) => {
  const defaultEvents = [
    {
      id: 1,
      name: "Annual Fundraising Gala",
      date: "October 26, 2025",
      time: "7:00 PM",
      location: "Grand Ballroom, City Center",
      description:
        "Join us for an evening of celebration and support for our programs.",
      link: "/events/gala",
    },
    {
      id: 2,
      name: "Volunteer Orientation Webinar",
      date: "November 15, 2025",
      time: "10:00 AM EST",
      location: "Online Webinar",
      description:
        "Learn how you can become a volunteer with Pathway to Freedom.",
      link: "/events/volunteer-webinar",
    },
    {
      id: 3,
      name: "Child Rights Workshop",
      date: "December 5, 2025",
      time: "2:00 PM",
      location: "Community Hall",
      description:
        "An informative session on child rights and the fight against child labor.",
      link: "/events/child-rights-workshop",
    },
    // Add more event objects here
  ];

  const upcomingEvents = events && events.length > 0 ? events : defaultEvents;

  return (
   
    <section
      id="events-section"
      className="container mx-auto py-12 px-4 md:px-12"
    >
     
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Upcoming Events
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingEvents.map((event) => (
          // Event Card/Item
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
          >
            {" "}
            {/* Added h-full */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {event.name}
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              <span className="font-semibold">{event.date}</span> at{" "}
              {event.time}
              {event.location && ` - ${event.location}`}{" "}
              {/* Display location if available */}
            </p>
            <p className="text-gray-700 leading-relaxed flex-grow mb-4">
              {event.description}
            </p>
            
            <Link href={event.link}>
              <Button className="text-blue-600 hover:underline font-semibold self-start">
                Learn More & Register &rarr;
              </Button>
            </Link>
          </div>
        ))}
      </div>
      {/* Optional: Link to a full events calendar */}
      <div className="text-center mt-8">
        <Link href="/events">
          <Button className="text-blue-700 hover:underline font-semibold text-lg">
            View Full Events Calendar &rarr;
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EventsSection;
