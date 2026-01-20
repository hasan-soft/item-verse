ItemVerse - A Curated Digital Study Resources Platform

Project Description
------
ItemVerse is a modern, responsive web application built with Next.js 15 (App Router) that serves as a curated digital library of study resources for students and developers. The platform showcases various learning materials such as interview question packs, cheat sheets, roadmaps, notes, and mini guides in a clean, professional interface.

Live Demo: https://item-verse-bice.vercel.app/

Setup & Installation Instructions:
-----------------
Prerequisites
Node.js 18.x or higher

npm or yarn package manager



Installation Steps:

1. Clone the repository
------

bash
git clone 
cd ItemVerse


2. Install dependencies:
------------

bash
npm install
# or
yarn install
# or
pnpm install


3. Run the development server:
-------

bash
npm run dev
# or
yarn dev
# or
pnpm dev


4. Open your browser:

Navigate to http://localhost:3000


Build for Production:
-------
bash
npm run build
npm start



Route Summary:
--------


1. Public Routes (No Authentication Required):


/ - Home/Landing page with 7 sections

/resources - Browse all study resources

/resources/[id] - View detailed resource information

/login - User authentication page


2. Protected Routes (Requires Authentication):


/dashboard - Admin dashboard

/dashboard/add-resource - Form to add new resources (Admin only)


3. Authentication:


Mock authentication using cookies

Hardcoded credentials (for demo):

Email: admin@itemverse.com

Password: 123456


✅ Implemented Features:
------

1.Responsive UI design

2.Server-side rendering with Next.js

3.Dynamic routing

4.Image optimization

5.Reusable components

6.Error handling and loading states



✅ Brief Explanation of Features:
---------

i. Mock Authentication: Uses a simple cookie-based system to protect routes without a backend.

ii. Resource System: Loads resources from a static JSON file and displays them using reusable cards with detail pages.

iii. Responsive UI: Fully responsive design with Tailwind CSS, featuring mobile bottom navigation and desktop sidebar.

iv. Interactive UX: Includes hover effects, carousels, form validation, and skeleton loaders for smooth interactions.

v. Performance: Optimized images, static page generation, and code splitting ensure fast load times.

vi. Developer Friendly: Clean component structure, consistent coding style, and easy extensibility.




Technologies Used
----
i. Framework: Next.js 15 (App Router)

ii. Styling: Tailwind CSS

iii. Icons: Lucide React

iv. Images: Next.js Image Optimization

v. Carousel: react-responsive-carousel

vi. Notifications: SweetAlert2

vii. Deployment: Vercel

