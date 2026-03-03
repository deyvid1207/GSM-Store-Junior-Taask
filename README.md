# GSM-Store-Junior-Taask
GSM Store is a responsive e-commerce catalog application built as part of a junior frontend technical task. The project demonstrates component-based architecture, filtering, sorting logic, responsive layout implementation, and state management using React.

The application simulates a mobile accessories online store where users can browse products by category, filter them, sort them, and view ratings.

# Features
Catalog System - Category based product structure, Responsive Product grid layout
Filtering - Filter by color, Filter by maximum price (range slider), Filter products that are on discount only, Mobile collapsible filter panel
Sorting - Default, A–Z, Z–A, Price: Low to High, Price: High to Low
Product Card - Discount logic with old/new price display, Dynamic star rating system, Hover animation, Add to cart button (UI simulation with an alert), Border added to placeholder image for simulation purposes
Slider - Responsive banner slider - Dot navigation - Smooth transition animation (4 sec per slide), Placeholder images for better visualisation,
Layout - Sticky responsive header, Centered category navigation, Responsive footer, Fully responsive layout (desktop, tablet, mobile)

# Technology Stack
React
Vite
JavaScript 
CSS3 
Component-based architecture

The project was built using a modular component structure to separate responsibilities clearly:
Catalog component handles data flow and product visibility
Filter component manages filtering logic
Sorting component handles ordering logic
ProductCard is fully reusable
Slider is isolated for banner functionality
State is lifted where necessary and passed via props to keep the architecture clean and scalable.
CSS Grid was used for the product layout, and media queries were implemented to ensure responsiveness across all breakpoints.

# Challanges during development 
Preventing horizontal overflow when combining grid and sticky sidebar
Making the filter panel collapsible only on mobile without breaking desktop layout
Ensuring responsive 5-column layout that scales correctly down to 1 column
Implementing accurate half-star rating logic

# How to run 
The project uses vite to run it locally a user should write the following commands in the terminal:
npm install
npm run dev
