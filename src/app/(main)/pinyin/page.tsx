"use client";
import { Trans, useLingui } from "@lingui/react/macro";
import { Textarea } from "@nextui-org/react";
import pinyin from "pinyin";
import { useState } from "react";
import { CopyButton } from "~/components/CopyButton";

export default function Page() {
  const { t } = useLingui();
  const [inputText, setInputText] = useState("");
  const [pingyinText, setPingyinText] = useState("");

  const handleInputTextChange = (value: string) => {
    setInputText(value);

    let newPingyinText = "";
    try {
      newPingyinText = pinyin(value).join(" ");
    } catch {
      newPingyinText = t`Invalid input`;
    }
    setPingyinText(newPingyinText);
  };

  return (
    <div className="grid h-full content-center gap-y-2">
      <div>
        <h1 className="text-center">
          <Trans>Pinyin</Trans>
        </h1>
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
          label={t`Text`}
          placeholder={t`Enter your input text`}
          endContent={
            <CopyButton className="absolute right-3 top-2" text={inputText} />
          }
        />
        <Textarea
          isInvalid={pingyinText === "Invalid input"}
          value={pingyinText}
          disabled
          label={t`Pinyin`}
          minRows={8}
          placeholder={t`No input`}
          endContent={
            <CopyButton className="absolute right-3 top-2" text={pingyinText} />
          }
        />
      </div>
    </div>
  );
}
