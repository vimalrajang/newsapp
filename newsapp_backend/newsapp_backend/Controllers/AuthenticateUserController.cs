using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using newsapp_backend.Models.UserModels;
using newsapp_backend.Repositories.IRepositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace newsapp_backend.Controllers
{
    [Route("[controller]/[action]")]
    public class AuthenticateUserController : ControllerBase
    {
        private IConfiguration _config;
        private readonly IUserAuthenticateRepository _userAuthenticateRepository;
        public AuthenticateUserController(IConfiguration config,IUserAuthenticateRepository userAuthenticateRepository)
        {
            _config = config;
            _userAuthenticateRepository = userAuthenticateRepository;
        }

        [AllowAnonymous]
        [HttpPost]
        public UserTokenResponse signup([FromBody] Users users)
        {
            return _userAuthenticateRepository.SignUp(users);
        }

        [AllowAnonymous]
        [HttpPost]
        public UserTokenResponse login([FromBody] UserLogin users)
        {
            return _userAuthenticateRepository.LoginIn(users);
        }
    }
}

