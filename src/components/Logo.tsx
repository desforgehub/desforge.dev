import DesForgeIcon from '../assets/DesForge-White.svg';

export const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img 
        src={DesForgeIcon} 
        className="desforge-logo"
        width="64"
        height="64"
      />
    </div>
  )
}
