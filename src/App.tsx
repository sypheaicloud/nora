/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Music,
  Users,
  Camera,
  ChevronRight,
  Mail,
  Instagram,
  Twitter,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Upload,
  User
} from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Neon Nights: Club Takeover",
    date: "March 15, 2024",
    location: "The Vault, Downtown",
    type: "Club",
    image: "https://picsum.photos/seed/club/800/600"
  },
  {
    id: 2,
    title: "Acoustic Sunset Sessions",
    date: "March 22, 2024",
    location: "Skyline Lounge",
    type: "Concert",
    image: "https://picsum.photos/seed/concert/800/600"
  },
  {
    id: 3,
    title: "Elite Birthday Gala",
    date: "April 05, 2024",
    location: "Grand Regency Hall",
    type: "Private",
    image: "https://picsum.photos/seed/birthday/800/600"
  }
];

const GALLERY_IMAGES = [
  { id: 1, url: "https://picsum.photos/seed/event1/600/800", title: "Summer Festival" },
  { id: 2, url: "https://picsum.photos/seed/event2/800/600", title: "Corporate Launch" },
  { id: 3, url: "https://picsum.photos/seed/event3/600/600", title: "Underground Rave" },
  { id: 4, url: "https://picsum.photos/seed/event4/800/800", title: "Wedding Reception" },
  { id: 5, url: "https://picsum.photos/seed/event5/600/800", title: "Charity Ball" },
  { id: 6, url: "https://picsum.photos/seed/event6/800/600", title: "Fashion Show" },
];

import hostImg from './profshootnora.png';

export default function App() {
  const [hostImage, setHostImage] = useState<string | null>(hostImg);
  const hostFileInputRef = useRef<HTMLInputElement>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    eventType: 'Birthday',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleHostImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHostImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-sans selection:bg-[#3a4a7a] selection:text-white overflow-x-hidden">
      {/* Silky Chromatic Background Atmosphere - Enhanced Fluid Motion */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020617]">
        <motion.div
          animate={{
            scale: [1, 1.3, 0.9, 1.1, 1],
            x: [0, 100, -50, 80, 0],
            y: [0, 50, 120, -40, 0],
            rotate: [0, 45, -30, 60, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#1e1b4b] rounded-full blur-[140px] opacity-40"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.1, 0.9, 1.2],
            x: [0, -120, 60, -90, 0],
            y: [0, -80, 40, -110, 0],
            rotate: [0, -60, 40, -90, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-[#1e3a8a] rounded-full blur-[160px] opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 0.8, 1.2, 1],
            x: [0, 150, -100, 50, 0],
            y: [0, -100, 80, -150, 0],
            opacity: [0.1, 0.3, 0.15, 0.25, 0.1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-[#312e81] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [0.8, 1.2, 1, 1.3, 0.8],
            x: [-50, 80, -120, 40, -50],
            y: [100, -60, 90, -30, 100],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[20%] w-[45%] h-[45%] bg-[#1e40af] rounded-full blur-[130px] opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.2, 1, 1.1],
            x: [100, -40, 70, -100, 100],
            y: [-50, 90, -30, 60, -50],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[30%] w-[35%] h-[35%] bg-[#4338ca] rounded-full blur-[110px] opacity-15"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-serif tracking-tighter italic">Nora Diana</div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium opacity-70">
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#events" className="hover:opacity-100 transition-opacity">Events</a>
          <a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a>
          <a href="#booking" className="hover:opacity-100 transition-opacity">Booking</a>
        </div>
        <button className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative z-10 pt-20 pb-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            Premier Event Coordination
          </div>
          <h1 className="text-7xl md:text-8xl font-sans font-bold text-white/90 leading-[0.9] tracking-tighter">
            Nora Diana <br />
            <span className="font-serif italic font-normal text-white">The Host.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-md font-light leading-relaxed">
            From high-energy club takeovers to intimate gala evenings, we curate experiences that linger in memory long after the lights go down.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#booking" className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
              Book Your Date <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 px-6 opacity-60">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div
            onClick={() => hostFileInputRef.current?.click()}
            className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 relative group cursor-pointer bg-white/5 flex items-center justify-center"
          >
            {hostImage ? (
              <img
                src={hostImage}
                alt="Host Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-serif italic">Upload Host Photo</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Click to personalize your profile</p>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-8 left-8 pointer-events-none">
              <div className="text-3xl font-serif italic">Nora Diana</div>
            </div>

            {/* Hover overlay for existing image */}
            {hostImage && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] uppercase tracking-widest">
                  <Camera className="w-3 h-3" /> Change Photo
                </div>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={hostFileInputRef}
            onChange={handleHostImageUpload}
            className="hidden"
            accept="image/*"
          />

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/20 rounded-tr-[40px] pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/20 rounded-bl-[40px] pointer-events-none" />
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="relative z-10 py-32 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">The Calendar</div>
              <h2 className="text-5xl font-serif italic">Upcoming Engagements</h2>
            </div>
            <div className="hidden md:block text-xs uppercase tracking-widest opacity-50 border-b border-white/20 pb-2">
              Spring / Summer 2024
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest">
                    {event.type}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Calendar className="w-3 h-3" /> {event.date}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-white/80 transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <MapPin className="w-3 h-3" /> {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">The Archive</div>
          <h2 className="text-6xl font-serif italic">Past Moments</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-2xl overflow-hidden group border border-white/5"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Event Gallery</div>
                <div className="text-lg font-serif italic">{img.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="relative z-10 py-32 px-8">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 space-y-8 bg-gradient-to-br from-white/5 to-transparent">
            <h2 className="text-5xl font-serif italic">Let's Create <br />Something Iconic.</h2>
            <p className="text-white/60 font-light leading-relaxed">
              Ready to elevate your next event? Fill out the form and our team will get back to you within 24 hours to discuss your vision.
            </p>
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Email Us</div>
                  <div className="text-sm">hello@midnight-host.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Response Time</div>
                  <div className="text-sm">Under 24 Hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">Event Type</label>
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    value={bookingForm.eventType}
                    onChange={(e) => setBookingForm({ ...bookingForm, eventType: e.target.value })}
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Club">Club</option>
                    <option value="Concert">Concert</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your event..."
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                {submitted ? 'Request Sent!' : 'Submit Inquiry'}
                {!submitted && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-serif italic">Nora Diana</div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
          <div className="text-[10px] uppercase tracking-widest opacity-20">
            © 2024 Nora Diana. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
