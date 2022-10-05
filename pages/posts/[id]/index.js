import styles from '../../../styles/Post.module.css';
import { useRouter } from "next/router";

const post = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            This is post {id}
        </div>
    )
}

export default post;