using React.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;

namespace React.Controllers
{[RoutePrefix("songs/api")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class songController : ApiController
    {[Route("gets")]
    [HttpGet]
        public List<Song> GetSongs()
        {
            return Songs.songs;
        }
        public Song getSong(int id)
        {
            Song song = Songs.songs.FirstOrDefault(x => x.id == id);
            return song;
        }
        [HttpPost]
        public IHttpActionResult postSong(Song song)
        {
            if (song == null)
                return BadRequest();
            Songs posts1 = new Songs();
            List<Song> posts = posts1.PostSong(song);
            return Ok(posts);
        }
        [HttpDelete]
        public IHttpActionResult delet(int id)
        {
            Songs.songs.Remove(Songs.songs.FirstOrDefault(x => x.id == id));
            return Ok(Songs.songs);
        }
        [HttpPut]
        [Route("puts")]
        public IHttpActionResult put([FromBody] Song s)
        {
            if (s == null)
                return BadRequest();
            Songs song = new Songs();
            List<Song> songs = song.PutSong(s);
            return Ok(songs);
        }
    }
}
