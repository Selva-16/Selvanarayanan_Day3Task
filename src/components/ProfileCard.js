import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="card-container">
            <div className="card">
              <div className="card-content">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/profile.jpeg" className="img" alt="Profile" />
                    </div>
                    <div id="side" className="col-6">
                        <img src="/images/follow.png" />
                        <img src="/images/like.png" />
                    </div>
                </div>
                <p className="card-title">Selvanarayanan</p>
                <p className="city">Sivakasi</p>
                  <p className="card-description">
                  Web Developer
                  </p>
                  <div className="buttons">
                    <button className="btn">Message</button>
                    <button className="btn">Following</button>
                    <button className="btn">
                        <img src="/images/add.png" />
                    </button>
                  </div>
                  <hr></hr>
                  <div className="skills">
                    <p>Skills</p>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Developer</li>
                        <li>MEAN Stack</li>
                        <li>MERN Stack</li>
                        <li>App Developer</li>
                        <li>Backend</li>
                    </ul>
                  </div>
              </div>
              {/* Footer */}
                <footer class="footer">
                    <p>&copy; 2024 Profile Card. All rights reserved.</p>
                    <div>
                        <img src="/images/facebook.png" alt="Facebook" />
                        <img src="/images/instagram.png" alt="Instagram" />
                        <img src="/images/linkedin.png" alt="Linkedin" />
                        <img src="/images/twitter.png" alt="Twitter" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ProfileCard;