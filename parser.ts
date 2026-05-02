import fs from 'fs';

const questions = [
  {
    id: 55,
    text: 'Consider the HTML code below:',
    codeSnippet: '<!DOCTYPE html>\n<html>\n<body>\n\n<form>\n<input type="radio" name="gender" value="male"> Male\n<input type="radio" name="gender" value="female"> Female\n</form>\n\n</body>\n</html>',
    language: 'html',
    options: [
      { id: 'A', text: 'A Form and a drop-down list named gender with two options' },
      { id: 'B', text: 'Two (2) check boxes and a Submit button' },
      { id: 'C', text: 'A Form and (2) radio buttons named gender' },
      { id: 'D', text: 'A field named gender that accepts male and female as values' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 56,
    text: 'Which of the following roles DOES NOT belong to Scrum methodology?',
    options: [
      { id: 'A', text: 'Product Owner' },
      { id: 'B', text: 'Scrum Master' },
      { id: 'C', text: 'Development Team' },
      { id: 'D', text: 'Project Manager' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 57,
    text: 'Which of the following refers to all activities (directed by policies, organized and structured in processes and supporting procedures) that are performed by an organization to plan, design, deliver, operate and control information technology services offered to customers?',
    options: [
      { id: 'A', text: 'IT Service Management' },
      { id: 'B', text: 'Agile Development' },
      { id: 'C', text: 'Project Management' },
      { id: 'D', text: 'Software Development' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 58,
    text: 'Consider the code snippet below:\nWill the compiler "complain" with this code?',
    codeSnippet: 'class Card():\n    def __init__(self):\n        self.__x = 0\n\nclass Card2(Card):\n    def __init__(self):\n        Card.__init__(self)\n        self.__x=1\n\ncard=Card2()\nprint(card.__x)',
    language: 'python',
    options: [
      { id: 'A', text: 'Yes, because Card2 cannot inherit from Card' },
      { id: 'B', text: 'Yes, because we cannot use \'self\' keyword on an inherited variable' },
      { id: 'C', text: 'Yes, because __x is private' },
      { id: 'D', text: 'No' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 59,
    text: 'During beta testing, ___________ are most likely to report software bugs.',
    options: [
      { id: 'A', text: '...users...' },
      { id: 'B', text: '...designers...' },
      { id: 'C', text: '...developers...' },
      { id: 'D', text: '...automated tools...' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 60,
    text: 'Consider the following statement:\nSELECT prod name, material, item size, SUM(quantity) \nFROM sales \nGROUP By rollup(prod name, material, item size);\n\nHow many groupings are possible in this rollup?',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '8' },
      { id: 'C', text: '4' },
      { id: 'D', text: '2' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 61,
    text: 'Assume that we have a <section> element with three <article> elements as children. How can we make the <article> elements full-width and layout them vertically using flexbox model?',
    options: [
      { id: 'A', code: 'section {\n  display: flex;\n  align-items: vertical;\n  justify-content: stretch;\n}' },
      { id: 'B', code: 'section {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: stretch;\n}' },
      { id: 'C', code: 'section {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: stretch;\n}' },
      { id: 'D', code: 'section {\n  display: flex;\n  align-items: stretch;\n  justify-content: column nowrap;\n}' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 62,
    text: 'In a design context, an information provider class needs to update a set of information consumer classes while associated with them in a loosely-coupled manner.\nWhich design pattern is suitably applicable in this context?',
    options: [
      { id: 'A', text: 'Factory' },
      { id: 'B', text: 'Observer' },
      { id: 'C', text: 'Strategy' },
      { id: 'D', text: 'Abstract Factory' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 63,
    text: 'What is the difference between Factory and Abstract Factory design patterns?',
    options: [
      { id: 'A', text: 'The Factory pattern uses the Singleton pattern while Abstract Factory does not' },
      { id: 'B', text: 'The Abstract Factory pattern produces objects of a product class while Factory Pattern provides interface to create a family of related objects' },
      { id: 'C', text: 'The Factory pattern produces objects of a product class while Abstract Factory Pattern provides interface to create a family of related objects' },
      { id: 'D', text: 'Nothing, they are the same.' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 64,
    text: 'Which software development process is described in the following sequence?\nRequirement → Design → Implementation → Verification → Maintenance',
    options: [
      { id: 'A', text: 'Agile' },
      { id: 'B', text: 'Waterfall' },
      { id: 'C', text: 'Prototyping' },
      { id: 'D', text: 'Spiral' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 65,
    text: 'Which of the following design patterns DOES NOT belong to Creational category of design patterns?',
    options: [
      { id: 'A', text: 'Abstract Factory' },
      { id: 'B', text: 'Builder' },
      { id: 'C', text: 'Factory Method' },
      { id: 'D', text: 'Observer' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 66,
    text: 'Consider the HTML code below:\nWhy would we use the pagename element in this HTML page?',
    codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n<title>File Upload Box</title>\n</head>\n<body>\n<form>\n<p>This is page 10</p>\n<input type = "hidden" name = "pagename" value = "10" />\n<input type = "submit" name = "submit" value = "Submit" />\n<input type = "reset" name = "reset" value = "Reset" />\n</form>\n</body>\n</html>',
    language: 'html',
    options: [
      { id: 'A', text: 'To store the current page number and display it on the page' },
      { id: 'B', text: 'To store the page number and display on page when submit is pressed' },
      { id: 'C', text: 'To store the current page number and hide it from the page' },
      { id: 'D', text: 'To hide any occurances of the pagename element from all pages of our web site' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 67,
    text: 'Consider the following URLconf sample:\nWhich entry would match the user request to: /news/2005/03/ ?',
    codeSnippet: 'from django.urls import path\nfrom . import views\nurlpatterns = [\n path(\'news/2003/\', views.special_case_2003),\n path(\'news/<int:year>/\', views.year_archive),\n path(\'news/<int:year>/<int:month>/\', views.month_archive),\n path(\'news/<int:year>/<int:month>/<slug:slug>/\', views.dailynews_detail),\n]',
    language: 'python',
    options: [
      { id: 'A', text: 'The second' },
      { id: 'B', text: 'The third' },
      { id: 'C', text: 'The first' },
      { id: 'D', text: 'The last' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 68,
    text: 'In the context of software object-oriented metrics, which guideline is measured in terms of dependencies between units?',
    options: [
      { id: 'A', text: 'Write Code Once' },
      { id: 'B', text: 'Keep Architecture Components Balanced' },
      { id: 'C', text: 'Separate Concerns in Modules' },
      { id: 'D', text: 'Keep Unit Interfaces Small' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 69,
    text: 'Which of the following queries should be used to remove a constraint from a table named products ?',
    options: [
      { id: 'A', text: 'ALTER TABLE products DROP CONSTRAINT products_PK;' },
      { id: 'B', text: 'ALTER TABLE products UPDATE CONSTRAINT products_PK;' },
      { id: 'C', text: 'ALTER TABLE products DELETE CONSTRAINT products_PK;' },
      { id: 'D', text: 'ALTER TABLE products TRUNCATE CONSTRAINT products_PK;' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 70,
    text: 'In the context of software object-oriented metrics, WMC refers to:',
    options: [
      { id: 'A', text: 'Write Machine Code' },
      { id: 'B', text: 'Whole Method Complexity' },
      { id: 'C', text: 'Waste Method Concern' },
      { id: 'D', text: 'Weighted Methods per Class' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 71,
    text: 'Which of the following is NOT an internal sorting method?',
    options: [
      { id: 'A', text: 'Selection-Sort' },
      { id: 'B', text: 'Insertion-Sort' },
      { id: 'C', text: 'Bubble-Sort' },
      { id: 'D', text: 'Merge-Sort' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 72,
    text: 'The process of finding and resolving of defects that prevent correct operation of computer software or a system is called:',
    options: [
      { id: 'A', text: 'Prototyping' },
      { id: 'B', text: 'Debugging' },
      { id: 'C', text: 'Analysis & Design' },
      { id: 'D', text: 'Requirements Capturing' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 73,
    text: 'Consider the code snippet below:\nWhat is the expected output of this code?',
    codeSnippet: 'def Execute(x):\n    if (len(x)<4):\n        return Execute(x+"C")\n    return x\n\ndef main():\n    Example=Execute("BC")\n    print(Example)\nmain()',
    language: 'python',
    options: [
      { id: 'A', text: 'Nothing, the program will not terminate' },
      { id: 'B', text: 'BCCCCC' },
      { id: 'C', text: 'BCCC' },
      { id: 'D', text: 'BC' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 74,
    text: 'Table purchase has as its foreign key the primary key of table clients. Which of the following actions is allowed when using the default setting of the MySQL server?',
    options: [
      { id: 'A', text: 'Create a purchase for a new client that is not contained in the table clients' },
      { id: 'B', text: 'Delete a client who has made a purchase from the table clients' },
      { id: 'C', text: 'Change the value of the primary key of table clients' },
      { id: 'D', text: 'Find the purchases that correspond to an existing client' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 75,
    text: 'Consider the code snippet below:\nWhat is the expected output of this code?',
    codeSnippet: 'class Card:\n    def __init__(self):\n        self._a=0\n    @property\n    def a(self):\n        return self._a\n    @a.setter\n    def a(self,value):\n        self._a=value\n\ndef main():\n    c1=Card()\n    c2=Card()\n    c2=c1\n    while c1.a<8:\n        c1.a+=1\n        c2.a+=1\n        print(f"{c1.a},")\nmain()',
    language: 'python',
    options: [
      { id: 'A', text: '2,\n4,\n6,\n8,' },
      { id: 'B', text: '1,\n3,\n5,\n7,' },
      { id: 'C', text: '1,\n3,\n5,' },
      { id: 'D', text: '2,\n4,\n6,' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 76,
    text: 'Consider the following trigger:\nAssume that the current value of the @classCount is 4.\nWhat is the value of the @classCount after executing the following query?\n\nINSERT INTO class(descr,class_id,trainer)\nVALUES\n(\'BC3JV\',NULL,\'anna@peoplecert.org\'),\n(\'BC3CS\',NULL,\'nikos@peoplecert.org\');',
    codeSnippet: 'CREATE TRIGGER my_count\nAFTER INSERT ON class\nFOR EACH ROW\nSET @classCount = @classCount+1;',
    language: 'sql',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '6' },
      { id: 'C', text: '7' },
      { id: 'D', text: '2' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 77,
    text: 'Consider a function def square(z), which returns z multiplied by itself.\nWhich of the following are reasonable assertions within unit tests for this function?',
    options: [
      { id: 'A', text: 'self.assertEqual(square(-2), 4)' },
      { id: 'B', text: 'self.assertEqual(square("four"), "sixteen")' },
      { id: 'C', text: 'self.assertEqual(square(25), 5)' },
      { id: 'D', text: 'assertsFunction(square)' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 78,
    text: 'Consider the code snippet below:\nWhat kind of algorithm is used and what is the output of the following code?',
    codeSnippet: 'def Sort(arr):\n    n = len(arr)\n    for write in range(n-1):\n        for sort in range(0, n-write-1):\n            if arr[sort] > arr[sort + 1]:\n                arr[sort], arr[sort + 1] = arr[sort + 1], arr[sort]\n\ndef main():\n    arr = [800, 11, 50, 771, 649, 770, 240, 9]\n    Sort(arr)\n    for i in range(len(arr)):\n        print ("% d" % arr[i], end=\'\')\n\nif __name__ == "__main__":\n    main()',
    language: 'python',
    options: [
      { id: 'A', text: 'Bubble Sort\n9 11 50 240 649 770 771 800' },
      { id: 'B', text: 'Merge Sort\n9 11 50 240 649 770 771 800' },
      { id: 'C', text: 'Bubble Sort\n800 771 770 649 240 50 11 9' },
      { id: 'D', text: 'Selection Sort\n800 771 770 649 240 50 11 9' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 79,
    text: 'Assume you want to test software for which you lack the source code.\nWhich would be the MOST SUITABLE testing method in this case?',
    options: [
      { id: 'A', text: 'Black box testing' },
      { id: 'B', text: 'Code review' },
      { id: 'C', text: 'Unit testing' },
      { id: 'D', text: 'Static analysis' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 80,
    text: 'A function maps three numbers in the range 0-255 that represent colors in the red-green-blue space into three numbers in the same range that represent colors in the cyan-magenta-yellow space. Numbers outside the allowed range are clipped to the nearest number within the range.\nSelect the testing strategy that is most likely to be effective.',
    options: [
      { id: 'A', text: 'Test 1000 randomly chosen combinations of numbers within the range' },
      { id: 'B', text: 'Test 1000 randomly chosen combinations of integers' },
      { id: 'C', text: 'Test all combinations of all numbers within the range' },
      { id: 'D', text: 'Test all combinations of numbers at 0, -1, 1, 128, 254, 255, 256' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 81,
    text: 'Consider the code snippet below:\nWhat will the following code print?',
    codeSnippet: 'class Card:\n    def __init__(self):\n        self._a=0\n    @property\n    def a(self):\n        return self._a\n    @a.setter\n    def a(self,value):\n        self._a=value\n\ndef Increment(c):\n    c=Card()\n    c.a+=1\n\ndef main():\n    c1=Card()\n    c1.a=3\n    Increment(c1)\n    print(c1.a)\n\nif __name__ == "__main__":\n    main()',
    language: 'python',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '0' },
      { id: 'D', text: '3' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 82,
    text: 'Consider the HTML code fragment below, which is valid.\nHowever semantically there is something wrong. Identify this error.',
    codeSnippet: '1  - <nav>\n2  - <ul>\n3      <li><a href="#">Home</a></li>\n4      <li><a href="#">About</a></li>\n5      <li><a href="#">Contact</a></li>\n6    </ul>\n7  </nav>\n8  - <section id="articles">\n9  - <article>\n10 -   <header>\n11      <h1>Google Buys Nest</h1>\n12     </header>\n13     <p>...</p>\n14     <p>...</p>\n15 -   <aside>\n16      <h1>Google (GOOG)</h1>\n17      <p>Google was founded in 1998 by Larry Page and Sergey Brin...</p>\n18 -    <footer>\n19        Read more:\n20 -      <ul>\n21          <li><a href="#">Link 1</a></li>\n22          <li><a href="#">Link 1</a></li>\n23          <li><a href="#">Link 1</a></li>\n24        </ul>\n25      </footer>\n26     </aside>\n27   </article>\n28   <article>...</article>\n29 </section>',
    language: 'html',
    options: [
      { id: 'A', text: 'Line 15: There cannot be an <aside> element within an <article> element' },
      { id: 'B', text: 'Line 21-23: <a> elements should be within a <nav> element' },
      { id: 'C', text: 'Line 1: <nav> element should be within a <header> element' },
      { id: 'D', text: 'Line 10: <header> element is not necessary' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 83,
    text: 'What is an SQL injection?',
    options: [
      { id: 'A', text: 'A two-way encryption process that uses the same key for both encryption and decryption of your message' },
      { id: 'B', text: 'An algorithm that takes an arbitrary block of data and returns a fixed-size string, the (cryptographic) hash value, such that any (accidental or intentional) change to the data will change the hash value' },
      { id: 'C', text: 'A common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed' },
      { id: 'D', text: 'One of the least common web hacking techniques that uses HTML code' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 84,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'var b = 1;\nfunction outer(){\n    var b = 2\n    function inner(){\n        b++;\n        var b = 3;\n        console.log(b)\n    }\n    inner();\n}\nouter();',
    language: 'javascript',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: 'undefined' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 85,
    text: 'Consider the list below:\n1. There is no need to wait for the DOM to be initialized before accessing it\n2. JavaScript can be used to modify existing DOM elements\n3. JavaScript can be used to create new DOM elements\n4. JavaScript cannot change the title of the current page\n\nWhich of these statements about the DOM are TRUE?',
    options: [
      { id: 'A', text: '1 and 2' },
      { id: 'B', text: '2 and 3' },
      { id: 'C', text: '1 and 4' },
      { id: 'D', text: '3 and 4' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 86,
    text: 'How would you assign number 160 to a JavaScript variable named hgt?',
    options: [
      { id: 'A', code: 'var hgt;\nhgt = 160;' },
      { id: 'B', code: 'var hgt;\ndocument.getElementById(" hgt ").innerHTML = `60;' },
      { id: 'C', code: '<p hgt ="160">' },
      { id: 'D', code: '</p> <p id="hgt">\n</p>\n// hgt = 160;' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 87,
    text: '_______________ restructures code and improves internal structure and design.',
    options: [
      { id: 'A', text: 'Unit Testing' },
      { id: 'B', text: 'Requirement analysis' },
      { id: 'C', text: 'Analysis' },
      { id: 'D', text: 'Refactoring' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 88,
    text: 'Consider the list below:\n1. jQuery allows DOM manipulation\n2. Running $(\'a\').on(\'click\', function () {alert(\'asd\');}) will work also for a elements that does not exist right now and will be created later\n3. jQuery is not JavaScript\n4. $.ajax() is a shortcut method provided by jQuery, instead of using XMLHttpRequest\n\nWhich of the following statements about jQuery are TRUE?',
    options: [
      { id: 'A', text: '1 and 2' },
      { id: 'B', text: '2 and 3' },
      { id: 'C', text: '1 and 4' },
      { id: 'D', text: '3 and 4' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 89,
    text: 'Consider the code snippet below:\nIs object Y a shallow or a deep copy of object X?',
    codeSnippet: 'import copy\nclass Card:\n    def __init__(self):\n        self._a = 0\n    @property\n    def a(self):\n        return self._a\n    @a.setter\n    def a(self,value):\n        self._a=value\n\nclass Cards:\n    def __init__(self,card):\n        self.card = card\n\nX=Cards(Card())\nY=copy.copy(X)',
    language: 'python',
    options: [
      { id: 'A', text: 'A deep copy' },
      { id: 'B', text: 'A shallow copy' },
      { id: 'C', text: 'Y is not a copy of X' },
      { id: 'D', text: 'There is no relationship between the two objects' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 90,
    text: 'Consider the code snippets below:\nWhich of the following could be returned ?',
    codeSnippet: '#1.the views.py\nfrom django.http import HttpResponse\ndef my_view(request, year): \n return HttpResponse(f"{request.get_full_path()}")\n\n#2. The urls.py\nfrom . import views\nfrom django.urls import path\nurlpatterns = [ \n path(\'articles/<int:year>/\', views.my_view), \n]',
    language: 'python',
    options: [
      { id: 'A', text: 'A string representing the scheme of the request (http or https)' },
      { id: 'B', text: 'A string representing the full path to the requested page, not including the scheme or domain. Example: "/articles/2000/"' },
      { id: 'C', text: 'The originating host of the request. Example: "127.0.0.1:8000"' },
      { id: 'D', text: 'A string representing the full path to the requested page, including the scheme or domain. Example: "http://localhost:8000/articles/2000/"' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 91,
    text: 'Consider the list below:\n1. A blog\n2. A simple static website\n3. A web application where the DOM changes very often\n\nIn which of the cases mentioned above, does it make sense to use React?',
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: '3 only' },
      { id: 'D', text: '1 and 2' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 92,
    text: '_________ is an extension of ____________, where we can also use HTML syntax.',
    options: [
      { id: 'A', text: 'JSX / JavaScript' },
      { id: 'B', text: 'JavaScript / JSX' },
      { id: 'C', text: 'React / JSX' },
      { id: 'D', text: 'JavaScript / React' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 93,
    text: 'One of the activities of static software testing is:',
    options: [
      { id: 'A', text: 'Stress testing' },
      { id: 'B', text: 'Code reviews' },
      { id: 'C', text: 'Unit testing' },
      { id: 'D', text: 'Beta testing' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 94,
    text: 'In databases, a(n) ____________ returns all rows when there is a match in one of the tables.',
    options: [
      { id: 'A', text: 'Inner join' },
      { id: 'B', text: 'Full join' },
      { id: 'C', text: 'Left join' },
      { id: 'D', text: 'Right join' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 95,
    text: 'Which of the following sentences in regards to empathy, as a phase of Design Thinking, is INCORRECT?',
    options: [
      { id: 'A', text: 'A tool to help understand a targeted persona.' },
      { id: 'B', text: 'A tool to help understand programmers\' needs.' },
      { id: 'C', text: 'Can carry out new research to fill in gaps regarding user understanding.' },
      { id: 'D', text: 'Acts as the centerpiece of a software-centered design process.' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 96,
    text: 'Assume we have the following database tabels:\nIf we execute the following statement, what is the result?\nSELECT * FROM TableA\nINNER JOIN TableB\nON TableA.name = TableB.name',
    tables: [
      {
        name: 'TABLE A',
        columns: [{ name: 'id', isKey: true }, { name: 'name' }],
        rows: [['1', 'Pirate'], ['2', 'Monkey'], ['3', 'Ninja'], ['4', 'Spaghetti']]
      },
      {
        name: 'TABLE B',
        columns: [{ name: 'id', isKey: true }, { name: 'name' }],
        rows: [['1', 'Rutabaga'], ['2', 'Pirate'], ['3', 'Darth Vader'], ['4', 'Ninja']]
      }
    ],
    options: [
      { id: 'A', uiRender: 'Q42_A' },
      { id: 'B', uiRender: 'Q42_B' },
      { id: 'C', uiRender: 'Q42_C' },
      { id: 'D', uiRender: 'Q42_D' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 97,
    text: 'Consider the following activity:\nAt the end of a Sprint, the team holds two events: the Sprint Review and the Sprint Retrospective.\nWhich software development methodology uses such an activity?',
    options: [
      { id: 'A', text: 'Waterfall' },
      { id: 'B', text: 'Rapid Application Development.' },
      { id: 'C', text: 'Prototyping' },
      { id: 'D', text: 'Scrum' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 98,
    text: 'Consider the following Django model definition:\nWhich of the following statements creates a new instance of the above model ?',
    codeSnippet: 'class Book(models.Model):\n title = models.CharField(max_length=100)\n\n @classmethod\n def create(cls, title):\n  book = cls(title=title)\n  # do something with the book\n  return book',
    language: 'python',
    options: [
      { id: 'A', text: 'book = Book.create("Pride and Prejudice")' },
      { id: 'B', text: 'book = Book.objects.create_book("Pride and Prejudice")' },
      { id: 'C', text: 'book = Book("Pride and Prejudice")' },
      { id: 'D', text: 'book =Book.objects.get("Pride and Prejudice")' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 99,
    text: 'Which of the following XML files has a syntax error?',
    options: [
      { id: 'A', code: '<?xml version="1.0" encoding="UTF-8"?>\n<contact-info>\n  <address category="residence">\n    <name>Anna Maria</name>\n    <company>AFDEMP</company>\n    <phone>(210) 123-4567</phone>\n  </address>\n</contact-info>' },
      { id: 'B', code: '<?xml version="1.0" encoding="UTF-8"?>\n<breakfast_menu>\n<food>\n  <name>Belgian Waffles</name>\n  <price>$5.95</price>\n  <descr>Two of our famous Belgian Waffles & real maple syrup</descr>\n  <calories>650</calories>\n</food>\n</breakfast_menu>' },
      { id: 'C', code: '<?xml version="1.0" encoding="UTF-8"?>\n<breakfast_menu>\n<food>\n  <name>Belgian Waffles Trio</name>\n  <price>$6.95</price>\n  <descr>Three of our famous Belgian Waffles & real maple syrup</descr>\n  <calories>950</calories>\n</food>\n</breakfast_menu>' },
      { id: 'D', code: '<?xml version="1.0" encoding="UTF-8"?>\n<contact-info>\n  <address category="residence">\n    <name>Anna Maria</name>\n    <company>AFDEMP</company>\n    <phone>(210) 123-4567</phone>\n  </address>\n</contact-info>' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 100,
    text: 'Which code would insert a background image onto the website named myimage.jpg?',
    options: [
      { id: 'A', code: '<body style="background-image:url(\'myimage.jpg\')">' },
      { id: 'B', code: '<img src="https://www.afdemp.org/images/\'myimage.jpg" alt="afdemp.org">' },
      { id: 'C', code: '<a href="myimage.jpg">' },
      { id: 'D', code: '<img src="https://www.afdemp.org/images/logo.jpg" alt="afdemp.org">' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 101,
    text: 'Consider the following ER diagram:\nInstructor (1) - manages - (0..1) Class\n\nWhich of the following statements, when creating a database schema, is CORRECT?',
    diagram: 'er',
    options: [
      { id: 'A', text: 'The primary key of table Instrucor will be used as foreign key in table Class' },
      { id: 'B', text: 'The primary key of table Class will be used as foreign key in table Instructor' },
      { id: 'C', text: 'An intermediate table needs to be created containing the primary keys of the two tables as foreign keys.' },
      { id: 'D', text: 'There is no need to establish any kind of relationship between the two tables' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 102,
    text: 'The UNIQUE constraint:',
    options: [
      { id: 'A', text: 'Identifies the primary key in a database table' },
      { id: 'B', text: 'Identifies the foreign key in a database table' },
      { id: 'C', text: 'Identifies the index in a database table' },
      { id: 'D', text: 'Uniquely identifies each record in a database table' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 103,
    text: 'You want to retrieve all employees, whether or not they have matching departments in the departments table. Which query would you use?',
    tables: [
      {
        name: 'employees',
        columns: [{ name: 'last_name' }, { name: 'department_ID' }, { name: 'salary' }],
        rows: [['GETZ', '10', '1000'], ['HERTZ', '20', '1500'], ['DAVIS', '20', '3000'], ['TAYLOR', '30', '2200'], ['JAMES', '', '5000']]
      },
      {
        name: 'departments',
        columns: [{ name: 'department_ID' }, { name: 'department_name' }],
        rows: [['10', 'MARKETING'], ['20', 'SALES'], ['30', 'ACCOUNTING'], ['40', 'ADMINISTRATION']]
      }
    ],
    options: [
      { id: 'A', text: 'SELECT last_name, department_name \nFROM employees e LEFT OUTER \nJOIN departments d ON (e.department_id = d.department_id)' },
      { id: 'B', text: 'SELECT last_name, department_name\nFROM employees e RIGHT OUTER\nJOIN departments d ON (e.department_id = d.department_id);' },
      { id: 'C', text: 'SELECT last_name, department_name\nFROM employees e FULL OUTER\nJOIN departments d ON (e.department_id = d.department_id)' },
      { id: 'D', text: 'SELECT last_name, department_name\nFROM employees e INNER \nJOIN departments d ON (e.department_id = d.department_id)' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 104,
    text: 'Which jQuery method is used to perform an asynchronous HTTP request?',
    options: [
      { id: 'A', text: 'jQuery.ajaxAsync()' },
      { id: 'B', text: 'jQuery.ajax()' },
      { id: 'C', text: 'jQuery.ajaxSetup()' },
      { id: 'D', text: 'jQuery.Setupajax()' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 105,
    text: 'Consider the HTML code below:\nWhich of the following elements are produced by this code?',
    codeSnippet: '<!DOCTYPE html>\n<html>\n<body>\n<form action="/action_page.php">\n  <fieldset>\n    <legend>Personal information:</legend>\n    First name:<br>\n    <input type="text" name="firstname" value="Eric">\n    <br>\n    Last name:<br>\n    <input type="text" name="lastname" value="Taylor">\n    <br><br>\n    <input type="submit" value="Submit">\n  </fieldset>\n</form>\n</body>\n</html>',
    language: 'html',
    options: [
      { id: 'A', uiRender: 'Q51_A' },
      { id: 'B', uiRender: 'Q51_B' },
      { id: 'C', uiRender: 'Q51_C' },
      { id: 'D', uiRender: 'Q51_D' }
    ],
    correctAnswer: 'C'
  }
];

fs.writeFileSync('src/data/questionsPart2.ts', 'export const questionsPart2 = ' + JSON.stringify(questions, null, 2) + ';');
console.log('done writing script');
