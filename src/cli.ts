'use strict';

import { Core } from './core';
const core = Core();




const scanBlock = async function () {
    let latestBlock =  await core.getBlockInfo('latest');
    console.log("latest: ", latestBlock.number)
    for(var i=1000000; i <latestBlock.number; i++) {
        let blockInfo =  await core.getBlockInfo(i);
        console.log("block number: ", blockInfo.number)
        for (var j=0; j<blockInfo.transactions.length; j++){
            console.log("transaction info: ", blockInfo.transactions[j])
        }
    }
}
console.log(core.tokenNameList[1])
async function checkToken(from:number|string,to:number|string){
    let tokenContract =  core.contractList.Tronix;
    let logs = await core.getPastEvents(tokenContract, from, to);
    console.log("log info is", logs)

    for (var i = 0; i < logs.length; i++){
        let from = logs[i].returnValues._from // address of from
        let to = logs[i].returnValues._to     // address of to
        let blockNumber = logs[i].blockNumber // block hash
        console.log("log[i] info is", logs[i])
    }
}

checkToken(4000000, 4000100)





