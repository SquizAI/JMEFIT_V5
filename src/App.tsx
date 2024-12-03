import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/navigation/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/UserDashboard';

// Program Pages
import ShredProgram from './pages/programs/ShredProgram';
import PersonalTraining from './pages/programs/PersonalTraining';
import GroupTraining from './pages/programs/GroupTraining';
import NutritionCoaching from './pages/programs/NutritionCoaching';

// Resource Pages
import WorkoutLibrary from './pages/resources/WorkoutLibrary';
import NutritionGuides from './pages/resources/NutritionGuides';
import RecipeCollection from './pages/resources/RecipeCollection';
import TrainingTips from './pages/resources/TrainingTips';
import Transformations from './pages/resources/Transformations';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Shop Pages
import DigitalProducts from './pages/shop/DigitalProducts';
import MealPlans from './pages/shop/MealPlans';
import TrainingPrograms from './pages/shop/TrainingPrograms';
import Merchandise from './pages/shop/Merchandise';

// Other Pages
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/services" element={<ServicesPage />} />

              {/* Program Routes */}
              <Route path="/programs/shred" element={<ShredProgram />} />
              <Route path="/programs/personal-training" element={<PersonalTraining />} />
              <Route path="/programs/group-training" element={<GroupTraining />} />
              <Route path="/programs/nutrition" element={<NutritionCoaching />} />

              {/* Resource Routes */}
              <Route path="/resources/workouts" element={<WorkoutLibrary />} />
              <Route path="/resources/nutrition" element={<NutritionGuides />} />
              <Route path="/resources/recipes" element={<RecipeCollection />} />
              <Route path="/resources/tips" element={<TrainingTips />} />
              <Route path="/resources/transformations" element={<Transformations />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Shop Routes */}
              <Route path="/shop/digital" element={<DigitalProducts />} />
              <Route path="/shop/meal-plans" element={<MealPlans />} />
              <Route path="/shop/programs" element={<TrainingPrograms />} />
              <Route path="/shop/merch" element={<Merchandise />} />

              {/* Other Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;