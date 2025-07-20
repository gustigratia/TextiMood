from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

app = Flask(__name__)
CORS(app)

model = joblib.load("./model/logistic_model.pkl")
vectorizer = joblib.load("./model/tfidf_vectorizer.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get('text', '')
    
    vectorized = vectorizer.transform([text])
    prediction = model.predict(vectorized)[0]
    
    return jsonify({"result": prediction})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
