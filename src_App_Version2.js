import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Hawaii-themed background image (royalty-free placeholder)
const heroBg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"; // tropical beach

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', 'Segoe UI', Arial, sans-serif;
    background: #f9fafb;
    color: #1a2634;
  }
  a { color: #00897b; text-decoration: none; }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #00897b 60%, #ffd600 100%);
  padding: 1.25rem 2rem;
  box-shadow: 0 2px 8px #0002;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: #fff;
  img {
    height: 48px;
    margin-right: 1rem;
  }
`;

const NavLinks = styled.div`
  a {
    margin-left: 2rem;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 600;
    transition: color 0.2s;
    &:hover {
      color: #ffd600;
    }
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 55vh;
  background: url(${heroBg}) center/cover no-repeat;
  color: #fff;
  box-shadow: 0 8px 32px #0003;
  position: relative;
  &:after {
    content: "";
    background: linear-gradient(90deg, #00897bdd 60%, #ffd600bb 120%);
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin-left: 7vw;
  padding: 3rem 2rem 3rem 0;
  h1 {
    font-size: 2.7rem;
    margin-bottom: 1rem;
    font-family: 'Merriweather', serif;
    letter-spacing: 0.5px;
  }
  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #ffd600;
  color: #00897b;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  padding: 0.9rem 2.2rem;
  border-radius: 25px;
  box-shadow: 0 2px 8px #0001;
  transition: background 0.2s;
  &:hover {
    background: #fff176;
    color: #00695c;
  }
`;

// PRACTICE AREAS
const Section = styled.section`
  padding: 4rem 0 2.5rem 0;
  background: ${(props) => (props.alt ? "#e0f2f1" : "#f9fafb")};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #00897b;
  font-family: 'Merriweather', serif;
`;

const PracticeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const PracticeCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 2rem 1.2rem;
  box-shadow: 0 2px 12px #00897b18;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-8px) scale(1.04);
    box-shadow: 0 4px 18px #00897b33;
  }
  img {
    width: 56px;
    margin-bottom: 1.2rem;
  }
  h3 {
    margin-bottom: 0.7rem;
    color: #00897b;
    font-size: 1.15rem;
  }
  p {
    font-size: 1rem;
    color: #444;
  }
`;

// TEAM
const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
`;

const TeamCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 10px #00897b15;
  width: 240px;
  padding: 2rem 1.2rem;
  text-align: center;
  img {
    border-radius: 50%;
    width: 90px;
    margin-bottom: 1rem;
    border: 4px solid #e0f2f1;
  }
  h4 {
    margin: 0.6rem 0 0.3rem 0;
    color: #00897b;
    font-size: 1.15rem;
  }
  p {
    color: #444;
    font-size: 0.98rem;
  }
`;

// TESTIMONIALS
const TestimonialWrap = styled.div`
  background: #fffde7;
  border-radius: 16px;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 8px #ffd60033;
  text-align: center;
`;

const Quote = styled.p`
  font-size: 1.12rem;
  font-style: italic;
  color: #00897b;
  margin-bottom: 0.5rem;
`;

const Client = styled.div`
  font-weight: bold;
  color: #1a2634;
`;

// CONTACT
const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px #00897b15;
  padding: 2rem;
  flex: 1 1 340px;
  min-width: 300px;
  max-width: 420px;
  input, textarea {
    width: 100%;
    margin-top: 0.7rem;
    margin-bottom: 1.2rem;
    padding: 0.7rem 1rem;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    font-size: 1rem;
    background: #f5f5f5;
  }
  button {
    background: #00897b;
    color: #fff;
    padding: 0.9rem 2.2rem;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    font-size: 1.08rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #00695c;
    }
  }
`;

// CONTACT INFO
const ContactInfo = styled.div`
  flex: 1 1 240px;
  min-width: 220px;
  color: #00897b;
  font-size: 1.08rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: none;
  padding: 1rem 0;
  b {
    color: #00695c;
  }
`;

// FOOTER
const Footer = styled.footer`
  background: linear-gradient(90deg, #00897b 60%, #ffd600 100%);
  color: #fff;
  padding: 2rem 0 1rem 0;
  text-align: center;
  font-size: 1.1rem;
  position: relative;
  margin-top: 3rem;
  letter-spacing: 0.4px;
`;

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />

      {/* NAV */}
      <Navbar>
        <Logo>
          <img
            src="https://cdn-icons-png.flaticon.com/512/861/861059.png" // palm tree icon
            alt="Hawaii Law Logo"
          />
          Hawaii Law Group
        </Logo>
        <NavLinks>
          <a href="#practice">Practice Areas</a>
          <a href="#team">Attorneys</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Navbar>

      {/* HERO */}
      <Hero>
        <HeroContent>
          <h1>Justice with Aloha</h1>
          <p>
            Serving Hawaii with compassionate, expert legal guidance in personal injury, family, and business law. Let our team help you find peace and resolution—Island style.
          </p>
          <CTAButton href="#contact">Request a Free Consultation</CTAButton>
        </HeroContent>
      </Hero>

      {/* PRACTICE AREAS */}
      <Section id="practice">
        <SectionTitle>Practice Areas</SectionTitle>
        <PracticeGrid>
          <PracticeCard>
            <img src="https://cdn-icons-png.flaticon.com/512/1971/1971344.png" alt="" />
            <h3>Personal Injury</h3>
            <p>Accidents, slip & fall, and injury cases. We fight for your fair compensation.</p>
          </PracticeCard>
          <PracticeCard>
            <img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" alt="" />
            <h3>Family Law</h3>
            <p>Divorce, child custody, and support handled with sensitivity and care.</p>
          </PracticeCard>
          <PracticeCard>
            <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png" alt="" />
            <h3>Business Law</h3>
            <p>Guidance for local businesses, contracts, and disputes.</p>
          </PracticeCard>
          <PracticeCard>
            <img src="https://cdn-icons-png.flaticon.com/512/1712/1712190.png" alt="" />
            <h3>Real Estate</h3>
            <p>Property transactions, landlord/tenant issues, and more.</p>
          </PracticeCard>
        </PracticeGrid>
      </Section>

      {/* TEAM */}
      <Section id="team" alt>
        <SectionTitle>Meet Our Attorneys</SectionTitle>
        <TeamGrid>
          <TeamCard>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Attorney 1" />
            <h4>Leilani Koa, Esq.</h4>
            <p>Personal Injury & Family Law</p>
          </TeamCard>
          <TeamCard>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Attorney 2" />
            <h4>Kai Manoa, Esq.</h4>
            <p>Business & Real Estate Law</p>
          </TeamCard>
        </TeamGrid>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <TestimonialWrap>
          <Quote>
            "Hawaii Law Group helped me after my car accident. They treated me like family and got me the settlement I deserved. Mahalo!"
          </Quote>
          <Client>- Malia K., Honolulu</Client>
        </TestimonialWrap>
        <TestimonialWrap>
          <Quote>
            "They made a difficult divorce so much easier. Kind, knowledgeable, and always there for me."
          </Quote>
          <Client>- Greg T., Maui</Client>
        </TestimonialWrap>
      </Section>

      {/* CONTACT */}
      <Section id="contact" alt>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactGrid>
          <ContactForm
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (demo only)");
            }}
          >
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea rows={5} name="message" required />
            </label>
            <button type="submit">Send Message</button>
          </ContactForm>
          <ContactInfo>
            <div>
              <b>Phone:</b> <a href="tel:8085551234">(808) 555-1234</a>
            </div>
            <div>
              <b>Email:</b> <a href="mailto:info@hawaiilawgroup.com">info@hawaiilawgroup.com</a>
            </div>
            <div>
              <b>Address:</b> <br />
              123 Aloha Ave, Suite 200<br />
              Honolulu, HI 96815
            </div>
            <div>
              <b>Hours:</b> <br />
              Mon-Fri: 9am – 5pm
            </div>
          </ContactInfo>
        </ContactGrid>
      </Section>

      {/* FOOTER */}
      <Footer>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/861/861059.png" alt="" style={{ width: 36, verticalAlign: "middle", marginRight: 8 }} />
          © {new Date().getFullYear()} Hawaii Law Group. All Rights Reserved. | Justice with Aloha.
        </div>
        <div style={{ fontSize: "0.95rem", marginTop: 8 }}>
          Website by <a href="https://github.com/alexsk-hue" target="_blank" rel="noopener noreferrer" style={{ color: "#fffde7" }}>alexsk-hue</a>
        </div>
      </Footer>
    </Wrapper>
  );
}