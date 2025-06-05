function readMind() {
    const number = document.getElementById('userNumber').value;
    const bar = document.getElementById('bar');
    const result = document.getElementById('result');
    const loadingText = document.getElementById('loadingText');

    bar.style.width = "0%";
    result.textContent = "";
    loadingText.textContent = "";

    let width = 0;
  
    const messages = [
      "READING YOUR MIND...",
      "ANALYZING BRAIN PATTERN...",
      "CONNECTING TO YOUR BRAIN VIA BLUETOOTH...",
      "CALCULATING 6.37E+893127845151387513 POSSIBLE COMBINAITIONS..."
  ];

  let msgIndex = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        loadingText.textContent = ""; // ลบข้อความ loading ทิ้ง
        result.textContent = `You were thinking of the NUMBER ${number} 🤯🤭`;
      } else {
        width += 1;
        bar.style.width = width + "%";

        // เปลี่ยนข้อความทุก 20% หรือทุก ๆ 200ms
        if (width < 100 && width % 20 === 0) {
          loadingText.textContent = messages[msgIndex];
          msgIndex++;
          if (msgIndex >= messages.length) {
            msgIndex = 0;
          }
        }
      }
    }, 30);
  }
  
  // 👇 ส่วนที่เพิ่มเข้ามา สำหรับการลบสี และแสดง input สีใหม่
  function removeColor() {
    const container = document.getElementById('color-picker-container');
  
    // ลบ input เดิม
    container.innerHTML = "";
  
    // สร้าง input สีใหม่
    const newInput = document.createElement("input");
    newInput.type = "color";
    newInput.id = "colorPicker";
  
    container.appendChild(newInput);
  }
  