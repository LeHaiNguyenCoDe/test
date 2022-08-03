using Calculator;
namespace Rectangle
{
    class Rectangle
    {
        public int length, width;
        void Rectangle(int length, int width)
        {
            this.length = length;
            this.width = width;
        }
        public int Area(int a, int b)
        {
            return Calculator.Multiply(a, b);
        }
        public int Perimeter(int a, int b)
        {
            return Calculator.Sum(a, b);
        }
    }
}
