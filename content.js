const style = document.createElement('style');
style.textContent = `
  a[href="/@LinusTechTips"] yt-icon.guide-entry-badge.style-scope.ytd-guide-entry-renderer {
    display: none;
  }
`;
document.head.appendChild(style);