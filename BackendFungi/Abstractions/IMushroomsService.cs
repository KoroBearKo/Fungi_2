using BackendFungi.Contracts;
using BackendFungi.Models;

namespace BackendFungi.Abstractions;

public interface IMushroomsService
{
    Task<(Mushroom Mushroom, List<bool> DoppelgangersMap)> GetMushroomAsync(string mushroomName, CancellationToken ct);
    Task<List<(Mushroom Mushroom, List<bool> DoppelgangersMap)>> GetAllMushroomsAsync(CancellationToken ct);

    Task<List<(Mushroom Mushroom, List<bool> DoppelgangersMap)>> GetFilteredMushroomsAsync(GetFilterMushroomRequest filter, CancellationToken ct);
    
    Task<Guid> CreateMushroomAsync(Mushroom mushroom, CancellationToken ct);
    Task<Guid> UpdateMushroomAsync(string mushroomName, Mushroom newMushroomModel, CancellationToken ct);
    Task<Guid> DeleteMushroomAsync(string mushroomName, CancellationToken ct);
}