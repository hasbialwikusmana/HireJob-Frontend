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
      <img src="https://github.com/user-attachments/assets/6ab1478b-7e4b-4fe9-97e4-9aaddffe52d5" alt="List Worker Page" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>List Worker Page</strong></td>
  </tr>

  <!-- Row 5 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/cb393e31-1367-4ed7-bc5f-6a814e9f62a6" alt="Profile Worker" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/2d67d13f-4034-470a-9ac6-2be8dd4d0b69" alt="Profile Recruiter" width="100%">
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
      <img src="https://github.com/user-attachments/assets/fcec5a93-d5ba-4584-9ea4-dbf390c4ee79" alt="Experience Page" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Portfolio Page</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Experience Page</strong></td>
  </tr>
  <!-- Row 6 - Edit Profile Worker Page -->
  <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/8e609f85-2d5e-4fd8-9af1-9eb658155043" alt="Edit Profile Worker Page" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>Edit Profile Worker Page</strong></td>
  </tr>

  <!-- Row 7 -->
  <tr>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/506e18c9-da8a-487b-9f01-f81ebbbfa328" alt="Edit Profile Recruiter Page" width="100%">
    </td>
    <td width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/788196ed-9893-4422-a933-4594fc795e7f" alt="Hire Page" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 10px 0;"><strong>Edit Profile Recruiter Page</strong></td>
    <td align="center" style="padding: 10px 0;"><strong>Hire Page</strong></td>
  </tr>

   <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/f2450774-8fc0-4940-8711-16fdb2a4925c" alt="Halaman Hire" width="100%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" style="padding: 10px 0;"><strong>Halaman Hire</strong></td>
  </tr>

</table>

</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project

:rocket: [`Backend Hire Job`](https://github.com/hasbialwikusmana/HireJob-Backend)

:rocket: [`Frontend Hire Job`](https://github.com/hasbialwikusmana/HireJob-Frontend)

:rocket: [`Web Service`](hire-job-backend-blue.vercel.app/)

:rocket: [`Demo Hire Job`](https://peworldapp.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

My Email : [mailto:hasbialwi70@gmail.com](mailto:hasbialwi70@gmail.com)

Project Link: [https://github.com/hasbialwikusmana/HireJob-Frontend](https://github.com/hasbialwikusmana/HireJob-Frontend)

<p align="right">(<a href="#top">back to top</a>)</p>
