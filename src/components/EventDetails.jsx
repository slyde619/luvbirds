import { motion } from "framer-motion";
import { CircleParking } from "lucide-react";
import { Gift } from "lucide-react";
import { MapPin } from "lucide-react";

function EventDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="details"
      className="relative"
      aria-label="Event Details and Map"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-2">
        <div className="grid grid-col-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 font-playfair">
              Event Details
            </h2>
            <div className="rounded-xl bg-white ring-1 ring-slate-200/70 p-5 shadow-sm">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "The Grand Hall",
                  color: "amber",
                  content:
                    "Qua Iboe Church Primary School, Idoro Road by Stadium Road, Uyo. \nCeremony at 12:00PM Noon.",
                },
                {
                  icon: <CircleParking className="w-5 h-5" />,
                  title: "Parking & Directions",
                  color: "rose",
                  content:
                    "Complimentary valet available at the main entrance. Nearby street parking after 6 PM.",
                },
                {
                  icon: <Gift className="w-5 h-5" />,
                  title: "Gifts",
                  color: "emerald",
                  content:
                    "Your presence is the greatest gift. If you wish, a small note for our honeymoon would be lovely.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row border-b border-b-rose-100 pb-1 items-center gap-4 mb-4 last:mb-0"
                >
                  <span className="w-12 h-12 rounded-full bg-rose-200/30 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 ring-1 ring-rose-100/60 p-4">
              <p className="text-sm text-slate-700">
                Dress code: Garden Formal. Please arrive 20 minutes early to be
                seated comfortably.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm h-96 lg:h-120 2xl:h-full">
            <div class="w-full h-full">
              <iframe
                title="Google Map - Q.I.C. Group School, Oku - Uyo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.3916079299433!2d7.91240647579808!3d5.040084238620264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57194867917b%3A0xc8d919c5ff5d834d!2sQ.I.C.%20Group%20School%2C%20Oku%20-%20Uyo!5e0!3m2!1sen!2sng!4v1758315358382!5m2!1sen!2sng"
                class="w-full h-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default EventDetails;
