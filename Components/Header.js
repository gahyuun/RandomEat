import backIcon from "../assets/backIcon.svg";
import { TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";

export default function Header() {
  return (
    <TouchableOpacity>
      <WithLocalSvg asset={backIcon} />
    </TouchableOpacity>
  );
}
