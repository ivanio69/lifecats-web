import { mongoose, Link } from "./mongo";

export default function handler(req, res) {
  if (req.query.link !== undefined) {
    console.log(req.query.link);
    // generate slug
    const generateSlug = () => {
      let chars = "abcdefghijklmnopqrstuvwxyz";
      let str = "";
      for (let i = 0; i < 6; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    };
    const slug = generateSlug();

    // Save to DB
    const newLink = new Link({ link: req.query.link, slug });
    newLink
      .save()
      .then(() => res.status(200).json({ link: req.query.link, slug }))
      .catch((e) => {
        console.error(e);
        res.json({ error: e });
      });
  } else {
    res.json({ error: "No `link` query." });
  }
}
