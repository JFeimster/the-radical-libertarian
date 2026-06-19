(function () {
  function getCheckedCount(scopeSelector) {
    return document.querySelectorAll(scopeSelector + ' input[type="checkbox"]:checked').length;
  }

  function setResult(selector, html) {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = html;
    }
  }

  function scoreLabel(score, low, mid) {
    if (score <= low) return "Mostly harmless. Still suspicious, because bureaucracy.";
    if (score <= mid) return "Medium-risk nonsense. Watch the hands, not the slogan.";
    return "Red alert. The boot has a marketing department.";
  }

  window.TRLTools = {
    runScoreTool: function (scopeSelector, resultSelector, low, mid) {
      const score = getCheckedCount(scopeSelector);
      const label = scoreLabel(score, low || 2, mid || 5);
      setResult(resultSelector, "<h2>Score: " + score + "</h2><p>" + label + "</p>");
    },

    runChecklistTool: function (scopeSelector, resultSelector) {
      const total = document.querySelectorAll(scopeSelector + ' input[type="checkbox"]').length;
      const checked = getCheckedCount(scopeSelector);
      const percent = total ? Math.round((checked / total) * 100) : 0;
      setResult(resultSelector, "<h2>" + percent + "% Complete</h2><p>You checked " + checked + " of " + total + ". Pick one unfinished item and handle it before buying another notebook for your 'strategy.' </p>");
    },

    generateGrenade: function (resultSelector) {
      const lines = [
        "The leash is always marketed as convenience.",
        "The state is a fiction with a billing department.",
        "Exit is a strategy. Voice is a suggestion box.",
        "Every bureaucracy eventually mistakes paperwork for morality.",
        "A cage painted in your team colors is still a cage.",
        "If your rights require a permission slip, they are privileges with better lighting.",
        "Centralized power attracts the exact people who should never have it.",
        "The algorithm is not your community. It is your landlord with analytics."
      ];
      const pick = lines[Math.floor(Math.random() * lines.length)];
      setResult(resultSelector, '<div class="generator-output">' + pick + '</div>');
    }
  };
})();
