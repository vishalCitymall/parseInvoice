exports.parseInvoice = (data) => {
    let result = "";
    let ans = [];
    let lines = data.split("\n");
    let line1 =[];
    let line2 =[];
    let line3 =[];

    for (let j = 0; j < lines.length - 2; j += 4) {
        line1 = lines[j].split("");
        line2 = lines[j + 1].split("");
        line3 = lines[j + 2].split("");

        let pow = "";
        let mod = 3;

        for (let i = 0; i < line1.length; i++) {
            if (i % mod == 0) {
                let strAs = digitToString(pow);

                result += strAs;
                pow = "";
            }

            if (line1[i] == "_" && i % mod == 1)
                pow += "0";

            if (line2[i] == "|" && i % mod == 0)// left
                pow += "5";
            if (line2[i] == "|" && i % mod == 2)// right
                pow += "1";
            if (line2[i] == "_" && i % mod == 1)// bottom
                pow += "6";

            if (line3[i] == "|" && i % mod == 0)// left
                pow += "4";
            if (line3[i] == "|" && i % mod == 2)// right
                pow += "2";
            if (line3[i] == "_" && i % mod == 1)// bottom
                pow += "3";

            if (line1.length - 1 == i) {
                let strAs = digitToString(pow);
                result += strAs;
                pow = "";
            }
        }


        ans.push(result);
        result = ""
    }
    return ans;
}

/*
 * Converting single ascii digit to regular digit
 */
function digitToString( asciiDigit) {
    if (asciiDigit == null || asciiDigit =="")
        return "";

    let map = {};
            map["540312"] = 0;
            map["12"] = 1;
            map["40631"]= 2;
            map["06312"]= 3;
            map["5612"] =4;
            map["50632"] = 5;
            map["540632"] = 6;
            map["012"] =7;
            map["5406312"]= 8;
            map["506312"]= 9;
        
    
    // console.log(asciiDigit);
    
    return map[asciiDigit]!= undefined ? map[asciiDigit] : "?";
}