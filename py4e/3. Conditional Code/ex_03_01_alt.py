hours = float(input("Enter hours: "))
rate = float(input("Enter pay: "))
pay = hours * rate
if hours > 40 :
    overtime = (hours - 40) * (rate * 0.5)
    pay = pay + overtime
    print(pay)
else :
	print(pay)
