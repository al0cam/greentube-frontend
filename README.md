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

   Replace `https://your-vercel-backend-url.vercel.app/api` with the actual URL of your deployed Express.js backend (e.g., `https://greentube-api.vercel.app/api`).

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


## Comaprison Desktop
First you'll be able to see images of the page before the revamp.
### Before
<img width="1918" height="1079" alt="before" src="https://github.com/user-attachments/assets/5041b10d-50cf-4900-a6a6-488146dfac85" />
<img width="1916" height="1080" alt="before 2" src="https://github.com/user-attachments/assets/5ed6ee77-3d9b-4e80-ba8b-8530d049d417" />
<img width="1914" height="922" alt="before3" src="https://github.com/user-attachments/assets/c1ae1841-4acc-4025-a344-04872259ce99" />
<img width="1919" height="900" alt="before4" src="https://github.com/user-attachments/assets/1b588881-a41c-468a-a33d-659e42ca12c9" />
<img width="1911" height="954" alt="before5" src="https://github.com/user-attachments/assets/49767e75-fd53-4b27-85f7-37526e504f62" />
<img width="1911" height="1005" alt="before6" src="https://github.com/user-attachments/assets/c8c13e01-63c1-482e-aab7-9118833ec95a" />

### After
<img width="1917" height="1079" alt="after1" src="https://github.com/user-attachments/assets/7e7e1747-619f-4ee3-bd72-5ef3f0878094" />
<img width="1918" height="1077" alt="after2" src="https://github.com/user-attachments/assets/8722023b-b38c-4c89-8387-6b1e28153341" />
<img width="1920" height="1079" alt="after3" src="https://github.com/user-attachments/assets/4eec66c7-33f8-4e50-80e0-7b749d8eaaf6" />
<img width="1920" height="1077" alt="after4" src="https://github.com/user-attachments/assets/6fc71d3f-4847-4460-8259-c47984d04957" />

### Remarks
The page size has been cut because the footer has been made smaller due to the always visible side-navigation bar.
Furthermore, the contents' size has also been reduced and made more in line with latest trends which are captivating users with moving items on screen.
Lastly, partners were introduced at the bottom to prove validity of the brand to help stand out as well.

## Comparison Mobile
The mobile version is generally similar to the desktop one so I'll cut the preview short and show distinct features.
### Before
<img width="824" height="1798" alt="mobileBefore" src="https://github.com/user-attachments/assets/afa291df-186a-46e4-bfcc-d21136b9cbc4" />
<img width="824" height="1798" alt="mobileBeforeMenu" src="https://github.com/user-attachments/assets/1498777a-85a4-48a8-9f5f-a10b07b2cd5b" />

### After
<img width="824" height="1798" alt="afterHome" src="https://github.com/user-attachments/assets/359f281e-9f5e-4ad4-a0a1-790ce68db32a" />
<img width="824" height="1798" alt="afterMenu" src="https://github.com/user-attachments/assets/77fc9547-9078-41aa-9857-483e24d9c4a4" />
<img width="824" height="1798" alt="afterMenuDropDown" src="https://github.com/user-attachments/assets/77ea6232-4910-46a1-8637-fd5b16b2bd54" />

### Remarks
As you can see the mobile version has different menue styles and the bottom navbar.
The biggest reason for that is to have a seamless mobile experience as nearly all applications use bottom bars so the user won't have to learn a new pattern but instead, will use an existing one.
Furthermore, the biggest difference in the menu is the dropdown list.
Instead of having tiny arrows to press to expand and contract the menu, the user can now press the whole title and expand/collapse using that.
On the other hand, if the uses wishes to access the content which was formerly available by clicking the title e.g. "Products & Services", it will be available as a subitem in the list.

## Performance
Performance on the page has been cut drastically. The reports that were performed can be accessed on the links below.
### Before
Page insights:  
https://pagespeed.web.dev/analysis/https-www-greentube-com/hpb37vdudj?form_factor=desktop  

Performance reports:  
https://www.webpagetest.org/results.php?test=250715_YiDcRZ_B0V  

Lighthouse report:  
https://www.webpagetest.org/results.php?test=250715_YiDcAK_B18  

### After
Page insights:
https://pagespeed.web.dev/analysis/https-greentube-frontend-vercel-app/kze7gzpr2d?form_factor=mobile  

Performance reports: 
https://www.webpagetest.org/result/250717_ZiDcC8_6CM/

Lighthouse report: 
https://www.webpagetest.org/result/250717_YiDcXJ_69D/

### Summary
The optimization of the webpage for performance yielded faster results in all speed metrics.
The size of bundles has been reduced.
Page insights compared side by side look like this:
<img width="445" height="106" alt="performanceBefore" src="https://github.com/user-attachments/assets/852904f6-28da-4e00-8285-9373ce8c655d" />
<img width="445" height="106" alt="performanceAfter" src="https://github.com/user-attachments/assets/463c8f73-9659-4fde-bf98-cf4f66ec339f" />


## 📧 Contact

For any questions or support, please open an issue in this repository.

