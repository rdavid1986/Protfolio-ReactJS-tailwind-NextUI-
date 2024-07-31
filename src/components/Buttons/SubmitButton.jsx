import { Button } from "@nextui-org/react";

export default function SubmitButton() {
    const handleSubmit = () => {

        console.log("form sended")
    }
    return (
        <Button onClick={handleSubmit} id="submitButton" color="primary">
            Submit
        </Button>
    )
}
