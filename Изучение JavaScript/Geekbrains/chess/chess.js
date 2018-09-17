let body = document.querySelector("body");
let chess = document.createElement("table");
let chessAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
let chessArrey;
let blackPawns = "&#9823;";
let whitePawns = "&#9817;"
let whiteRook = "&#9814;";
let blackRook = "&#9820;";
let whiteBishop = "&#9815;";
let blackBishop = "&#9821;";
let whiteHorse = "&#9816;";
let blackHorse = "&#9822;";
let whiteQueen = "&#9813;";
let blackQueen = "&#9819;";
let whiteKing = "&#9812;";
let blackKing = "&#9818;";
chess.setAttribute("id", "chess");
//chess.style.width = "600px";
//chess.style.height = "600px";
chess.style.textAlign = "center";
chess.style.border = "1px solid #000";
chess.style.fontSize = "40px";

function chessCreation() {
    let vertically;
    let horizontally;
    body.appendChild(chess);
    for (let i = 0; i < 10; i++) {
        console.log(i);
        vertically = document.createElement("tr");
        chess.appendChild(vertically);
        for (let j = 0; j < 10; j++) {
            horizontally = document.createElement("td");
            vertically.appendChild(horizontally);
            horizontally.style.border = "1px solid #000";
            horizontally.style.width = "50px";
            horizontally.style.height = "50px";
            horizontally.setAttribute("id", i + "" + j);

            if (i > 0 && i < 9 && j > 0 && j < 9) {
                horizontally.style.backgroundColor = "#ccc";
            }
        }
    }
}

function chessListNumberAlphabet() {
    chessArrey = document.getElementById("chess");
    for (let i = 0; i < chessArrey.rows.length; i++) {
        let oneColumn = chessArrey.rows[i].cells[0];
        let lastColumn = chessArrey.rows[i].cells[9];
        let oneString = chessArrey.rows[0].cells[i];
        let lastString = chessArrey.rows[9].cells[i];
        if (i > 0 && i < 9) {
            oneColumn.innerHTML = i + "";
            lastColumn.innerHTML = i + "";
            oneString.innerHTML = chessAlphabet[i - 1];
            lastString.innerHTML = chessAlphabet[i - 1];
        }
    }
}

function checkerChess() {
    chessArrey = document.getElementById("chess");
    let oneColumn;
    for (let i = 1; i < chessArrey.rows.length; i++) {
        for (let j = 1; j < 9; j++) {
            oneColumn = chessArrey.rows[i].cells[j];
            if (i % 2 && i < 9 && j % 2) {
                oneColumn.style.backgroundColor = "#fff";
            } else if (i % 2 - 1 && j % 2 - 1) {
                oneColumn.style.backgroundColor = "#fff";
            }
        }

    }
}

function blackChess() {
    let chessBlackPaws;
    let chessBlackRook1 = chessArrey.rows[1].cells[1];
    let chessBlackRook2 = chessArrey.rows[1].cells[8];
    let chessBlackBishop1 = chessArrey.rows[1].cells[2];
    let chessBlackBishop2 = chessArrey.rows[1].cells[7];
    let chessBlackHorse1 = chessArrey.rows[1].cells[3];
    let chessBlackHorse2 = chessArrey.rows[1].cells[6];
    let chessBlackQueen = chessArrey.rows[1].cells[4];
    let chessBlackKing = chessArrey.rows[1].cells[5];
    chessBlackQueen.innerHTML = blackQueen;
    chessBlackKing.innerHTML = blackKing;
    chessBlackHorse1.innerHTML = blackHorse;
    chessBlackHorse2.innerHTML = blackHorse;
    chessBlackBishop1.innerHTML = blackBishop;
    chessBlackBishop2.innerHTML = blackBishop;
    chessBlackRook1.innerHTML = blackRook;
    chessBlackRook2.innerHTML = blackRook;
    for (let i = 0; i < chessArrey.rows.length; i++) {
        chessBlackPaws = chessArrey.rows[2].cells[i];
        if (i > 0 && i < 9) {
            chessBlackPaws.innerHTML = blackPawns;
        }
    }


}

function whiteChess() {
    let chessWhitePaws;
    let chessWhiteRook1 = chessArrey.rows[8].cells[1];
    let chessWhiteRook2 = chessArrey.rows[8].cells[8];
    let chessWhiteBishop1 = chessArrey.rows[8].cells[2];
    let chessWhiteBishop2 = chessArrey.rows[8].cells[7];
    let chessWhiteHorse1 = chessArrey.rows[8].cells[3];
    let chessWhiteHorse2 = chessArrey.rows[8].cells[6];
    let chessWhiteQueen = chessArrey.rows[8].cells[4];
    let chessWhiteKing = chessArrey.rows[8].cells[5];
    chessWhiteQueen.innerHTML = whiteQueen;
    chessWhiteKing.innerHTML = whiteKing;
    chessWhiteHorse1.innerHTML = whiteHorse;
    chessWhiteHorse2.innerHTML = whiteHorse;
    chessWhiteBishop1.innerHTML = whiteBishop;
    chessWhiteBishop2.innerHTML = whiteBishop;
    chessWhiteRook1.innerHTML = whiteRook;
    chessWhiteRook2.innerHTML = whiteRook;
    for (let i = 0; i < chessArrey.rows.length; i++) {
        chessWhitePaws = chessArrey.rows[7].cells[i];
        if (i > 0 && i < 9) {
            chessWhitePaws.innerHTML = whitePawns;
        }
    }


}


chessCreation();
chessListNumberAlphabet();
checkerChess();
blackChess();
whiteChess();
