import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/amrit-nand/" aria-label="LinkedIn Profile">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/amritnand12" aria-label="GitHub Profile">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
