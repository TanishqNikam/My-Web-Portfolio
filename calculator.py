def add(inputList):
    newList = []
    for i in inputList:
        z = int(i)
        newList.append(z)
    s = 0
    for i in range (len(newList)):
        s = s + newList[i]
    return s

def sub(inputList):
    newList = []
    for i in inputList:
        z = int(i)
        newList.append(z)
        s = newList[0]
    for i in range (1,len(newList)):
        s = s - newList[i]
    return s

def multi(inputList):
    newList = []
    for i in inputList:
        z = int(i)
        newList.append(z)
    s = 1
    for i in range (len(newList)):
        s = s * newList[i]
    return s

def div(inputList):
    newList = []
    for i in inputList:
        z = int(i)
        newList.append(z)
    s = 1.0
    for i in range (len(newList)):
        s = s / newList[i]
    return s

while True:
    print("1 - Addition")
    print("2 - Subtraction")
    print("3 - Multiplication")
    print("4 - Division \n")
    ch = int(input("Enter your choice: "))

    print("\nEnter values with spaces between different values.")
    inputList = input().split()

    if (ch == 1):
        print("\nAddition = ", add(inputList) ,"\n")
    
    elif (ch == 2):
        print("\nSubtraction = ", sub(inputList) ,"\n")
        
    elif (ch == 3):
        print("\nMultiplication = ", multi(inputList) ,"\n")
        

    elif (ch == 4):
        print("\nDivision = ", div(inputList) ,"\n")
        
    else:
        break