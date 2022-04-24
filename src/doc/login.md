# Login doc

This file just contains informacion about code that is not explict for him self

## Orginal Login

This is the original login that project had but it give a 422 error that i cannot fix, so is not possible show correct the project, that why now it has a fake login

```
 const handleSubmit = async (e) => {
    e.preventDefault();
    MySwal.fire(LOADING_MSG);
    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_URL,
        JSON.stringify({
          email: email.email,
          password: password.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const token = JSON.stringify(response.data);
      console.log(token);
      localStorage.setItem("token", token);
      MySwal.close();
      setEmail({ ...email, email: "" });
      setPassword({ ...password, password: "" });
      navigate(from, { replace: true });
    } catch (error) {
      if ((email.valido === null) & (password.valido === null)) {
        MySwal.fire(EMPTY_FIELDS);
      } else if (!error.response) {
        MySwal.fire(NOT_RESPONSE_SERVER);
      } else if (error?.response.status === 401) {
        MySwal.fire(WRONG_DATA);
      }
    }
  };
```

## Fake login

The code from above is just a fake login for a correct deploy login

```
  const handleSubmit = async (e) => {
    e.preventDefault();
    MySwal.fire(LOADING_MSG);
    if (email.email === data.email && password.password === data.password) {
      localStorage.setItem("token", "token");
      MySwal.close();
      setEmail({ ...email, email: "" });
      setPassword({ ...password, password: "" });
      navigate(from, { replace: true });
    } else if (email.valido === null && password.valido === null) {
      MySwal.fire(EMPTY_FIELDS);
    } else if (
      (email.email !== data.email && email.email !== null) ||
      (password.password !== data.password && password.password !== null)
    ) {
      MySwal.fire(WRONG_DATA);
    }
  };
```
