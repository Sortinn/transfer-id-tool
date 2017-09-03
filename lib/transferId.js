function transferId(id) {
    let idString = id.toString();
    let idArr = idString.split("");
    if (idArr.length !== 11) {
        // return "错误！输入学号不存在！";
        console.log("输入学号不存在，请确认后输入");
    }
    while (idString.length === 11) {
        for (let item of idString) {
            if (isNaN(item)) {
                // return "输入的学号中含有非法字符！";
                console.log("输入的学号中含有非法字符，请确认后输入！");
            }
        }
            let result = '{SRUN2}x';
            let codeArr = [];
            idArr.forEach(item => {
                let newItem = String.fromCharCode((item.charCodeAt(0) + 4));
                codeArr.push(newItem);
            });
            let codeString = codeArr.join('') + '@dx';
            result += codeString;
            return result;
        }

}


module.exports = transferId;

console.log(transferId('15030110105'));