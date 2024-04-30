import "../../../src/App.css";
const Home001 = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { name, email };
    console.log(user);

    // create post
    fetch("https://back-end-gold-six.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users add successfully!!");
          form.reset();
        }
      });
  };
  return (
    <div className="align">
      <h1>this is home page !!!!</h1>

      <form onSubmit={handleForm} className="bg-red-500 p-10 space-y-7">
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Home001;
