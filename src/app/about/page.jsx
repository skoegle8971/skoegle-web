"use client";

import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../Components/Layout/Layout";

const AboutPage = () => {
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const data = {
    leadership: [
      {
        id: 1,
        name: "Swarup Nag",
        position: "Founder & CEO",
        img: "/images/leadership/swarup-nag.jpg",
        bio: "Visionary leader with 15+ years of experience in technology innovation. Swarup founded SKOEGLE with a mission to bridge the gap between business needs and technological solutions.",
        social: {
          linkedin: "https://linkedin.com/in/swarupnag",
          twitter: "https://twitter.com/swarupnag"
        }
      },
      {
        id: 2,
        name: "Sheetal M",
        position: "Co-Founder & COO",
        img: "/images/leadership/sheetal-m.jpg",
        bio: "Operations expert specializing in scaling technology companies. Sheetal's strategic leadership has been instrumental in SKOEGLE's rapid growth and client success.",
        social: {
          linkedin: "https://linkedin.com/in/sheetalm",
          twitter: "https://twitter.com/sheetalm"
        }
      },
    ],
    departments: [
      {
        name: "Engineering",
        description: "Our engineering team builds robust, scalable solutions using cutting-edge technologies.",
        count: 8
      },
      {
        name: "Product",
        description: "Product team ensures our solutions solve real business problems with intuitive design.",
        count: 3
      },
      {
        name: "Customer Success",
        description: "Dedicated professionals committed to ensuring client satisfaction and success.",
        count: 4
      }
    ],
    values: [
      {
        title: "Innovation",
        description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive edge.",
        icon: "💡"
      },
      {
        title: "Integrity",
        description: "We build trust through transparency, honesty, and ethical business practices in all our relationships.",
        icon: "🤝"
      },
      {
        title: "Excellence",
        description: "We pursue perfection in everything we do, delivering quality that exceeds expectations.",
        icon: "✨"
      },
      {
        title: "Collaboration",
        description: "We believe the best solutions emerge from teamwork and diverse perspectives.",
        icon: "👥"
      }
    ],
    journey: [
      { 
        year: "2015", 
        title: "Company Founding",
        description: "SKOEGLE was founded by Swarup Nag and Sheetal M with a vision to transform businesses through technology.",
        milestone: "Founded"
      },
      { 
        year: "2017", 
        title: "First Product Launch",
        description: "Successfully launched our flagship product, revolutionizing how small businesses manage operations.",
        milestone: "Product Launch"
      },
      { 
        year: "2019", 
        title: "Series A Funding",
        description: "Secured $5M in Series A funding to accelerate product development and market expansion.",
        milestone: "$5M Funding"
      },
      { 
        year: "2021", 
        title: "Global Expansion",
        description: "Expanded operations to 3 continents, serving 100+ enterprise clients worldwide.",
        milestone: "Global Reach"
      },
      { 
        year: "2024", 
        title: "AI Innovation",
        description: "Introduced industry-leading AI solutions, positioning SKOEGLE as a technology pioneer.",
        milestone: "AI Solutions"
      },
    ],
    meta: {
      title: "About SKOEGLE | Our Story, Team, and Values",
      description: "Discover SKOEGLE's journey, leadership team, and core values. Learn how we're transforming businesses through innovative technology solutions.",
      keywords: "SKOEGLE about us, technology company, software solutions, leadership team, company values",
      ogTitle: "About SKOEGLE | Our Story, Team, and Values",
      ogDescription: "Learn about SKOEGLE's mission, leadership, and the innovative technology solutions we provide.",
      canonical: "https://www.skoegle.com/about"
    },
    hero: {
      title: "Driving Digital Transformation Through Innovation",
      subtitle: "At SKOEGLE, we don't just adapt to change - we create it. For over 8 years, we've been helping businesses transform their operations through cutting-edge technology solutions."
    },
    mission: {
      statement: "To empower organizations of all sizes with intelligent, scalable technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.",
      stats: [
        { number: "150+", label: "Clients Worldwide" },
        { number: "8+", label: "Years Experience" },
        { number: "40+", label: "Team Members" },
        { number: "98%", label: "Client Retention" }
      ]
    },
    testimonial: {
      quote: "\"SKOEGLE transformed our operations with their innovative platform. Their team's expertise and commitment to our success set them apart in the industry.\"",
      client: {
        name: "Sarah Johnson",
        title: "CTO, TechForward Inc."
      }
    },
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Discover how SKOEGLE's solutions can drive your digital transformation journey.",
      buttons: [
        { text: "Get a Demo", type: "primary" },
        { text: "Contact Us", type: "secondary" }
      ]
    },
    teamCta: {
      title: "Join Our Growing Team",
      description: "We're always looking for passionate, innovative thinkers to join our team. Explore opportunities to grow your career with us.",
      buttonText: "View Open Positions"
    }
  };

  return (
    <Layout>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords} />
        <meta property="og:title" content={data.meta.ogTitle} />
        <meta property="og:description" content={data.meta.ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={data.meta.canonical} />
      </Head>

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="hero-title">{data.hero.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-statement">{data.mission.statement}</p>
              <div className="stats-grid">
                {data.mission.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2>Our Core Values</h2>
            <p className="section-intro">
              These principles guide every decision we make and every solution we deliver:
            </p>
            <div className="values-grid">
              {data.values.map((value, index) => (
                <div 
                  key={index}
                  className={`value-card ${hoveredValue === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="journey-section">
          <div className="container">
            <h2>Our Journey</h2>
            <p className="section-intro">
              From humble beginnings to industry recognition, our story is one of persistent innovation:
            </p>
            <div className="timeline">
              {data.journey.map((step, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-milestone">{step.milestone}</div>
                  <div className="timeline-year">{step.year}</div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="leadership-section">
          <div className="container">
            <h2>Leadership Team</h2>
            <p className="section-intro">
              Meet the visionary leaders driving SKOEGLE's success:
            </p>
            <div className="leadership-grid">
              {data.leadership.map((leader) => (
                <div 
                  key={leader.id}
                  className={`leader-card ${hoveredLeader === leader.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredLeader(leader.id)}
                  onMouseLeave={() => setHoveredLeader(null)}
                >
                  <div className="leader-image-container">
                    <img 
                      src={leader.img} 
                      alt={`${leader.name}, ${leader.position}`}
                      className="leader-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <p className="position">{leader.position}</p>
                    <p className="bio">{leader.bio}</p>
                    <div className="social-links">
                      <a href={leader.social.linkedin} aria-label={`${leader.name} LinkedIn`}>
                        <span className="social-icon">in</span>
                      </a>
                      <a href={leader.social.twitter} aria-label={`${leader.name} Twitter`}>
                        <span className="social-icon">𝕏</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2>Our Expert Team</h2>
            <p className="section-intro">
              SKOEGLE brings together top talent from diverse disciplines to deliver comprehensive solutions:
            </p>
            
            <div className="departments-grid">
              {data.departments.map((dept, index) => (
                <div key={index} className="department-card">
                  <h3>{dept.name}</h3>
                  <p>{dept.description}</p>
                  <div className="team-count">{dept.count} specialists</div>
                </div>
              ))}
            </div>
            
            <div className="cta-container">
              <h3>{data.teamCta.title}</h3>
              <p>{data.teamCta.description}</p>
              <button className="cta-button">{data.teamCta.buttonText}</button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
          <div className="container">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-card">
              <blockquote>{data.testimonial.quote}</blockquote>
              <div className="client-info">
                <div className="client-avatar"></div>
                <div>
                  <p className="client-name">{data.testimonial.client.name}</p>
                  <p className="client-title">{data.testimonial.client.title}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.description}</p>
            <div className="cta-buttons">
              {data.cta.buttons.map((button, index) => (
                <button 
                  key={index} 
                  className={`${button.type}-cta`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .about-page {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          /* Hero Section */
          .about-hero {
            background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
            color: white;
            padding: 6rem 0;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
          }
          
          /* Mission Section */
          .mission-section {
            padding: 5rem 0;
            background-color: #f9f9f9;
          }
          
          .mission-content {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }
          
          .mission-content h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: #0d47a1;
          }
          
          .mission-statement {
            font-size: 1.25rem;
            margin-bottom: 3rem;
            color: #555;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .stat-item {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            text-align: center;
          }
          
          .stat-number {
            display: block;
            font-size: 2.2rem;
            font-weight: 700;
            color: #0d47a1;
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            font-size: 1rem;
            color: #666;
          }
          
          /* Values Section */
          .values-section {
            padding: 5rem 0;
          }
          
          .values-section h2, 
          .journey-section h2,
          .leadership-section h2,
          .team-section h2 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #0d47a1;
          }
          
          .section-intro {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 3rem;
            font-size: 1.1rem;
            color: #555;
          }
          
          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .value-card {
            background: white;
            border-radius: 8px;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            border: 1px solid #eee;
          }
          
          .value-card.hovered {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            border-color: #0d47a1;
          }
          
          .value-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .value-card h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #222;
          }
          
          .value-card p {
            color: #666;
            margin: 0;
          }
          
          /* Journey Section */
          .journey-section {
            padding: 5rem 0;
            background-color: #f9f9f9;
          }
          
          .timeline {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
            padding-left: 50px;
          }
          
          .timeline::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 3px;
            background: #0d47a1;
          }
          
          .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            padding-left: 30px;
          }
          
          .timeline-item:last-child {
            margin-bottom: 0;
          }
          
          .timeline-milestone {
            position: absolute;
            left: -45px;
            top: 0;
            background: #0d47a1;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
          }
          
          .timeline-year {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0d47a1;
            margin-bottom: 0.5rem;
          }
          
          .timeline-content {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          
          .timeline-content h3 {
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
          }
          
          .timeline-content p {
            margin: 0;
            color: #555;
          }
          
          /* Leadership Section */
          .leadership-section {
            padding: 5rem 0;
          }
          
          .leadership-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .leader-card {
            display: flex;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            border: 1px solid #eee;
          }
          
          .leader-card.hovered {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          }
          
          .leader-image-container {
            width: 150px;
            flex-shrink: 0;
          }
          
          .leader-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .leader-info {
            padding: 1.5rem;
            flex-grow: 1;
          }
          
          .leader-info h3 {
            margin-top: 0;
            margin-bottom: 0.3rem;
            font-size: 1.4rem;
            color: #222;
          }
          
          .position {
            color: #0d47a1;
            font-weight: 600;
            margin-bottom: 1rem;
          }
          
          .bio {
            color: #555;
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }
          
          .social-links {
            display: flex;
            gap: 1rem;
          }
          
          .social-links a {
            color: #0d47a1;
            text-decoration: none;
            font-weight: 600;
          }
          
          /* Team Section */
          .team-section {
            padding: 5rem 0;
            background-color: #f9f9f9;
          }
          
          .departments-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto 3rem;
          }
          
          .department-card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          
          .department-card h3 {
            margin-top: 0;
            color: #0d47a1;
          }
          
          .department-card p {
            color: #555;
            margin-bottom: 1.5rem;
          }
          
          .team-count {
            font-weight: 600;
            color: #0d47a1;
          }
          
          .cta-container {
            background: #0d47a1;
            color: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .cta-container h3 {
            margin-top: 0;
            font-size: 1.5rem;
          }
          
          .cta-container p {
            margin-bottom: 1.5rem;
            opacity: 0.9;
          }
          
          .cta-button {
            background: white;
            color: #0d47a1;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          
          /* Testimonial Section */
          .testimonial-section {
            padding: 5rem 0;
          }
          
          .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            max-width: 800px;
            margin: 0 auto;
          }
          
          .testimonial-card blockquote {
            font-size: 1.2rem;
            font-style: italic;
            color: #555;
            margin: 0 0 1.5rem;
            position: relative;
          }
          
          .testimonial-card blockquote::before {
            content: '"';
            font-size: 3rem;
            color: #0d47a1;
            opacity: 0.2;
            position: absolute;
            left: -20px;
            top: -15px;
          }
          
          .client-info {
            display: flex;
            align-items: center;
          }
          
          .client-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #ddd;
            margin-right: 1rem;
          }
          
          .client-name {
            font-weight: 600;
            margin: 0;
          }
          
          .client-title {
            margin: 0;
            color: #777;
            font-size: 0.9rem;
          }
          
          /* CTA Section */
          .about-cta {
            padding: 5rem 0;
            background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
            color: white;
            text-align: center;
          }
          
          .about-cta h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .about-cta p {
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto 2rem;
            opacity: 0.9;
          }
          
          .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          
          .primary-cta {
            background: white;
            color: #0d47a1;
            border: none;
            padding: 0.8rem 1.8rem;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .secondary-cta {
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 0.8rem 1.8rem;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .primary-cta:hover, .secondary-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
        `}</style>
      </main>
    </Layout>
  );
};

export default AboutPage;