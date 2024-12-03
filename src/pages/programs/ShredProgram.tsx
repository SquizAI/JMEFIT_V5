import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Calendar, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ShredProgram = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">SHRED Program</h1>
          <p className="text-xl text-gray-400 mb-8">
            Transform your body in 6 weeks with our intensive SHRED program
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Dumbbell className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-400">Personalized workout plans tailored to your goals</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Calendar className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">6-Week Program</h3>
              <p className="text-gray-400">Structured progression to maximize results</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Star className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-400">Join hundreds of successful transformations</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-[#3dd8e8]">•</span>
                Customized workout plans
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3dd8e8]">•</span>
                Nutrition guidance and meal plans
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3dd8e8]">•</span>
                Weekly progress tracking
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3dd8e8]">•</span>
                Direct coach support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3dd8e8]">•</span>
                Access to exclusive resources
              </li>
            </ul>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3dd8e8] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#34c5d3] transition-colors"
            >
              Start Your Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ShredProgram;