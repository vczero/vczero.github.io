import os
import pandas as pd
from dateutil.parser import parse
import json

txt = pd.read_table('./data/words_origin.txt', header=None)
list_keys = []
list_words = []
for _, row in txt.iterrows():
    key = row[0].strip()
    if '20' in row[0]:
        list_keys.append(key)
        list_words.append([])
    else:
        list_words[len(list_words) - 1].append(key)

        
words = {}
for i in range(len(list_keys)):
    words[list_keys[i]] = list_words[i]

print(json.dumps(words))
with open('./data/every_day_words.json', 'w') as f:
        json.dump(words, f)

print('-----write file successfully------')