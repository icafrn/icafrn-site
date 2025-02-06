import { useNavigate, useParams } from "react-router";

const NewDetail = () => {
    const { id } = useParams();
    return (
        <div>
            Detalhe da notícia
        </div>
    )
}

export default NewDetail;