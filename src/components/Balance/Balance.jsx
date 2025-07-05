import logo from '/images/logo.svg';
import './Balance.scss';

export default function Balance() {
  return (
    <div className="balance">
      <div>
        <p className="balance__title">My balance</p>
        <p className="balance__total">$921.48</p>
      </div>
      <img className="balance__logo" src={logo} alt="logo" />
    </div>
  );
}