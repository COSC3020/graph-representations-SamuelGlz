function convertToAdjList(adjMatrix) {
    var adjList = [];
    var tempList

    if (adjMatrix == []){
        return []
    }

    for (i = 0; i < adjMatrix.length; i++){
        tempList = [];
        for(j = 0; j < adjMatrix[i].length; j++){
            if(adjMatrix[i][j] == 1) {
                tempList.push(j + 1);
            }
        }
        adjList.push(tempList);
    }

    return adjList;
}

