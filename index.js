window.addEventListener('load',function(){
    alert("This is Personal Web Page for Semester Project.");

})


// Calculator code starts:
var a=0;

        function calculator(elm){
    
            a=document.getElementById('resultScreen').innerHTML+=elm;
            
        }

        function Clear()
        {
            document.getElementById('resultScreen').innerHTML="";
        }

        function equal()
        {
            document.getElementById('resultScreen').innerHTML=eval(a);
        }
// Calculator code Ends;


// Grade Decider:

let marks = 0;
let gradeDecider = "";
let grade = document.getElementById('grade');
let result = document.getElementById('marks');
result.addEventListener('input',function(){
    marks = this.value;
    switch(marks)
    {
        case '50':
        case '51':
        case '52':
        case '53':
        case '54':
            gradeDecider = "D  Garde";
            break;
        case '55':
        case '56':
        case '57':
        case '58':
        case '59':
            gradeDecider = "D+  Grade";
            break;
        case '60':
        case '61':
        case '62':
        case '63':
        case '64':
            gradeDecider = "C  Grade";
            break;
        case '65':
        case '66':
        case '67':
        case '68':
        case '69':
            gradeDecider = "C+  Grade";
            break;
        case '70':
        case '71':
        case '72':
        case '73':
        case '74':
            gradeDecider = "B  Grade";
            break;
        case '75':
        case '76':
        case '77':
        case '78':
        case '79':
            gradeDecider = "B+  Grade";
            break;
        case '80':
        case '81':
        case '82':
        case '83':
        case '84':
        case '85':
        case '86':
        case '87':
        case '88':
        case '89':
        case '90':
        case '91':
        case '92':
        case '93':
        case '94':
        case '95':
        case '96':
        case '97':
        case '98':
        case '99':
        case '100':
            gradeDecider = "A  Grade";
            break;
        default:
            if(marks >= 0 && marks <= 49)
            {
                gradeDecider = "Fail";
                
                
            }
            else
            {
                gradeDecider = "Invalid marks!!!";
            }
            
        
    }
    if(marks == "")
    {
         grade.value = "";
    }
    else
    {
        grade.value = gradeDecider;
    }
    

    
});




