def spilt_expression(expression):
    expression=expression.replace(" ","");
    for ch in expression:
        if ch in '+-/*%':
            operator=ch;
            oprends=expression.split(operator);
            return oprends[0],operator,oprends[1];
    return None;


userInput=input("Enter a single Expression, e.g, a+b :: ");
result=spilt_expression(userInput);

if result:
    op1,oper,op2=result;
    print("Operand 1:",op1)
    print("Operator :",oper)
    print("Operand 1:",op1)
else:
    print("Invalid Expression")
