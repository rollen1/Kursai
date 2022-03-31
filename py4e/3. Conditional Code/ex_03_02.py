hrs = input("Enter Hours: ")
rate = input("Enter Rate: ")
try :
    hrs = float(hrs)
    rate = float(rate)
except :
    print("Error, please enter numeric input")
    break
pay = hrs * rate
if hrs > 40 :
    reg = hrs * rate
    otp = (hrs - 40.0) * (rate * 0.5)
    pay = otp + reg
    print("Pay:", pay)
else :
    print("Pay:", pay)
