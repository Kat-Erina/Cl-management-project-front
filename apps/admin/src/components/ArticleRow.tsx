import type { Article } from '../lib/articles'

// Shared by the header row and every ArticleRow so the columns line up
export const ARTICLE_GRID = 'grid grid-cols-[80px_1fr_1fr_2fr] items-center gap-4 px-4 py-3'

type ArticleRowProps = {
  article: Article;
};

const ArticleRow = ({ article }: ArticleRowProps) => {
  return (
    <div className={`${ARTICLE_GRID} border-b border-gray-200 bg-white`}>
      <span>{article.id}</span>
      <span>{article.publishDate}</span>
      <span className={article.published ? 'text-green-600' : 'text-red-600'}>
        {String(article.published)}
      </span>
      <span>{article.author}</span>
    </div>
  )
}

export default ArticleRow
