import GitHubIcon from '../assets/GitHub.svg?react';
import LinkedInIcon from '../assets/LinkedIn.svg?react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a 
        href="https://github.com/desforgehub" 
        className="social-link"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
      <div className="social-divider"></div>
      <a 
        href="https://linkedin.com/company/desforge"
        className="social-link"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </div>
  )
}
