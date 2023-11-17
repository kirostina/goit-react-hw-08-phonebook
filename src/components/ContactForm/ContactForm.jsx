import React from "react";
import style from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/contactsSlice";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contact.contacts);

  const onSubmit = (contact) => {
    const isUnique = !contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (!isUnique) {
      alert('This contact already exists. Please choose another name.');
      reset();
      return;
    }

    dispatch(addContact(contact));
    reset();
  };

  return (
    <div>
      <form
        className={style['contact-container']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <input {...register('name', { required: true })} type="text" placeholder="Name" />
          {errors.name && <span>❌</span>}
        </label>
        <label>
          <input {...register('number', { required: true })} type="text" placeholder="Number" />
          {errors.number && <span>❌</span>}
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;

