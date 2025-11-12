const ThemePreviewer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 text-gray-800 p-8 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-green-800 flex items-center gap-2">
        🌾 KrishiLink Theme Preview
      </h1>
      <p className="text-lg text-green-700 max-w-2xl">
        A clean, nature-inspired palette designed for farmers, traders, and
        agri-tech innovators.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="btn bg-green-600 hover:bg-green-700 text-white border-none">
          Primary
        </button>
        <button className="btn bg-lime-500 hover:bg-lime-600 text-white border-none">
          Secondary
        </button>
        <button className="btn bg-amber-500 hover:bg-amber-600 text-white border-none">
          Accent
        </button>
        <button className="btn bg-emerald-700 hover:bg-emerald-800 text-white border-none">
          Neutral
        </button>
        <button className="btn bg-teal-600 hover:bg-teal-700 text-white border-none">
          Success
        </button>
        <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white border-none">
          Warning
        </button>
        <button className="btn bg-red-600 hover:bg-red-700 text-white border-none">
          Error
        </button>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        <div className="alert bg-sky-100 border-l-4 border-sky-500 text-sky-800">
          🌤️ Info: Fresh weather data loaded successfully!
        </div>
        <div className="alert bg-green-100 border-l-4 border-green-600 text-green-800">
          ✅ Success: Your farm record was updated!
        </div>
        <div className="alert bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800">
          ⚠️ Warning: Irrigation level is below average!
        </div>
        <div className="alert bg-red-100 border-l-4 border-red-600 text-red-800">
          ❌ Error: Connection to soil sensor lost!
        </div>
      </div>

      {/* Card */}
      <div className="card w-96 bg-white/80 backdrop-blur-md shadow-xl border border-green-200">
        <div className="card-body">
          <h2 className="card-title text-green-700 font-bold">
            🌱 Crop Health Monitor
          </h2>
          <p>
            Monitor your crop growth, soil moisture, and weather forecasts in
            real-time.
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none">
              View Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Form Example */}
      <form className="space-y-4 max-w-md bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-green-200">
        <label className="form-control">
          <div className="label">
            <span className="label-text text-green-800 font-semibold">
              Your Farm Name
            </span>
          </div>
          <input
            type="text"
            placeholder="Green Valley Farm"
            className="input input-bordered w-full border-green-400 focus:border-green-600"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-green-800 font-semibold">
              Select Crop Type
            </span>
          </div>
          <select className="select select-bordered border-green-400 focus:border-green-600">
            <option>Wheat</option>
            <option>Rice</option>
            <option>Maize</option>
            <option>Potato</option>
          </select>
        </label>

        <button className="btn bg-green-700 hover:bg-green-800 text-white w-full mt-2 border-none">
          Submit
        </button>
      </form>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="badge bg-green-600 text-white">Soil</span>
        <span className="badge bg-lime-500 text-white">Sunlight</span>
        <span className="badge bg-amber-500 text-white">Moisture</span>
        <span className="badge bg-teal-600 text-white">Healthy</span>
      </div>
    </div>
  );
};

export default ThemePreviewer;
