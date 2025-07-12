import kagglehub
import shutil
import os
path = kagglehub.dataset_download("bwandowando/shopee-app-reviews-from-google-store")

for file in os.listdir(path):
    full_path = os.path.join(path, file)
    shutil.copy(full_path, "./dataset/raw/shopee-app-reviews-from-google-store.csv")

print("Dataset downloaded and copied to dataset/raw/shopee-app-reviews-from-google-store.csv")



