import {config} from "../../../constants";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import PostList from "../../../components/PostList";
import styles from '../../../styles/Profile.module.scss';
import moment from "moment";

const profile = ({user, posts}) => {
    console.log(user)
    const dateFormatted = moment(user.date_joined).format('DD/MM/YYYY');

    return (
        <div className='app' data-theme='light'>
            <Nav />
            <main className={styles.profile_main}>
                <PostList posts={posts}/>
                <div className={styles.profile_display}>
                    Hello {user.username}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const url = config.url.BASE_URL;
    const userQuery = await fetch(`${url}/users/${context.params.id}`)
    const user = await userQuery.json();

    const userPostsQuery = await fetch(`${url}/posts/user/${context.params.id}`);
    const userPosts = await userPostsQuery.json();

    return {
        props: {
            user: user,
            posts: userPosts
        }
    }
}

export default profile;