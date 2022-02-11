import React from "react";

export interface CarouselButtonProps {
  label: string;
}

const CarouselButton = (props: CarouselButtonProps) => {
  return <button>{props.label}</button>;
};

export default CarouselButton;
