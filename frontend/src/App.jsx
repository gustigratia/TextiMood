import { useState } from "react";
import axios from "axios";
import './App.css';

function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://textimood-production.up.railway.app/predict", {
        text: text,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setResult("Error: Could not connect to the sentiment prediction service.");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100">
      <div className="p-6 max-w-xl w-full bg-white rounded-xl shadow-md flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          TextiMood
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md flex flex-col items-center">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter text to analyze sentiment..."
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Predict Sentiment
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center italic mt-4 max-w-md">
          This model is built using logistic regression trained on labeled sentiment data. 
          Developed and trained by{' '} 
          <a
            href="https://github.com/gustigratia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Gusti Gratia
          </a>.
          .
        </p>

        {result && (
          <div className="mt-4 bg-gray-100 border border-gray-300 p-3 rounded-md text-center max-w-md">
            <span className="font-semibold text-gray-700">Prediction:</span> {result}
          </div>
        )}
      </div>
    </div>

  );
}

export default Home;
