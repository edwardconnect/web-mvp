import Head from "next/head"
import { Component } from 'react'
import React from 'react';
import Nav from '../components/layout/Navbar/Navbar'
// import PageLayout from '../components/layout/PageLayout/PageLayout'
import { attributes as serviceAttri } from '../content/service-overview.md';
// import { attributes, react as HomeContent } from '../content/home.md';
import PageLayout from "../components/layout/PageLayout/PageLayout";
import LandingBanner from "../components/landing/LandingBanner/LandingBanner";
import OverviewCard from "../components/landing/OverviewCard/OverviewCard";
// import PageLayout from '../components/layout/PageLayout/PageLayout'

import styled from 'styled-components';

const Form = styled.form<any>``

const Home: React.FC<any> = () => {
  const { services } = serviceAttri;
  console.log(serviceAttri)

  return (
    <PageLayout>
      <LandingBanner />
      {
        services.map((it, idx) => (
          <OverviewCard {...it} key={idx} reverse={idx % 2 !== 0} index={idx} />
        ))
      }
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      {/* <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article> */}

      {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
     <input type="text"  name="name">
     <input type="email" name="email">
     <textarea name="message"></textarea>
</form> */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </PageLayout>
  )
}

// export default class Home extends Component {
//   render() {
//     let { title, cats } = attributes;
//     return (
//       <>
//         <Head>
//           <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
//         </Head>
//         <article>
//           <h1>{title}</h1>
//           <HomeContent />
//           <ul>
//             {cats.map((cat, k) => (
//               <li key={k}>
//                 <h2>{cat.name}</h2>
//                 <p>{cat.description}</p>
//               </li>
//             ))}
//           </ul>
//         </article>

//         <form name="contact" netlify>
//           <p>
//             <label>Name <input type="text" name="name" /></label>
//           </p>
//           <p>
//             <label>Email <input type="email" name="email" /></label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       </>
//     )
//   }
// }

export default Home;