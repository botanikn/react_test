import './styles/App.css';
import Header from './Components/Header';
import Task from './Components/Task';
import Footer from './Components/Footer';

function App() {

  const code_right_1 = ['let enter = prompt("Введите целое число: ");','var cond = false;','var int = 0;','var res;','while (cond == false) {','int = int + 1;','res = enter / int;','if (res == int) {','alert("Ваше число квадрат");','cond = true;','}','}'];
  const code_wrong_1 = ['var enter = prompt("Введите целое число: ");','var cond = false;','var int = 0;','var res;','while (cond == false) {','int = int - 1;','res = enter / int;','if (res != int) {','alert("Ваше число квадрат");','cond = true;','}','}'];
  const task_1 = ['Введите номер функции, которая проверяет, является ли целое число квадратом, не используя математисекие функции.'];
  const right_answer_1 = 1;

  const code_right_2 = ['function v(text) {','var arr = [];','var len = text.length;','var len2 = Math.floor(len / 2);','var len3 = len - 1;','var i = 0;','var j = 0;','var ball = 0;','while (i < len) {','arr.push(text[i]);','i = i + 1;','}','while (j < len2) {','if (arr[j] == arr[len3 - j]) {','ball = ball + 1;','}','j = j + 1;','}','if (ball == len2) {','console.log("Word is palindrome");','}','else {','console.log("Word is not palindrome");','}','}'];
  const code_wrong_2 = ['function v(text) {','var arr = [];','var len = text.length;','var len2 = Math.floor(len / 1);','var len3 = len - 2;','var i = 0;','var j = 0;','var ball = 0;','while (i < len) {','arr.push(text[i]);','i = i - 1;','}','while (j < len2) {','if (arr[j] == arr[len3 - j]) {','ball = ball + 1;','}','j = j + 1;','}','if (ball == len2) {','console.log("Word is palindrome");','}','else {','console.log("Word is not palindrome");','}','}'];
  const task_2 = ['Выберите правильный вариант функции, которая принимает в качестве аргумента строку и возвращает значение true, если строка является палиндромом, и false, если это не так. При решении задачи необходимо учитывать пробелы и знаки препинания, регистр символов в заданной строке не учитывать.','Палиндром — это слово, предложение или последовательность символов, которая читается слева направо так же, как и справа налево. Например, «racecar» и «Anna» являются палиндромами, а «Table» и «John» — нет.','Пример:','palindrome("racecar") вернет true','palindrome("Table") вернет false'];
  const right_answer_2 = 1;

  const code_wrong_3 = ['function f(n) {','var p = 0;','var v = 1;','var n2 = n - 2;','var r = 0;','var i = 0;','if (n == 1) {','return (p);','}','else if (n == 2) {','return (v);','}','else {','while (i < n2) {','r = p + v;','p = v;','v = r;','i = i + 1;','}','return (r);','}','}'];
  const code_right_3 = ['function f(n) {','var p = 0;','var v = 1;','var n2 = n - 2;','var r = 0;','var i = 0;','if (n == 1) {','return (p);','}','else if (n != 2) {','return (v);','}','else {','while (i < n2) {','r = p - v;','p = v;','v = r;','i = i - 1;','}','return (r);','}','}'];
  const task_3 = ['Выберите функцию, которая возвращает n-ую запись в последовательности Фибоначчи, где n — это число, которое вы передаёте в качестве аргумента функции.','Числа Фибоначчи - элементы числовой последовательности, в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.','Пример:','fibonacci(3) вернет 2;']
  const right_answer_3 = 2;

  return (
    <div className="App">
      <Header/>
      <Task code_right={code_right_1} code_wrong={code_wrong_1} task={task_1} right_answer={right_answer_1}/>
      <Task code_right={code_right_2} code_wrong={code_wrong_2} task={task_2} right_answer={right_answer_2}/>
      <Task code_right={code_right_3} code_wrong={code_wrong_3} task={task_3} right_answer={right_answer_3}/>
      <Footer/>
    </div>
  );
}

export default App;