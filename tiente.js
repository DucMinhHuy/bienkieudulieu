function H() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    } else if (FromC == "VND" && To == "USD") {
        Result = "Result: " + (Amount / 23000) + " $";
    }
    if (FromC == "VND" && To == "NDT") {
        Result = "Result:" + (Amount / 3500) + "NDT";
    } else if (FromC == "NDT" && To == "VND") {
        Result = "Result:" + (Amount * 3500) + "Đ";
    }
    if (FromC == "NDT" && To == "USD") {
        Result = "Result:" + (Amount / 7) + "USD";
    } else if (FromC == "USD" && To == "NDT") {
        Result = "Result:" + (Amount * 7) + "NDT"
    }

    document.getElementById("Result").innerHTML = Result;
}