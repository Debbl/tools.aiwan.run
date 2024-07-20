"use client";
import { Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import type { Monaco, Theme } from "@monaco-editor/react";
import { useMainStore } from "../hooks/useMainStore";
import { RiResetRightFill } from "../icons";

export default function Operator({ monaco }: { monaco?: Monaco }) {
  const {
    language,
    languages,
    theme,
    setTheme,
    renderSideBySide,
    setLanguage,
    setRenderSideBySide,
  } = useMainStore();

  const resetMonacoValue = () => {
    monaco?.editor.getModels().forEach((model) => {
      model.setValue("");
    });
  };

  return (
    <div className="flex items-center justify-center gap-x-4 py-4">
      <Select
        selectedKeys={[language]}
        onChange={(e) => setLanguage(e.target.value)}
        label="选择语言"
        size="sm"
        classNames={{
          base: "max-w-xs items-center",
          mainWrapper: "flex-1",
        }}
        labelPlacement="outside-left"
      >
        {languages.map((lang) => (
          <SelectItem key={lang.id}>{lang.id}</SelectItem>
        ))}
      </Select>

      <Select
        selectedKeys={[theme]}
        onChange={(e) => setTheme(e.target.value as Theme)}
        label="选择主题"
        size="sm"
        classNames={{
          base: "max-w-40 items-center",
          mainWrapper: "flex-1",
        }}
        labelPlacement="outside-left"
      >
        <SelectItem key="light">light</SelectItem>
        <SelectItem key="vs-code">vs-dark</SelectItem>
      </Select>

      <Checkbox
        isSelected={renderSideBySide}
        onValueChange={setRenderSideBySide}
        size="md"
        defaultSelected
      >
        并排显示
      </Checkbox>

      <Button size="sm" isIconOnly onClick={resetMonacoValue}>
        <RiResetRightFill />
      </Button>
    </div>
  );
}
