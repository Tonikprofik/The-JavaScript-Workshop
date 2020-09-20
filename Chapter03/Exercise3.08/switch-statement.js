var keyNames = "WASDwasdmm";
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length));
console.log("keyName:", keyName);

switch (keyName.toLowerCase()){
    case "a" :
        console.log("moveleft");
        break;
        case "s":
            console.log("movedown");
            break;

            case "w" :
                console.log("forward");
                break;
                case "d" :
                    console.log("rigt");
                    break;
                    default:
                        console.log("invlaid")
                    
}