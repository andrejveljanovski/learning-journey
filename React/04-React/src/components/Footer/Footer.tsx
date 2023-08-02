import './Footer.css';
export const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer>
      <small>Copyright &copy; {Year} Brainster</small>
    </footer>
  );
};
