let letter;

addEventListener('fetch', evt => {
  const url = new URL(evt.request.url)
  
  if (url.pathname === '/') {
    return evt.respondWith(
      fetch(evt.request)
        .catch(() => fetch('https://cdn.jsdelivr.net/gh/wlmac-is/censored@master/index.html'))
        .then(res => res.text())
        .then(res => {
          if (res.includes('<title>CENSORED</title>')) {
            return new Response(res, {
              headers: {
                'Content-Type': 'text/html;charset=UTF-8'
              }
            });
          } else {
            throw new Error('No messing with us!');
          }
        })
        .catch(() => {
          return new Response(letter, {
            headers: {
              'Content-Type': 'text/html;charset=UTF-8'
            }
          });
        })
    );
  }

  return evt.respondWith(fetch(evt.request));
});


letter = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CENSORED</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400;1,500&family=Poppins:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
  
  <style>
    body {
      background-color: #f3f2f0;
      padding: 3vw;
      font-family: 'IBM Plex Serif', sans-serif;
    }

    #hero {
      font-family: 'Poppins', sans-serif;
      display: flex;
        justify-content: center;
        flex-direction: column;
        border-bottom: 3px solid lightgray;
    }
    
    #title {
      font-weight: 600;
      font-size: min(6vh, 10vw);
      max-width: 1000px;
      display: inline;
    }

    #subtitle {
      font-style: italic;
      font-weight: 300;
      font-size: min(3vh, 5vw);
      display: inline;
    }

    .section {
      max-width: 1000px;
      margin: auto;
    }

    h1 {
      font-size: min(4vh, 10vw);;
    }

    p {
      font-size: min(2.5vh, 7vw);
      line-height: 2em;
    }
  </style>
</head>
<body>
<div id="hero">
  <h1 id="title">CENS?????????: My extracurricular experience at William Lyon Mackenzie</h1>
  <h3 id="subtitle">Why SAC made me hate operating a club</h3>
</div>
<div class="section">
  <h1 id="introduction">Introduction</h1>
  <p>My name is Larry. I am an alumnus of William Lyon Mackenzie Collegiate Institute, and formerly the president of the Mackenzie Computer Programming Team.</p>
  <p>Throughout my presidency during the 2020-2021 school year, the Student Activities Council (SAC) made my life a living hell. This contributed a significant negative effect to my mental health, above everything else that was happening that year.</p>
  <p>This letter is the culmination of all of my thoughts about the way SAC operated, as well as how school administration contributed to the repressive nature of censorship at Mackenzie.</p>
</div>

<div class="section">
  <h1 id="the-rules-of-the-game">The Rules of the Game</h1>
  <p>The number one complaint that comes to mind when I reflect on what happened during that year was playing the game of rules. By this, I mean we were rolling the dice on whether SAC would enforce their rules on us. It&#39;s the classic <strong>&quot;these rules only apply to people I don&#39;t like&quot;</strong> situation, with SAC staff supervisors often making up rules on the spot when it favored them.</p>
  <p>The rule that I found the most interesting was on club Discord servers. During a meeting between clubs presidents and SAC, a SAC supervisor mandated that club supervisors have access to club Discord servers. It was made clear that staff supervisors would need to be proactive in monitoring the server. </p>
  <p>This latter rule was pretty much ignored by every staff supervisor. I mean, with everything else happening that year how could you realistically expect staff supervisors to regularly monitor a Discord server on top of everything else?</p>
  <p>One day, however, we poked the sleeping dragon. During a meeting between the club presidents and SAC, claims were made about how Grade 9 students would feel less lonely if clubs had been more proactive in filling in forms so that club events could be displayed on a school calendar run by SAC.</p>
  <p>Some club presidents found this claim rather unbelievable, so while gathered in the MCPT Discord server, various club presidents &amp; execs came up with an idea for a survey that could be distributed asking about whether the school calendar helped students feel more connected to the school. </p>
  <p>SAC got word of this survey, and I was told by a student SAC representative that internally one of the SAC supervisors said they felt it unfairly attacked them as an organization. As such, my club&#39;s staff supervisor was immediately contacted with emails requesting information with vague claims of &quot;inappropriate behavior&quot;.</p>
  <p>As far as I&#39;m aware, we were the only club that SAC had ever contacted with such demands.</p>
  <p>At a later meeting, a SAC supervisor justified this response by saying that the survey had violated school and board rules. The supervisor refused to hear any objection to this. <strong>No such rule exists within the school rule book nor in TDSB Policies and Procedure.</strong> This particular SAC supervisor has a knack of making up rules whenever it is convenient for themself.</p>
  <p>The irony that I found most interesting about this situation, however, is that <strong>SAC&#39;s official Discord server never had any supervisors in it</strong>, nor did they ever proactively ask about what was going on in the server. I was told by a SAC representative that none of the SAC supervisors had ever requested access and had explicitly said that they did not want to deal with it.</p>
  <p>What I got from this experience? <em><strong>Remember, these rules are for you, not for me.</strong></em>.</p>
</div>

<div class="section">
  <h1 id="the-responsibility-potato">The Responsibility Potato</h1>
  <p>One of the other things that SAC supervisors did that drove me nuts was playing hot potato with responsibility. Most of the time this was fair, with many rules being forced by &quot;administration&quot;. However, what made me most angry was the way they skirted being held responsible for what they said during meetings.</p>
  <p>SAC meetings were almost never recorded, with &quot;notes&quot; being released at the end of each meeting that supposedly summarized what happened, as well as all of the rules that were being enacted. These notes were pretty much never complete, especially for important things like rules. They always left out certain exceptions that were promised during the meeting.</p>
  <p>This, of course proved to be useful for them later. During one meeting, a SAC supervisor said that there was an alternative for club supervisors joining their club&#39;s Discord server: instead, supervisors could regularly conduct meetings with students with regard to the happenings inside the club&#39;s Discord server. This was never written down in the meeting summary. This exception mysteriously disappeared when I had an impromptu meeting with the SAC supervisor with regard to the email they had sent to my club supervisor. Convenient, eh?</p>
  <p>Notice how I said that SAC meetings were <em>almost</em> never recorded. Well there is exactly <strong>one</strong> exception for this. A group of club presidents sent a document of what they felt was wrong with SAC, and in response a SAC supervisor scheduled a meeting and noted that it would be recorded. </p>
  <p>Now, this might be suspicious to you. You might think that the supervisor is only recording this meeting to catch people out in case they say unsavory things. In other words, to catch them out and punish them. However, you might think that there is absolutely no way we could prove this suspicion. </p>
  <p>When a club president later requested the meeting recording to be shared, the SAC supervisor had this to say:</p>
  <p><em>&quot;Unfortunately the recording isn&#39;t available for distribution. It was made in the event that anything happened during the meeting that would&#39;ve been deemed inappropriate.&quot;</em></p>
  <p>Just to be clear, because I could not believe it when I read this quote: they directly admitted that the only reason this recording was ever made was to ensure that students could be held responsible for what they say.</p>
  <p>Again, SAC supervisors demonstrated their continued commitment to avoiding responsibility (we were expressly forbidden to record meetings) and instead arguing that <em>everyone else should follow the rules</em> while avoiding being held responsible for anything they said. </p>
  <p><strong>SAC supervisors used their power as teachers to attempt to evade being held responsible for the things they said.</strong></p>
</div>

<div class="section">
  <h1 id="controlling-the-message">Controlling the Message</h1>
  <p>One of the keystones of what the school administration did was controlling the message. School administration wanted to control the messaging around the school, and how it was viewed in the public eye.</p>
  <p>While there SAC didn&#39;t make any major rules around what we were and were not allowed to say, some minor annoyances like &quot;your Instagram handle must be wlmac.[something]&quot; existed. To me this stuff seemed a bit weird, not giving clubs the right to pick their own Instagram handle just felt a bit <em>off</em>.</p>
  <p>However, even though there was a lack of &quot;official&quot; rules about what we were allowed to say (probably because it would reflect poorly on school administration), there was one incident that really shows how much school administration wanted to control messaging.</p>
  <p>A student at the school registered the domain &quot;wlmac.net&quot;, with the intention of allowing clubs and other school affiliated organizations the ability to get their own subdomain like &quot;club.wlmac.net&quot; and host a website.</p>
  <p>What was the immediate reaction of school administration when they found out about this? <strong>Without even contacting the student</strong>, they asked TDSB IT to block the site and then <strong>contacted legal council about their options in (presumably) taking it down.</strong></p>
  <p>Just writing this has me sick to my stomach. All the student wanted to do was allow school clubs the ability to own a nice domain they can put content on and administration is contacting legal without even talking to the student first?</p>
  <p>Presumably, when their legal council said that there was nothing they could do about it, administration finally contacted the student and asked them to take it down while repeatedly saying that they had the legal right to own it. <strong>What do you think the school would have said to the student if legal said that the school had a claim to it?</strong></p>
</div>

<div class="section">
  <h1 id="silence">Silence</h1>
  <p>After I learned the rules of the game, <strong>it was plainly obvious to me that if I were to speak out about the obvious issues with the way that school administration and SAC operate, me or my club would be targeted with continued attacks.</strong></p>
  <p>I therefore chose to stay silent, not only to protect myself, but also to protect everyone else involved in my club. I should not be the one that ruins everything my team has built. <strong>I stayed quiet, I played the game.</strong></p>
  <p>However, no longer will I stay silent. I believe everyone deserves to know how SAC supervisors continually attempted to avoid being held responsible for their words as well as the sickening attempts by school administration to cause legal issues with a student&#39;s project without even asking them about it.</p>
</div>

<div class="section">
  <b>
    <p>Larry</p>
    <p>censored@wlmac.wiki</p>
  </b>
</div>
</body>
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(register => {
    fetch('sw.js')
      .then(() => register.update())
      .catch(() => {});
  });
}
</script>
</html>`