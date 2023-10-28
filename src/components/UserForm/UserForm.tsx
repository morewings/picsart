import type { FC } from "react";
import React, { useState, useCallback } from "react";
import type { FormExtendedEvent } from "grommet";
import { Form, FormField, TextInput, Box, Button, DateInput } from "grommet";

import type { UserInfoType } from "../../features/users";
import { useAddQuery } from "../../features/users";

const defaultValue = {
  firstName: "",
  avatar: "https://",
  lastName: "",
  email: "",
  birthdate: "",
  country: "",
  city: "",
  street: "",
};

type Value = typeof defaultValue;

const convertValue = (value: Value): Omit<UserInfoType, "id"> => {
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    birthdate: value.birthdate,
    avatar: value.avatar,
    address: {
      country: value.country,
      city: value.city,
      street: value.street,
    },
  };
};

const UserForm: FC = () => {
  const [value, setValue] = useState(defaultValue);

  const sendUserInfo = useAddQuery();

  const handleChange = useCallback(
    (nextValue: Value) => {
      setValue(nextValue);
    },
    [setValue],
  );

  const handleSubmit = useCallback(
    (event: FormExtendedEvent<Value, Element>) => {
      sendUserInfo(convertValue(event.value));
    },
    [sendUserInfo],
  );

  const handleReset = useCallback(() => {
    setValue(defaultValue);
  }, [setValue]);

  return (
    <Form
      value={value}
      onChange={handleChange}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <FormField
        name="firstName"
        htmlFor="firstName"
        label="First name"
        required
      >
        <TextInput id="firstName" name="firstName" />
      </FormField>
      <FormField name="lastName" htmlFor="lastName" label="Last name" required>
        <TextInput id="lastName" name="lastName" />
      </FormField>
      <FormField name="email" htmlFor="email" label="Email" required>
        <TextInput type="email" id="email" name="email" />
      </FormField>
      <FormField name="avatar" htmlFor="avatar" label="Avatar url">
        <TextInput type="url" id="avatar" name="avatar" />
      </FormField>
      <FormField name="birthdate" htmlFor="birthdate" label="Birthday">
        <DateInput
          required
          id="birthdate"
          name="birthdate"
          format="mm/dd/yyyy"
        />
      </FormField>
      <FormField name="country" htmlFor="country" label="Country">
        <TextInput id="country" name="country" required />
      </FormField>
      <FormField name="city" htmlFor="city" label="City">
        <TextInput id="city" name="city" required />
      </FormField>
      <FormField name="street" htmlFor="street" label="Street">
        <TextInput id="street" name="street" required />
      </FormField>
      <Box direction="row" gap="medium" pad={{ vertical: "medium" }}>
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
};

export default UserForm;
