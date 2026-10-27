import ArticleRow, { ARTICLE_GRID } from '../components/ArticleRow'
import articles from '../lib/articles'

const Articles = () => {
  return (
    // aq gvqondes 2 sort, new, pold, ppublished, tobe published
    <div className="overflow-hidden rounded border border-gray-200">
      <div className={`${ARTICLE_GRID} bg-gray-100 font-semibold`}>
        <span>ID</span>
        <span>Publish Date</span>
        <span>Published</span>
        <span>Author</span>
        <span>Manage</span>
      </div>
      {articles.map((article) => (
        <ArticleRow key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Articles
