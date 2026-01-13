import { motion } from "framer-motion";
import { MapPin, Rocket, Calendar, Clock } from "lucide-react";
import GridBackground from "../ui/GridBackground";

const eventDetails = [
  { title: "Location", value: "SRMIST", icon: MapPin },
  { title: "Registration", value: "Opening soon", icon: Rocket },
  { title: "Date", value: "January 25, 2026", icon: Calendar },
  { title: "Time", value: "9 AM Onwards", icon: Clock },
];

const cardAnimation = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3,
      delay: i * 0.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }),
};

const EventDetails = () => {
  return (
    <section
      id="timeline"
      className="relative py-20 md:py-32 overflow-hidden scroll-mt-28"
    >
      <GridBackground />

      <div className="relative max-w-7xl mx-auto px-4">

   
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Event <span className="text-pink-400">Details</span>
          </motion.h2>
        </div>

       
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/solo.jpg"
              alt="Solo Leveling"
              className="w-[300px] md:w-[340px] lg:w-[380px]"
            />
          </motion.div>

         
          <div className="hidden md:block relative">
            <div
              className="absolute top-1/2 left-0 w-full h-px
              bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
            />

            <div className="grid grid-cols-2 gap-6">
              {eventDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  variants={cardAnimation}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl
                             p-6 border border-white/10"
                >
                  <div className="space-y-3 text-center">
                    <detail.icon size={24} className="mx-auto text-pink-400" />
                    <h3 className="text-sm font-medium text-pink-400">
                      {detail.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-16 md:hidden">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm rounded-xl
                         p-4 border border-white/10 text-center"
            >
              <detail.icon size={20} className="mx-auto text-pink-400" />
              <h3 className="text-sm font-medium text-pink-400 mt-2">
                {detail.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventDetails; 