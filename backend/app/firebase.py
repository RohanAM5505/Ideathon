import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
key_path = os.path.join(BASE_DIR, 'serviceAccountKey.json')
cred = credentials.Certificate(key_path)    
firebase_admin.initialize_app(cred)

db = firestore.client()
