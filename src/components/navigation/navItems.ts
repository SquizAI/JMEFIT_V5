import { NavItem } from './types';

export const mainNavItems: NavItem[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Programs',
    children: [
      { label: 'SHRED Program', path: '/programs/shred' },
      { label: 'Personal Training', path: '/programs/personal-training' },
      { label: 'Group Training', path: '/programs/group-training' },
      { label: 'Nutrition Coaching', path: '/programs/nutrition' }
    ]
  },
  {
    label: 'Resources',
    children: [
      { label: 'Workout Library', path: '/resources/workouts' },
      { label: 'Nutrition Guides', path: '/resources/nutrition' },
      { label: 'Recipe Collection', path: '/resources/recipes' },
      { label: 'Training Tips', path: '/resources/tips' },
      { label: 'Transformations', path: '/resources/transformations' },
      { label: 'Blog', path: '/blog' }
    ]
  },
  {
    label: 'Shop',
    children: [
      { label: 'Digital Products', path: '/shop/digital' },
      { label: 'Meal Plans', path: '/shop/meal-plans' },
      { label: 'Training Programs', path: '/shop/programs' },
      { label: 'Merchandise', path: '/shop/merch' }
    ]
  },
  {
    label: 'About',
    children: [
      { label: 'Our Story', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' }
    ]
  }
];