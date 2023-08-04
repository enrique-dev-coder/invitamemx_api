import { Router } from 'express';
import fetch from 'node-fetch';

const inviteRouter = Router();

inviteRouter.get('/', async (req, res) => {
  // peticion desde wordpress
  const response = await fetch('https://invitamemx.com/wp-json/wp/v2/pages');
  const data = await response.json();

  // devolver lo que necesito
  return res.status(200).json(
    data.map((page) => ({
      link: page.link,
      nombre: page.title.rendered,
    }))
  );
});

export default inviteRouter;
