<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/hasbialwikusmana/HireJob-Frontend">
    <img src="https://github.com/user-attachments/assets/3abbb5ea-28c9-4325-9f34-d026a3dbe2bc" alt="Logo" width="100%">
  </a>

  <h3 align="center">Hire Job</h3>

  <p align="center">
    Find talented & best developers in various fields.
    <br />
    <a href="https://peworldapp.netlify.app/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

**Hire Job** is an application that provides companies with access to find the best workforce based on the required skills or abilities, while also facilitating job seekers in discovering job opportunities that match their expertise. This application is equipped with various features, such as allowing companies to view potential candidates they wish to recruit, modify profiles, and for job seekers, add skills, update profiles, and delete unnecessary data.

This application is developed individually by Hasbi using React.js, Express.js, and PostgreSQL technologies.

## Features

1. **User Authentication**

   - **Login & Registration**: Users can register as workers or recruiters and log in to the application.

2. **Profile Management**

   - **Edit Profile**: Users can edit their profiles, including updating personal information, profile photos, and other details.
   - **Manage Skills**: Workers can add, edit, or delete their skills.
   - **Portfolio & Experience**: Workers can add project portfolios and work experience to their profiles.

3. **Job Seeker Features**

   - **Job Search**: Search for jobs based on skills and other criteria.
   - **Job Application**: Apply for available jobs.
   - **Save Job Listings**: Save interesting job listings for future reference.

4. **Recruiter Features**

   - **Search Candidates**: Recruiters can search for candidates based on skills and experience.
   - **View Candidate Profiles**: View complete worker profiles, including portfolios and work experience.
   - **Hire Candidates**: Contact suitable candidates to offer job opportunities.

5. **Responsive Design**
   - **Mobile & Desktop Support**: The application is designed to be responsive and comfortably usable on both mobile and desktop devices.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This app was built with some technologies below:

- [Vite](https://vitejs.dev/)
- [React js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/en/main)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Slick Carousel](https://slick-carousel.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [NodeJs](https://nodejs.org/en/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

If you want to run this project locally, I recommend you to configure the [back-end](https://github.com/hasbialwikusmana/HireJob-Backend) first before configuring this repo front-end.

- Clone the repo

```
git clone https://github.com/hasbialwikusmana/HireJob-Frontend.git
```

- Go To Folder Repo

```
cd HireJob-Frontend
```

- Install Module

```
npm install
```

- <a href="#setup-env">Setup .env</a>
- Type `npm run dev` to start development server.<br> Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```
VITE_API_URL = "YOUR_API_URL"
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshots

<p align="center" style="display: flex; flex-direction: column; align-items: center;">

<table width="100%" style="table-layout: auto;">
  <!-- Row 1 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/1a611e4c-3d7d-41ef-99b4-93d1a20bd2fe" alt="Landing Page" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/603bfadd-1c3e-4e3c-99e7-6d3339bd70b8" alt="Landing Page After Login" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Landing Page</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Landing Page After Login</strong></td>
  </tr>

  <!-- Row 2 -->
  <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/6e811894-03a2-4e1d-a874-04c6823915e8" alt="Login Page" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>Login Page</strong></td>
  </tr>

  <!-- Row 3 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/cb849da7-0fb7-4cde-b047-48c89efe277c" alt="Register Worker Page" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/baa1dbe6-df11-4c09-97b0-d0b709d41dbb" alt="Register Recruiter Page" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Register Worker Page</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Register Recruiter Page</strong></td>
  </tr>

  <!-- Row 4 -->
  <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/24fb9e46-8937-4e5b-a3de-7b115374241b" alt="List Worker Page" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>List Worker Page</strong></td>
  </tr>

  <!-- Row 5 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/418c6071-c3fe-4b0b-9659-b39fd44604ce" alt="Profile Worker" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/51c4cb28-9e94-4cf2-b66d-64b294ae7390" alt="Profile Recruiter" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Profile Worker</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Profile Recruiter</strong></td>
  </tr>

 <!-- Row 5 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/6f81b6c5-b52d-4ed2-a8ce-149c8898b596" alt="Portfolio Page" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/d7a58d8f-f0e9-45c1-973c-9c26f4812548" alt="Experience Page" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Portfolio Page</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Experience Page</strong></td>
  </tr>
  <!-- Row 6 - Edit Profile Worker Page -->
  <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/3d4776b8-8c86-4e77-9de0-664ae0eac939" alt="Edit Profile Worker Page" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>Edit Profile Worker Page</strong></td>
  </tr>

  <!-- Row 7 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/7cb09427-fd47-49ec-a6bd-3274a8cb1db8" alt="Edit Profile Recruiter Page" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/1e136fda-31b0-4b2c-af8f-00dbd1edfa14" alt="Hire Page" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Edit Profile Recruiter Page</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Hire Page</strong></td>
  </tr>

   <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/62591048-9be7-4dad-85f3-f4bd5d12a068" alt="Hire Message" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>Hire Message</strong></td>
  </tr>

</table>

</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project

:rocket: [`Backend Hire Job`](https://github.com/hasbialwikusmana/HireJob-Backend)

:rocket: [`Frontend Hire Job`](https://github.com/hasbialwikusmana/HireJob-Frontend)

:rocket: [`Web Service`](https://hire-job-backend-rho.vercel.app/)

:rocket: [`Demo Hire Job`](https://peworldapp.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

My Email : [hasbialwi70@gmail.com](mailto:hasbialwi70@gmail.com)

Project Link: [https://github.com/hasbialwikusmana/HireJob-Frontend](https://github.com/hasbialwikusmana/HireJob-Frontend)

<p align="right">(<a href="#top">back to top</a>)</p>
