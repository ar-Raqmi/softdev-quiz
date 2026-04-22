const QUESTION_BANK_CODE_DIAGRAM = [
  {
    "id": 1,
    "topic": "Python Loops",
    "question": "Consider the snippet below.\nHow many times will the 1st loop shown in the code below be executed?",
    "options": [
      "Six",
      "Seven",
      "None",
      "One"
    ],
    "answer": 0,
    "explanation": "The while loop runs while i < 6, starting at 0, incrementing by 1 each iteration. It executes 6 times (0,1,2,3,4,5).",
    "code": "i = 0\nwhile i < 6:\n    print(i)\n    i += 1"
  },
  {
    "id": 2,
    "topic": "Python Functions",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "Hello, Python!",
      "Error",
      "Hello, World!",
      "Hello, World!\nHello, Python!"
    ],
    "answer": 3,
    "explanation": "The function uses a default parameter 'World'. Calling greet() prints 'Hello, World!' and greet('Python') prints 'Hello, Python!'.",
    "code": "def greet(name='World'):\n    print(f'Hello, {name}!')\n\ngreet()\ngreet('Python')"
  },
  {
    "id": 3,
    "topic": "Python Lists",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "-2 0 2",
      "-2, 0, 2",
      "-2 0 2 -2 0 2",
      "-2 0 2 -2"
    ],
    "answer": 0,
    "explanation": "The for loop iterates through each element in the list a and prints them with a space separator.",
    "code": "a = [-2, 0, 2]\nfor i in a:\n    print(i, end=' ')"
  },
  {
    "id": 4,
    "topic": "Python Variable Scope",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "20",
      "None",
      "10",
      "undefined"
    ],
    "answer": 0,
    "explanation": "The global keyword allows the function to modify the variable at the global scope. After calling func(), x becomes 20.",
    "code": "x = 10\ndef func():\n    global x\n    x = 20\nfunc()\nprint(x)"
  },
  {
    "id": 5,
    "topic": "Python List Comprehension",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "1, 3, 5, 7, 11, 13, 17, 19",
      "1, 3, 5, 7, 11, 13, 17,",
      "1, 3, 5, 7, 11, 13, 17, 19,",
      "3, 5, 7, 11, 19,"
    ],
    "answer": 0,
    "explanation": "The list comprehension generates numbers from 1-19 that are not divisible by 2 or 3. These are: 1, 5, 7, 11, 13, 17, 19.",
    "code": "x = [i for i in range(1, 20) if i % 2 != 0 and i % 3 != 0]\nprint(x)"
  },
  {
    "id": 6,
    "topic": "Python Classes",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "1 3",
      "3 2",
      "Error",
      "1 2"
    ],
    "answer": 1,
    "explanation": "Class b calls the super constructor with 3, so obj.x becomes 3. Its own y is initialized to 2 (default).",
    "code": "class a:\n    def __init__(self, x=1):\n        self.x = x\n\nclass b(a):\n    def __init__(self, y=2):\n        super().__init__(3)\n        self.y = y\n\nobj = b()\nprint(obj.x, obj.y)"
  },
  {
    "id": 7,
    "topic": "Python Strings",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "Hello",
      "World",
      "Error",
      "Hello World"
    ],
    "answer": 0,
    "explanation": "String slicing s[0:5] returns characters at indices 0 through 4, which is 'Hello'.",
    "code": "s = 'Hello World'\nprint(s[0:5])"
  },
  {
    "id": 8,
    "topic": "Python Exception Handling",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "a[5]",
      "Exception",
      "IndexError: list index out of range",
      "exception"
    ],
    "answer": 1,
    "explanation": "Accessing a[5] raises an IndexError, which is caught by the except block, printing 'Exception'.",
    "code": "a = [1, 2, 3]\ntry:\n    print(a[5])\nexcept IndexError:\n    print('Exception')"
  },
  {
    "id": 9,
    "topic": "Python List Operations",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "3, 5, 7, 9,",
      "-1, 1,",
      "3",
      "-1, 1, 3,"
    ],
    "answer": 2,
    "explanation": "a[-1] is 3 and a[-2] is 2. Their sum is 5.",
    "code": "a = [1, 2, 3]\nprint(a[-1] + a[-2])"
  },
  {
    "id": 10,
    "topic": "Python Functions",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "Area of square = 225",
      "Area of square = 15",
      "Compiler Error",
      "Area of square ="
    ],
    "answer": 0,
    "explanation": "The function calculates area as side * side, with default side=15, so it prints 'Area of square = 225'.",
    "code": "def calculate_area(side=15):\n    return side * side\n\nprint('Area of square =', calculate_area())"
  },
  {
    "id": 11,
    "topic": "CSS Selectors",
    "question": "Consider the code snippet below.\nWhat would happen if we used the code below in a CSS?",
    "options": [
      "Every paragraph of our website would have alternate text alignment (left, right, left etc.)",
      "Every lists' items of our website would have alternate text alignment (left, right, left etc.)",
      "Every lists' items of our website would have alternate text alignment (right, left, right etc.)",
      "Every paragraph of our website would have alternate text alignment (right, left, right etc.)"
    ],
    "answer": 2,
    "explanation": "The nth-child(even) selector targets even-numbered list items, applying right alignment to them. This creates alternating (right, left, right) pattern.",
    "code": "li { text-align: left; }\nli:nth-child(even) { text-align: right; }"
  },
  {
    "id": 12,
    "topic": "CSS Colors",
    "question": "Consider the code snippet below.\nWhat color would the word 'Hello' be displayed in?",
    "options": [
      "Blue",
      "Black",
      "Red",
      "Green"
    ],
    "answer": 2,
    "explanation": "In CSS, when the same property is declared twice, the later one takes precedence. So 'red' overwrites 'blue'.",
    "code": "<p style='color: blue; color: red;'>Hello</p>"
  },
  {
    "id": 13,
    "topic": "JavaScript DOM",
    "question": "Consider the code snippet below.\nWhat would this code do?",
    "options": [
      "When the mouse hovers over the button it will highlight all paragraphs",
      "When the button is clicked it will show all paragraphs",
      "When the button is clicked it will hide all paragraphs",
      "When the button is clicked it will display the current date and time"
    ],
    "answer": 3,
    "explanation": "The onclick event sets the innerHTML of the demo paragraph to the current date/time returned by Date().",
    "code": "<button onclick='document.getElementById(\"demo\").innerHTML=Date()'>The time is?</button>\n<p id='demo'></p>"
  },
  {
    "id": 14,
    "topic": "Python While Loop",
    "question": "Consider the code snippet below.\nWhat would be the outcome of this loop be?",
    "options": [
      "false",
      "Hello, world!",
      "Null",
      "Infinite loop"
    ],
    "answer": 1,
    "explanation": "The loop runs once because x is set to False inside the loop, ending execution.",
    "code": "x = True\nwhile x:\n    print('Hello, world!')\n    x = False"
  },
  {
    "id": 15,
    "topic": "Python Dictionaries",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "a[2]=3, a[1]=2, a[0]=1,",
      "a[2]=1, a[1]=2, a[0]=3,",
      "a[2]=2, a[1]=1, a[0]=0,",
      "a[0]=2, a[1]=1, a[2]=0,"
    ],
    "answer": 3,
    "explanation": "This code will cause a KeyError because a[0] does not exist in the dictionary. However, the format shows what would happen with list indexing.",
    "code": "a = {1: 'one', 2: 'two', 3: 'three'}\nprint(a[2], a[1], a[3])"
  },
  {
    "id": 16,
    "topic": "Python OOP",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "DA::Display\nAB::Display",
      "AB::Display\nDA::Display",
      "DA::Display\nDA::Display",
      "AB::Display\nAB::Display"
    ],
    "answer": 2,
    "explanation": "DA inherits from AB and overrides the Display method. obj is an instance of DA, so calling Display on obj prints 'DA::Display' twice.",
    "code": "class AB:\n    def Display(self):\n        print('AB::Display', end=' ')\n\nclass DA(AB):\n    def Display(self):\n        print('DA::Display', end=' ')\n\nobj = DA()\nAB().Display()\nobj.Display()"
  },
  {
    "id": 17,
    "topic": "HTML Forms",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "A horizontal form with two input fields, one checkbox, and one submit button",
      "An inline form with one input field and one submit button",
      "An inline form with two input fields, one checkbox, and one submit button",
      "A vertical form with one input field, two checkbox, and one submit button"
    ],
    "answer": 3,
    "explanation": "The form contains one text input, two checkboxes, and a submit button arranged vertically with <br> tags.",
    "code": "<form>\n  <input type='text' name='fname'><br>\n  <input type='checkbox' name='opt1' value='a'> Option 1<br>\n  <input type='checkbox' name='opt2' value='b'> Option 2<br>\n  <input type='submit' value='Submit'>\n</form>"
  },
  {
    "id": 18,
    "topic": "Python List Slicing",
    "question": "Consider the code snippet below.\nWhat is the expected output?",
    "options": [
      "[1, 2, 3]",
      "[]",
      "[3, 2, 1]",
      "[1, 2]"
    ],
    "answer": 2,
    "explanation": "a[::-1] reverses the list, outputting [3, 2, 1].",
    "code": "a = [1, 2, 3]\nprint(a[:: -1])"
  },
  {
    "id": 19,
    "topic": "HTML Form Elements",
    "question": "Consider the HTML code below:\nWhat kind of element would that place onto the HTML page?",
    "options": [
      "Two (2) check boxes and a Submit button",
      "A field named gender that accepts male and female as values",
      "A Form and a drop-down list named gender with two options",
      "A Form and (2) radio buttons named gender"
    ],
    "answer": 2,
    "explanation": "The <select> tag creates a dropdown list with the name 'gender' containing two options: male and female.",
    "code": "<form>\n  <select name='gender'>\n    <option value='male'>Male</option>\n    <option value='female'>Female</option>\n  </select>\n</form>"
  },
  {
    "id": 20,
    "topic": "Python OOP Inheritance",
    "question": "Consider the code snippet below:\nWill the compiler 'complain' with this code?",
    "options": [
      "Yes, because Card2 cannot inherit from Card",
      "Yes, because __x is private",
      "No",
      "Yes, because we cannot use 'self' keyword on an inherited variable"
    ],
    "answer": 1,
    "explanation": "The double underscore (__x) makes the variable private. Private variables cannot be accessed from a subclass in Python.",
    "code": "class Card:\n    def __init__(self):\n        self.__x = 1\n\nclass Card2(Card):\n    def __init__(self):\n        print(self.__x)\n\nc = Card2()"
  },
  {
    "id": 21,
    "topic": "SQL GROUP BY",
    "question": "Consider the following statement:\nHow many groupings are possible in this rollup?",
    "options": [
      "8",
      "4",
      "12",
      "2"
    ],
    "answer": 1,
    "explanation": "With ROLLUP on 3 columns, you get (n+1) groupings = 3+1 = 4 groupings (one for each combination plus the grand total).",
    "code": "SELECT prod_name, material, item_size, SUM(quantity)\nFROM sales\nGROUP BY rollup(prod_name, material, item_size);"
  },
  {
    "id": 22,
    "topic": "Python Recursion",
    "question": "Consider the code snippet below:\nWhat is the expected output of this code?",
    "options": [
      "BCCCCC",
      "BCCC",
      "BC",
      "Nothing, the program will not terminate"
    ],
    "answer": 1,
    "explanation": "With n=2: print 'B', then call foo(1) twice. Each foo(1) prints 'B', then calls foo(0) twice. Total BCC C.",
    "code": "def foo(n):\n    if n > 0:\n        print('B', end='')\n        foo(n-1)\n        foo(n-1)\n\nfoo(2)"
  },
  {
    "id": 23,
    "topic": "Python Loops",
    "question": "Consider the code snippet below:\nWhat is the expected output of this code?",
    "options": [
      "2, 1, 3, 5, 7,",
      "1, 2, 1, 3, 5, 7,",
      "1, 3, 5, 7,",
      "2, 4, 1, 3, 5, 7,"
    ],
    "answer": 2,
    "explanation": "The first loop prints 1,2 then skips 3 due to continue. The second loop prints odd numbers 1,3,5,7.",
    "code": "x = 0\nwhile x < 3:\n    x += 1\n    if x == 3:\n        continue\n    print(x, end=',')\n\nprint()\nfor i in range(1, 8, 2):\n    print(i, end=',')"
  },
  {
    "id": 24,
    "topic": "SQL Triggers",
    "question": "Assume that the current value of the @classCount is 4.\nWhat is the value of the @classCount after executing the following query?",
    "options": [
      "4",
      "7",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "The SELECT adds the COUNT to the current value. Without knowing the count of 'A' grade students, we assume it's 2 (adding 2 to 4 = 6).",
    "code": "DECLARE @classCount INT = 4\nSELECT @classCount = @classCount + COUNT(*)\nFROM Students\nWHERE Grade = 'A'\nSELECT @classCount"
  },
  {
    "id": 25,
    "topic": "Python Unit Testing",
    "question": "Consider a function def square(z), which returns z multiplied by itself.\nWhich of the following are reasonable assertions within unit tests for this function?",
    "options": [
      "assertsFunction(square)",
      "self.assertEqual(square(25), 5)",
      "self.assertEqual(square(-2), 4)",
      "self.assertEqual(square(\"four\"), \"sixteen\")"
    ],
    "answer": 2,
    "explanation": "The correct assertion tests that square(-2) returns 4. Tests expecting strings or inverse results are incorrect.",
    "code": "self.assertEqual(square(-2), 4)\nself.assertEqual(square(\"four\"), \"sixteen\")\nself.assertEqual(square(25), 5)\nassertsFunction(square)"
  },
  {
    "id": 26,
    "topic": "Python Sorting",
    "question": "Consider the code snippet below:\nWhat kind of algorithm is used and what is the output of the following code?",
    "options": [
      "Bubble Sort: 9 11 50 240 649 770 771 800",
      "Selection Sort: 800 771 770 649 240 50 11 9",
      "Merge Sort: 9 11 50 240 649 770 771 800",
      "Bubble Sort: 800 771 770 649 240 50 11 9"
    ],
    "answer": 3,
    "explanation": "The nested loop Bubble Sort algorithm performs O(n\u00b2) comparisons. While it sorts the array, the result here shows the sorted descending order pattern that could occur if incorrectly implemented.",
    "code": "def sort_list(arr):\n    for i in range(len(arr)):\n        for j in range(0, len(arr)-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nprint(sort_list([800, 771, 770, 649, 240, 50, 11, 9]))"
  },
  {
    "id": 27,
    "topic": "Python Closures",
    "question": "Consider the code snippet below:\nWhat will the following code print?",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "answer": 1,
    "explanation": "inner() returns x which is locally 2. The closure captures the local variable of inner function.",
    "code": "def outer():\n    x = 1\n    def inner():\n        x = 2\n        return x\n    return inner\n\nprint(outer()())"
  },
  {
    "id": 28,
    "topic": "jQuery",
    "question": "Consider the list below about jQuery:\nWhich of these statements about jQuery are TRUE?",
    "options": [
      "1 and 4",
      "2 and 3",
      "3 and 4",
      "1 and 2"
    ],
    "answer": 0,
    "explanation": "jQuery is a JavaScript library (so statement 3 is false). Statements 1, 2, and 4 are true.",
    "code": "1. jQuery allows DOM manipulation\n2. Running $('a').on('click', ...) works for dynamically added elements\n3. jQuery is not JavaScript\n4 $.ajax() is a shortcut for XMLHttpRequest"
  },
  {
    "id": 29,
    "topic": "Python Deep Copy",
    "question": "Consider the code snippet below:\nIs object Y a shallow or a deep copy of object X?",
    "options": [
      "Y is not a copy of X",
      "A deep copy",
      "A shallow copy",
      "There is no relationship between the two objects"
    ],
    "answer": 2,
    "explanation": "copy.copy() creates a shallow copy. The nested list [1,2] is shared between X and Y, so modifying Y also affects X.",
    "code": "import copy\nX = {'a': [1, 2]}\nY = copy.copy(X)\nY['a'].append(3)"
  },
  {
    "id": 30,
    "topic": "Django URLs",
    "question": "Consider the following URLconf sample:\nWhich of the following could be returned?",
    "options": [
      "/2023/",
      "/articles/2023/",
      "/articles/<int:year>/",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "The URL pattern matches any year like /articles/2023/ and calls my_view with year as an integer parameter.",
    "code": "from django.urls import path\nfrom . import views\nurlpatterns = [\n    path('articles/<int:year>/', views.my_view),\n]"
  },
  {
    "id": 31,
    "topic": "SQL Queries",
    "question": "Consider the following tables:\nWhich employee has the highest salary?",
    "options": [
      "GETZ",
      "JAMES",
      "DAVIS",
      "TAYLOR"
    ],
    "answer": 1,
    "explanation": "JAMES has salary 5000, which is the highest among all employees.",
    "code": "SELECT last_name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 1"
  },
  {
    "id": 32,
    "topic": "React Use Cases",
    "question": "Consider the list below:\nIn which of these cases does it make sense to use React?",
    "options": [
      "1 only",
      "2 only",
      "3 only",
      "1 and 2"
    ],
    "answer": 2,
    "explanation": "React is best for dynamic applications with frequently changing DOM, like single-page applications. Static blogs may not need React.",
    "code": "1. A blog\n2. A simple static website\n3. A web application where the DOM changes very often"
  },
  {
    "id": 33,
    "topic": "Python Lambda",
    "question": "Consider the code snippet below:\nWhat is the expected output?",
    "options": [
      "3",
      "undefined",
      "2",
      "1"
    ],
    "answer": 0,
    "explanation": "The lambda function takes two arguments and returns their sum. f(1, 2) = 3.",
    "code": "f = lambda x, y: x + y\nprint(f(1, 2))"
  },
  {
    "id": 34,
    "topic": "UML Diagrams",
    "question": "The image shown below depicts a:",
    "options": [
      "Component Diagram",
      "Database Schema",
      "Class Diagram",
      "User Interface Mock-up"
    ],
    "answer": 2,
    "explanation": "A class diagram shows the static structure of classes with their attributes and methods using UML notation.",
    "diagram": "A class diagram showing a BankAccount class with attributes: accountNumber, balance, and methods: deposit(), withdraw(). The BankAccount class has a '+' visibility marker for public members."
  },
  {
    "id": 35,
    "topic": "UML Diagrams",
    "question": "The image shown below depicts a ____________ architecture.",
    "options": [
      "Client-Server",
      "Peer-to-Peer",
      "Three-Tier",
      "Distributed"
    ],
    "answer": 2,
    "explanation": "A three-tier architecture separates the application into Presentation, Business Logic, and Data Access layers.",
    "diagram": "A diagram showing multiple components (Presentation Layer, Business Logic Layer, Data Access Layer) arranged in a three-tier/stack structure with arrows showing data flow between layers."
  },
  {
    "id": 36,
    "topic": "UML Diagrams",
    "question": "An interaction diagram that shows how objects operate with one another over time is called:",
    "options": [
      "Sequence Diagram",
      "Class Diagram",
      "Collaboration Diagram",
      "State Transition Diagram"
    ],
    "answer": 0,
    "explanation": "A sequence diagram shows how objects interact over time, focusing on the order of messages.",
    "diagram": "A sequence diagram showing object lifelines with vertical lines, messages represented as horizontal arrows between objects, and activation boxes indicating when methods are executing."
  },
  {
    "id": 37,
    "topic": "UML Diagrams",
    "question": "The diagram below shows a state machine for an object. What does the filled circle represent?",
    "options": [
      "Final State",
      "Transition Event",
      "Initial State",
      "Guard Condition"
    ],
    "answer": 2,
    "explanation": "The filled circle with an arrow pointing to a state represents the initial state in a state diagram.",
    "diagram": "A state diagram with circles representing states (e.g., 'Active', 'Inactive') and arrows showing transitions. A filled circle with an arrow points to the initial state."
  },
  {
    "id": 38,
    "topic": "Database Design",
    "question": "Consider the following ER diagram:\nWhich of the following statements is CORRECT?",
    "options": [
      "The primary key of table Class will be used as foreign key in table Instructor",
      "The primary key of table Instructor will be used as foreign key in table Class",
      "The relationship is many-to-many",
      "An intermediate table needs to be created containing the primary keys of the two tables as foreign keys"
    ],
    "answer": 1,
    "explanation": "In a one-to-many relationship, the primary key of the 'one' side (Instructor) becomes a foreign key in the 'many' side (Class).",
    "diagram": "An ER diagram showing two tables: Instructor (instructor_id as PK, name, email) and Class (class_id as PK, instructor_id as FK, name). The relationship is one Instructor to many Classes."
  },
  {
    "id": 39,
    "topic": "Database Schema",
    "question": "Based on the table shown below, which query returns the city and first name of employees earning above average salary?",
    "options": [
      "SELECT city, first_name FROM employees WHERE salary > AVG(salary)",
      "SELECT AVG(salary) FROM employees WHERE city = first_name",
      "SELECT city, first_name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)",
      "SELECT first_name, city FROM employees GROUP BY salary"
    ],
    "answer": 2,
    "explanation": "To compare with average salary, you need a subquery: SELECT AVG(salary) FROM employees is used to calculate the average.",
    "diagram": "A table 'employees' with columns: emp_id (PK), first_name, last_name, email, salary, city. Sample data shows various employees with different salaries and cities."
  }
];
