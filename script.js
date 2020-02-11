
// 
//    
    
        var myStudentsList = {
            myStudents: [],

                             
            addStudent: function(studlf){
                
                this.myStudents.push({
                    id: "777777",
                    studlf: studlf,
                    completed: false,
                    
                    
                });
                this.addStudentID();
                
                
                // var elementPos = this.myStudents.map(function(x) {return x.id; }).indexOf(777777);    
            },
            addStudentID: function(){
                for (var i = 0; i < this.myStudents.length; i++){
                    this.myStudents[i].id = "stud"+i;

                }
                   
            },

            changeStudent: function(position, newValue){
                this.myStudents[position].studlf = newValue;
                
            },

            deleteStudent: function(position){
                
                this.myStudents.splice(position , 1);
                
            },

            toggleCompleted: function(position){
                var todo = this.myStudents[position];
                todo.completed = !todo.completed;
                view.displayStudents();
                
            },

            toggleAll: function(position){
                var totalStudents = this.myStudents.length;
                var completedStudents = 0;

                //get number of completed students
                for (var i = 0; i < totalStudents; i++)
                    if(this.myStudents[i].completed == true){
                        completedStudents++;
                    }    
                
                    //Case 1: if everythings true make everything false
                if (completedStudents == totalStudents){
                    for (var i = 0; i < totalStudents; i++){
                        this.myStudents[i].completed = false;
                    }

                    //make everything true
                }
                //Case 2: otherwise make everything true
                else{
                    for (var i = 0; i < totalStudents; i++){
                        this.myStudents[i].completed = true;
                    } 
                }
                
            },

           
        
        };
        
           
var handlers = {
    
    toggleAll: function(){
        myStudentsList.toggleAll();
        view.displayStudents();              
    },
    addStudent: function(){
        
        var addStudentTextInput = document.getElementById('newstudent');
        myStudentsList.addStudent(addStudentTextInput.value);
        addStudentTextInput.value = '';
        view.displayStudents();              
    },

    changeStudent: function(){
        var changeStudentTextInput = document.getElementById('changestudenttext');
        var changeStudentPosition = document.getElementById('changestudentposition');
        myStudentsList.changeStudent(changeStudentPosition.value,changeStudentTextInput.value);
        view.displayStudents();
                      
    },

    deleteStudent: function(position){
      myStudentsList.deleteStudent(position);
    
      view.displayStudents();
                    
  },

  toggleCompleted: function(){
      
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput').value;
    
    myStudentsList.toggleCompleted(toggleCompletedPositionInput);
    toggleCompletedPositionInput.value = '';
    view.displayStudents();
                  
},

};


var view = {

    displayStudents: function(){
                        
        var todosUl = document.getElementById("myList");
        todosUl.innerHTML = '';
        var todolist = myStudentsList.myStudents;
        
        if(myStudentsList.myStudents.length == 0){
            document.getElementById("myDiv").innerHTML += '<h2>Your list is empty</h2>';
        }
        
        else{
            for (var i = 0; i < myStudentsList.myStudents.length; i++){
                
                var linode = document.createElement('li');
                
                linode.value = i;
                var eventid = "stud"+i;
                linode.setAttribute("id", eventid);
                
            //     linode.addEventListener('click', function(){
            //         myStudentsList.toggleCompleted(this.value);
                    
            // });
                if(myStudentsList.myStudents[i].completed == true){
                    var todo = myStudentsList.myStudents[i];
                    todoTextWithCompletion = '(x) '+ todo.studlf;                                                     
                    linode.textContent = todoTextWithCompletion;
                    linode.appendChild(this.createDeleteButton());
                     todosUl.appendChild(linode);
                
                }

                else{
                    
                    var todo = myStudentsList.myStudents[i]; 
                    todoTextWithCompletion = '( ) '+ todo.studlf;                                                     
                    linode.textContent = todoTextWithCompletion;
                    linode.appendChild(this.createDeleteButton());
                    todosUl.appendChild(linode);
                    
                    

                }

                
                
            }
            
        }
            
        
            
        },

        createDeleteButton: function (){
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteButton' 
            deleteButton.id = 'handlers.deleteStudent(this.parentNode.id)';
            return deleteButton;
        },


        
};

// var ttodosUl = document.querySelector('ul');

// ttodosUl.addEventListener('click', function(event){

//     var elementClicked = event.target;
//         if (elementClicked.className == 'deleteButton'){
//              console.log('hi');
                
//          }
    
//      });

//handlers.deleteStudent(parseInt(elementClicked.parentNode.id))




       


    
    

