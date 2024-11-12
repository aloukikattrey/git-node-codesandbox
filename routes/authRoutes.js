const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/", (req, res) => {
    res.send("Hello no!");
  });

  app.get("/api/user", (req, res) => {
    res.send(req.user);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.send("logged out");
  });
  //end of file
};
