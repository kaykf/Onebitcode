from openpyxl import load_workbook
from openpyxl.chart import BarChart, Reference

# 1-ler pasta de trabalho / planilha

wb = load_workbook("python_start/data2/barchart.xlsx")
sheet = wb["Relátorio"]

# 2- Referências de linhas e colunas 

min_column = wb.active.min_column
max_column = wb.active.max_column
min_row = wb.active.min_row
max_row = wb.active.max_row

# 3- Incluindo Formulas

sheet["B6"] = "=Sum(B2:B5)"
sheet["B6"].style = "Currency"

wb.save("test.xlsx")