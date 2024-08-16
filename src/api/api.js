export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzYjdhM2VlNC0xNjBlLTQ4NzMtYjQ1Zi1mMzg4N2ViMDdkYjgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyMTMxNzA3MSwiZXhwIjoxNzIzOTA5MDcxfQ.EAQ_rRQ7l5bTfFYhM7TZ2VlLBL1Z0H3TX0VaOo_HUYo"
export const createMeeting = async ({ token }) => {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    //Destructuring the roomId from the response
    const { roomId } = await res.json();
    return roomId;
  };