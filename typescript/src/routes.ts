import { Request, Response } from 'express';

export default function helloWorld(request: Request, response: Response){
  return response.json({ message: 'lili hi'});
}