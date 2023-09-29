describe("Servers test (with setup and tear-down)", function() {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it("should create one table row, and will check by childElementCount", function(){
    submitServerInfo();
    updateServerTable();
    console.log(document.querySelectorAll("#serverTable tbody tr"))
    expect(document.querySelectorAll("#serverTable tbody tr").length).toEqual(1)
  })
    
  afterAll(function() {
    document.querySelector("#server1").remove();
    allServers = {};
  });
});

 
