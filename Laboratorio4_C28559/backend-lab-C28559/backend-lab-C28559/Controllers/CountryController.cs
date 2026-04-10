using backend_lab_C28559.Models;
using backend_lab_C28559.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend_lab_C28559.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly CountryService countryService;

        public CountryController()
        {
            countryService = new CountryService();
        }

        [HttpGet]
        public List<CountryModel> Get()
        {
            return countryService.GetCountries();
        }
    }
}
