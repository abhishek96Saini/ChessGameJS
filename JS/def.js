//Giving key: value type naming allows easy management.
var PIECES = {
    EMPTY: 0,
    wP: 1,
    wN: 2,
    wB: 3,
    wR: 4,
    wQ: 5,
    wK: 6,
    bP: 7,
    bN: 8,
    bB: 9,
    bR: 10,
    bQ: 11,
    bK: 12
};

const BRD_SQ_NUM = 120; //board square number.

//define files and ranks.
//As all array indexing begins from zero, we start from files and ranks from 0.
var FILES = {
    FILE_A: 0,
    FILE_B: 1,
    FILE_C: 2,
    FILE_D: 3,
    FILE_E: 4,
    FILE_F: 5,
    FILE_G: 6,
    FILE_H: 7,
    FILE_NONE: 9
};
var RANKS = {
    RANK_1: 0,
    RANK_2: 1,
    RANK_3: 2,
    RANK_4: 3,
    RANK_5: 4,
    RANK_6: 5,
    RANK_7: 6,
    RANK_8: 7,
    RANK_NONE: 8
};

//WHITE=0.BLACK =1 allows easy swtiching between colors by simply XOR operation. i.e. side^= 1;
var COLORS = {
    WHITE: 0,
    BLACK: 1,
    BOTH: 2
}

// square naming is seen as black up and white position down.
// by convention, A1 should have been at 91, and H8 at 28.
// But here, the squares are upside down.
var SQUARES = {
    A1: 21,
    B1: 22,
    C1: 23,
    D1: 24,
    E1: 25,
    F1: 26,
    G1: 27,
    H1: 28,
    A8: 91,
    B8: 92,
    C8: 93,
    D8: 94,
    E8: 95,
    F8: 96,
    G8: 97,
    H8: 98,
    NO_SQ: 99,
    OFFBOARD: 100
};

//arrays  return files and ranks
var FilesBrd = new Array(BRD_SQ_NUM);  // files are from A to H.
var RanksBrd = new Array(BRD_SQ_NUM);  // ranks are from 1 to 8.

function file_rank_to_squarenumber(f,r)
{
    return ((21 + f) + (r*10));
}