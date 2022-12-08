chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.action) {
      case 'openNotes':
        chrome.tabs.create({
          url: 'C:\Users\Hp\Desktop\Fall 2022\IoT\project_IoT.html',
          active: true,
          index: sender.tab.index + 1,
          openerTabId: sender.tab.id,
        });
        return;
    }
  });