"use client";
import React, { useState } from "react";

const PrivateTransportCalculator = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      type: "Car",
      size: "average",
      fuelType: "petrol",
      distance: "",
      unit: "km",
    },
  ]);
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [individualFootprints, setIndividualFootprints] = useState({});
  const [isChoosingType, setIsChoosingType] = useState(false);
  const [newVehicleType, setNewVehicleType] = useState("Car");

  const emissionFactors = {
    petrol: { small: 0.12, average: 0.17, big: 0.25 },
    diesel: { small: 0.15, average: 0.2, big: 0.3 },
    electric: { small: 0.05, average: 0.08, big: 0.12 },
    motorcycle: { small: 0.08, average: 0.1, big: 0.15 },
  };

  const convertToKm = (distance, unit) => (unit === "miles" ? distance * 1.60934 : distance);

  const calculateFootprint = () => {
    let totalFootprint = 0;
    const footprints = {};

    vehicles.forEach((vehicle) => {
      const { size, fuelType, distance, unit, type } = vehicle;
      if (distance) {
        let factor;
        if (type === "Motorcycle") {
          factor = emissionFactors["motorcycle"][size];
        } else {
          factor = emissionFactors[fuelType][size];
        }
        const distanceInKm = convertToKm(Number(distance), unit);
        const footprint = distanceInKm * factor;
        totalFootprint += footprint;
        footprints[type] = footprint.toFixed(2);
      }
    });

    setIndividualFootprints(footprints);
    setCarbonFootprint(totalFootprint.toFixed(2));
  };

  const handleAddVehicle = () => {
    setIsChoosingType(true);
  };

  const handleSelectVehicleType = (type) => {
    const newVehicle = {
      id: vehicles.length + 1,
      type: type,
      size: "average",
      fuelType: "petrol",
      distance: "",
      unit: "km",
    };
    setVehicles([...vehicles, newVehicle]);
    setIsChoosingType(false);
  };

  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  const handleChange = (id, field, value) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, [field]: value } : vehicle
      )
    );
  };

  const renderVehicleForm = (vehicle) => (
    <div className="mb-6" key={vehicle.id}>
      <h3 className="text-lg font-semibold mb-4">{vehicle.type}</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Vehicle Size */}
        <div>
          <label className="block text-sm font-medium mb-2">Vehicle Size:</label>
          <select
            value={vehicle.size}
            onChange={(e) => handleChange(vehicle.id, "size", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100"
          >
            <option value="small">Small</option>
            <option value="average">Average</option>
            <option value="big">Big</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium mb-2">Fuel Type:</label>
          <select
            value={vehicle.fuelType}
            onChange={(e) => handleChange(vehicle.id, "fuelType", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100"
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        {/* Distance Traveled */}
        <div>
          <label className="block text-sm font-medium mb-2">Distance Traveled:</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Enter distance"
              value={vehicle.distance}
              onChange={(e) => handleChange(vehicle.id, "distance", e.target.value)}
              className="border p-2 rounded flex-1 bg-gray-100"
            />
            <select
              value={vehicle.unit}
              onChange={(e) => handleChange(vehicle.id, "unit", e.target.value)}
              className="border p-2 rounded bg-gray-100"
            >
              <option value="km">Kilometers</option>
              <option value="miles">Miles</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleRemoveVehicle(vehicle.id)}
        className="mt-5 bg-lime-700 hover:bg-lime-600 text-white py-2 px-4 rounded-md mb-4 font-medium transition-all duration-150 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
      >
        Remove {vehicle.type}
      </button>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFootprint();
  };

  return (
    <div className="container mx-auto p-4 bg-white w-[900px] rounded-lg mt-5">
      <h1 className="text-xl font-bold mb-6 text-center">Private Transport</h1>
      <form onSubmit={handleSubmit}>
        {vehicles.map((vehicle) => renderVehicleForm(vehicle))}
        
        {isChoosingType && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Vehicle Type</h3>
            <button
              type="button"
              onClick={() => handleSelectVehicleType("Car")}
              className="bg-lime-700 hover:bg-lime-600 text-white py-2 px-4 rounded-md mr-4"
            >
              Car
            </button>
            <button
              type="button"
              onClick={() => handleSelectVehicleType("Motorcycle")}
              className="bg-lime-700 hover:bg-lime-600 text-white py-2 px-4 rounded-md"
            >
              Motorcycle
            </button>
          </div>
        )}

        {!isChoosingType && (
          <button
            type="button"
            onClick={handleAddVehicle}
            className="bg-lime-700 hover:bg-lime-600 text-white py-2 px-4 rounded-md mb-4 font-medium transition-all duration-150 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            Add Another Vehicle
          </button>
        )}
        
        <button
          type="submit"
          className="bg-lime-700 hover:bg-lime-600 text-white py-2 px-4 rounded-md w-full font-medium transition-all duration-150 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400"
        >
          Calculate Carbon Footprint
        </button>
      </form>

      {carbonFootprint !== null && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4 text-center">Carbon Footprint Breakdown</h2>
          <table className="table-auto mt-4 mx-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Vehicle</th>
                <th className="px-4 py-2">Carbon Footprint (kg CO₂)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(individualFootprints).map(([vehicle, footprint]) => (
                <tr key={vehicle}>
                  <td className="border px-4 py-2 bg-gray-100">{vehicle}</td>
                  <td className="border px-4 py-2 bg-gray-100">{footprint}</td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2 font-bold">Total</td>
                <td className="border px-4 py-2 font-bold">{carbonFootprint} kg CO₂</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PrivateTransportCalculator;
