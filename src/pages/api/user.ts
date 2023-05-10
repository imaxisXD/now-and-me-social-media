import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
const users = new Map<string, string>();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        handleLogin(req, res);
    } else if (req.method === 'POST') {
        handleRegistration(req, res);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

function handleLogin(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.query as { username: string, password: string };;
    if (username && password) {
        if (users.has(username) && users.get(username) === password) {
            res.status(200).json({ success: true });
            let response = NextResponse.next();
            response.cookies.set('isLoggedIn', 'true', { path: '/' });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    }
    else res.status(401).json({ error: 'Invalid details' });

}

function handleRegistration(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body as { username: string, password: string };;
    if (username && password) {
        if (users.has(username)) {
            res.status(409).json({ error: 'Username already exists' });
        } else {
            // Store user in the data store
            users.set(username, password);
            let response = NextResponse.next();
            response.cookies.set('isLoggedIn', 'true', { path: '/' });
            res.status(201).json({ success: true });
        }
    }

    else res.status(401).json({ error: 'Invalid details' });
}
