import pandas as pd
import re
import string
import nltk
from tqdm import tqdm

nltk.download('stopwords')
from nltk.corpus import stopwords

tqdm.pandas()

df = pd.read_csv("./dataset/raw/shopee-app-reviews-from-google-store.csv")
df = df[['review_text', 'review_rating']]  # Keep only the review_text column

def preprocess(text):
    # Lowercasing
    text = text.lower()

    # Remove punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))

    # Remove non-alphabetic characters (optional)
    text = re.sub(r'[^a-z\s]', '', text)

    # Remove stopwords
    stop_words = set(stopwords.words('english'))  # You can change 'english' to another language if needed
    text = ' '.join(word for word in text.split() if word not in stop_words)

    return text

def label_sentiment(rating):
    if rating >= 4:
        return "positive"
    elif rating == 3:
        return "neutral"
    else:
        return "negative"

df['cleaned_review'] = df['review_text'].astype(str).progress_apply(preprocess)
df['sentiment'] = df['review_rating'].progress_apply(label_sentiment)

final_df = df[['cleaned_review', 'sentiment']]
final_df.to_csv("./dataset/cleaned/shopee_app_reviews_cleaned.csv", index=False)
print("Dataset cleaned and saved to dataset/cleaned/shopee_app_reviews_cleaned.csv")




