var matrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
function clearMatrix(){
    matrix = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
}

function setButtons(){
    document.querySelector(".top-left").innerHTML = matrix[0][0];
    document.querySelector(".top-middle").innerHTML = matrix[0][1];
    document.querySelector(".top-right").innerHTML = matrix[0][2];
    document.querySelector(".middle-left").innerHTML = matrix[1][0];
    document.querySelector(".middle-middle").innerHTML = matrix[1][1];
    document.querySelector(".middle-right").innerHTML = matrix[1][2];
    document.querySelector(".bottom-left").innerHTML = matrix[2][0];
    document.querySelector(".bottom-middle").innerHTML = matrix[2][1];
    document.querySelector(".bottom-right").innerHTML = matrix[2][2];

}
let turn = true;

function checkIfMatrixFull() {
    let full = true;
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            if(matrix[i][j] === ""){
                full = false;
                break;
            }
        }
    }
    if(full){
        document.querySelector('.winner').innerHTML = "DRAW";
        clearMatrix();
        setButtons();
    }
}

function clicked(row, column){
    if(matrix[row][column] === ""){
        matrix[row][column] = turn ? "O" : "X";
        setButtons();
        checkForWin();
        checkIfMatrixFull();
        turn = !turn;
    }
}

function checkForWin(){
    let win_o = false;
    let win_x = false;
    for (var i = 0; i <= 2; i++) {
        if(matrix[i][0] === "O" && matrix[i][1] === "O" && matrix[i][2] === "O"){
            win_o = true;
            break;
        }
        if(matrix[0][i] === "O" && matrix[1][i] === "O" && matrix[2][i] === "O"){
            win_o = true;
            break;
        }
        if(matrix[i][0] === "X" && matrix[i][1] === "X" && matrix[i][2] === "X"){
            win_x = true;
            break;
        }
        if(matrix[0][i] === "X" && matrix[1][i] === "X" && matrix[2][i] === "X"){
            win_x = true;
            break;
        }
    }
    if(matrix[0][0] === "O" && matrix[1][1] === "O" && matrix[2][2] === "O"){
        win_o = true;
    }
    if(matrix[0][2] === "O" && matrix[1][1] === "O" && matrix[2][0] === "O"){
        win_o = true;
    }
    if(matrix[0][0] === "X" && matrix[1][1] === "X" && matrix[2][2] === "X"){
        win_x = true;
    }
    if(matrix[0][2] === "X" && matrix[1][1] === "X" && matrix[2][0] === "X"){
        win_x = true;
    }
    if(win_o || win_x){
        setWinner(win_o);
        clearMatrix();
        setButtons();
    }

}
function setWinner(win_o){
    let winner;
    if(win_o){
        winner = "Winner is O";
    }else{
        winner = "Winner is X";
    }

    document.querySelector('.winner').innerHTML = winner;
}

setButtons();

document.querySelector(".top-left").onclick = function() {
    clicked(0, 0);
};
document.querySelector(".top-middle").onclick = function() {
    clicked(0, 1);
};
document.querySelector(".top-right").onclick = function() {
    clicked(0, 2);
};
document.querySelector(".middle-left").onclick = function() {
    clicked(1, 0);
};
document.querySelector(".middle-middle").onclick = function() {
    clicked(1, 1);
};
document.querySelector(".middle-right").onclick = function() {
    clicked(1, 2);
};
document.querySelector(".bottom-left").onclick = function() {
    clicked(2, 0);
};
document.querySelector(".bottom-middle").onclick = function() {
    clicked(2, 1);
};
document.querySelector(".bottom-right").onclick = function() {
    clicked(2, 2);
};
