var view = 0;
  function totalBudged() {
      var userAmount = document.getElementById("Amount");
      var Amount = parseFloat(userAmount.value)
      var view1 = document.getElementById("budgedView");
      view = parseFloat(view1.innerText)
      view +=Amount;
      view1.innerText = view
      userAmount.value = "";
    }
    var Form = document.getElementById("first");
                          // Expenses section:
var expenses = [];
var totalExpense = 0;
    
    function formView() {
      var show = document.getElementById("expenseView");
      show.style.display = "block";
         }
    
    function addExpense() {
      var description = document.getElementById("expenseDescription").value;
      var expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
      var category = document.getElementById("expenseCategory").value;
      var date = document.getElementById("expenseDate").value;
      
      var expense = {
        description: description,
        expenseAmount: expenseAmount,
        category: category,
        date: date
      };
      
      expenses.push(expense);
      totalExpense += expenseAmount;
    
      var total = view - totalExpense;
     document.getElementById("Total").textContent = total;
    // var show = document.getElementById("expenseView");
    // show.style.display = "none"
    
      ExpensesList();
      updateAmount();
      clearForm();
      
    }
    
    function ExpensesList() {
      var expenseList = document.getElementById("expenseList");
      expenseList.innerHTML = "";
      
      expenses.forEach(function(expense) {
        var Item = document.createElement("li");
        Item.textContent = "Description: " + expense.description +
          ", Amount: " + expense.expenseAmount +
          ", Category: " + expense.category +
          ", Date: " + expense.date;
        expenseList.appendChild(Item);
      });
    }
    
    function updateAmount() {
      var UpdatedAmount = document.getElementById("Expenses");
      UpdatedAmount.textContent = totalExpense;
    }  
    function clearForm() {
      document.getElementById("expenseDescription").value = "";
      document.getElementById("expenseAmount").value = "";
      document.getElementById("expenseCategory").value = "food";
      document.getElementById("expenseDate").value = "";
      
    }