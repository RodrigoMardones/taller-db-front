import axios from "axios";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns
 */
async function getAllSpecialities(req, res) {
  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/speciality`);
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
      case 'GET':
        return getAllSpecialities(req, res);
      default:
        return res.status(405).json({
          statusCode: 405,
          message: 'Method Not Allowed',
        });
    }
  };

  export default handler;