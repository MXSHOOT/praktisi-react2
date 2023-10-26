import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";

const Create = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [alamat, alamatchange] = useState("");
  const [gender, genderchange] = useState("");
  const [tgl, tglchange] = useState(null);
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = { name, alamat, gender, tgl, active };

    fetch("http://localhost:3000/soal2/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Alamat</label>
                      <input
                        value={alamat}
                        onChange={(e) => alamatchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Jenis Kelamin</label>
                      <input
                        type="radio"
                        name="gender"
                        value="Pria"
                        onChange={(e) => genderchange(e.target.value)}
                      />
                      Pria
                      <input
                        type="radio"
                        name="gender"
                        value="Wanita"
                        onChange={(e) => genderchange(e.target.value)}
                      />
                      Wanita
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Tanggal Lahir</label>
                      <DatePicker
                        selected={tgl}
                        onChange={(date) => tglchange(date)}
                        dateFormat="yyyy/MM/dd"
                        filterDate={(date) => date.getDay() != 5}
                        showYearDropdown
                        scrollableMonthYearDropdown
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
