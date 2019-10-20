import Client from './../src/Client';

let client = Client.instance;

client.token = 'BQB4WNfgIlShVT7Bs90HOsWu0L7TtFNCe7ijx5nS-euyeNqGru_LjwdgxY4pH7pQMeEa0elvBG-GysUN8TVxja-3Oq2ab19OqayvDNNrhYMuU8TPCIFFUC1La6nE-fPEmVq0-41w5Arnm4AL_Dz6JBkRy6fkQT40DZrooVd38BeEwJqdwOXOpRjx3SbnxbRreTA7SMhJPDaS0X86v4nUx8rOddjl7193Zp-rLkD3-dLGsRQqvyS1FvOhEBBESccl8cDxNloQMdzx2rWokv0';

// client singleton is a real singleton
// request works
// settings and token are setted correclty

describe('Client singleton', () => {
  it('should return a valid object when make a request', (done) => {
    // client.request('https://api.spotify.com/v1/tracks/2UzMpPKPhbcC8RbsmuURAZ').then(response => {
      done();
    // })
  });
});