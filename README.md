<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/hasbialwikusmana/HireJob-Frontend">
    <img src="https://github.com/user-attachments/assets/00895a1a-8b64-4694-9f3b-7df6bbc28ba1" alt="Logo" width="100%">
  </a>

  <h3 align="center">Hire Job</h3>

  <p align="center">
    Find talented & best developers in various fields.
    <br />
    <a href="#table-of-contents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://peworldapp.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/hasbialwikusmana/HireJob-Frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/hasbialwikusmana/HireJob-Frontend/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<!-- ABOUT THE PROJECT -->

## About The Project

**Hire Job** is an application that provides companies with access to find the best workforce based on the required skills or abilities, while also facilitating job seekers in discovering job opportunities that match their expertise. This application is equipped with various features, such as allowing companies to view potential candidates they wish to recruit, modify profiles, and for job seekers, add skills, update profiles, and delete unnecessary data.

This application is developed individually by Hasbi using React.js, Express.js, and PostgreSQL technologies.

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
VITE_API_URL = "" # Please fill with your API URL
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ## Screenshoots
<p align="center" display=flex>

<table>
 <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1tzS8NBQtMGku6cXficIW5wQClduek1KQ" alt="Landing Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1vALeDMD_fNkAKQqqqRuFDHt11nGbSBh6" alt="Landing Page After Login" width=100%/></td>
  </tr>
   <tr>
    <td>Landing Page</td>
    <td>Landing Page After Login</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1oag1KBgj-fQAzsmwjvNPCOELoqAeXbEO" alt="Login Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/17yeQqw408hiDDOyFZq17Fw3ovnswsQ7D" alt="Forgot Password Page" width=100%/></td>
  </tr>
   <tr>
    <td>Login Page</td>
    <td>Forgot Password Page</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1nshaEdAJsPJUPJ4uR1bmM_275Rrf6zlb" alt="Register Worker Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1ovMJdHmSF2b1MfGMEbXM22YbyJhF1305" alt="Register Recruiter Page" width=100%/></td>
  </tr>
   <tr>
    <td>Register Worker Page</td>
    <td>Register Recruiter Page</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1Rv3GPrjZCZkgf7jJkXTUo7Rq21qT0RWF" alt="Reset Password Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1faiv7WfqKLpWx4fT67ITpTqhg0AGIvma" alt="Send Message" width=100%></td>
  </tr>
  <tr>
    <td>Reset Password Page</td>
    <td>Send Message</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1xa6v3_KTTxLq9yENUX5FQ0dDfexhLHhT" alt="List Worker Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1uaE7J2Chz_sd0C546eiUzeiqfZk9KV35" alt="List Recruiter Page" width=100%></td>
  </tr>
  <tr>
    <td>List Worker Page</td>
    <td>List Recruiter Page</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1rAB9MAE1YXduQR54z2GV4-LIUjULrlHt" alt="Profile Worker - Portofolio Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1kK97he_sI5VXQu386PCdWMa5mIOMrJof" alt="Profile Worker - Experience Page" width=100%></td>
  </tr>
  <tr>
    <td>Profile Worker - Portofolio Page</td>
    <td>Profile Worker - Experience Page</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/10QlGAEHAQKd7uUjGX7PdEgahAIWdDgEx" alt="Detail Worker Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1Lg2xtIj-Bw66hfeiw43UkXWWE-Yl8Suf" alt="Edit Profile Worker Page" width=100%></td>
  </tr>
  <tr>
    <td>Detail Worker Page</td>
    <td>Edit Profile Worker Page</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1JC4ey8k86NJ7y6yigBRWV85ca5rZguBh" alt="Profile Recruiter Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1_TUFkzjW2SdQOuUdzPFi1yfNus2fdgqX" alt="Detail Recruiter Page" width=100%></td>
  </tr>
  <tr>
    <td>Profile Recruiter Page</td>
    <td>Detail Recruiter Page</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/11rAYOaeWBScl3H8V7zIfIHMwtyWcwBhr" alt="Edit Profile Recruiter Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1f_AUAzw2cVNNIp7EZ27snqve0ze1udI7" alt="Hire Page" width=100%></td>
  </tr>
  <tr>
    <td>Edit Profile Recruiter Page</td>
    <td>Hire Page</td>
  </tr>

</table>

</p>

<p align="right">(<a href="#top">back to top</a>)</p> -->

## Related Project

:rocket: [`Backend Hire Job`](https://github.com/hasbialwikusmana/HireJob-Backend)

:rocket: [`Frontend Hire Job`](https://github.com/hasbialwikusmana/HireJob-Frontend)

:rocket: [`Web Service`](hire-job-backend-blue.vercel.app/)

:rocket: [`Demo Hire Job`](https://peworldapp.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

My Email : hasbialwi70@gmail.com

Project Link: [https://github.com/hasbialwikusmana/HireJob-Frontend](https://github.com/hasbialwikusmana/HireJob-Frontend)

<p align="right">(<a href="#top">back to top</a>)</p>
