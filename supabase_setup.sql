-- Run this entire script in the Supabase SQL Editor

-- 1. Gallery Projects
CREATE TABLE projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  img text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Service Estimator Pricing
CREATE TABLE pricing (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  iron numeric NOT NULL,
  steel numeric NOT NULL,
  custom_alloy numeric NOT NULL
);

-- Seed initial pricing data
INSERT INTO pricing (iron, steel, custom_alloy) VALUES (120, 180, 250);

-- Seed initial gallery data
INSERT INTO projects (title, category, img) VALUES 
('Square Iron Staircase', 'Iron&Steel', '/gallery/staircase.jpg'),
('Modern Wood & Steel Gate', 'Iron&Steel', '/gallery/modern-gate.jpg'),
('Wide Geometric Sliding Gate', 'Iron&Steel', '/gallery/wide-gate.jpg'),
('Steel Frame Benches', 'Iron&Steel', '/gallery/steel-benches.jpg'),
('Heavy Vehicle Maintenance', 'Heavy Vehicles', '/gallery/workshop-truck.jpg');

-- 3. Contact Messages
CREATE TABLE messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  details text NOT NULL,
  status text DEFAULT 'pending',
  is_important boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Appointment Requests
CREATE TABLE appointments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  vehicle text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  preferred_date text NOT NULL,
  preferred_time text NOT NULL,
  status text DEFAULT 'pending',
  is_important boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Site Settings & Authentication
CREATE TABLE settings (
  id integer PRIMARY KEY DEFAULT 1,
  admin_password text NOT NULL DEFAULT 'admin'
);
INSERT INTO settings (id, admin_password) VALUES (1, 'admin');

-- 6. Storage Policies (Run these to enable Image Uploads!)

-- Allow anyone to view the gallery images
CREATE POLICY "Public_Read_Gallery" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');

-- Allow the React frontend to upload new images into the gallery bucket
CREATE POLICY "Public_Upload_Gallery" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery');
