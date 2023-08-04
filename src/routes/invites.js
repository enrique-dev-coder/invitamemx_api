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

inviteRouter.get('/:name', async (req, res) => {
  const { name } = req.params;
  // peticion desde wordpress
  // end point personalizado con plugin
  const response = await fetch(
    `https://invitamemx.com/wp-json/wp/v2/forms/submissions/${name}`
  );
  const data = await response.json();
  // devolver lo que necesito
  return res.status(200).json(
    data.map((invitado) => ({
      id: invitado?.id,
      link: invitado?.referer,
      inviteName: invitado?.referer_title,
      nombreInvitado: invitado.form_values?.name,
      parentesco: invitado.form_values?.field_9a97d10,
      acompañante: invitado.form_values?.field_e6ea7a9,
      alergias: invitado.form_values?.message,
      asistencia: invitado.form_values?.field_a440fe3,
      telefono: invitado.form_values?.email,
    }))
  );
});

export default inviteRouter;
