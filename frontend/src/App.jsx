import { useState } from "react";
import axios from "axios";
import './App.css';

function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        text: text,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setResult("Error: Could not connect to the sentiment prediction service.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        TextiMood
      </h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="border p-2 w-full rounded"
          placeholder="Enter text to analyze sentiment..."
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded w-full">
          Predict Sentiment
        </button>
      </form>
      <p className="app-info-text">
        This model is built using logistic regression trained on labeled sentiment data.
      </p>
      {result && (
        <div className="result-display-container">
          <strong>Prediction:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default Home;
