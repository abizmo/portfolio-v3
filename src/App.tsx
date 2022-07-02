import React from 'react';
import {
  FiAtSign,
  FiCode,
  FiEye,
  FiGithub,
  FiLinkedin,
  FiSun,
} from 'react-icons/fi';
import styled from 'styled-components';

import './App.css';
import logo from './assets/abizmo-logo.svg';
import Header from './components/Header/Header';
import * as S from './components/UI/Buttons';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <Header logoSrc={logo} logoAlt='abizmo'>
        <Header.Nav>
          <Header.NavItem>
            <S.Link href='#about'>about</S.Link>
          </Header.NavItem>
          <Header.NavItem>
            <S.Link href='#works'>Works</S.Link>
          </Header.NavItem>
          <Header.NavItem>
            <S.Link href='#contact'>Contact</S.Link>
          </Header.NavItem>
          <Header.NavItem>
            <S.LinkButton $openInTab href='#'>
              Resume
            </S.LinkButton>
          </Header.NavItem>
        </Header.Nav>
        <S.Button $solid onClick={() => {}}>
          <FiSun />
        </S.Button>
      </Header>
      <div>
        <h1>Hi, my name is</h1>
        <h2>Abián Izquierdo</h2>
        <p className='lead'>
          I like building apps for the web and try to make your life a little
          easier.
        </p>
        <S.LinkButton
          $openInTab
          href='mailto:abizmo@gmail.com?subject=I want to meet you'
        >
          Contact Me
        </S.LinkButton>
      </div>
      <div id='about'>
        <h3>About Me</h3>
        <p>
          My name is Abián and I live in Las Palmas de Gran Canaria. I studied
          Technical Engineering in Computer Systems at Las Palmas de Gran
          Canaria University.
        </p>
        <p>
          I have been working as System Administrator for almost 18 years, first
          at Airport and later at Canarian Blood Bank. At the blood bank I have
          been fortunate to be able to develop some applications for internal
          work.
        </p>
        <p>
          I start to code when I was at high school, and now I usually code apps
          for the web in my free time. Now I want to turn my hobby into my job.
        </p>
        <p>Here are a few technologies I’ve been working with:</p>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>Jest</li>
          <li>Styled Components</li>
          <li>MaterialUI</li>
          <li>TailwindCss</li>
          <li>GraphQL</li>
          <li>Git</li>
          <li>Docker</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div id='works'>
        <h3>Works</h3>
        <ul>
          <li>
            <div>
              <img src='' alt='interactive-comments-section' />
              <div>
                <h4>Interactive comments section</h4>
                <ul>
                  <li>Built with React and Styled Components</li>
                  <li>Tested with React Testing Library</li>
                  <li>Challenge from FrontendMentor.io</li>
                </ul>
                <div>
                  <S.Link>
                    <FiCode />
                  </S.Link>
                  <S.Link>
                    <FiEye />
                  </S.Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id='contact'>
        <h3>Contact</h3>
        <p>
          Et pariatur irure ex aute velit nulla consequat labore deserunt
          proident sunt enim. Exercitation tempor nisi labore ut exercitation in
          aliqua nisi elit dolor est aute ex. Est ex id duis Lorem quis et nisi
          voluptate. Minim pariatur et adipisicing sint mollit voluptate id
          consectetur laborum aute. Tempor consectetur do officia aliquip amet
          nisi non est.
        </p>
        <S.LinkButton
          $solid
          href='mailto:abizmo@gmail.com?subject=I want to meet you'
        >
          Contact Me
        </S.LinkButton>
      </div>
      <footer>
        <ul>
          <li>
            <S.Link
              $openInTab
              href='https://www.linkedin.com/in/abian-izquierdo'
            >
              <FiLinkedin />
            </S.Link>
          </li>
          <li>
            <S.Link $openInTab href='https://github.com/abizmo'>
              <FiGithub />
            </S.Link>
          </li>
          <li>
            <S.Link $openInTab href='mailto:abizmo@gmail.com'>
              <FiAtSign />
            </S.Link>
          </li>
        </ul>
      </footer>
    </Wrapper>
  );
}

export default App;
