using BackendFungi.Contracts;
using BackendFungi.Models;

namespace BackendFungi.Abstractions;

public interface IArticlesService
{
    Task<Article> GetArticleAsync(string articleTitle, CancellationToken ct);
    Task<List<Article>> GetAllArticlesAsync(CancellationToken ct);
    
    Task<List<ArticleDto>> GetFilteredArticlesAsync(GetFilterArticleRequest request, CancellationToken ct);

    Task<Guid> CreateArticleAsync(Article article, CancellationToken ct);
    Task<Guid> UpdateArticleAsync(string articleTitle, Article newArticleModel, CancellationToken ct);
    Task<Guid> DeleteArticleAsync(string articleTitle, CancellationToken ct);
}