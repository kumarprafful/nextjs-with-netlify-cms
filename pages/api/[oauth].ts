import { NextApiRequest, NextApiResponse } from "next";


export default (req: NextApiRequest, res: NextApiResponse) => {
    const { oauth } = req.query;
    const clientID = '195764756221-k9vasf1tnvcftfnep5ji8fr151p6k2b2.apps.googleusercontent.com';
    const clientSecret = 'nKgqezF43RVUURyUwh55zSQf';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
                        scope=https://www.googleapis.com/auth/userinfo.email&
                        access_type=online&
                        include_granted_scopes=true&
                        response_type=token&
                        redirect_uri=http%3A//localhost:3000/google&
                        client_id=${clientID}`;
    // const tokenUrl = "https://github.com/login/oauth/access_token";

    console.log(oauth);

    if (oauth === 'login') {
        res.send(`Login with Google <a href="">GOOGLE</a>  ${authUrl}`);
    }
    res.end();
}

