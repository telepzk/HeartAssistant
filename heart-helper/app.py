import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from loaders import CsvLoader

engine = create_engine('postgresql://heartassistant:heartassistant@localhost:5432/HeartAssistant')
Session = sessionmaker(bind=engine)

if __name__ == '__main__':
    session = Session()
    loader = CsvLoader(session)

    dir_path = 'data'
    for filename in os.listdir(dir_path):
        file_path = os.path.join(dir_path, filename)
        loader.load(file_path)