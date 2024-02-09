import axios from "@/services/axios";

const ArticleService = {
    articles() {
        return axios.get('/articles')
    }
}

export default ArticleService