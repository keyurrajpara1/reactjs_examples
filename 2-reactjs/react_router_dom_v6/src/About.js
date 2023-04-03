import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const redirectContactPage = () => {
    navigate('/contact');
  };
  return (
    <>
      <div>About</div>
      <br />
      <button onClick={redirectContactPage}>Go to contact page</button>
      <button onClick={() => {navigate(-1);}}>Go to previous page</button>
    </>
  );
}
export default About;