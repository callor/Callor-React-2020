import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ScoreModal = ({ open, setOpen, roll_pins, roll_message }) => {
  return (
    <Modal open={open}>
      <Modal.Header>Your Perfect!!!</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={process.env.PUBLIC_URL + "/strike.png"}
          wrapped
        />
        <Modal.Description>
          <Header>{roll_message}</Header>
          <Header>Your Greater Congratulations</Header>
          <Header size="huge">{roll_pins}</Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Very Good"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ScoreModal;
