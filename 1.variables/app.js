// 3 Type Of a variables declaration : VAR,LET,CONST

/* Var -> Functional Scope : A variable you where can re-declare the vars
    Examples 

    let team = 'Golden State Warriors';
    team = 'Miami Dolphins';

    console.log(team);
    What the result ? Let's Try

*/


/*Let [ES6] -> BlockScope : A variable you where can re-declare the vars
    Examples 
    

    let name = 'Mikey';
    name = 'Toto';

    console.log(name);
    What the result ? Let's Try
 
 */


 /*Const [ES6] : A Variables you can't re-declare the vars
    Examples

    const age = 30;
    age = 10;

    console.log(age);
    What the result ? Let's Try
 */


/* Data Type : String, Number, Boolean , Null , Undifined
    const name = 'Vettel';
    const number = 5;
    const rating = 9.0;
    const isFast = true;
    const empty = null;
    const god = undefined;

    console.log(typeof z);
*/


/*How To Joining Concatenation String and Variables ?

    const driver = 'Max Verstappen';
    const nation = 'Netherlands';

    Concatenation : Concatenation string and variable to make new string 
    console.log('Hallo, Mijn naam ' + driver + ' ik been van ' + nation);

    Template String [ES6] : Simplying to writing variable value on String (Simplying Concatenation)
    console.log(`Hello, My Name is ${driver}, im from ${nation}`);

*/

/* Array = variable that hold multiple value


    // Init Array With Constructor 
    const numbers = new Array(1,2,3,4,5,6);
    console.log(numbers);

    // Init array by Bracket
    const food = ['Hamburger','Pizza','Spagetti'];

    food.push('Cake'); -> for adding value to last index in array
    food.unshift('Bread'); -> for adding value to first index in array
    food.pop(); -> for take last one off from array

    console.log(food);

    // For Checking variable is array or not
    console.log(Array.isArray(food));

    // For Checking index from value
    console.log(food.indexOf('Pizza'));

*/


/* Object Literal-> ARRAY WITH SUPAHPAWAHHH

    const person = {
        firstName : 'Arya',
        lastName : 'Candrayana I Nyoman',
        phone : '081237500435',
        address : 'Tembuku , Bangli',
        ages : 20,
        hobbies : ['Fishing','Coding','Reading a Manga'],
        studentDetails : {
            campusName : 'Politeknik Negeri Bali',
            faculty : 'Teknik Elektro',
            departement : 'D3 Manajemen Informatika',
            supervisor : ['I Wayan Suasnawa','I Made Riyan Adi Nugroho']
        }
    }

    const {firstName,lastName,studentDetails : {campusName}} = person; -> Deconstruct Object data
    person.email = "aryacandrayana@pnb.ac.id"; -> to pushing data to Data 
    console.log(campusName);
        
}
*/




    







