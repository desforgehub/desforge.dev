import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <h1 className="title">DesForge</h1>
      <div className="subtitle-container">
        <p className="subtitle">
          DesForge (pronounced /dɛsfɔʁʒ/), founded in 2024,
        </p>
        <p className="subtitle">
          is a French entity dedicated to the creation of digital solutions.
        </p>
      </div>
    </header>
  )
}
