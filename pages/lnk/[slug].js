import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
export default function Link() {
  const router = useRouter();
  const { slug } = router.query;
  const [url, setUrl] = React.useState(null);
  axios.post("http://localhost:8080/api/v1/geturl", { slug }).then((r) => {
    if (r.data) setUrl(r.data.url);
  });
  return <html>{url ? window.location.replace(url) : <>loading...</>}</html>;
}
