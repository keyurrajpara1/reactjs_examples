import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const redirectHomePage = () => {
    navigate('/');
  };
  const redirectToPreviousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <div>Contact</div>
      <br />
      <button onClick={redirectHomePage}>Go to home page</button>
      <button onClick={redirectToPreviousPage}>Go to previous page</button>
    </>
  );
}
export default Contact;