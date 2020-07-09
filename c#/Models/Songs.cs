using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Migrations;
using System.Globalization;
using System.Data.Entity;
using Microsoft.EntityFrameworkCore;
namespace React.Models
{
    public class Songs
    {
        public static List<Song> songs;

        static Songs()
        {
            songs = new  List<Song>()
            {
                new Song()
                {
                    id = 1,
                    name = "באש ומים",
                    year = 1996,
                    USername = "avram frid"
                },
                  new Song()
                {
                    id = 2,
                    name = "my heart",
                    year = 1996,
                    USername = "avram frid"
                },
                    new Song()
                {
                    id = 3,
                    name = "נשמה ווא ביסטו",
                    year = 2018,
                    USername = "מוטי שטיימץ"
                },
                             new Song()
                {
                    id = 4,
                    name = "מודה אני",
                    year = 2017,
                    USername = "אייזעק האניג"
                },

            

                // new Song()
                //{
                //    id = 1,
                //    name = "",
                //    year = 1996,
                //    USername = "avram frid"
                //}
            };
        }
        
      public List<Song> PostSong(Song song)
        {
            song.id = songs.Last().id + 1;
            songs.Add(song);
            return songs;
        }
        public List<Song> PutSong(Song song)
        {
            var obj = songs.FirstOrDefault(x => x.id == song.id);
            if (obj != null)
            {
                obj.id = song.id;
                obj.name = song.name;
                obj.year = song.year;
                obj.USername = song.USername;

            }
            return songs;

        }
    }
}