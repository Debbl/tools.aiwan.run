"use client";
import { Textarea } from "@heroui/react";
import { useState } from "react";
import { CopyButton } from "~/components/CopyButton";

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [base64Text, setBase64Text] = useState("");

  const handleInputTextChange = (value: string) => {
    setInputText(value);
    let newBase64Text = "";
    try {
      newBase64Text = btoa(value);
    } catch {
      newBase64Text = "Invalid input";
    }
    setBase64Text(newBase64Text);
  };

  const handleBase64TextChange = (value: string) => {
    setBase64Text(value);
    let newInputText = "";
    try {
      newInputText = atob(value);
    } catch {
      newInputText = "Invalid input";
    }
    setInputText(newInputText);
  };

  return (
    <div className="grid h-full content-center gap-y-2">
      <div>
        <h1 className="text-center">Base64</h1>
      </div>
      <div className="grid gap-2 gap-y-4 px-2 sm:grid-cols-2">
        <Textarea
          isInvalid={inputText === "Invalid input"}
          value={inputText}
          onValueChange={handleInputTextChange}
          classNames={{
            inputWrapper: "relative",
          }}
          minRows={8}
          label="text"
          placeholder="Enter your input text"
          endContent={
            <CopyButton className="absolute top-2 right-3" text={inputText} />
          }
        />
        <Textarea
          isInvalid={base64Text === "Invalid input"}
          value={base64Text}
          onValueChange={handleBase64TextChange}
          label="base64"
          minRows={8}
          placeholder="Enter your base64 text"
          endContent={
            <CopyButton className="absolute top-2 right-3" text={base64Text} />
          }
        />
      </div>
    </div>
  );
}
