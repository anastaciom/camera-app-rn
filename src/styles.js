import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    camera: {
      width: "100%",
      height: "100%",
    },
    btnActions: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
    },
  
    btnFlip: {
      position: "absolute",
      bottom: 50,
      left: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    btnTakePicture: {
      position: "absolute",
      bottom: 50,
      right: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    contentModal:{
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      margin: 20
  
    },
    closeBtn:{
      position: "absolute",
      top: 10,
      left: 2,
      margin: 10
    },
    uploadBtn:{
      position: "absolute",
      top: 10,
      right: 2,
      margin: 10
    },
    imgPhoto:{
      width: "100%",
      height: 400,
    }
  });

export default styles