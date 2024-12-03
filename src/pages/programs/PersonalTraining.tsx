import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Clock, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PersonalTraining = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Personal Training</h1>
          <p className="text-xl text-gray-400 mb-8">
            One-on-one coaching tailored to your unique goals and needs
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Users className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">1-on-1 Attention</h3>
              <p className="text-gray-400">Dedicated focus on your form and progress</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Target className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Plans</h3>
              <p className="text-gray-400">Workouts designed for your goals</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <Clock className="w-8 h-8 text-[#3dd8e8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">Sessions that fit your lifestyle</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Program Benefits</h2>
            <ul className="space-y-4">
              {[
                'Personalized workout programming',
                'Form correction and technique guidance',
                'Nutrition advice and meal planning',
                'Progress tracking and assessments',
                'Accountability and motivation',
                '24/7 coach support via messaging'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3dd8e8]" />
                  <span>{benefit}</span>
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
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalTraining;