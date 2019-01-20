$(function () {
    init();
    console.log("Main Init called."); //jQuery works if opens.
});

function initFilesRankBrd() {
    var index = 0;
    var file = FILES.FILE_A;
    var rank = RANKS.RANK_1;
    var sq = SQAURES.A1;

    //initially, set the whole board values as offboard.. reset the board.
    for (index = 0; index < BRD_SQ_NUM; index++) {
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    }
    
}

//initialization function for all variables and stuff.
function init() {
    console.log("init() called.");
}