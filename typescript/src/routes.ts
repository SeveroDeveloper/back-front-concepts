import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response){
  const user = createUser({
    name: 'Anya',
    email: 'anya@gmail.com',
    password: 'heh',
    attributes: ['cute', 'funny', 'little',
    { 'age' : 6, 'anime' : 'spyxfamilys'},]
  });

  return response.json({ message: 'lili hi'});
}