# countryguessr

countryguessr (with nextjs) is a full-stack Nextjs and TailwindCSS application created to be a simple quiz game. it has many features, such as multiple gamemodes, a live global leaderboard, user login and authentication, high scores, and more. read more about its functionality and technologies used to create it below.

check it out here: https://countryguessr-with-nextjs.vercel.app/

## features

countryguessr has the following three gamemodes:
- a regular quiz mode where a country's silhouette, along with three hints, is shown to the user; based on the number of hints unconvered, and whether the user guessed correctly, points are awarded.
- a harder quiz mode, which is the same as the regular mode except the country's silhouette is initially blurred and using hints costs more points.
- a timed, competitive mode, where users have to gain as many points as possible within five minutes; once the time is up, users can be placed on the leaderboard based on their score.

users can play each mode without needing to be logged in. if they do wish to create an account, they can easily do so. on account creation, a verify-account email is sent to the user's email*. furthermore, if a user ever forgets their password, a password-reset email* can also be sent to their connected account to reset it.

users can check out the leaderboard for competitive mode, which displays the top ten scorer's username, score, and ranking.

each user also has an account dashboard, where they can see their statistics for each gamemodes they have played. they can also delete their account from this dashboard.

*note: due to Mailtrap's domain verification policies, emails aren't actually able to be sent as countryguessr is not a verified domain. 

## technologies

languages:
this app is almost entirely coded using typescript and javascript, with some css. 

packages:
- NextJs was used for the routing and API fetching.
- ReactJs was used for the frontend.
- TailwindCSS was used for styling.
- Mailtrap and Nodemailer were used for sending emails to users.
- MongoDB and Mongoose were used for database querying.
- JsonWebToken was used for signing cookies.
- Zustand was used for global state management.
- Zod was used for server-side validation.
- BCryptJs was used to implement authentication from scratch.



