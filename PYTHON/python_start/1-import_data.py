import pandas as pd

data = pd.read_excel('python_start/data2/VendaCarros.xlsx')

print(data)

print(data.head())

print(data.tail())

print(data["Fabricante"].value_counts())
