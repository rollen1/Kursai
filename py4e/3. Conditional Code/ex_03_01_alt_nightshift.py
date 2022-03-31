hours = float(input("Enter hours: "))
rate = float(input("Enter pay: "))
pay = hours * rate
nightshift = (rate * 1.5)
nightpay = pay + nightshift
print("Pay: ", nightpay)
