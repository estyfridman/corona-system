using System.Drawing;
using System.Xml.Schema;

namespace ConsoleApp1
{
    internal class Program
    {
        public static int height;
        public static int width;

        static void Main(string[] args)
        {
            string? firstInput;
            
            do
            {
                Console.WriteLine("Please select:\r\n1 to rectangle\r\n2 to triangle\r\n3 - exit");
                firstInput = Console.ReadLine();

                if(firstInput == "1" || firstInput == "2")
                {
                    height = GetNumber("height");
                    width = GetNumber("width");
                    if (firstInput == "1") OptionA();
                    else if (firstInput == "2") OptionB();
                }

            } while (firstInput != "3");

            Console.WriteLine("The proggram ended");
        }

        private static int GetNumber(string type)
        {
            Console.WriteLine($"Type {type}");
            int.TryParse(Console.ReadLine(), out int num);
            return num;
        }

        static void OptionA()
        {
            if (height == width || Math.Abs(height - width) > 5)
            {
                Console.WriteLine($"rectangle area: {height * width}");
            }else Console.WriteLine($"perimeter: {2 * height + 2 * width}");
        }

        static void OptionB()
        {
            Console.WriteLine("type 1 to calculate the perimeter, type 2 to print");
            string? rectangleOption = Console.ReadLine();
            if (rectangleOption == "1") RectOptionA();
            if (rectangleOption == "2") RectOptionB();
        }

        static void RectOptionA()
        {
            Console.WriteLine($"rectangle area: {(height * width)/2}");

        }

        static void RectOptionB()
        {
            if ((width % 2 == 0) || (width > height * 2))
            {
                Console.WriteLine("Do not print the triangle}");
            }
            else if ((width % 2 == 1) && (width < height * 2)) PrintTriangle();
        }

        static void PrintTriangle()
        {
            int numOfOtherRows = (height - 2) / ((width - 2) / 2);
            int extraRows = ((height - 2) % ((width - 2) / 2));
            var numOf3Rows = extraRows + numOfOtherRows;
            var currentLineWidth = 3;
            var lineNumOver3 = 0;

            var (ind1, ind2) = Console.GetCursorPosition();
            if (ind2 + height > Console.BufferHeight)
                Console.SetBufferSize(Console.BufferWidth, Console.BufferHeight + (height * 2));

            for (int i = 1; i <= height; i++)
            {
                var lineWidth = 0;
                if (i == 1)
                    lineWidth = 1;
                else if (i <= numOf3Rows + 1)
                    lineWidth = 3;
                else
                {
                    currentLineWidth += (lineNumOver3 % numOfOtherRows == 0 ? 2 : 0);
                    lineWidth = currentLineWidth;
                    lineNumOver3++;
                }

                Console.SetCursorPosition((Console.WindowWidth / 2) - (lineWidth / 2), ind2 + (i - 1));
                for (int x = 1; x <= lineWidth; x++)
                {
                    Console.Write("*");
                }

                Console.WriteLine();
            }

        }

    }
}