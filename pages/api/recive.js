import { Link } from "./mongo";

export default function handler(req, res) {
  if (req.query.slug !== undefined) {
    Link.findOne({ slug: req.query.slug })
      .then((r) => {
        if (r !== null) res.redirect(r.link);
        else res.redirect("https://lifecats.codes/404");
      })
      .catch((e) => {
        res.json(e);
      });
  } else {
    res.json({ error: "No slug in query." });
  }
}
