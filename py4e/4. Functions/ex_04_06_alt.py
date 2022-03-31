def computepay(hours, rate):
    pay = hours * rate
    if hours > 40 :
        overtime = pay + (hours - 40) * (rate * 0.5)
        return overtime
    else :
        return pay

hours = float(input("Enter Hours:"))
rate = float(input("Enter Rate:"))
pay = computepay(hours, rate)
print("Pay", pay)
