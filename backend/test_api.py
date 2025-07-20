import requests

url = "https://textimood-production.up.railway.app/predict"
data = {"text": "worse than expected"}

response = requests.post(url, json=data)

print(response.json())