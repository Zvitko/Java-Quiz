// BE HONEST AND DON'T CHEAT :)
const quizData = [
    {
        question: "What data type is used to create a variable that stores text?",
        a: "myString",
        b: "String",
        c: "Txt",
        d: "string",
        correct: "b",
    },
    {
        question: "What method can be used to find the length of a string?",
        a: "len()",
        b: "getLength()",
        c: "length()",
        d: "getSize()",
        correct: "c",
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        a: "toUpperCase()",
        b: "touppercase()",
        c: "tuc()",
        d: "upperCase()",
        correct: "a",
    },
    {
        question: "Which operator can be used to compare two values?",
        a: "==",
        b: "><",
        c: "=",
        d: "++",
        correct: "a",
    },
    {
        question: "To declare an array in Java, define the variable type with: ",
        a: "[]",
        b: "{}",
        c: "()",
        d: "<>",
        correct: "a",
    },
    {
        question: "Array indexes start with what?",
        a: "1",
        b: "0",
        c: "A",
        d: "B",
        correct: "b",
    },
    {
        question: "How do you create a method in Java?",
        a: "methodName()",
        b: "(methodName)",
        c: "methodName.",
        d: "methodName[]",
        correct: "a",
    },
    {
        question: "What is the correct way to create an object called myObj of MyClass?",
        a: "class myObj = new MyClass();",
        b: "MyClass myObj = new MyClass();",
        c: "class MyClass = new MyObj();",
        d: "new myObj = MyClass();",
        correct: "b",
    },
    {
        question: "Which is NOT a pillar of OOP",
        a: "Abstraction",
        b: "Encapsulation",
        c: "Interface",
        d: "Inheritance",
        correct: "c",
    },
    {
        question: "What year was Java created?",
        a: "1995",
        b: "1991",
        c: "2002",
        d: "1888",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const f_text = document.getElementById('f_text')
const g_text = document.getElementById('g_text')
const h_text = document.getElementById('h_text')
const i_text = document.getElementById('i_text')
const j_text = document.getElementById('j_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})