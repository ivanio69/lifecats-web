const mongoose = require("mongoose");
const Link = mongoose.models.link || mongoose.model('link', { link: String, slug: String });
mongoose.connect(process.env.MONGO_URI);

export {mongoose, Link}