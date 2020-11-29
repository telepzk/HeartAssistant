from aiohttp import web
import pandas as pd
import pickle

categ = pd.read_csv('../heart-models/notebooks/data/categorical_features.txt', sep=';', header=None).values.squeeze()

with open('../heart-models/models/model_art.pcl', 'rb') as f:
    model_art = pickle.load(f)

with open('../heart-models/models/model_omnk.pcl', 'rb') as f:
    model_omnk = pickle.load(f)

with open('../heart-models/models/model_proch.pcl', 'rb') as f:
    model_proch = pickle.load(f)

with open('../heart-models/models/model_serd_ned.pcl', 'rb') as f:
    model_serd_ned = pickle.load(f)

with open('../heart-models/models/model_steno.pcl', 'rb') as f:
    model_steno = pickle.load(f)

async def handle(request):
    answers = await request.json()
    answers_df = pd.DataFrame.from_records([answers], index=['ID'])

    art_prediction = model_art['model'].predict(answers_df)
    omnk_prediction = model_omnk['model'].predict(answers_df)
    proch_prediction = model_proch['model'].predict(answers_df)
    serd_ned_prediction = model_serd_ned['model'].predict(answers_df)
    steno_prediction = model_steno['model'].predict(answers_df)
    
    response = dict(
        art = art_prediction.tolist(),
        omnk = omnk_prediction.tolist(),
        proch = proch_prediction.tolist(),
        serd_ned = serd_ned_prediction.tolist(),
        steno = steno_prediction.tolist(),
    )
    return web.json_response(response)

app = web.Application()
app.add_routes([
    web.post('/', handle)
])

if __name__ == '__main__':
    web.run_app(app, port=1488)
