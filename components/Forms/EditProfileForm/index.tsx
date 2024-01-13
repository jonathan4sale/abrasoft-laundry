"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { editClientProfileSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditProfileFormProps {
  id: string;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(editClientProfileSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form
      id={id}
      className={styles.form}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <FormLabel>First Name</FormLabel>
        <FormControl
          {...register("firstName", { required: true })}
          isInvalid={!!errors.firstName}
        />
        <FormControl.Feedback type="invalid">
          {errors.firstName?.message}
        </FormControl.Feedback>
      </FormGroup>
      <FormGroup>
        <FormLabel>Last Name</FormLabel>
        <FormControl
          {...register("lastName", { required: true })}
          isInvalid={!!errors.lastName}
        />
        <FormControl.Feedback type="invalid">
          {errors.lastName?.message}
        </FormControl.Feedback>
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl
          {...register("email", { required: true })}
          isInvalid={!!errors.email}
        />
        <FormControl.Feedback type="invalid">
          {errors.email?.message}
        </FormControl.Feedback>
      </FormGroup>
      <FormGroup>
        <FormLabel>Birthday</FormLabel>
        <FormControl
          {...register("birthday", { required: true })}
          isInvalid={!!errors.birthday}
        />
        <FormControl.Feedback type="invalid">
          {errors.birthday?.message}
        </FormControl.Feedback>
      </FormGroup>
      <FormGroup>
        <FormLabel>Contact Number</FormLabel>
        <FormControl
          {...register("contactNumber", { required: true })}
          isInvalid={!!errors.contactNumber}
        />
        <FormControl.Feedback type="invalid">
          {errors.contactNumber?.message}
        </FormControl.Feedback>
      </FormGroup>
      <FormGroup>
        <FormLabel>Address</FormLabel>
        <FormControl
          {...register("address", { required: true })}
          isInvalid={!!errors.address}
        />
        <FormControl.Feedback type="invalid">
          {errors.address?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};

export default EditProfileForm;
