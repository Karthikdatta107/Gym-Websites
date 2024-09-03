import React from 'react';

const TeamPage = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-bold mb-8">Our Team</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this block for each team member */}
          <div className="team-member">
            <img src='https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE='alt="Trainer 1" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Amitee Loiselle</h3>
            <p className="text-center">Fitness Coach</p>
          </div>
          <div className="team-member">
            <img src='https://www.arhantayoga.org/wp-content/uploads/2023/04/50-hour-Yin-Yoga-Teacher-Training.jpg' alt="Trainer 2" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Liam Harpaul</h3>
            <p className="text-center">Crossfit Coach</p>
          </div>
          <div className="team-member">
            <img src='https://images.squarespace-cdn.com/content/v1/56e029a8a3360cb7acc01a85/1559597683736-X5P01AERY92IBMVIRFEA/OwnerCoachBenTyler.jpg?format=1000w'
 alt="Trainer 3" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Mark Anthony</h3>
            <p className="text-center">Crossfit Coach</p>
          </div>
          <div className="team-member">
            <img src='https://img.freepik.com/premium-photo/fitness-sport-dance-lifestyle-concept-group-smiling-people-with-coach-dancing-zumba-gym-studio_380164-95204.jpg?w=1060' alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Ron Richardson</h3>
            <p className="text-center">Body Building</p>
          </div>
          <div className="team-member">
            <img src='https://img.freepik.com/premium-photo/smiling-slim-woman-pink-tracksuit-looks-aside-copy-space-poses-with-rolled-mat-does-yoga-pilates-fitness-isolated-blue-background-advertisement-concepts_750854-1071.jpg?w=1060' alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Jorg Kelvin</h3>
            <p className="text-center">Aerobic</p>
          </div>
          <div className="team-member">
            <img src='https://img.freepik.com/free-photo/strong-man-without-t-shirt_158538-8390.jpg?w=1060&t=st=1681950065~exp=1681950665~hmac=6f29b029eda45cd576342d02652ba50e51c6dbb20f21559d5a634e42b3e7d9db' alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Henrry Duike</h3>
            <p className="text-center">Bodybuilding</p>
          </div>
          <div className="team-member">
            <img src='https://img.freepik.com/premium-photo/martial-arts-fighter-white-kimono-black-belt_266732-11454.jpg?w=1060' alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">joey Gerg</h3>
            <p className="text-center">Martial Arts</p>
          </div>
          <div className="team-member">
            <img src='https://media.istockphoto.com/id/1324042769/photo/confident-gym-owner.jpg?b=1&s=170667a&w=0&k=20&c=iuz1kcCB1w8CBf44nub1mYr-F--88dLRjJvM-5uPahY=' alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">kazama Toru</h3>
            <p className="text-center">Cardio</p>
          </div>
          <div className="team-member">
            <img src='https://img.freepik.com/free-photo/handsome-guy-gray-sport-suit-is-running-workout-morning-stadium-he-is-listening-music-through-headphones-looking-side_197531-1154.jpg?w=1060&t=st=1681949842~exp=1681950442~hmac=6ce9142e6c6294c84789706ee27e2bf5e995d697ef39d5d0359e4d93873090cc'  alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Richard Smith</h3>
            <p className="text-center">Running</p>
          </div>
          <div className="team-member">
            <img src='https://img.freepik.com/free-photo/athletic-young-man-doing-workouts-home-man-doing-training-warm-up-before-weight-exercise_1328-4324.jpg?w=360&t=st=1681949956~exp=1681950556~hmac=619fb5d2cb19b171097a1267ecd4fb581fe4c2ac2079e038358576faefe5f9ee' alt="Trainer 4" className="w-full h-64 object-cover" />
            <h3 className="text-center mt-4">Zinzo Relga</h3>
            <p className="text-center">Weightlifting</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
