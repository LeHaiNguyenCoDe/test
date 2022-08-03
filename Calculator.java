class public static void main(String[] args) {
    int a, b, c;
    c = Calculator.Add(a, b);
}

class Calculator {
    public int Add(int a, int b){
        return a + b;
    }
    public int Multiply(int a, int b) {
        return a*b;
    }
}