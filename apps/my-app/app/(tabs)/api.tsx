import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { api } from "@/utils/api";

export default function TabTwoScareen() {
  const [text, setText] = useState("Princesfydgj");
  console.log(api.auth.test);
  const { data, isError, mutate } = api.auth.test.useMutation({
    onSuccess(data, variables, context) {
      console.log(data);
    },
    onError(error, variables, context) {
      console.log(error);
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error });
    },
  });
  useEffect(() => {
    // console.log("Component Mounted");
    mutate();
  }, []);
  // console.log("webd");

  useEffect(() => {
    // console.log("YOYOEYUhjk");
    fetch(
      "http://192.168.82.62:3000/api/trpc/auth.try?batch=1&input=%7B%220%22%3A%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D%7D",
    )
      .then((data) => {
        return data;
        // console.log(data);
      })
      .catch((error) => {
        return error;
      });
    // console.log()
    // console.log(data);
  }, [data]);

  // console.log("HEY HEYY", data);

  return (
    <View>
      <Text>HOME</Text>
      <TextInput
        placeholder="Type here to translate!"
        value={text}
        // defaultValue={text}
        onChangeText={(newText) => {
          // console.log(newText);
          setText(newText + "PRINce");
        }}
      />
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(isError)}</Text>
    </View>
  );
}
