import axios from "axios";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns
 */
async function loginProfessional(req, res) {
  const { body, headers } = req;
  try {
    const { data } = await axios.post(`${process.env.BACKEND_URL}/professional/login`, body , {
        headers
    });
    return res.json(data);
  } catch (e) {
    const err = {
      statusCode: e.response?.status ?? 500,
      message: e.response?.data?.message ?? "Ha ocurrido un error",
    };
    return res.status(err.statusCode).json(err);
  }
}

const handler = (req, res) => {
  switch (req.method) {
    case "POST":
      return loginProfessional(req, res);
    default:
      return res.status(405).json({
        statusCode: 405,
        message: "Method Not Allowed",
      });
  }
};

export default handler;
