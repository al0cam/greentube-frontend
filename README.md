# Greentube Homepage Frontend

This repository contains the frontend application for the Greentube Homepage, built with React and designed to consume data from the Greentube API.

## 🌟 Features

- **Dynamic News Display**: Fetches and displays the latest news articles from Contentful via the backend API.
- **Product Showcase**: Showcases various products with images and hover effects, linking to external sites.
- **Partner Section**: Displays a list of partners with their logos and website links.
- **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.

## 🚀 Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Contentful**: A headless CMS used to manage content.
- **Hono.js (Backend)**: The backend API is built with Hono.js, serving data from Contentful.

## 🛠️ Setup and Installation

Follow these steps to get the frontend application up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/al0cam/greentube_frontend.git
   cd greentube_frontend

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root of the project and add the following environment variable:

   ```
   REACT_APP_API_BASE_URL=https://your-vercel-backend-url.vercel.app/api
   ```

   Replace `https://your-vercel-backend-url.vercel.app/api` with the actual URL of your deployed Hono.js backend (e.g., `https://greentube-api.vercel.app/api`).

### Running the Application

To start the development server:

```bash
npm start
# or
yarn start
```

The application will typically open in your browser at [http://localhost:3000](http://localhost:3000).

## 📡 API Endpoints

This frontend consumes data from the following endpoints provided by the Greentube Express.js Backend API:

* `/api/news`: Fetches a list of news articles.
* `/api/product-showcase`: Fetches items for the product showcase.
* `/api/partners`: Fetches a list of partners.

## 🌐 Deployment

This frontend application is designed for deployment on platforms like [Vercel](https://vercel.com/).

### Vercel Deployment

* Link your Git repository (e.g., GitHub) to Vercel.
* Configure environment variables on Vercel for your project (e.g., `REACT_APP_API_BASE_URL`).
* Vercel will automatically detect the React project and deploy it.

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## 📧 Contact

For any questions or support, please open an issue in this repository.

```

Let me know if you want it reformatted for another platform (e.g. GitLab, Bitbucket) or converted into HTML.
```

