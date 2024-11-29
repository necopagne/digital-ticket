document.addEventListener("DOMContentLoaded", () => {
  // チケット情報
  const ticketInfo = {
    title: "MA-1 プレゼント券",
    expiration: "2025/12/15",
    conditions: [
      "値段は気にしないでください。",
      "ほしいMA-1「1着」と交換できます。",
      "使用期限は2025/12/15までです。",
      "MA-1の色は「グレー」のみです。",
      "返品、交換は受け付けておりません。ご了承ください。"
    ]
  };

  // QRコード生成
  const qr = new QRious({
    element: document.getElementById("qr-code"),
    size: 150,
    value: "https://example.com/ticket" // QRコードで表示するURL
  });

  // 使用ボタンの処理
  const useButton = document.getElementById("use-ticket-button");
  const statusDiv = document.getElementById("status");

  useButton.addEventListener("click", () => {
    const confirmUse = confirm("このチケットを使用しますか？");
    if (confirmUse) {
      // 使用済み表示に更新
      statusDiv.textContent = "使用済み";
      statusDiv.style.color = "#FF0000"; // 赤色に変更
      useButton.disabled = true; // ボタン無効化
      useButton.style.backgroundColor = "#cccccc";
    }
  });
});
