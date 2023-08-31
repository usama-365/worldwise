import { useNavigate } from "react-router-dom";
import { BUTTON_TYPES, Button } from "../button/Button";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} type={BUTTON_TYPES.back}>
      &larr; Back
    </Button>
  );
}
