import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listing = () => {
  const [data, datachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/soal2/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/soal2/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3000/soal2/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/soal2/")
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
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="soal2/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Alamat</td>
                <td>P/W</td>
                <td>Tanggal Lahir</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.alamat}</td>
                    <td>{item.gender}</td>
                    <td>{item.tgl}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listing;
