"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ColorSection } from "@/components/ColorSection/ColorSection";
import { BrandSection } from "@/components/BrandSection/BrandSection";

import {
  StyledMain,
  Description,
  Button,
  Overlay,
  ModalBody,
  ModalHead,
  CloseIcon,
} from "./PageStyled";

type FormData = {
  [key: string]: boolean;
};

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormData>();

  const filterModalToggle = () => {
    setIsOpen((state: boolean) => !state);
  };

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    const filterData = JSON.stringify(data);
    sessionStorage.setItem("filterData", filterData);
    filterModalToggle();
  };

  return (
    <StyledMain>
      <Description>
        <p>E-commerce website</p>
      </Description>
      <Button type="button" onClick={filterModalToggle}>
        Filter
      </Button>
      {isOpen && (
        <>
          <Overlay>
            <ModalBody>
              <ModalHead>
                <h2>Підбір параметрів</h2>
                <CloseIcon onClick={filterModalToggle} />
              </ModalHead>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <BrandSection register={register} />
                <ColorSection register={register} />

                <Button type="submit">Filter</Button>
              </form>
            </ModalBody>
          </Overlay>
        </>
      )}
    </StyledMain>
  );
}
