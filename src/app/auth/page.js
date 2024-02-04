import React from 'react';

const Page = () => {
    return (
        <div>
            <form action="next-page.html" method="post">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required></input>

                    <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required></input>

                        <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Page;