interface AttributeObject {
  age: number;
  anime: string;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  attributes: Array<string | AttributeObject>;
}

export default function createUser({name = '', email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}


/* Can be like this, in separate parameters
export default function createUser(name = "", email: string, password: string) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
*/