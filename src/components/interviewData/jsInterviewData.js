const jsInterviewData = [
    {
        interviewSet: 1,
        questions: [
            {
                id: 1,
                question: " What are tags?",
                answer: "Most of the content of the HTML document is enclosed by starting and ending tags. Various types of tags are available in HTML to add text, image, audio, and video in the document. Each tag is declared by enclosing with less than symbol (<) and the greater than symbol (>). A slash symbol (/) is used in the closing tag. ",
                example: "<p>Hello World!</p>\n" +
                    "<hr/>\n" +
                    "<div>Hello World, again!</div> ",
                type: "html"
            },
            {
                id: 2,
                question: "Do all HTML tags come in a pair?",
                answer: "No. There are some tags in HTML that don’t have ending tag and these type of tags doesn’t contain any content also.",
                example: "The <br> tag and <img> tags.",
                type: "html"
            },
            {
                id: 3,
                question: "What does CSS selector mean?",
                answer: "A string equivalent of HTML elements by which style declarations are declared that are linked with some HTML particular elements is called CSS selector. ",
                example: "h1 {\n" +
                    "font-size:16px;\n" +
                    "}\n" +
                    "#a {\n" +
                    "font-weight:300;\n" +
                    "}\n" +
                    "42 \n" +
                    ".cl {\n" +
                    "color:#FFF;\n" +
                    "} ",
                type: "css"
            },
            {
                id: 4,
                question: "Differentiate Class selector from ID selector?",
                answer: "The class selector can be applied to different types of HTML elements and ID selector is used for applying style on a particular element that has the corresponding id value. In other words, ID is uniques while classes are not. It is possible that an element has both class and ID. ",
                example: "div {\n" +
                    "background-color:red;\n" +
                    "}\n" +
                    "#myid {\n" +
                    "background-color:blue;\n" +
                    "}\n" +
                    "<div>Content of div 1</div>\n" +
                    "<div id=\"mydiv\"> Content of div 2</div>\n" +
                    "<div> Content of div 3</div>\n" +
                    "Here, the background color of first and third div will be red for tag\n" +
                    "selector and the second div will be blue for ID selector. ",
                type: "css"
            },
            {
                id: 5,
                question: "Define the float property of CSS?",
                answer: "By float property, the image can be moved to the right or the left along with the text that is wrapped around it. The elements declared before this property do not change their formatting. ",
                example: "p {\n" +
                    "float: left;\n" +
                    "width: 250px;\n" +
                    "}\n" +
                    "According to the above style, The width of all paragraphs of the\n" +
                    "document will be 250px and the paragraphs will be set in the left\n" +
                    "side of the document. For the float property, other elements can\n" +
                    "be placed in the empty part of the right side. ",
                type: "css"
            },
            {
                id: 6,
                question: "What is break and continue statements? ",
                answer: "Break statement exits from the current loop and Continue statement continues with the next statement of the loop.",
                example: "//break example\n" +
                    "for(var i=0; i <10; i++)\n" +
                    "74 \n" +
                    "{\n" +
                    "If(i==5) break;\n" +
                    "document.write(i);\n" +
                    "}\n" +
                    "The loop will terminate when the value of i is 5.\n" +
                    "//continue example\n" +
                    "for(var i=10; i >0; i--)\n" +
                    "{\n" +
                    "If(i==6) continue;\n" +
                    "document.write(i*2);\n" +
                    "}\n" +
                    "When the value of i is 6 then the loop will continue without\n" +
                    "executing the statement document.write(i*2). ",
                type: "javascript"
            },
            {
                id: 7,
                question: "What is the 'Strict' mode in JavaScript and how can it be enabled? ",
                answer: "Strict Mode adds certain compulsions to JavaScript. Under the strict mode, JavaScript shows errors for a piece of codes, which 78 did not show an error before, but might be problematic and potentially unsafe. Strict mode also solves some mistakes that hamper the JavaScript engines to work efficiently. Strict mode can be enabled by adding the string literal \"use strict\" above the file. ",
                example: "function myfunction() {\n" +
                    " \"use strict\";\n" +
                    " var v = \"This is a strict mode function\";\n" +
                    "} ",
                type: "javascript"
            },
            {
                id: 8,
                question: "Describe the properties of an anonymous function in JavaScript? ",
                answer: "A function that is declared without any named identifier is known as an anonymous function. In general, an anonymous function is inaccessible after its declaration. ",
                example: "var anoy = function() {\n" +
                    "alert('I am anonymous function');\n" +
                    "};\n" +
                    "anoy(); ",
                type: "javascript"
            },
            {
                id: 9,
                question: "What are Constants in ES6? ",
                answer: "Constants are also referred to as Immutable variables. It means that the value of a constant variable cannot be changed. The value that has been assigned at the time of the declaration remains unchanged. E.g. const X= 5.0, here the value of X remains 5 every time and it cannot be changed.",
                example: "",
                type: "javascript"
            },
            {
                id: 10,
                question: "How do get nth Fibonacci number?",
                answer: "Fibonacci implementation!",
                type: "javascript",
                example: "function fibonacci(n){\n" +
                    "  var fibo = [0, 1];\n" +
                    "  \n" +
                    "  if (n <= 2) return 1;\n" +
                    "\n" +
                    "  for (var i = 2; i <=n; i++ ){\n" +
                    "   fibo[i] = fibo[i-1]+fibo[i-2];\n" +
                    "  }\n" +
                    "\n" +
                    " return fibo[n];\n" +
                    "} \n" +
                    "\n" +
                    "> fibonacci(12);\n" +
                    "  = 144 ",
                algorithm: true,
                algorithmProblem: "function fibonacci(n){\n" +
                    "// Add your solution beyond this comment\n" +
                    "\n" +
                    "\n" +
                    "// Add your solution above this comment\n" +
                    "} \n" +
                    "\n" +
                    "fibonacci(12);",
                algorithmAnswer: 144
            }
        ]
    },
]


export default jsInterviewData;
