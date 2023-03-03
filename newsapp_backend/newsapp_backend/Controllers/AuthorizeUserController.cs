using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using newsapp_backend.Models.UserModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using newsapp_backend.Repositories.IRepositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace newsapp_backend.Controllers
{
    [Route("[controller]/[action]")]
    [Authorize]
    public class AuthorizeUserController : ControllerBase
    {


        private readonly IUserAuthorizeRepository _userAuthorizeRepository;
        public AuthorizeUserController(IUserAuthorizeRepository userAuthorizeRepository)
        {
            _userAuthorizeRepository = userAuthorizeRepository;
        }
        [HttpGet]
        public ActionResult<string> isuservalid()
        {
            Users user = GetCurrentUser();
            if (user != null)
            {
                return Ok("valid");
            }
            else
            {
                return StatusCode(401,"User not valid");
            }
        }

        [HttpPost]
        public ActionResult<string> changepassword([FromBody]UserPasswordChange userPasswordChange)
        {
            Users user = GetCurrentUser();

            if (user != null)
            {
                string result = _userAuthorizeRepository.ChangePassword(userPasswordChange, user);
                return Ok(result);
            }
            else
            {
                return StatusCode(401, "User not valid");

            }
        }


        private Users GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;

                return new Users
                {
                    id = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Sid)?.Value,
                    name = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Name)?.Value,
                    email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
                };
            }
            return null;
        }
    }
}

