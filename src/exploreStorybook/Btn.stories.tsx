import type { Meta, StoryObj } from "@storybook/react";

import Btn from "./Btn";

const meta: Meta<typeof Btn> = {
  component: Btn,
  title: "arafath/Btn", //title দিয়ে কোন folder এর ভিতর component থাকবে সেটা বলে দেয়া হয়।
  tags: ["autodocs"], //এই command দিয়ে Btn এর ভিতরে একটা docs file তৈরি করা যার ভিতর সকল story গুলো থাকে।
  argTypes: {
    variant: {
      control: { type: "radio" },
      // control: { type: "select" },
      options: ["green", "yellow", "red", "blue", "purple"], //variant এর value এইসব value দ্বারা চেক করা যাবে।
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "green",
  },
};
export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};
export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Pink: Story = {
  args: {
    variant: "pink",
  },
};
export const Another: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Btn variant="green" />
      <Btn variant="yellow" />
      <Btn variant="red" />
      <Btn variant="pink" />
    </div>
  ),
};
