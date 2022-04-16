import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
import "../CssStyle/Styles.css";

function CreateSeedComponent() {
  //Step 1:
  const navigate=useNavigate();
  const [seed, setSeed] = useState({
    id:"",
    commanName: "",
    bloomTime: "",
    watering:"",
    difficultyLevel: "",
    temperature: "",
    typeOfSeed: "",
    seedsDescription: "",
    seedsStock: "",
    seedsCost: "",
    seedsPerPacket:"",
  });
  //Step 3:
  const onInputChange = (e) => {
    setSeed({ ...seed, [e.target.name]: e.target.value });
  };
  const {
    id,
    commanName,
    bloomTime,
    watering,
    difficultyLevel,
    temperature,
    typeOfSeed,
    seedsDescription,
    seedsStock,
    seedsCost,
    seedsPerPacket,
  } = seed;

  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(seed);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:9092/seeds/addSeeds", data).then(
      (response) => {
        console.log(response);
        alert("Seed Added Successfully");
        navigate("/SeedComponent");
      },
      (error) => {
        console.log(error.response.data);
        alert("Operation failed");
      }
    );
  };
  return (
    <div>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Add Seeds!</h1>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>
              <div className="form-group">
                  <label for="exampleInputEmail1">Seed Id</label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    placeholder="Enter Here"
                    required
                    value={id}
                    onChange={(e) => onInputChange(e)}
                  />
                  </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Seed Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="commanName"
                    placeholder="Enter Here"
                    required
                    value={commanName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                
                <div className="form-group">
                  <label for="exampleInputPassword1">Bloom Time</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bloomTime"
                    placeholder="Enter Here"
                    required
                    value={bloomTime}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">watering</label>
                  <input
                    type="text"
                    className="form-control"
                    name="watering"
                    placeholder="Enter Here"
                    required
                    value={watering}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                
                <div className="form-group">
                  <label for="exampleInputPassword1">Difficulty Level </label>
                  <input
                    type="text"
                    className="form-control"
                    name="difficultyLevel"
                    placeholder="Enter Here"
                    required
                    value={difficultyLevel}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Temperature</label>
                  <input
                    type="text"
                    className="form-control"
                    name="temperature"
                    placeholder="Enter Here"
                    required
                    value={temperature}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Type of Seed</label>
                  <input
                    type="text"
                    className="form-control"
                    name="typeOfSeed"
                    placeholder="Enter Here"
                    required
                    value={typeOfSeed}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Seed Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="seedsDescription"
                    placeholder="Enter Here"
                    required
                    value={seedsDescription}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Seedss Stock </label>
                  <input
                    type="text"
                    className="form-control"
                    name="seedsStock"
                    placeholder="Enter Here"
                    required
                    value={seedsStock}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Seed Cost</label>
                  <input
                    type="text"
                    className="form-control"
                    name="seedsCost"
                    placeholder="Enter Here"
                    required
                    value={seedsCost}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Seeds Per Packet</label>
                  <input
                    type="text"
                    className="form-control"
                    name="seedsPerPacket"
                    placeholder="Enter Here"
                    required
                    value={seedsPerPacket}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div id="addbtn" className="container text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary my-2 text-center mr-2"
                  >
                    Add Seed
                  </button><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateSeedComponent;
