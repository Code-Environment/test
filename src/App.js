import Food from "./food";
function App() {
  // const [hide, setHide] = useState(false);
  // function handleclick() {
  //   if (hide === false) {
  //     setHide(true);
  //   } else {
  //     setHide(false);
  //   }
  // }

  // const Result = () => {
  //   return <div className="itempucharse"></div>;
  // };
  // const Toggle = () => {
  //   return (
  //     <div className="toggle">
  //       <nav>
  //         <div className="inside-navbar">
  //           <span>Home</span> <span>About Us</span> <span>Cantact us</span>
  //         </div>
  //         <p className="hide" onClick={handleclick}>
  //           X{hide ? <Result /> : null}
  //         </p>
  //       </nav>
  //     </div>
  //   );
  // };
  return (
    <div>
      {/* <Toggle /> */}
      <Food />
    </div>
  );
}

export default App;
