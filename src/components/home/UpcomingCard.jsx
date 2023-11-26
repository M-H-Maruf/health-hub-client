

import Tilt from "react-parallax-tilt";

const UpcomingCard = ({camp}) => {
    return (
        <div data-aos="fade-up" className="relative z-20 h-full" >
        <Tilt className="h-full" scale={1.03}>
          <div
            data-aos="flip-left"
            className="bg-black/50 h-full space-y-4 rounded-lg"
          >
            <img
              src={camp?.image}
              alt={camp?.campName}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 pt-0 text-white/70">
              {" "}
              <div className="flex mb-4 justify-between items-center">
                <span className="text-accent text-sm border rounded-lg p-1 px-2 border-accent">
                  {camp?.targetAudience}
                </span>
                <span className='text-white'>
                  {new Date(camp.scheduledDateTime).toLocaleDateString('en-GB')}
                </span>
                <span className='text-white'>
                  ${camp.campFees}
                </span>
              </div>
              <h2 className="text-2xl min-h-16 text-white/95 uppercase font-extrabold min-h-[64px] mb-2">
                {camp?.campName}
              </h2>
              <p className="mb-1">{`Venue: ${camp?.venueLocation}`}</p>
              <p className="mb-1">{`Services Provided : ${camp?.specializedServices}`}</p>
              <p className="mb-4">{`Professionals : ${camp?.healthcareProfessionals}`}</p>
            </div>
          </div>
        </Tilt>
      </div>
    );
};

export default UpcomingCard;