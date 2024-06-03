"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  password: string;
}

async function asyncCall(): Promise<unknown> {
  throw new Error("boom");
}

type SetFocusOnErrorProps = {
  withTimeout?: boolean;
};

export function SetFocusOnError({
  withTimeout,
}: SetFocusOnErrorProps): React.JSX.Element {
  const { handleSubmit, setError, control, formState } = useForm<FormData>({
    defaultValues: {
      password: "",
    },
  });

  function handleError() {
    setError(
      "password",
      { message: "An error occurred" },
      { shouldFocus: true },
    );
  }

  async function submit() {
    try {
      await asyncCall();
    } catch (e) {
      if (withTimeout) {
        setTimeout(handleError, 0);
      } else {
        handleError();
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="flex gap-2 flex-col">
      <Controller
        name="password"
        control={control}
        disabled={formState.isSubmitting}
        render={({ field }) => <input {...field} />}
      />
      {formState.errors.password ? (
        <div className="text-red-500">{formState.errors.password.message}</div>
      ) : null}
      <button type="submit" disabled={formState.isSubmitting}>
        Submit
      </button>
    </form>
  );
}
