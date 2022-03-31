def computepay(hrs, rate) :
    # print("In computepay", hrs, rate)
    if hrs > 40 :
        reg = hrs * rate
        otp = (hrs - 40.0) * (rate * 0.5)
        pay = otp + reg
    else :
        pay = hrs * rate
    # print("Returning", pay)
    return pay

hrs = input("Enter Hours: ")
rate = input("Enter Rate: ")
hrs = float(hrs)
rate = float(rate)

pay = computepay(hrs, rate)

print("Pay:", pay)
