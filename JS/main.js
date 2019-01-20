$(function () {
    init();
    console.log("Main Init called."); //jQuery works if opens.
});

function initFilesRankBrd() {
    var index = 0;
    var file = FILES.FILE_A;
    var rank = RANKS.RANK_1;
    var sq = SQUARES.A1;

    //initially, set the whole board values as offboard.. reset the board.
    for (index = 0; index < BRD_SQ_NUM; ++index) {
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    }

    //Assign Rank and File to all the boxes of the chessboard.
    for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; rank++) {
        for (file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
            sq = file_rank_to_squarenumber(file, rank);
            FilesBrd[sq] = file;
            RanksBrd[sq] = rank;
        }
    }

    console.log("FilesBrd[0]: " + FilesBrd[0] + " RanksBrd[0]: " + RanksBrd[0]);

}



//initialization function for all variables and stuff.
function init() {
    console.log("init() called.");
    initFilesRankBrd();
}