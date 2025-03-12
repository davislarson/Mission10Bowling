using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10Bowling.Data;

namespace Mission10Bowling.Controllers;


[ApiController]
[Route("[controller]")]
public class BowlingLeagueController : ControllerBase
{
    private readonly BowlingLeagueContext _context;

    public BowlingLeagueController(BowlingLeagueContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetBowlingLeaguePlayers")]
    public List<BowlerTeamViewModel> GetBowlersWithTeams()
    {
        return _context.Bowlers
            .Select(b => new BowlerTeamViewModel
            {
                BowlerId = b.BowlerId,
                BowlerFirstName = b.BowlerFirstName,
                BowlerMiddleInit = b.BowlerMiddleInit,
                BowlerLastName = b.BowlerLastName,
                TeamName = b.Team != null ? b.Team.TeamName : "No Team",
                BowlerAddress = b.BowlerAddress,
                BowlerCity = b.BowlerCity,
                BowlerState = b.BowlerState,
                BowlerZip = b.BowlerZip,
                BowlerPhoneNumber = b.BowlerPhoneNumber
            })
            .ToList();
    }
}