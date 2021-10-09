import React, { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

export interface FoodData {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface ModallAddFoodProps {
  isOpen: boolean;
  handleAddFood: (data: FoodData) => Promise<void>;
  setIsOpen: () => void;
}

const ModalAddFood: React.FC<ModallAddFoodProps> = (props) => {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodData) => {
    props.handleAddFood(data);
    props.setIsOpen();
  };

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
