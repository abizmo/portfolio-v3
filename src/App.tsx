import React from 'react';

import './App.css';

function App() {
  return (
    <div>
      <nav>
        <img src='' alt='abizmo' />
        <ul>
          <li>about</li>
          <li>works</li>
          <li>contact</li>
          <li>resume</li>
          <li>
            <button type='button'>
              <img src='' alt='change theme' />
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Hi, my name is</h1>
        <h2>Abián Izquierdo</h2>
        <p className='lead'>
          I like building apps for the web and try to make your life a little
          easier.
        </p>
        <button type='button'>Contact me</button>
      </div>
      <div>
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
      <div>
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
                  <button type='button'>
                    <img src='' alt='source code' />
                  </button>
                  <button type='button'>
                    <img src='' alt='live-demo' />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          Et pariatur irure ex aute velit nulla consequat labore deserunt
          proident sunt enim. Exercitation tempor nisi labore ut exercitation in
          aliqua nisi elit dolor est aute ex. Est ex id duis Lorem quis et nisi
          voluptate. Minim pariatur et adipisicing sint mollit voluptate id
          consectetur laborum aute. Tempor consectetur do officia aliquip amet
          nisi non est.
        </p>
        <button type='button'>Contact me</button>
      </div>
      <footer>
        <ul>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img src='' alt='linkedin' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/abizmo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='' alt='github' />
            </a>
          </li>
          <li>
            <a
              href='mailto:abizmo@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='' alt='email' />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
