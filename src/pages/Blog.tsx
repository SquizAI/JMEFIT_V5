import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      title: '5 Essential Core Exercises',
      excerpt: 'Discover the key movements that will help you build a strong and stable core.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1170&q=80',
      category: 'Training Tips',
      mainCategory: 'Fitness',
      slug: 'core-exercises',
      date: '2024-03-15'
    },
    {
      title: 'High-Protein Breakfast Bowl',
      excerpt: 'Start your day with this delicious and nutritious protein-packed breakfast recipe.',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1170&q=80',
      category: 'Recipes',
      mainCategory: 'Nutrition',
      slug: 'protein-breakfast-bowl',
      date: '2024-03-14'
    },
    {
      title: 'The Benefits of HIIT',
      excerpt: 'Explore how HIIT can revolutionize your workout routine and improve your fitness.',
      image: 'https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?auto=format&fit=crop&w=1170&q=80',
      category: 'Training Tips',
      mainCategory: 'Fitness',
      slug: 'hiit-benefits',
      date: '2024-03-13'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                          post.category.toLowerCase() === selectedCategory.toLowerCase() ||
                          post.mainCategory.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Fitness Blog</h1>
            <p className="text-gray-400">Expert tips, advice, and insights for your fitness journey</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="w-full md:w-auto flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3dd8e8]"
                />
              </div>
            </div>
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3dd8e8]"
              >
                <option value="all">All Categories</option>
                <option value="fitness">Fitness</option>
                <option value="nutrition">Nutrition</option>
                <option value="training tips">Training Tips</option>
                <option value="recipes">Recipes</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-400">
                No posts found matching your criteria.
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;