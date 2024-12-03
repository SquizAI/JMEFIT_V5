import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Trophy, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const GroupTraining = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Group Training</h1>
          <p className="text-xl text-gray-400 mb-8">
            High-energy group workouts that combine motivation and community
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Users className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-400">Train with like-minded individuals</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Energy</h3>
              <p className="text-gray-400">Dynamic and motivating atmosphere</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Trophy className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Challenges</h3>
              <p className="text-gray-400">Fun competitions and team events</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Class Features</h2>
            <ul className="space-y-4">
              {[
                'Small group sizes (max 12 people)',
                'Multiple skill level options',
                'Professional coaching and form guidance',
                'Varied workout styles and equipment',
                'Progress tracking and assessments',
                'Flexible class schedule'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3dd8e8]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3dd8e8] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#34c5d3] transition-colors"
            >
              Join a Class
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupTraining;