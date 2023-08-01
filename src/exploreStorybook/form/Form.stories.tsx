import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Form from "./Form";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "arafath/Form",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // const submitBtn = canvas.getByText("Post question");
    const submitBtn = canvas.getByRole("button", { name: /post/i });
    const email = canvas.getByLabelText("Email");
    const questin = canvas.getByLabelText("Question");

    await expect(submitBtn).toBeInTheDocument();
    await expect(email).toBeInTheDocument();
    await expect(questin).toBeInTheDocument();
  },
};

export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitBtn = canvas.getByRole("button", { name: /post/i });

    await userEvent.click(submitBtn);

    await expect(canvas.getByText(/enter your email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitBtn = canvas.getByRole("button", { name: /post/i });
    const email = canvas.getByText(/email/i);
    // const question = canvas.getByText("Question");

    await userEvent.type(email, "arafath@");
    // await userEvent.type(question, "pro@");
    await userEvent.click(submitBtn);

    await expect(canvas.getByText(/valid email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  },
};

// export const InvalidInput: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     const submitBtn = canvas.getByRole("button", { name: /post/i });
//     const email = canvas.getByText(/email/i);
//     const question = canvas.getByText("Question");

//     await userEvent.type(email, "shahin@gmail.com");
//     await userEvent.type(question, "pro@");
//     await userEvent.click(submitBtn);

//     // await expect(canvas.getByText(/valid email/i)).toBeInTheDocument();
//     // await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
//   },
// };
