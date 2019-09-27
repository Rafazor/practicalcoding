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
                question: "How do you get the nth Fibonacci number?",
                answer: "The main idea in the fibonacci algorithm is to calculate the next number by adding the current number to the old number.",
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
    {
        interviewSet: 2,
        questions: [
            {
                id: 1,
                question: "How does the z-index property work?",
                answer: "Overlapping may occur while using CSS for positioning HTML elements. Z index helps in specifying the overlapping element. It is a number which can be positive or negative, the default value is zero. Which element will display in the top and which element will 52 display in the bottom among the overlapping elements are set by Z-index property. ",
                example: "img {\n" +
                    " z-index: 1;\n" +
                    "}\n\n" +
                    "div {\n" +
                    " z-index: 2;\n" +
                    "}\n\n" +
                    "Here, the div tag will get the highest priority for higher z-index.",
                type: "html"
            },
            {
                id: 2,
                question: "How to overrule underlining Hyperlinks?",
                answer: "text-decoration property of CSS can be used to overrule underlining Hyperlinks. A hyperlink is displayed by underline in HTML document by default. Underline can be replaced by overline, line-through and none by using this property. ",
                example: "a {\n" +
                    "text-decoration: overline;\n" +
                    "}\n\n" +
                    "<a href=\"link1.html\" style=\"text-decoration: none\">link text1</a>\n" +
                    "<a href=\"link2.html\" >link text2</a>\n\n" +
                    "Here, the first link will be displayed by overline by embedded CSS\n" +
                    "and the second link will be displayed without any formatting by\n" +
                    "inline CSS.",
                type: "html"
            },
            {
                id: 3,
                question: "Name two new tags included in the HTML 5 ",
                answer: "<Video> and <Audio> are new tags which are included in HTML5 version. They are mainly used as a replacement for Flash, Silverlight, and similar technologies to play multimedia items.",
                example: "<video width=\"400\" height=\"250\" controls>\n" +
                    " <source src=\"filename.mp4\" type=\"video/mp4\">\n" +
                    "</video>\n\n" +
                    "You have to set a valid mp4 filename in place of filename.mp4 to\n" +
                    "make the video tag active. ",
                type: "html"
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
                question: "Define Image sprites with context to CSS?",
                answer: "When a set of images has collaborated into one image, it is known as ‘Image Sprites'. As the loading every image on a webpage consumes time, using image sprites, images can be loaded faster in web pages.",
                example: "img.add {\n" +
                    "width: 60px;\n" +
                    "height: 55px;\n" +
                    "background: url (image.png) 0 0;\n" +
                    "}\n\n" +
                    "Here, only the required portion of the image will be displayed. The\n" +
                    "user can save substantial margin and time through this. ",
                type: "css"
            },
            {
                id: 6,
                question: "Define property in css?",
                answer: "A style, that helps in influencing CSS to apply the style in the HTML document is called define property.",
                example: "border: 1px solid #AB04DF;\n\n" +
                    "Here, three property values are declared. These are border-width,\n" +
                    "border-style and border-color. ",
                type: "css"
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
                question: "What is negative infinity?",
                answer: "Negative Infinity is a number in JavaScript which can be derived by dividing the negative number by zero.",
                example: "document.write(Number.NEGATIVE_INFINITY);\n\n" +
                    "It will return –Infinity. ",
                type: "javascript"
            },
            {
                id: 9,
                question: " What do mean by NULL in Javascript?",
                answer: "The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.",
                example: "var data = NULL;",
                type: "javascript"
            },
            {
                id: 10,
                question: "How do you get the nth Fibonacci number?",
                answer: "The main idea in the fibonacci algorithm is to calculate the next number by adding the current number to the old number.",
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
                    // "\n" +
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
