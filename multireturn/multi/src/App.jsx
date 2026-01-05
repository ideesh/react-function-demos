function App() {
  // Create a state variable "Loading" with initial value = true
  // useState(true) means Loading starts as true when the component first renders
  // setLoading is the function used to update the value of Loading later
  const [Loading, setLoading] = useState(true);

  // Since Loading is initialized to true, this condition runs first
  if (Loading) {
    // As long as Loading stays true, this block renders
    // (nothing in this code ever calls setLoading(false), so it will always show this)
    return (
      <>
        <h1>Hello Engineers</h1>
      </>
    );
  }

  // This part only runs if Loading becomes false
  // But since there's no setLoading(false) call anywhere (e.g. in useEffect),
  // this return will never actually execute in the current code
  return (
    <>
      <h1>Hi Engineers</h1>
    </>
  );
}