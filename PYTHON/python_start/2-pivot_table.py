import pandas as pd

data = pd.read_excel("data/VendaCarros.xlsx")
print(type(data))

df = data[["Fabricante", "ValorVenda" ,"Ano"]]
print(df)


