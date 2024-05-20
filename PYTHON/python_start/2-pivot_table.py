import pandas as pd

data = pd.read_excel('python_start/data2/VendaCarros.xlsx')
print(type(data))


df = data[["Fabricante", "ValorVenda" ,"Ano"]]
print(df)

pivot_table = df.pivot_table(
    index="Ano",
    columns="Fabricante",
    values="ValorVenda",
    aggfunc='sum' 
)

print(pivot_table)

pivot_table.to_excel('python_start/data2/pivot_table.xlsx', "Relátorio")