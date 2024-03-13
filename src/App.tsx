import React from "react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

const App = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log({
      username,
      password,
    });
  }
  return (
    <section className="flex items-center justify-center h-screen">
      <form className="grid w-full max-w-sm items-center gap-1.5" onSubmit={handleSubmit}>
        <Label htmlFor="username" className="mb-1">
          Usuário
        </Label>
        <Input
          type="text"
          placeholder="Usuário"
          id="username"
          className="mb-3"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <Label htmlFor="password" className="mb-1">
          Senha
        </Label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          className="mb-3"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default App;
