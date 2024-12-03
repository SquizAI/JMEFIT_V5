-- Add default admin user
INSERT INTO auth.users (
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data
)
SELECT 
  'admin@jmefit.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"display_name": "Admin User"}'
WHERE NOT EXISTS (
  SELECT 1 FROM auth.users WHERE email = 'admin@jmefit.com'
);

-- Set admin role in profiles
INSERT INTO public.profiles (id, display_name, role)
SELECT 
  id,
  'Admin User',
  'admin'
FROM auth.users 
WHERE email = 'admin@jmefit.com'
ON CONFLICT (id) DO UPDATE
SET role = 'admin';