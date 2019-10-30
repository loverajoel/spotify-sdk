import Client from './../src/Client';

let client = Client.instance;

// client singleton is a real singleton
// request works
// settings and token are setted correclty

describe.skip('Client singleton', () => {
  beforeAll(async () => {
    client.token = await client.getToken();
  });

  it('should return a valid object when make a request', async () => {
    
    
  });
});