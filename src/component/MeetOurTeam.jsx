import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link component

const MeetOurTeam = () => {
  const scrollLeft = () => {
    document.getElementById('team-scroll').scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.getElementById('team-scroll').scrollLeft += 300;
  };

  return (
    <div id="#meet-our-team-section" className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8">Meet Our Team</h2>
        <p className="text-center text-lg mb-8">
          We are a team of experienced people, nutrition, sports, and fitness passionate experts with talent and knowledge unsurpassed in the industry. Get to know us.
        </p>
    <div className="flex overflow-x-auto space-x-4 lg:space-x-0 lg:flex-wrap lg:justify-center">
        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowLeft size={30} />
          </button>
          <div className="grid">
          <div id="team-scroll" className="flex overflow-x-scroll scrollbar-hide space-x-4">
            <div className="min-w-[300px]">
              <img src="https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=" alt="Trainer 1" className="w-full h-64 object-cover" />
              <h3 className="text-center mt-4">Amitee Loiselle</h3>
              <p className="text-center">Fitness Coach</p>
            </div>
            <div className="min-w-[300px]">
              <img src="https://www.arhantayoga.org/wp-content/uploads/2023/04/50-hour-Yin-Yoga-Teacher-Training.jpg" alt="Trainer 2" className="w-full h-64 object-cover" />
              <h3 className="text-center mt-4">Liam Harpaul</h3>
              <p className="text-center">Crossfit Coach</p>
            </div>
            <div className="min-w-[300px]">
              <img src="https://images.squarespace-cdn.com/content/v1/56e029a8a3360cb7acc01a85/1559597683736-X5P01AERY92IBMVIRFEA/OwnerCoachBenTyler.jpg?format=1000w" alt="Trainer 3" className="w-full h-64 object-cover" />
              <h3 className="text-center mt-4">Mark Anthony</h3>
              <p className="text-center">Crossfit Coach</p>
            </div>
            <div className="min-w-[300px]">
              <img src='https://img.freepik.com/premium-photo/fitness-sport-dance-lifestyle-concept-group-smiling-people-with-coach-dancing-zumba-gym-studio_380164-95204.jpg?w=1060' alt="Trainer 4" className="w-full h-64 object-cover" />
              <h3 className="text-center mt-4">Ron Richardson</h3>
              <p className="text-center">Body Building</p>
            </div>
            <div className="min-w-[300px]">
              <img src='https://img.freepik.com/premium-photo/smiling-slim-woman-pink-tracksuit-looks-aside-copy-space-poses-with-rolled-mat-does-yoga-pilates-fitness-isolated-blue-background-advertisement-concepts_750854-1071.jpg?w=1060' alt="Trainer 4" className="w-full h-64 object-cover" />
              <h3 className="text-center mt-4">Jorg Kelvin</h3>
              <p className="text-center">Aerobic</p>
            </div>
            <div className="min-w-[300px]">
          <img src='https://img.freepik.com/free-photo/strong-man-without-t-shirt_158538-8390.jpg?w=1060&t=st=1681950065~exp=1681950665~hmac=6f29b029eda45cd576342d02652ba50e51c6dbb20f21559d5a634e42b3e7d9db' alt="Team Member 3" className="w-full h-auto rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Henry Duike</h3>
          <p>Body Building</p>
        </div>
        <div className="min-w-[300px]">
          <img src="https://img.freepik.com/free-photo/young-sports-man-training-gym_1303-20718.jpg?w=1060&t=st=1681949641~exp=1681950241~hmac=95ada3449c4a47034d0ea1f531c7b1921cc0d48276078d73458d232ed003fd5f" />
          <h3 className="mt-4 text-xl font-bold">Zinzo Reiga</h3>
          <p>Weight Lifting</p>
        </div>
        <div className="min-w-[300px]">
          <img src="https://img.freepik.com/free-photo/portrait-smiling-afro-american-sports-man-with-arms-folded-looking-camera_171337-8263.jpg?w=1060&t=st=1681949769~exp=1681950369~hmac=86473892a316f3a92a926aa56eef338b1b194078e51af01250442c0a816f6c26" alt="Team Member 3" className="w-full h-auto rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Mark Anthony</h3>
          <p>Crossfit Coach</p>
        </div>
          </div>
          </div>

          
          <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowRight size={30} />
          </button>
        </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/team">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
              See the Whole Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
