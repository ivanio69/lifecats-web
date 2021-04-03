import React from "react";
import Link from "next/link";
import styles from "../overview.module.css";
import axios from "axios";
import { useDropzone } from "react-dropzone";

function Dropzone() {
  const onDrop = React.useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    let formData = new FormData();
    acceptedFiles.forEach((e) => {
      formData.append(e.name, e);
    });
    axios
      .post("https://cdn.lifecats.cf/api/v1/upload", formData, {
        headers: {
          auth: localStorage.getItem("L_TOKEN"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        window.location.reload();
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      style={{
        width: "100%",
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
}
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [files, setFiles] = React.useState(null);
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("https://cdn.lifecats.cf/api/v1/user", {
        headers: { Auth: localStorage.getItem("L_TOKEN") },
      })
      .then((r) => {
        if (r.data.status === 0) {
          setLoggedIn(false);
        } else {
          setUser(r.data);
          //logged in. proceed to download files
          axios
            .get("https://cdn.lifecats.cf/api/v1/files", {
              headers: { Auth: localStorage.getItem("L_TOKEN") },
            })
            .then((fr) => {
              console.log(fr.data);
              if (status === 0) {
                setFiles(null);
              } else setFiles(fr.data);
            });
          setLoggedIn(true);
        }
      });
  }, []);
  return (
    <>
      {" "}
      {loggedIn ? (
        <div className="container lexend">
          <h2 className="heding2">My files</h2>
          <div className={styles.filescontainer}>
            {files ? (
              files.map((e) => {
                return (
                  <a
                    target="_blank"
                    href={
                      "https://cdn.lifecats.cf/static/" + user.name + "/" + e
                    }
                  >
                    <div key={e} className={styles.item}>
                      {e}
                    </div>
                  </a>
                );
              })
            ) : (
              <>No files here!</>
            )}
          </div>{" "}
          <h2 className="heding2">Upload files</h2>
          <p>
            WARNING! Every file you upload will stay here FOREVER!!!!!!!!! To
            remove any, comtact me at lifecatsup@gmail.com.
          </p>
          <Dropzone />
        </div>
      ) : (
        <div className="container lexend">
          <title>./lifecats </title>
          <h1 className="logo">
            <Link href="/">./lifecats CDN</Link>
          </h1>
          {/* <Link href="/cdn/about">About CDN</Link> */}
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("https://cdn.lifecats.cf/api/v1/login", {
                  name: e.target[0].value,
                  password: e.target[1].value,
                })
                .then((r) => {
                  if (r.data.status === 1) {
                    localStorage.setItem("L_TOKEN", r.data.token);
                    window.location.reload();
                  }
                });
              console.log(e.target[0].value);
              console.log(e.target[1].value);
            }}
          >
            <h2 className="heading2">Login</h2>
            <input
              type="text"
              placeholder="Username"
              name="name"
              className={styles.input}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={styles.input}
            />
            <br />
            <button className="button" id="butt">
              Login!
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
