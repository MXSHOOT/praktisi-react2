import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { dataid } = useParams();

  const [data, datachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/soal2/" + dataid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        datachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Create</h2>
          </div>
          <div className="card-body"></div>

          {data && (
            <div>
              <h2>
                The Employee name is : <b>{data.name}</b> ({data.id})
              </h2>
              <h3>Details</h3>
              <h5>Alamat : {data.alamat}</h5>
              <h5>Jenis Kelamin : {data.gender}</h5>
              <h5>Tanggal Lahir : {data.tgl}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
            </div> */}
    </div>
  );
};

export default Detail;
