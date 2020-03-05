var positionLog =

    [
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

        ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
    ];

let queen = [{
        "direction": "SW",
        "position": [4, 2],
        "move": 1
    },
    {
        "direction": "W",
        "position": [2, 2],
        "move": 1
    }
];

function position_update(direction, position, move) {
    var y = position[0];
    var x = position[1];
    document.write("persent position of queen" + (i + 1) + " is" + " " + (positionLog[[x]][
        [y]
    ]) + "<br>");
    var m = move;
    switch (direction) {
        case "W":
            y += m;
            break;

        case "NE":
            x += m;
            y -= m;
            break;

        case "NW":
            x += m;
            y += m;
            break;

        case "N":
            x += m;
            break;

        case "S":
            x -= m;
            break;

        case "E":
            y -= m;
            break;

        case "SE":
            x -= m;
            y -= m;
            break;

        case "SW":
            x -= m;
            y += m;
            break;

        default:
            document.write("please check your direction of moving");
            break;
    }

    var arr = [x, y];
    return (arr);

}


for (var i = 0; i < 2; i++) {
    var pos = position_update(queen[i].direction, queen[i].position, queen[i].move);
    var n1 = check_position(pos, i);

}

function check_position(pos) {
    var x = pos[0];
    var y = pos[1];
    if (x < 8 && x >= 0 && y < 8 && y >= 0) {
        document.write("position of queen" + (i + 1) + " after the moving is" + " " + (positionLog[pos[0]][pos[1]]) + "<br>");
    } else {
        document.write("The queen is go to meet her relative who are not in the chess board");
    }
}